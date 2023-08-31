"use client";

import * as d3 from "d3";
import * as d3Axis from "d3-axis";
import { useEffect } from "react";

export default function CharterPage() {
  const width = 400,
    height = 400;
  const scale = d3
    .scaleLinear()
    .domain([0, 100])
    .range([0, width - 60]);

  const axis = d3Axis.axisBottom(scale);

  useEffect(() => {
    d3.select("#charter")
      .append("svg")
      .attr("width", 1080)
      .attr("height", 30)
      .append("g")
      .attr("transform", "translate(0,30)")
      .call(axis);
  }, []);

  return (
    <div className="w-screen h-screen flex flex-col bg-black items-center p-8">
      <h1 className="text-2xl">Charter</h1>
      <p>Creating a custom chart from scratch</p>
      <div id={"charter"}></div>
    </div>
  );
}
