import "./Axis.css";

import { useEffect, useRef } from "react";
import * as d3Axis from "d3-axis";
import { select as d3Select } from "d3-selection";

export default function Axis({ orient, scale, tickSize, translate }) {
  const chartRef = useRef<any>();
  const axisType = `axis${orient}`;
  const axis = d3Axis[axisType]()
    .scale(scale)
    .tickSize(-tickSize)
    .tickPadding([12])
    .ticks([4]);

  useEffect(() => {
    d3Select(chartRef.current).call(axis);
  }, []);

  return (
    <g className={`Axis Axis-${orient}`} ref={chartRef} transform={translate} />
  );
}
