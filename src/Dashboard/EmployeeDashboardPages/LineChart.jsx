import React from 'react';
import ReactApexChart from 'react-apexcharts';

const chart = () => {
  const series = [{
    name: 'Sales',
    data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
  }];
  
  const options = {
    chart: {
      type: 'line',
      height: 350
    },
    title: {
      text: 'Sales Trend',
      align: 'left'
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
    }
  };

  return (
    <div>
      <ReactApexChart options={options} series={series} type="line" height={350} />
    </div>
  );
};

export default chart;
