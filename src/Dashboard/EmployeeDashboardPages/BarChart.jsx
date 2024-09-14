import React from 'react';
import ApexCharts from 'react-apexcharts';

const BarChart = () => {
  const options = {
    chart: {
      type: 'bar',
      height: 350
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']
    },
    yaxis: {
      title: {
        text: 'Amount'
      }
    },
    fill: {
      opacity: 1
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return `$ ${val}`
        }
      }
    }
  };

  const series = [
    {
      name: 'Sales',
      data: [30, 40, 35, 50, 49, 60, 70]
    }
  ];

  return (
    <div className="chart-container">
      <ApexCharts options={options} series={series} type="bar" height={350} />
    </div>
  );
};

export default BarChart;
