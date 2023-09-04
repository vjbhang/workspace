"use client";

import createAxis, { ScaleLinear, ScaleUTC } from "./_component/createAxis";
import generateChart from "./_component/generateChart";
import { ChartStyle } from "./_component/generateChart";
import useD3 from "@/d3/useD3";

export default function CustomD3Page() {
  const xAxisConfig: ScaleLinear = {
    type: "scaleLinear",
    start: 0,
    end: 100,
  };

  const yAxisConfig: ScaleUTC = {
    type: "scaleUtc",
    startDate: "2023-01-01",
    endDate: "2023-12-01",
  };

  const xAxis = createAxis({ axis: xAxisConfig });
  const yAxis = createAxis({ axis: yAxisConfig });
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

  const chart = generateChart({ xAxis: xAxis, yAxis: yAxis, style: axisStyle });
  const aChart = useD3({ svgNode: chart });

  return (
    <div className="w-screen h-screen flex flex-col items-center p-8">
      <h1 className="text-2xl">LETS FKN CREATE BESPOKE D3</h1>
      <div>{aChart}</div>
    </div>
  );
}
