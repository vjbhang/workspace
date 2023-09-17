"use client";

import { useState, useEffect } from "react";
import { fakeSemidonutChartData } from "../../semidonutchart/_component/data";
import { SemiDonutChart } from "../../semidonutchart/reactful/SemiDonutChart";

export default function ReactfulDonutPage() {
  const chartStyle = {
    width: 440,
    height: 360,
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 40,
    marginRight: 40,
  };
  const donutChartBarStyle = {
    colorRange: [
      "#1EDA00",
      "#FAFF00",
      "#FF9900",
      "#FF2128",
      "#9E048E",
      "#ABABAB",
    ],
    arcSpacing: 0,
    arcWidthPercentageScale: 0.6,
  };

  const donutChartThreeBarStyle = {
    colorRange: ["#1EDA00", "#FF9900"],
    arcSpacing: 0,
    arcWidthPercentageScale: 0.6,
  };

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
      <SemiDonutChart
        chartStyle={semidonutchartStyle}
        barStyle={semidonutChartBarStyleTwo}
        data={fakeSemidonutChartData}
        xAxisConfig={{ domainKey: "name" }}
        yAxisConfig={{ domainKey: "value" }}
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
