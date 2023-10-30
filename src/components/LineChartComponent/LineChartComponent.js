import React from 'react';
import LineChart from '../../utils/LineChart'
const LineChartComponent = ({data}) => {
    const keysCount = Object.keys(data).length;
  return keysCount >= 2 ? <LineChart data={data} /> : <p className='flex justify-center align-center'>Not enough data for the chart.</p>;
};

export default LineChartComponent;