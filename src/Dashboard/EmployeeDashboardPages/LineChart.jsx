import React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import { Box } from '@mui/material';

// Weekly task progress data
const weeklyTaskData = [
  { day: 'Monday', progress: 40 },
  { day: 'Tuesday', progress: 55 },
  { day: 'Wednesday', progress: 70 },
  { day: 'Thursday', progress: 65 },
  { day: 'Friday', progress: 80 },
  { day: 'Saturday', progress: 90 },
  { day: 'Sunday', progress: 75 },
];

const chartSettings = {
  yAxis: [
    {
      label: 'Task Progress (%)',
      min: 0,
      max: 100, // Task progress in percentage
    },
  ],
  width: 500,
  height: 400,
};

export default function SimpleLineChart() {
  return (
    <Box sx={{ marginTop: '2rem', display: 'flex', justifyContent: 'center' }}>
      <LineChart
        dataset={weeklyTaskData}
        xAxis={[{ scaleType: 'band', dataKey: 'day' }]} // Days of the week on x-axis
        series={[
          {
            dataKey: 'progress',
            label: 'Task Progress',
            color: 'green', // Line color for task progress
            valueFormatter: (value) => `${value}%`,
          },
        ]}
        {...chartSettings}
      />
    </Box>
  );
}
