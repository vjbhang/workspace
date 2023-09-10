import * as d3 from "d3";

export default function metricbarGenerator(data, options) {
  if (typeof window !== "undefined") {
    const {
      elDom,
      width,
      height,
      transitionDuration,
      maxBarValue,
      valueFormatter,
    } = Object.assign(
      {
        width: 300,
        height: 60,
        transitionDuration: 750,
        maxBarValue: 1,
        valueFormatter: d3.format(".0%"),
      },
      options
    );

    const gBarHeight = Math.floor(height / data.length);
    const gBarVerticalMargin = gBarHeight * 0.1;
    const usableGBarHeight = gBarHeight - 2 * gBarVerticalMargin;

    // 25 % of the height
    const labelSize = usableGBarHeight * 0.3;
    const barMarginTop = usableGBarHeight * 0.1;
    const barHeight = usableGBarHeight * 0.6;

    const maxBarWidth = width - labelSize * 3;

    const barScale = d3
      .scaleLinear()
      .domain([0, maxBarValue])
      .range([0, maxBarWidth])
      .clamp(true);

    const svg = d3
      .create("svg")
      .classed("metric-bar", true)
      .attr("viewBox", [0, 0, width, height]);

    const gBars = svg
      .selectAll("g")
      .data(data)
      .join((enter) =>
        enter
          .append("g")
          .attr(
            "transform",
            (d, i) => `translate(0, ${i * gBarHeight + gBarVerticalMargin})`
          )
          .call((enter) =>
            enter
              .append("text")
              .attr("font-size", labelSize)
              .attr("dominant-baseline", "hanging")
              .text((d) => d.label)
          )
          .call((enter) =>
            enter
              .append("rect")
              .attr("fill", options.color || "red")
              .attr("x", 0)
              .attr("y", labelSize + barMarginTop)
              .attr("height", barHeight)
              .attr("rx", 10)
              .transition()
              .duration(transitionDuration)
              .attr("width", (d) => barScale(d.value))
          )
          .call((enter) =>
            enter
              .append("text")
              .attr("font-size", labelSize)
              .attr("x", (d) => barScale(d.value) + labelSize)
              .attr("y", (d) => labelSize + barMarginTop + barHeight / 2)
              .attr("dominant-baseline", "central")
              .attr("fill", "white")
              .transition()
              .duration(transitionDuration)
              .tween("text", (d) => {
                const textInterpolate = d3.interpolate(0.01, d.value);
                return function (t) {
                  return d3
                    .select(this)
                    .text(valueFormatter(textInterpolate(t)));
                };
              })
          )
      );

    return svg.node();
  }
}
