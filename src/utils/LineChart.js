// LineChart.js
import React from 'react';
import { ResponsiveLine } from '@nivo/line';
import style from './style.module.scss'

const LineChart = ({ data }) => {
  var chartdata;
    const dataKeys = Object.keys(data);
    let secondKey;
    if (dataKeys.length >= 2) {
      secondKey = dataKeys[1];
    }
const chartd = data[`${secondKey}`];
chartdata=[{
    "color": "hsl(162, 72%, 61%)",
    "id":'closing'
}
]
  const keysArray = Object.keys(chartd);
  const transformedData = keysArray.map(key => ({
    x: key,
    y: parseFloat(chartd[key]['4. close'])
  }));
  chartdata = [{
    ...chartdata[0],  
    data: transformedData,
  }];
  return (
    <div className={style.chartstyle} >
      <ResponsiveLine
       
        data={chartdata}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
        curve="monotoneX"
        axisTop={null}
        axisRight={null}
        axisBottom={null}
        // axisBottom={{
        //     legend: 'Date',
        //     legendOffset: 36,
        //     legendPosition: 'middle',
        //     tickSize:10,
        //     legendFormat: (d, i) => i % 20 === 0 ? d : '', // Show every 5th label
        //   }}
        axisLeft={{
          orient: 'left',
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          
          legendOffset: -40,
          legendPosition: 'middle',
        }}
        colors={{ scheme: 'set3' }}
      
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabel="y"
        pointLabelYOffset={-12}
        enableArea={true}
        enableCrosshair={false}
        enableGridX={false}
        enableGridY={false}
        enablePoints={false}
        enableSlices="x"
        motionConfig="wobbly"
      />
    </div>
  );
};

export default LineChart;
