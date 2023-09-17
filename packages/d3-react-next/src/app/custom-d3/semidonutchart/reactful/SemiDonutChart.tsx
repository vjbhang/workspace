"use client";

import * as d3 from "d3";
import { useRef, useEffect } from "react";
// import { AxisConfig, ChartStyle, DonutChartBarStyle, DonutChartData } from "../typescript";
import "../_component/semidonut.css";

// interface donutChartGeneratorProps {
//   chartStyle: ChartStyle;
//   barStyle?: DonutChartBarStyle;
//   data: DonutChartData[];
//   xAxisConfig: AxisConfig;
//   yAxisConfig: AxisConfig;
// }

export function SemiDonutChart({
  chartStyle,
  barStyle,
  data,
  xAxisConfig,
  yAxisConfig,
}) {
  // @ts-ignore
  function midAngle(d) {
    // 라벨을 가리키는 선을 그려줄 때 꺽이는 부분을 계산
    // console.log("midAngle:", d);
    return d.startAngle + (d.endAngle - d.startAngle) / 2;
  }

  const height = chartStyle.viewboxWidth * 0.6;

  const gslices = useRef();
  const gtext = useRef();
  const gpolylines = useRef();

  const radius = Math.min(chartStyle.viewboxWidth, height) / 2;

  const pie = d3
    .pie()
    .sort(null)
    .startAngle(Math.PI / 2)
    .endAngle(-Math.PI * 0.5)
    .value(function (d) {
      return d[yAxisConfig.domainKey];
    });

  const arc = d3
    .arc()
    .outerRadius(radius * 0.8)
    .innerRadius(radius * 0.4);

  const outerArc = d3
    .arc()
    .innerRadius(radius * 0.9)
    .outerRadius(radius * 0.9);

  const pieData = pie(data);

  const color = d3
    .scaleOrdinal()
    .domain(["10대", "20대", "30대", "40대", "50대", "60대"])
    .range(barStyle?.colorRange || ["red", "blue", "green"]);

  // @ts-ignore
  const key = function (d) {
    console.log("d", d);
    console.log("xAxisConfig.domainKey:", xAxisConfig.domainKey);
    return d.data.name;
  };

  /* PIE SLICES */
  useEffect(
    () =>
      void d3
        .select(gslices.current)
        .selectAll("path.slice")
        .data(pieData, key)
        .enter()
        .insert("path")
        .style("fill", function (d) {
          return color(d.data.name);
        })
        .attr("class", "slice")
        .merge(d3.select(gslices.current))
        .transition()
        .duration(1000)
        .attrTween("d", function (d) {
          this._current = this._current || d;
          const interpolate = d3.interpolate(this._current, d);
          this._current = interpolate(0);
          return function (t) {
            return arc(interpolate(t));
          };
        })
  );

  useEffect(() => void d3.select(gslices.current).exit().remove());

  /* TEXT LABELS */
  useEffect(
    () =>
      void d3
        .select(gtext.current)
        .selectAll("text")
        .data(pie(data), key)
        .enter()
        .append("text")
        .attr("dy", ".35em")
        .attr("fill", "white")
        .text(function (d) {
          return d.data.name;
        })
        .merge(d3.select(gtext.current))
        .transition()
        .duration(1000)
        .attrTween("transform", function (d) {
          this._current = this._current || d;
          const interpolate = d3.interpolate(this._current, d);
          this._current = interpolate(0);
          return function (t) {
            const d2 = interpolate(t);
            const pos = outerArc.centroid(d2);
            pos[0] =
              radius *
              (midAngle(d2) < (Math.PI / 2 + -Math.PI * 0.5) / 2 ? 1 : -1); //place labels left or right
            return "translate(" + pos + ")";
          };
        })
        .styleTween("text-anchor", function (d) {
          this._current = this._current || d;
          const interpolate = d3.interpolate(this._current, d);
          this._current = interpolate(0);
          return function (t) {
            const d2 = interpolate(t);
            return midAngle(d2) < (Math.PI / 2 + -Math.PI * 0.5) / 2
              ? "start"
              : "end";
          };
        })
  );

  useEffect(() => void d3.select(gtext.current).exit().remove());

  /*SLICE TO TEXT POLYLINES */
  useEffect(
    () =>
      void d3
        .select(gpolylines.current)
        .selectAll("polyline")
        .data(pie(data), key)
        .join("polyline")
        .transition()
        .duration(1000)
        .attrTween("points", function (d) {
          this._current = this._current || d;
          const interpolate = d3.interpolate(this._current, d);
          this._current = interpolate(0);
          return function (t) {
            const d2 = interpolate(t);
            const pos = outerArc.centroid(d2);
            pos[0] =
              radius *
              0.95 *
              (midAngle(d2) > (Math.PI / 2 + -Math.PI * 0.5) / 2 ? 1 : -1);
            return [arc.centroid(d2), outerArc.centroid(d2), pos];
          };
        })
  );

  useEffect(() => void d3.select(gpolylines.current).exit().remove());

  return (
    <svg
      width="100%"
      height={chartStyle.boundingHeight}
      viewBox={`0 0 ${chartStyle.viewboxWidth} ${chartStyle.viewboxHeight}`}
    >
      <g
        transform={`translate(${chartStyle.viewboxWidth / 2}, ${height / 1.4})`}
      >
        <g ref={gslices} className="slices"></g>
        <g ref={gtext} className="labels"></g>
        <g ref={gpolylines} className="lines"></g>
      </g>
    </svg>
  );
}
