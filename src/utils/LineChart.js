import React from 'react';
import { Line, Point } from 'react-chartjs-2';
import { Chart } from 'chart.js';
import 'chart.js/auto'

const LineChart = ({ data }) => {
  console.log(data);
  var chartdata;
  const dataKeys = Object.keys(data);
  let secondKey;
  if (dataKeys.length >= 2) {
    secondKey = dataKeys[1];
  }
  const chartd = data[`${secondKey}`];
  console.log(chartd);
  const keysArray = Object.keys(chartd);
  let labels = [];
  let datapoints = [];
  keysArray.forEach((key) => {
    labels.push(key);
    datapoints.push(parseFloat(chartd[key]['4. close']));
  });
  var chartdata = {
    labels: labels,
    datasets: [
      {
        label: 'Visitors',
        data: datapoints,
        borderColor: '#af91fc',
        borderWidth: 3,
        pointRadius: 0.4, // Set point radius here
      },
    ],
  };

  return (
    <div>
      <Line
        data={chartdata}
        options={{
          plugins: {
            legend: {
              display: false,
            },
          },
          elements: {
            line: {
              borderColor: '#af91fc !important',
              backgroundColor: '#af91fc',
              tension: 0.4,
              borderJoinStyle: 'round',
            },
          },
          scales: {
            x: {
              grid: {
                display: false,
              },
            },
            y: {
              grid: {
                display: false,
              },
            },
          },
        }}
      />
    </div>
  );
};

export default LineChart;
