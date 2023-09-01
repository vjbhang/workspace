import { useEffect, useRef } from "react";

type SVGNode = SVGSVGElement | null;

export default function useD3({ svgNode }: { svgNode: SVGSVGElement }) {
  const svgRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (svgRef.current) {
      svgRef.current.appendChild(svgNode);
    }
  }, []);

  return <div ref={svgRef} />;
}
