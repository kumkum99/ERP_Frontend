import React from 'react';
import ReactApexChart from 'react-apexcharts';

const BarChart = ({ series, options }) => {
  return (
    <div className="bar-chart">
      <ReactApexChart options={options} series={series} type="bar" height={350} />
    </div>
  );
};

export default BarChart;
