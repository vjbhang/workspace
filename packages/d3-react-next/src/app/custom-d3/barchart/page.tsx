"use client";

import barchartGenerator from "./_component/barchartGenerator";
import useD3 from "@/d3/useD3";
import { ChartStyle, BarStyle } from "./_component/barchartGenerator";
import kneeBalanceLateralMockData from "./_component/kneeBalanceLateralMockData";
import { useState, useEffect } from "react";

export default function CustomD3TakeTwoPage() {
  const [isChart, setChart] = useState<any>(null);
  const axisStyle: ChartStyle = {
    width: 1280,
    height: 768,
    marginTop: 20,
    marginBottom: 40,
    marginRight: 20,
    marginLeft: 20,
    xAxisTickPadding: 14,
    xAxisFontSize: 16,
    xAxisFontColor: "#FFFFFF66",
    yAxisTickPadding: 14,
    yAxisFontSize: 12,
    yAxisFontColor: "#FFFFFF66",
    background: "#080920",
  };
  const barStyle: BarStyle = {
    width: 80,
    paddingInner: 0.95,
    paddingOuter: 0.25,
  };
  let aChart, isTheChart;

  aChart = barchartGenerator({
    barStyle: barStyle,
    chartStyle: axisStyle,
    data: kneeBalanceLateralMockData,
    xAxisConfig: {
      domain: ["정상", "경미", "중증도", "심각"],
      domainKey: "name",
    },
    yAxisConfig: { domainKey: "frequency" },
  });

  isTheChart = useD3({ svgNode: aChart! });

  return (
    <div
      className="w-screen h-screen flex flex-col items-center"
      style={{ background: "#080920" }}
    >
      <h1 className="text-2xl p-8 text-white">Barchart</h1>
      <div>{isTheChart}</div>
    </div>
  );
}
