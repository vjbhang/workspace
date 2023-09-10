// @ts-nocheck

import { interpolateLab, scaleLinear } from "d3";

export default function Bars({
  maxValue,
  scales,
  margins,
  data,
  svgDimensions,
  onMouseOverCallback,
  onMouseOutCallback,
}: {
  maxValue: number;
  scales: any;
  margins: any;
  data: any;
  svgDimensions: any;
  onMouseOverCallback: any;
  onMouseOutCallback: any;
}) {
  const colorScale = scaleLinear()
    .domain([0, maxValue])
    .range(["#F3E5F5", "#7B1FA2"])
    .interpolate(interpolateLab);

  const { xScale, yScale } = scales;
  const { height } = svgDimensions;

  const bars = data.map((datum) => (
    <rect
      key={datum.title}
      x={xScale(datum.title)}
      y={yScale(datum.value)}
      height={height - margins.bottom - yScale(datum.value)}
      width={xScale.bandwidth()}
      fill={colorScale(datum.value)}
      onMouseOver={() => onMouseOverCallback(datum)}
      onMouseOut={() => onMouseOutCallback(null)}
    />
  ));

  return <g>{bars}</g>;
}
