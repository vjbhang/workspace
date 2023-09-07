"use client";

import simplebarchartGenerator from "./_component/simplebarchartGenerator";
import simplebarchartFakeData from "./_component/data";
import useD3 from "@/d3/useD3";
import { ChartStyle } from "../barchart/_component/barchartGenerator";
import { BarStyle } from "../barchart/_component/barchartGenerator";

export default function SimpleBarchartPage() {
  const chartStyle: ChartStyle = {
    width: 1000,
    height: 600,
    marginTop: 20,
    marginBottom: 40,
    marginRight: 20,
    marginLeft: 20,
    xAxisTickPadding: 14,
    xAxisFontSize: 16,
    xAxisFontColor: "white",
    yAxisTickPadding: 14,
    yAxisFontSize: 12,
    yAxisFontColor: "#FFFFFF66",
    background: "#080920",
  };
  const barStyle: BarStyle = {
    width: 80,
    paddingInner: 0.85,
    paddingOuter: 0.4,
    colors: [
      "#FF2128",
      "#FF9900",
      "#FAFF00",
      "#1EDA00",
      "#FAFF00",
      "#FF9900",
      "#FF2128",
    ],
  };
  const simplebarchart = simplebarchartGenerator({
    chartStyle: chartStyle,
    barStyle: barStyle,
    xAxisConfig: {
      domain: [
        "전심각",
        "전중증도",
        "전경미",
        "정상",
        "후경미",
        "후중증도",
        "후심각",
      ],
      domainKey: "name",
    },
    yAxisConfig: { domainKey: "frequency" },
    data: simplebarchartFakeData,
  });

  const usingSimplebarchart = useD3({ svgNode: simplebarchart! });
  return (
    <div
      className="w-screen h-screen flex flex-col items-center"
      style={{ background: "#080920" }}
    >
      <h1 className="text-2xl text-white p-2">Simple Barchart</h1>
      {usingSimplebarchart}
    </div>
  );
}
