# d3 with react

Inspired by Amelia Wattenberger's [work](https://2019.wattenberger.com/blog/react-and-d3). Unable to follow her work, using d3 methods to custom style and populate data into data visualization.

After many tries, the route in `./src/custom-d3/barchart` can finally work.

### Issues during development

`Reference Error: Document is not defined error` kept coming up. This was because `barchartGenerator` was creating and returning a `svg.node()` directly. After wrapping it in a `if (typeof window !== undefined) {}` conditional, the error message disappeared.
