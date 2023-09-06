import * as d3 from "d3";
import { useState, useEffect } from "react";
import {
  ChartStyle,
  BarStyle,
} from "../../barchart/_component/barchartGenerator";
import "./donutchart.css";

export interface DonutChartData {
  name: string;
  value: number;
  percentage: number;
}

export interface DonutChartBarStyle extends BarStyle {
  colorRange: string[];
  arcSpacing: number;
  arcWidthPercentageScale: number;
}

interface donutChartGeneratorProps {
  chartStyle: ChartStyle;
  barStyle?: DonutChartBarStyle;
  data: DonutChartData[];
}

export default function donutchartGenerator({
  chartStyle,
  barStyle,
  data,
}: donutChartGeneratorProps) {
  if (typeof window !== "undefined") {
    const height = chartStyle.width * 0.6;
    const svg = d3
      .create("svg")
      .attr("width", chartStyle.width)
      .attr("height", chartStyle.height);

    const g = svg.append("g");

    g.append("g").attr("class", "slices");
    g.append("g").attr("class", "labels");
    g.append("g").attr("class", "lines");

    const radius = Math.min(chartStyle.width, height) / 2;

    const pie = d3
      .pie()
      .sort(null)
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

    g.attr(
      "transform",
      "translate(" + chartStyle.width / 2 + "," + height / 1.4 + ")"
    );

    const key = function (d) {
      return d.data.name;
    };

    console.log(data);
    /* ------- PIE SLICES -------*/

    const pieData = pie(data);
    const slice = g
      .select(".slices")
      .selectAll("path.slice")
      .data(pieData, key);

    const color = d3
      .scaleOrdinal()
      .domain(["10대", "20대", "30대", "40대", "50대", "60대"])
      .range(barStyle?.colorRange || ["red", "blue", "green"]);

    slice
      .enter()
      .insert("path")
      .style("fill", function (d) {
        return color(d.data.name);
      })
      .attr("class", "slice")
      .merge(slice)
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
      });

    slice.exit().remove();

    /* ------- TEXT LABELS -------*/

    const text = g.select(".labels").selectAll("text").data(pie(data), key);

    function midAngle(d) {
      return d.startAngle + (d.endAngle - d.startAngle) / 2;
    }

    text
      .enter()
      .append("text")
      .attr("dy", ".35em")
      .attr("fill", "white")
      .text(function (d) {
        return d.data.name;
      })
      .merge(text)
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
      });

    text
      .enter()
      .append("text")
      .attr("dy", ".35em")
      .attr("y", "20px")
      .attr("fill", "white")
      .text(function (d) {
        return d.data.value + "명";
      })
      .merge(text)
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
      });

    text
      .enter()
      .append("text")
      .attr("dy", ".35em")
      .attr("y", "40px")
      .attr("fill", "white")
      .text(function (d) {
        return d.data.percentage + "%";
      })
      .merge(text)
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
      });

    text.exit().remove();

    /* ------- SLICE TO TEXT POLYLINES -------*/

    const polyline = g
      .select(".lines")
      .selectAll("polyline")
      .data(pie(data), key);

    polyline
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
      });

    polyline.exit().remove();

    return svg.node();
  }
}
