import * as d3 from "d3";
import { useRef, useEffect } from "react";

export default function SimpleBarChart({
  data,
  xAxisConfig,
  yAxisConfig,
  barStyle,
  chartStyle,
}) {
  const x = d3
    .scaleBand()
    .domain(xAxisConfig!.domain)
    .range([chartStyle.marginLeft, chartStyle.width - chartStyle.marginRight])
    .paddingInner(barStyle?.paddingInner || 0)
    .paddingOuter(barStyle?.paddingOuter || 0);
  const y = d3
    .scaleLinear()
    .domain([0, d3.max(data, (d) => d[yAxisConfig!.domainKey])])
    .range([chartStyle.height - chartStyle.marginBottom, chartStyle.marginTop]);
  const colorScheme = d3
    .scaleOrdinal()
    .domain(xAxisConfig.domain)
    .range(barStyle?.colors || ["red", "green", "blue"])
    .unknown("#ccc");

  const arc = (r, sign) =>
    r
      ? `a${r * sign[0]},${r * sign[1]} 0 0 1 ${r * sign[2]},${r * sign[3]}`
      : "";
  const roundedRect = (x, y, width, height, r) => {
    r = [
      Math.min(r[0], height, width),
      Math.min(r[1], height, width),
      Math.min(r[2], height, width),
      Math.min(r[3], height, width),
    ];

    return `M${x + r[0]},${y}h${width - r[0] - r[1]}${arc(
      r[1],
      [1, 1, 1, 1]
    )}v${height - r[1] - r[2]}${arc(r[2], [1, 1, -1, 1])}h${
      -width + r[2] + r[3]
    }${arc(r[3], [1, 1, -1, -1])}v${-height + r[3] + r[0]}${arc(
      r[0],
      [1, 1, 1, -1]
    )}z`;
  };

  const gx = useRef();

  useEffect(
    () =>
      void d3
        .select(gx.current)
        .call(d3.axisBottom(x).tickSizeOuter(0), [gx, x])
        .call((g) => g.select(".domain").remove())
        .call((g) => g.selectAll(".tick line").attr("stroke-opacity", 0))
        .call((g) => g.selectAll(".tick text").attr("color", chartStyle.xAxisFontColor || "black").attr("x", 0).attr("dy", 4))
  );

  console.log("data:", data);

  function Chart() {
    return (
      <svg width={chartStyle.width} height={chartStyle.height}>
        <g transform={`translate(${chartStyle.marginLeft}, 0)`}></g>
        <g>
          {data.map((item) => (
            <path
              fill={colorScheme(item[xAxisConfig.domainKey])}
              d={roundedRect(
                x(item[xAxisConfig.domainKey]),
                y(item[yAxisConfig.domainKey]),
                x.bandwidth(),
                y(0) - y(item[yAxisConfig.domainKey]),
                [10, 10, 0, 0]
              )}
            />
          ))}
        </g>
        <g
          ref={gx}
          transform={`translate(0, ${
            chartStyle.height - chartStyle.marginBottom
          })`}
        />
      </svg>
    );
  }

  return <Chart />;
}
