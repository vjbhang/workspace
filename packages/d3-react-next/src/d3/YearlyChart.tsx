import "./index.css";
import * as d3 from "d3";

export default function YearlyChart() {
  const width = 640,
    height = 400,
    marginTop = 20,
    marginRight = 20,
    marginBottom = 30,
    marginLeft = 40;

  const x = d3
    .scaleUtc()
    .domain([new Date("2023-09-01"), new Date("2024-09-01")])
    .range([marginLeft, width - marginRight]);

  const svg = d3.create("svg");
  const gx = svg
    .append("g")
    .attr("transform", `translate(0, ${height - marginBottom})`)
    .call(d3.axisBottom(x));

  return svg.node();
}
