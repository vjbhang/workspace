"use client";

import Axis from "./_components/Axis";
import ChartWithDimensions from "./_components/ChartWithDimensions";

export default function ReactWithD3Page() {
  return (
    <div className="w-screen h-screen flex flex-col items-center p-8">
      <h1 className="text-2xl">React with D3 Page</h1>
      <Axis domain={[0, 300]} range={[10, 290]} />
      {/* <ChartWithDimensions /> */}
    </div>
  );
}
