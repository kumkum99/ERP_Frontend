import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Card, CardContent, Grid, Button } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import PaymentIcon from '@mui/icons-material/Payment';
import { AppProvider } from '@toolpad/core/AppProvider';
import FeedbackIcon from '@mui/icons-material/Feedback';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

// Navigation Configuration
const NAVIGATION = [
  {
    segment: 'dashboard',
    title: 'Dashboard',
    icon: <DashboardIcon />,
  },
  {
    segment: 'Employees',
    title: 'Employees',
    icon: <AccountBoxIcon />,
    
  },
  {
    segment: 'Product',
    title: 'Product',
    icon: <ProductionQuantityLimitsIcon />,
  },
  {
    segment: 'orders',
    title: 'Orders',
    icon: <ShoppingCartIcon />,
  },
  {
    segment: 'Inventory',
    title: 'Inventory',
    icon: <Inventory2Icon />,
  },
  {
    segment: 'Sales',
    title: 'Sales',
    icon: <ShoppingCartIcon />,
  },
  {
    segment: 'Payment',
    title: 'Payment',
    icon: <PaymentIcon />,
  },
  {
    segment: 'Feedback',
    title: 'Feedback',
    icon: <FeedbackIcon />,
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
    <Card sx={{ Width: 200, padding: 2,  border: '2px solid gray',boxShadow: '2px 6px 8px rgba(0, 0, 0, 0.4)',borderRadius: '10px' }}>

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
          <StatCard title="Employees" value="500"  chartColor="Blue" />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard title="Sales" value="10" change={+5} chartColor="Orange" />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard title="Orders" value="30" change={+25} chartColor="green" />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard title="Alert" value="5"  chartColor="red" />
        </Grid>
      </Grid>

      {/* Additional Surface Cards Section */}
      <Grid container spacing={2} justifyContent="center" sx={{ mt: 4 }}>
        <Grid item xs={12} sm={6} md={6}>
          <SurfaceCard
            title="Sessions"
            value="13,277"
            change={35}
            description="Sessions per day for the last 30 days"
            chartColor="lightblue"
            data={sessionData}
            dataKey="sessions"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <SurfaceCard
            title="Page views and downloads"
            value="1.3M"
            change={-8}
            description="Page views and downloads for the last 6 months"
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

// Main component function
function DashboardLayoutBranding(props) {
  const { window } = props;

  const [pathname, setPathname] = React.useState('/Admin dashboard');
  const handleNavigation = (url) => {
    if (url.startsWith('http')) {
      window.open(url, 'https://www.google.com'); // Open external URL in a new tab
    } else {
      setPathname(url);
    }
  };
  const router = React.useMemo(() => {
    return {
      pathname,
      searchParams: new URLSearchParams(),
      navigate: handleNavigation, // Updated to use handleNavigation directly
    };
  }, [pathname]);

  const demoWindow = window !== undefined ? window() : undefined;

  return (
    <AppProvider
      navigation={NAVIGATION}
      branding={{
        logo: <img src="src\assets\images\logo.jpg" alt="ERP logo" />,
        title: 'ERP UNITY',
      }}
      router={router}
      theme={demoTheme}
      window={demoWindow}
    >
      <DashboardLayout>
        <DemoPageContent pathname={pathname} />
      </DashboardLayout>
    </AppProvider>
  );
}

DashboardLayoutBranding.propTypes = {
  window: PropTypes.func,
};

export default DashboardLayoutBranding;
