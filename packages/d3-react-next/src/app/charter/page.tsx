"use client";

import * as d3 from "d3";
import { useState, useEffect } from "react";
import useD3 from "@/d3/useD3";
import Barchart from "@/d3/BarChart";
import LinePlot from "@/d3/LinePlot";
import YearlyChart from "@/d3/YearlyChart";

export default function CharterPage() {
  const [data, setData] = useState(() => d3.ticks(-2, 2, 200).map(Math.sin));
  const [data2, setData2] = useState(() => d3.ticks(-2, 2, 200).map(Math.sin));

  const someBarchart = useD3({ svgNode: Barchart()! });
  const someYearlyChart = useD3({ svgNode: YearlyChart()! });

  // @ts-ignore
  function onMouseMove(event, data, setData) {
    const [x, y] = d3.pointer(event);
    setData(data.slice(-200).concat(Math.atan2(x, y)));
  }

  return (
    <div className="w-screen h-screen flex flex-col bg-black items-center p-8 gap-8">
      <h1 className="text-2xl">Charter</h1>
      <p>Creating a custom chart from scratch</p>
      {/* <div>{someYearlyChart}</div> */}
      <div>{someBarchart}</div>
      <div onMouseMove={(e) => onMouseMove(e, data, setData)}>
        <LinePlot data={data} />
      </div>
      <div onMouseMove={(e) => onMouseMove(e, data2, setData2)}>
        <LinePlot data={data2} />
      </div>
      <div></div>
    </div>
  );
}
