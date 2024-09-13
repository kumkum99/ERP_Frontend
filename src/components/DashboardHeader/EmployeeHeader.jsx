import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Card, CardContent, Grid, Button, Menu, MenuItem, ListItemIcon, ListItemText } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import AssignmentIcon from '@mui/icons-material/Assignment';
import SchoolIcon from '@mui/icons-material/School';
import FolderIcon from '@mui/icons-material/Folder';
import SettingsIcon from '@mui/icons-material/Settings';
import PersonIcon from '@mui/icons-material/Person';
import HomeIcon from '@mui/icons-material/Home';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

// Navigation Configuration
const NAVIGATION = [
  {
    segment: 'Dashboard',
    title: 'Dashboard',
    icon: <HomeIcon />,
  },
  {
    segment: 'Profile',
    title: 'Profile',
    icon: <PersonIcon />,
    dropdown: ['Manage Profile', 'Profile Settings'], // Dropdown items
  },
  {
    segment: 'Work Schedule',
    title: 'Work Schedule',
    icon: <WorkOutlineIcon />,
  },
  {
    segment: 'Task Management',
    title: 'Task Management',
    icon: <AssignmentIcon />,
  },
  {
    segment: 'Training & Development',
    title: 'Training & Development',
    icon: <SchoolIcon />,
  },
  {
    segment: 'Documentation',
    title: 'Documentation',
    icon: <FolderIcon />,
  },
  {
    segment: 'Setting',
    title: 'Setting',
    icon: <SettingsIcon />,
  },
];

