import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

export default function ChartsOverviewDemo() {
  return (
    <BarChart
      series={[
        { data: [35, 44, 24, 34] },
        { data: [51, 6, 49, 30] }
       
      ]}
      height={270}
      xAxis={[{ data: ['Attendance', 'Leave'], scaleType: 'band' }]}
      margin={{ top: 10, bottom: 30 }}
    />
  );
}
