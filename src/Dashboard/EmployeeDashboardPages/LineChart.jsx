import * as React from 'react';
import { LineChart } from '@mui/x-charts';

export default function BasicLineChart() {
  return (
    <LineChart
      width={500}
      height={300} // Increased height to make room for X-axis labels
      series={[
        {
          label: 'Progress',
          data: [2, 5.5, 2, 8.5, 1.5, 5], // Data points
        },
      ]}
      xAxis={[
        {
          label: 'Days', // Axis label
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'], // X-axis data points
          showGridLines: true, // Add grid lines for better visibility
          tickSize: 10, // Increase tick size for visibility
        },
      ]}
      yAxis={[
        {
          label: 'Progress', // Y-axis label
          showGridLines: true, // Show grid lines on Y-axis
        },
      ]}
      margin={{ top: 10, right: 20, bottom: 30, left: 50 }} // Add margin to avoid clipping
    />
  );
}
