import React from 'react';
import ReactApexChart from 'react-apexcharts';

const LineChart = ({ series, options }) => {
  return (
    <div className="line-chart">
      <ReactApexChart options={options} series={series} type="line" height={350} />
    </div>
  );
};

export default LineChart;
