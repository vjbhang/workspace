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
  yAxisFontSize?: number;
}

interface GenerateChartProps {
  xAxis:
    | d3.ScaleLinear<number, number, never>
    | d3.ScaleTime<number, number, never>;
  yAxis:
    | d3.ScaleLinear<number, number, never>
    | d3.ScaleTime<number, number, never>;
  style: ChartStyle;
  data: any[];
}

export default function generateChart({
  xAxis,
  yAxis,
  style,
  data,
}: Required<GenerateChartProps>): SVGSVGElement {
  const svg = d3
    .create("svg")
    .attr("width", style.width)
    .attr("height", style.height);

  svg
    .append("g")
    .attr("fill", "steelblue")
    .selectAll()
    .data(data)
    .join("rect")
    // .attr("x", (d) => xAxis(d.name))
    // .attr("y", (d) => yAxis(d.frequency))
    // .attr("height", (d) => yAxis(0) - yAxis(d.frequency))
    .attr("width", 30);

  // adding the x-axis
  //   xAxis.range([style.marginLeft, style.width - style.marginRight])
  svg
    .append("g")
    .attr("transform", `translate(0, ${style.height - style.marginBottom})`)
    .call(d3.axisBottom(xAxis!).tickPadding(style.xAxisTickPadding || 0))
    .call((g) =>
      g.selectAll(".tick text").attr("font-size", style.xAxisFontSize || 10)
    );

  // add the y-axis
  yAxis.range([style.height - style.marginBottom, style.marginTop]);
  svg
    .append("g")
    .attr("transform", `translate(${style.marginLeft},0)`)
    .call(d3.axisLeft(yAxis!).tickPadding(style.yAxisTickPadding || 0))
    .call((g) =>
      g.selectAll(".tick text").attr("font-size", style.yAxisFontSize || 10)
    );

  return svg.node()!;
}
