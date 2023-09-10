"use client";
import groupedBarchartGenerator from "./_component/groupedBarchartGenerator";
import { GroupedBarChartXAxisConfig } from "./_component/groupedBarchartGenerator";
import useD3 from "@/d3/useD3";
import {
  ChartStyle,
  BarStyle,
  xAxisConfig,
  yAxisConfig,
} from "../barchart/_component/barchartGenerator";
import { groupedBarChartData } from "./_component/data";

export interface GroupedBarChartStyle extends ChartStyle {
  colorRange?: string[];
}

export default function GroupedBarchartPage() {
  const chartStyle: GroupedBarChartStyle = {
    width: 1280,
    height: 600,
    marginTop: 20,
    marginBottom: 24,
    marginRight: 10,
    marginLeft: 40,
    xAxisTickPadding: 14,
    xAxisFontSize: 16,
    xAxisFontColor: "#FFFFFF66",
    yAxisTickPadding: 14,
    yAxisFontSize: 12,
    yAxisFontColor: "#FFFFFF66",
    background: "#080920",
    colorRange: ["#1EDA00", "#FAFF00", "#66B6FF"],
  };

  const barStyle: BarStyle = {
    paddingInner: 0.35,
    paddingOuter: 1,
  };

  const xAxisConfig: GroupedBarChartXAxisConfig = {
    domain: [
      "1월",
      "2월",
      "3월",
      "4월",
      "5월",
      "6월",
      "7월",
      "8월",
      "9월",
      "10월",
      "11월",
      "12월",
    ],
    domainKey: "month",
    subdomainKey: "category",
  };

  const yAxisConfig: yAxisConfig = {
    domainKey: "frequency",
  };

  const chartNode = groupedBarchartGenerator({
    xAxisConfig: xAxisConfig,
    yAxisConfig: yAxisConfig,
    chartStyle: chartStyle,
    barStyle: barStyle,
    data: groupedBarChartData,
  });
  console.log("chartNode:", chartNode);
  const isChart = useD3({ svgNode: chartNode! });
  return (
    <div
      className="w-screen h-screen flex flex-col items-center"
      style={{ background: "#080920" }}
    >
      <h1 className="text-2xl p-8 text-white">Grouped Barchart</h1>
      <div>{isChart}</div>
    </div>
  );
}
