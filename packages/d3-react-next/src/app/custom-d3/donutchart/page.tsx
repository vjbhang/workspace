"use client";

import { turtleNeckPostureMockData } from "./_component/data";
import donutchartGenerator from "./_component/donutchartGenerator";
import { ChartStyle } from "../barchart/_component/barchartGenerator";
import { DonutChartBarStyle } from "./_component/donutchartGenerator";
import useD3 from "@/d3/useD3";

export default function DonutChartPage() {
  const chartStyle: ChartStyle = {
    width: 800,
    height: 700,
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 40,
    marginRight: 40,
  };
  const donutChartBarStyle: DonutChartBarStyle = {
    colorRange: [
      "#1EDA00",
      "#FAFF00",
      "#FF9900",
      "#FF2128",
      "#9E048E",
      "#ABABAB",
    ],
    arcSpacing: 0,
    arcWidthPercentageScale: 0.6,
  };

  const donutchart = donutchartGenerator({
    chartStyle: chartStyle,
    barStyle: donutChartBarStyle,
    data: turtleNeckPostureMockData,
  });

  const isDonut = useD3({ svgNode: donutchart! });

  return (
    <div
      className="w-screen h-screen flex flex-col items-center"
      style={{ background: "#080920" }}
    >
      <h1 className="text-2xl p-2 text-white">Donut Chart</h1>
      <div className="p-4">{isDonut}</div>
    </div>
  );
}
