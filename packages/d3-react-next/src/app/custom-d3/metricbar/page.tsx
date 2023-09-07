"use client";

import * as d3 from "d3";
import { metricbarFakeData } from "./_component/data";
import useD3 from "@/d3/useD3";
import metricbarGenerator from "./_component/metricbarGenerator";

export default function MetricBarPage() {
  const oConfig = {
    width: 928,
    height: 110,
    transitionDuration: 750,
    maxBarValue: 1,
    valueFormatter: d3.format(".0%"),
    color: "#FAFF00",
  };
  const metricbar = metricbarGenerator(metricbarFakeData, oConfig);
  const showMetricbar = useD3({ svgNode: metricbar! });

  const oConfigTwo = {
    width: 928,
    height: 110,
    transitionDuration: 750,
    maxBarValue: 1,
    valueFormatter: d3.format(".0%"),
    color: "#004CFF",
  };
  const metricbarTwo = metricbarGenerator(metricbarFakeData, oConfigTwo);
  const showMetricbarTwo = useD3({ svgNode: metricbarTwo! });

  return (
    <div
      className="w-screen h-screen flex flex-col items-center"
      style={{ background: "#080920" }}
    >
      <h1 className="text-2xl text-white p-2">Metric bar</h1>
      <div
        style={{ width: `${oConfig.width}px`, height: `${oConfig.height}px` }}
      >
        {showMetricbar}
      </div>
      <div
        style={{ width: `${oConfig.width}px`, height: `${oConfig.height}px` }}
      >
        {showMetricbarTwo}
      </div>
    </div>
  );
}
