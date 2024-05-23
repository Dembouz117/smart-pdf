import React, { useRef, useState, useEffect } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import HCExporting from "highcharts/modules/exporting";

HCExporting(Highcharts);

interface HighchartsComponentProps {
  setChartImage: (image: string) => void;
}

// Utility function to convert SVG string to Data URL
export const svgStringToDataUrl = (svgString: string): string => {
  const encodedSvgString = encodeURIComponent(svgString);
  const dataUrl = `data:image/svg+xml;charset=utf-8,${encodedSvgString}`;
  return dataUrl;
};

const HighchartsComponent: React.FC<HighchartsComponentProps> = ({ setChartImage }) => {
  const chartRef = useRef(null);

  const options: Highcharts.Options = {
    title: {
      text: 'My Chart',
    },
    series: [
      {
        type: 'line',
        data: [1, 2, 3, 4, 5],
      },
    ],
  };

  useEffect(() => {
    if (!chartRef.current) {
      return;
    }

    const chart = chartRef.current.chart;
    const chartSVG = chart.getSVG();

    if (chartSVG) {
      const svgDataUrl = svgStringToDataUrl(chartSVG);
      setChartImage(svgDataUrl);
    }
  }, [setChartImage]);

  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={options}
      ref={chartRef}
    />
  );
};

export default HighchartsComponent;
