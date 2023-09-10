import * as d3 from "d3";

export interface ChartStyle {
  width: number;
  height: number;
  marginTop: number;
  marginBottom: number;
  marginLeft: number;
  marginRight: number;
  xAxisTickPadding?: number;
  yAxisTickPadding?: number;
  xAxisFontSize?: number;
  xAxisFontColor?: string;
  yAxisFontSize?: number;
  yAxisFontColor?: string;
  background?: string;
}

export interface BarStyle {
  width?: number;
  paddingInner?: number;
  paddingOuter?: number;
  colors?: string[];
}

export interface xAxisConfig {
  domain: string[];
  domainKey: string;
}

export interface yAxisConfig {
  domainKey: string;
}

interface ChartGeneratorProps {
  xAxisConfig: xAxisConfig;
  yAxisConfig: yAxisConfig;
  barStyle?: BarStyle;
  chartStyle: ChartStyle;
  data: any;
}

export default function barchartGenerator({
  xAxisConfig,
  yAxisConfig,
  barStyle,
  chartStyle,
  data,
}: ChartGeneratorProps) {
  // declare the x (vertical position) scale.
  if (typeof window !== "undefined") {
    const commaFormat = d3.format(",");
    const x = d3
      .scaleBand()
      .domain(xAxisConfig!.domain)
      .range([chartStyle.marginLeft, chartStyle.width - chartStyle.marginRight])
      // .padding(0.85)
      .paddingInner(barStyle?.paddingInner || 0)
      .paddingOuter(barStyle?.paddingOuter || 0);

    // Declare the y (vertical position) scale.
    const y = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d[yAxisConfig!.domainKey])])
      .range([
        chartStyle.height - chartStyle.marginBottom,
        chartStyle.marginTop,
      ]);

    const svg = d3
      .create("svg")
      .attr("width", chartStyle.width)
      .attr("height", chartStyle.height);

    // Barchart

    // add background color to chart
    svg
      .append("rect")
      .attr("width", "100%")
      .attr("height", "100%")
      .attr("fill", chartStyle?.background || "white");

    // Add the y-axis and label, and remove the domain line.
    svg
      .append("g")
      .attr("transform", `translate(${chartStyle.marginLeft},0)`)
      // .attr("transform", `translate(0,${chartStyle.height - chartStyle.marginBottom})`)
      .call(
        d3
          .axisRight(y)
          .tickFormat((y) => commaFormat((y * 1).toFixed()))
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
          .attr("color", chartStyle.yAxisFontColor || "black")
          .attr("x", 4)
          .attr("dy", -4)
      );

    svg
      .append("g")
      .attr("width", chartStyle.width)
      .attr("height", chartStyle.height);
    svg
      .append("g")
      .attr("fill", "steelblue")
      .selectAll()
      .data(data)
      .join("rect")
      .attr("fill", "#66B6FF")
      .attr("x", (d) => x(d[xAxisConfig.domainKey]))
      .attr("y", (d) => y(d[yAxisConfig.domainKey]))
      .attr("height", (d) => y(0) - y(d[yAxisConfig.domainKey]))
      .attr("width", x.bandwidth());

    svg
      .append("g")
      .attr(
        "transform",
        `translate(0,${chartStyle.height - chartStyle.marginBottom})`
      )
      .call(d3.axisBottom(x).tickSizeOuter(0))
      .call((g) => g.select(".domain").remove())
      .call((g) =>
        g
          .selectAll(".tick text")
          .attr("font-size", chartStyle?.xAxisFontSize || 10)
          .attr("color", chartStyle?.xAxisFontColor || "black")
      );

    return svg.node();
  }
}