// Theme customization
const demoTheme = createTheme({
  cssVariables: {
    colorSchemeSelector: 'data-toolpad-color-scheme',
  },
  colorSchemes: {},
  components: {
    MuiListItemText: {
      styleOverrides: {
        primary: {
          color: 'black', // Customizing drawer text color to black
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

// Sample data for charts
const sessionData = [
  { name: 'Day 1', sessions: 2400 },
  { name: 'Day 2', sessions: 1398 },
  { name: 'Day 3', sessions: 9800 },
  { name: 'Day 4', sessions: 3908 },
  { name: 'Day 5', sessions: 4800 },
  { name: 'Day 6', sessions: 3800 },
  { name: 'Day 7', sessions: 4300 },
];

const pageViewData = [
  { name: 'Jan', views: 4000 },
  { name: 'Feb', views: 3000 },
  { name: 'Mar', views: 2000 },
  { name: 'Apr', views: 2780 },
  { name: 'May', views: 1890 },
  { name: 'Jun', views: 2390 },
  { name: 'Jul', views: 3490 },
];

// Card Component to render each stat card
function StatCard({ title, value, change, chartColor }) {
  return (
    <Card sx={{ width: 200, padding: 2, border: '2px solid gray', boxShadow: '2px 6px 8px rgba(0, 0, 0, 0.4)', borderRadius: '10px' }}>
      <CardContent>
        <Typography variant="h6" component="div" gutterBottom>
          {title}
        </Typography>
        <Typography variant="h4" color="text.primary">
          {value}
        </Typography>
        <Typography variant="body2" color={change > 0 ? 'green' : 'red'}>
          {`${change > 0 ? '+' : ''}${change}%`}
        </Typography>
        <Typography variant="caption" color="text.secondary">
          Last 30 days
        </Typography>
        <Box
          sx={{
            mt: 1,
            height: 40,
            backgroundColor: chartColor,
            borderRadius: 1,
          }}
        />
      </CardContent>
    </Card>
  );
}

StatCard.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  change: PropTypes.number.isRequired,
  chartColor: PropTypes.string,
};

// A surface card component for sections like "Sessions" and "Page views and downloads"
function SurfaceCard({ title, value, change, description, chartColor, data, dataKey }) {
  return (
    <Card sx={{ padding: 2 }}>
      <CardContent>
        <Typography variant="h6" component="div" gutterBottom>
          {title}
        </Typography>
        <Typography variant="h4" color="text.primary">
          {value}
        </Typography>
        <Typography variant="body2" color={change > 0 ? 'green' : 'red'}>
          {`${change > 0 ? '+' : ''}${change}%`}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Box
          sx={{
            mt: 2,
            height: 200, // Increased height for the chart
            borderRadius: 1,
          }}
        >
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <Line type="monotone" dataKey={dataKey} stroke={chartColor} />
              <CartesianGrid stroke="#ccc" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
            </LineChart>
          </ResponsiveContainer>
        </Box>
      </CardContent>
    </Card>
  );
}

SurfaceCard.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  change: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  chartColor: PropTypes.string,
  data: PropTypes.array.isRequired,
  dataKey: PropTypes.string.isRequired,
};

// The main page content
function DemoPageContent({ pathname }) {
  return (
    <Box
      sx={{
        py: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <Typography variant="h4" gutterBottom>
        Dashboard content for {pathname}
      </Typography>

      {/* Displaying the Cards */}
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} sm={6} md={3}>
          <StatCard title="Attendance" value="0%" change={25} chartColor="Blue" />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard title="Shift" value="Evening" change={-25} chartColor="orange" />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard title="Work Deadline" value="1 Days" change={5} chartColor="green" />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard title="Training" value="9%" change={5} chartColor="red" />
        </Grid>
      </Grid>

      {/* Additional Surface Cards Section */}
      <Grid container spacing={2} justifyContent="center" sx={{ mt: 4 }}>
        <Grid item xs={12} sm={6} md={6}>
          <SurfaceCard
            title="Attendance"
            value="60%"
            description="Attendance per day for the last 30 days"
            chartColor="lightblue"
            data={sessionData}
            dataKey="sessions"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <SurfaceCard
            title="Task Progress"
            value=""
            description="Task Progress for the last 6 months"
            chartColor="lightgray"
            data={pageViewData}
            dataKey="views"
          />
        </Grid>
      </Grid>
    </Box>
  );
}

DemoPageContent.propTypes = {
  pathname: PropTypes.string.isRequired,
};

// Main component function with sidebar dropdown for "Profile"
function DashboardLayoutBranding(props) {
  const { window } = props;

  const [pathname, setPathname] = React.useState('/Employee Dashboard');
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [profileAnchorEl, setProfileAnchorEl] = React.useState(null);

  const handleProfileClick = (event) => {
    setProfileAnchorEl(event.currentTarget); // Set anchor for the dropdown
  };

  const handleProfileClose = () => {
    setProfileAnchorEl(null); // Close the dropdown
  };

  const handleMenuItemClick = (url) => {
    if (url.startsWith('http')) {
      window.open(url, '_blank'); // Open external URL in a new tab
    } else {
      setPathname(url);
    }
  };

  const router = React.useMemo(() => {
    return {
      pathname,
      searchParams: new URLSearchParams(),
      navigate: handleMenuItemClick,
    };
  }, [pathname]);

  const demoWindow = window !== undefined ? window() : undefined;

  return (
    <AppProvider
      navigation={NAVIGATION}
      branding={{
        logo: <img src="src/assets/images/logo.jpg" alt="MUI logo" />,
        title: 'ERP UNITY',
      }}
      router={router}
      theme={demoTheme}
      window={demoWindow}
    >
      <DashboardLayout>
        <Box sx={{ display: 'flex' }}>
          {/* Sidebar */}
          <Box sx={{ width: 240, bgcolor: 'background.paper', height: '100vh', p: 2 }}>
            {NAVIGATION.map((item) => (
              <Box key={item.segment} sx={{ mb: 1 }}>
                <Button
                  fullWidth
                  onClick={() => handleMenuItemClick(item.segment)}
                  startIcon={item.icon}
                >
                  {item.title}
                </Button>
                {item.dropdown && (
                  <Box sx={{ ml: 2 }}>
                    <Button
                      fullWidth
                      onClick={handleProfileClick}
                      endIcon={<PersonIcon />}
                    >
                      Profile
                    </Button>
                    <Menu
                      anchorEl={profileAnchorEl}
                      open={Boolean(profileAnchorEl)}
                      onClose={handleProfileClose}
                    >
                      {item.dropdown.map((dropdownItem) => (
                        <MenuItem
                          key={dropdownItem}
                          onClick={() => handleMenuItemClick(dropdownItem)}
                        >
                          <ListItemIcon>
                            <AccountBoxIcon />
                          </ListItemIcon>
                          <ListItemText primary={dropdownItem} />
                        </MenuItem>
                      ))}
                    </Menu>
                  </Box>
                )}
              </Box>
            ))}
          </Box>
          <Box sx={{ flex: 1, p: 3 }}>
            <DemoPageContent pathname={pathname} />
          </Box>
        </Box>
      </DashboardLayout>
    </AppProvider>
  );
}

DashboardLayoutBranding.propTypes = {
  window: PropTypes.func,
};

export default DashboardLayoutBranding;
