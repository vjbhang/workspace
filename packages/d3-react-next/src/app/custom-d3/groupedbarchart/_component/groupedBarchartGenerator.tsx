import * as d3 from "d3";
import { groupedBarChartData } from "./data";
import {
  ChartStyle,
  BarStyle,
  xAxisConfig,
  yAxisConfig,
} from "../../barchart/_component/barchartGenerator";
import { GroupedBarChartStyle } from "../page";

export interface GroupedBarChartXAxisConfig extends xAxisConfig {
  subdomainKey: "category";
}

interface GroupedBarChartGeneratorProps {
  xAxisConfig: GroupedBarChartXAxisConfig;
  yAxisConfig: yAxisConfig;
  barStyle?: BarStyle;
  chartStyle: GroupedBarChartStyle;
  data: any;
}
export default function groupedBarchartGenerator({
  xAxisConfig,
  yAxisConfig,
  chartStyle,
  barStyle,
  data,
}: GroupedBarChartGeneratorProps) {
  if (typeof window !== "undefined") {
    // Specify the chart’s dimensions.
    const { width, height, marginTop, marginRight, marginBottom, marginLeft } =
      chartStyle;

    // Prepare the scales for positional and color encodings.
    // Fx encodes the state.
    const fx = d3
      .scaleBand()
      .domain(new Set(data.map((d) => d[xAxisConfig!.domainKey])))
      .rangeRound([marginLeft, width - marginRight])
      .paddingInner(0.1);

    // Both x and color encode the age class.
    const categories = new Set(data.map((d) => d[xAxisConfig!.subdomainKey]));

    const x = d3
      .scaleBand()
      .domain(categories)
      .rangeRound([0, fx.bandwidth()])
      .paddingInner(barStyle?.paddingInner || 0)
      .paddingOuter(barStyle?.paddingOuter || 0);

    const color = d3
      .scaleOrdinal()
      .domain(categories)
      .range(chartStyle.colorRange || d3.schemeSpectral[categories.size])
      .unknown("#ccc");

    // Y encodes the height of the bar.
    const y = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d[yAxisConfig!.domainKey])])
      .nice()
      .rangeRound([height - marginBottom, marginTop]);

    // A function to format the value in the tooltip.
    const formatValue = (x) => (isNaN(x) ? "N/A" : x.toLocaleString("en"));

    // Create the SVG container.
    const svg = d3
      .create("svg")
      .attr("width", width)
      .attr("height", height)
      .attr("viewBox", [0, 0, width, height])
      .attr("style", "max-width: 100%; height: auto;");

    // add background color to chart
    svg
      .append("rect")
      .attr("width", "100%")
      .attr("height", "100%")
      .attr("fill", chartStyle?.background || "white");

    // Append a group for each state, and a rect for each age.
    svg
      .append("g")
      .selectAll()
      .data(d3.group(data, (d) => d[xAxisConfig!.domainKey]))
      .join("g")
      .attr("transform", ([key]) => `translate(${fx(key)},0)`)
      .selectAll()
      .data(([, d]) => d)
      .join("rect")
      .attr("x", (d) => x(d[xAxisConfig!.subdomainKey]))
      .attr("y", (d) => y(d[yAxisConfig!.domainKey]))
      .attr("width", x.bandwidth())
      .attr("height", (d) => y(0) - y(d[yAxisConfig.domainKey]))
      .attr("fill", (d) => color(d[xAxisConfig.subdomainKey]));

    // Append the horizontal axis.
    svg
      .append("g")
      .attr("transform", `translate(0,${height - marginBottom})`)
      .call(d3.axisBottom(fx).tickSizeOuter(0))
      .call((g) => g.selectAll(".domain").remove())
      .call((g) =>
        g
          .selectAll(".tick text")
          .attr("color", chartStyle.xAxisFontColor || "black")
          .attr("font-size", chartStyle.xAxisFontSize || "black")
      );

    // Append the vertical axis.
    svg
      .append("g")
      .attr("transform", `translate(${marginLeft},0)`)
      .call(
        d3
          .axisRight(y)
          .ticks(null, "s")
          .tickSize(
            chartStyle.width - chartStyle.marginLeft - chartStyle.marginRight
          )
      )
      .call((g) => g.select(".domain").remove())
      .call((g) =>
        g
          .selectAll(".tick line")
          .attr("stroke-opacity", 0.1)
          .attr("color", "white")
      )
      .call((g) =>
        g
          .selectAll(".tick text")
          .attr("font-size", chartStyle.yAxisFontSize || 10)
          .attr("color", chartStyle.yAxisFontColor || "black")
          .attr("x", 4)
          .attr("dy", -4)
      );

    // Return the chart with the color scale as a property (for the legend).
    return Object.assign(svg.node(), { scales: { color } });
    // return svg.node();
  }
}
