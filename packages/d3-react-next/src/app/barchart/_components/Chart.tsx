"use client";

import { scaleBand, scaleLinear } from "d3";
import { useState } from "react";
import Bars from "./Bars";
import ToolTip from "./ToolTip";
import Axes from "./Axes";
import "./Chart.css";

interface FakeData {
  name: string;
  value: number;
}

const fakeDatas: FakeData[] = [
  {
    name: "vincent",
    value: 20,
  },
  {
    name: "clone1",
    value: 30,
  },
  {
    name: "clone2",
    value: 45,
  },
  {
    name: "clone3",
    value: 25,
  },
  {
    name: "clone4",
    value: 40,
  },
];

export default function Chart({ parentWidth }: { parentWidth: any }) {
  const data = fakeDatas;
  const xScale = scaleBand();
  const yScale = scaleLinear();
  const [isHovering, setHovering] = useState(null);

  const margins = {
    top: 50,
    right: 20,
    bottom: 100,
    left: 60,
  };
  const svgDimensions = {
    width: Math.max(parentWidth, 300),
    height: 500,
  };
  const maxValue = Math.max(...data.map((d) => d.value));

  return (
    <div className="Chart">
      <svg width={svgDimensions.width} height={svgDimensions.height}>
        <Axes
          scales={{ xScale, yScale }}
          margins={margins}
          svgDimensions={svgDimensions}
        />
        <Bars
          scales={{ xScale, yScale }}
          margins={margins}
          data={data}
          maxValue={maxValue}
          svgDimensions={svgDimensions}
          onMouseOverCallback={(datum) => setHovering({ hoveredBar: datum })}
          onMouseOutCallback={(datum) => setHovering({ hoveredBar: null })}
        />
      </svg>
      {isHovering ? (
        <ToolTip hoveredBar={isHovering} scales={{ xScale, yScale }} />
      ) : null}
    </div>
  );
}
