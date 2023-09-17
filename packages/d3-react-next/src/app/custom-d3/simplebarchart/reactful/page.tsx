"use client";

import SimpleBarChart from "./reactfulSimpleBarchartGenerator";
import simplebarchartFakeData from "../_component/data";
import { ChartStyle } from "../../_component/generateChart";
import { BarStyle } from "../../barchart/_component/barchartGenerator";
import { useEffect, useState } from "react";

export default function ReactfulPage() {
  const chartStyle: ChartStyle = {
    width: 1000,
    height: 600,
    viewBoxHeight: 300,
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

  const xAxisConfig = {
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
  };
  const yAxisConfig = { domainKey: "frequency" };

  const [theChart, setTheChart] = useState<any>(null);
  const [isModalOpen, setModalOpen] = useState(false);

  function Modal({
    isOpen,
    theChart,
  }: {
    isOpen: boolean;
    theChart: JSX.Element;
  }) {
    if (isOpen) {
      return (
        <div className="absolute top-0 left-0 w-screen h-screen flex justify-center items-center bg-black bg-opacity-90 flex-col">
          <div className="w-1/3">{theChart}</div>
          <button
            className="bg-white border rounded p-2 border-black"
            onClick={() => setModalOpen(!isModalOpen)}
          >
            Close
          </button>
        </div>
      );
    } else return null;
  }

  function TheChart() {
    return (
      <SimpleBarChart
        data={simplebarchartFakeData}
        xAxisConfig={xAxisConfig}
        yAxisConfig={yAxisConfig}
        barStyle={barStyle}
        chartStyle={chartStyle}
      />
    );
  }

  useEffect(() => {
    setTheChart(<TheChart />);
  }, []);

  return (
    <div className="w-screen h-screen bg-black flex flex-col gap-4">
      <Modal isOpen={isModalOpen} theChart={theChart} />
      <div className="flex flex-col items-center justify-center">
        <button
          className="border rounded border-white p-2 text-white"
          onClick={() => setModalOpen(!isModalOpen)}
        >
          Open
        </button>
        <div className="w-full h-full">
          <TheChart />
        </div>
      </div>
    </div>
  );
}
