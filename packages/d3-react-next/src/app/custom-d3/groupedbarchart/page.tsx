"use client";
import groupedBarchartGenerator from "./_component/groupedBarchartGenerator";
import useD3 from "@/d3/useD3";

export default function GroupedBarchartPage() {
  const chartNode = groupedBarchartGenerator();
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
