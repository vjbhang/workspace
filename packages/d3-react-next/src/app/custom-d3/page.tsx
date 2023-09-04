"use client";

import createAxis, { ScaleLinear, ScaleUTC } from "./_component/createAxis";
import generateChart from "./_component/generateChart";
import { ChartStyle } from "./_component/generateChart";
import useD3 from "@/d3/useD3";

const kneeBalanceLateralMockData = [
  {
    name: "정상",
    frequency: 8400,
    percentage: 84,
  },
  {
    name: "경미",
    frequency: 2100,
    percentage: 21,
  },
  {
    name: "중증도",
    frequency: 300,
    percentage: 3,
  },
  {
    name: "심각",
    frequency: 200,
    percentage: 2,
  },
];

export default function CustomD3Page() {
  const xAxisConfig: ScaleLinear = {
    type: "scaleLinear",
    start: 0,
    end: 100,
  };

  const yAxisConfig: ScaleLinear = {
    type: "scaleLinear",
    start: 0,
    end: 2200,
  };

  const xAxis = createAxis({
    axis: xAxisConfig,
    data: kneeBalanceLateralMockData,
  });
  const yAxis = createAxis({
    axis: yAxisConfig,
    data: kneeBalanceLateralMockData,
  });
  const axisStyle: ChartStyle = {
    width: 1000,
    height: 400,
    marginTop: 20,
    marginBottom: 40,
    marginRight: 20,
    marginLeft: 96,
    xAxisTickPadding: 14,
    xAxisFontSize: 14,
    yAxisTickPadding: 14,
    yAxisFontSize: 14,
  };

  const chart = generateChart({
    xAxis: xAxis,
    yAxis: yAxis,
    style: axisStyle,
    data: kneeBalanceLateralMockData,
  });
  const aChart = useD3({ svgNode: chart });

  return (
    <div className="w-screen h-screen flex flex-col items-center p-8">
      <h1 className="text-2xl">LETS FKN CREATE BESPOKE D3</h1>
      <div>{aChart}</div>
    </div>
  );
}
