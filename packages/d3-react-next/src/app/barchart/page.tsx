"use client";

import * as d3 from "d3";
import { useState, useEffect } from "react";
import Chart from "./_components/Chart";
import "./Page.css";

export default function BarchartPage() {
  return (
    <div className="w-screen h-screen flex flex-col items-center bg-gray-900">
      <h1 className="p-2 text-2xl">Barchart</h1>
      <div className="App-chart-container">
        <Chart parentWidth={900} />
      </div>
    </div>
  );
}
