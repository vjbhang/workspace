"use client"
import * as d3 from "d3";
import {useEffect, useRef} from "react";
import "../_component/donutchart.css";

export const DonutChart = ({
  chartStyle,
  barStyle,
  data,
  xAxisConfig,
  yAxisConfig
}) => {
  const height = chartStyle.viewboxWidth * 0.6;
  const gslices = useRef();
  const glabels = useRef();
  const glines = useRef();
  const radius = Math.min(chartStyle.width, height) / 2;
  const pie = d3
      .pie()
      .sort(null)
      // .startAngle(Math.PI / 2)
      // .endAngle(-Math.PI * 0.5)
      .value(function (d) {
        return d.value;
      });
  const arc = d3
      .arc()
      .outerRadius(radius * 0.8)
      .innerRadius(radius * 0.4);

  const outerArc = d3
      .arc()
      .innerRadius(radius * 0.9)
      .outerRadius(radius * 0.9);
  
  const xkey = function (d) {
        return d.data[xAxisConfig.domainKey];
      };

  const ykey = function (d) {
    return d.data[yAxisConfig.domainKey];
  };

  const pieData = pie(data);

  const color = d3.scaleOrdinal().domain(["10대", "20대", "30대", "40대", "50대", "60대"]).range(barStyle?.colorRange || ["red", "blue", "green"]);

  function midAngle(d) {
    return d.startAngle + (d.endAngle - d.startAngle) / 2;
  }

  /* slices */
  useEffect(() => void d3.select(gslices.current)
    .selectAll("path.slice")
    .data(pieData, xkey)
    .enter()
    .insert("path")
    .style("fill", function(d) {
      return color(d.data[xAxisConfig.domainKey)
    })
    .attr("class", "slice")
    .merge(d3.select(gslices.current))
    .transition()
    .duration(1000)
    .attrTween("d", function (d) {
      console.log("i");
      this._current = this._current || d;
      const interpolate = d3.interpolate(this._current, d);
      this._current = interpolate(0);
      return function (t) {
        return arc(interpolate(t));
      };
    })
  )

  useEffect(() => void d3.select(gslices.current).exit().remove())

  /* text labels */
  useEffect(() => void d3.select(glabels.current)
  .selectAll("text")
  .data(pie(data), ykey)
  .enter()
  .append("text")
  .attr("dy", ".35em")
  .text(function(d) {
    return d.data[yAxisConfig.domainKey]
  })
  .merge(glabels.current)
  .transition()
  .duration(1000)
  .attrTween("transform", function (d) {
    this._current = this._current || d;
    const interpolate = d3.interpolate(this._current, d);
    this._current = interpolate(0);
    return function (t) {
      const d2 = interpolate(t);
      const pos = outerArc.centroid(d2);
      pos[0] = radius * (midAngle(d2) < Math.PI ? 1 : -1);
      return "translate(" + pos + ")";
    };
  })
  .styleTween("text-anchor", function (d) {
    this._current = this._current || d;
    const interpolate = d3.interpolate(this._current, d);
    this._current = interpolate(0);
    return function (t) {
      const d2 = interpolate(t);
      return midAngle(d2) < Math.PI ? "start" : "end";
    };
  })
  )

  useEffect(() => void d3.select(glabels.current)
  .enter()
  .append("text")
  .attr("dy", ".35em")
  .attr("y", "20px")
  .attr("fill", "white")
  .text(function (d) {
    return d.data[yAxisConfig.domainKey] + "명";
  })
  .merge(d3.select(glabels.current))
  .transition()
  .duration(1000)
  .attrTween("transform", function (d) {
    this._current = this._current || d;
    const interpolate = d3.interpolate(this._current, d);
    this._current = interpolate(0);
    return function (t) {
      const d2 = interpolate(t);
      const pos = outerArc.centroid(d2);
      pos[0] = radius * (midAngle(d2) < Math.PI ? 1 : -1);
      return "translate(" + pos + ")";
    };
  })
  .styleTween("text-anchor", function (d) {
    this._current = this._current || d;
    const interpolate = d3.interpolate(this._current, d);
    this._current = interpolate(0);
    return function (t) {
      const d2 = interpolate(t);
      return midAngle(d2) < Math.PI ? "start" : "end";
    };
  })
  )

  useEffect(() => void d3.select(glabels.current)
  .enter()
  .append("text")
  .attr("dy", ".35em")
  .attr("y", "40px")
  .attr("fill", "white")
  .text(function (d) {
    return d.data[yAxisConfig.subdomainKey] + "%";
  })
  .merge(d3.select(glabels.current))
  .transition()
  .duration(1000)
  .attrTween("transform", function (d) {
    this._current = this._current || d;
    const interpolate = d3.interpolate(this._current, d);
    this._current = interpolate(0);
    return function (t) {
      const d2 = interpolate(t);
      const pos = outerArc.centroid(d2);
      pos[0] = radius * (midAngle(d2) < Math.PI ? 1 : -1);
      return "translate(" + pos + ")";
    };
  })
  .styleTween("text-anchor", function (d) {
    this._current = this._current || d;
    const interpolate = d3.interpolate(this._current, d);
    this._current = interpolate(0);
    return function (t) {
      const d2 = interpolate(t);
      return midAngle(d2) < Math.PI ? "start" : "end";
    };
  })
  )

  useEffect(() => void d3.select(glabels.current).exit().remove());

  /* slice to text polylines */
  useEffect(() => void d3.select(glines.current)
    .selectAll("polyline")
    .data(pie(data), ykey)
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
        pos[0] = radius * 0.95 * (midAngle(d2) < Math.PI ? 1 : -1);
        return [arc.centroid(d2), outerArc.centroid(d2), pos];
      };
    })
  )

  useEffect(() => void d3.select(glines.current).exit().remove())

  return (
    <svg width="100%" height={chartStyle.boundingHeight} viewBox={`0 0 ${chartStyle.viewboxWidth} ${chartStyle.viewboxHeight}`}>
      <g transform={`translate(${chartStyle.viewboxWidth / 2}, ${height / 1.4})`}>
        <g ref={gslices} className="slices"></g>
        <g ref={glabels} className="labels"></g>
        <g ref={glines} className="lines"></g>
      </g>
    </svg>
  )
}