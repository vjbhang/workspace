"use client";

import semidonutChartGenerator from "./_component/semidonutchartGenerator";
import { fakeSemidonutChartData } from "./_component/data";
import useD3 from "@/d3/useD3";
import { turtleNeckPostureMockData } from "../donutchart/_component/data";
import { ChartStyle } from "../barchart/_component/barchartGenerator";
import { DonutChartBarStyle } from "../donutchart/_component/donutchartGenerator";

export default function SemidonutChartPage() {
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
      "#FF2128",
      "#FF9900",
      "#FAFF00",
      "#1EDA00",
      "#FAFF00",
      "#FF9900",
      "#FF2128",
    ],
    arcSpacing: 0,
    arcWidthPercentageScale: 0.6,
  };

  const semidonut = semidonutChartGenerator({
    chartStyle: chartStyle,
    barStyle: donutChartBarStyle,
    data: fakeSemidonutChartData,
  });
  const useSemidonut = useD3({ svgNode: semidonut! });

  return (
    <div
      className="w-screen h-screen flex flex-col items-center"
      style={{ background: "#080920" }}
    >
      <h1 className="text-2xl text-white p-2">Semi Donut Chart</h1>
      <div>{useSemidonut}</div>
    </div>
  );
}
