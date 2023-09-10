"use client";

import piechartGenerator from "./_component/pieChartGenerator";
import { careerTimeMockData } from "./_component/data";
import useD3 from "@/d3/useD3";

export default function PiechartPage() {
  const piechart = piechartGenerator({ data: careerTimeMockData });
  const isPiechart = useD3({ svgNode: piechart! });
  return (
    <div
      className="w-screen h-screen flex flex-col items-center"
      style={{ background: "#080920" }}
    >
      <h1 className="text-2xl text-white p-2">Piechart</h1>
      <div className="w-full h-fit">{isPiechart}</div>
    </div>
  );
}
