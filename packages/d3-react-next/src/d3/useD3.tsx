"use client";
import { useEffect, useRef } from "react";

type SVGNode = SVGSVGElement | null;

export default function useD3({ svgNode }: { svgNode: SVGSVGElement }) {
  const svgRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (svgRef.current) {
      console.log("svgnode:", svgNode);
      svgRef.current.appendChild(svgNode);
    }
  }, []);

  return <div className="w-full h-full" ref={svgRef} />;
}
