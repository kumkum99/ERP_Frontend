import React, { useState, useEffect } from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts/ChartsAxis';
import { Box } from '@mui/material';

// Generate random attendance and leave percentages for demonstration
const generateMonthlyData = () => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return months.map(month => {
    const attendance = Math.floor(Math.random() * (100 - 70 + 1)) + 70; // Random between 70 and 100%
    const leave = 100 - attendance; // Leave is complementary to attendance
    return { month, attendance, leave };
  });
};

const chartSetting = {
  yAxis: [
    {
      label: 'Percentage (%)',
      min: 0,
      max: 100,
    },
  ],
  width: 700,
  height: 400,
  sx: {
    [`.${axisClasses.left} .${axisClasses.label}`]: {
      transform: 'translate(-20px, 0)',
    },
  },
};

const AttendanceLeaveChart = () => {
  const [data, setData] = useState(generateMonthlyData());

  useEffect(() => {
    const interval = setInterval(() => {
      setData(generateMonthlyData()); // Simulate live update with new random data every 5 seconds
    }, 5000);

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <Box sx={{ marginTop: '2rem', display: 'flex', justifyContent: 'center' }}>
      <BarChart
        dataset={data}
        xAxis={[{ scaleType: 'band', dataKey: 'month' }]} // Month on x-axis
        series={[
          {
            dataKey: 'attendance',
            label: 'Attendance',
            color: 'green', // Green for attendance
            valueFormatter: (value) => `${value}%`,
          },
          {
            dataKey: 'leave',
            label: 'Leave',
            color: 'red', // Red for leave
            valueFormatter: (value) => `${value}%`,
          },
        ]}
        {...chartSetting}
      />
    </Box>
  );
};

export default AttendanceLeaveChart;
