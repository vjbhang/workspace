import * as d3 from "d3";

export type ScaleUTC = {
  type: "scaleUtc";
  startDate: `${number}-${number}-${number}`;
  endDate: `${number}-${number}-${number}`;
};

export type ScaleLinear = {
  type: "scaleLinear";
  start: number;
  end: number;
};

interface CreateAxisProps {
  axis: ScaleUTC | ScaleLinear;
}

type ReturnType =
  | d3.ScaleTime<number, number, never>
  | d3.ScaleLinear<number, number, never>;

export default function createAxis({ axis }: CreateAxisProps): ReturnType {
  if (axis.type === "scaleUtc")
    return d3
      .scaleUtc()
      .domain([new Date(axis.startDate), new Date(axis.endDate)]);
  if (axis.type === "scaleLinear")
    return d3.scaleLinear().domain([axis.start, axis.end]);
}
