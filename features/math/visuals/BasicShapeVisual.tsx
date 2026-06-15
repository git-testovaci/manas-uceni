import type { ReactNode } from "react";
import type { BasicShapeId } from "@/types";

export type BasicShapeVisualSize = "sm" | "md" | "lg";

type BasicShapeVisualProps = {
  shapeId: BasicShapeId;
  size?: BasicShapeVisualSize;
  ariaHidden?: boolean;
};

const SHAPE_SIZE_PX: Record<BasicShapeVisualSize, number> = {
  sm: 72,
  md: 112,
  lg: 160,
};

function getShapeAriaLabel(shapeId: BasicShapeId): string {
  switch (shapeId) {
    case "circle":
      return "Kruh";
    case "square":
      return "Čtverec";
    case "triangle":
      return "Trojúhelník";
    case "rectangle":
      return "Obdélník";
  }
}

export function BasicShapeVisual({
  shapeId,
  size = "lg",
  ariaHidden = false,
}: BasicShapeVisualProps) {
  const dimension = SHAPE_SIZE_PX[size];
  const stroke = "currentColor";
  const fill = "rgb(59 130 246 / 0.12)";

  let shapeMarkup: ReactNode;

  switch (shapeId) {
    case "circle":
      shapeMarkup = (
        <circle
          cx={dimension / 2}
          cy={dimension / 2}
          r={dimension / 2 - 8}
          fill={fill}
          stroke={stroke}
          strokeWidth={6}
        />
      );
      break;
    case "square":
      shapeMarkup = (
        <rect
          x={12}
          y={12}
          width={dimension - 24}
          height={dimension - 24}
          fill={fill}
          stroke={stroke}
          strokeWidth={6}
        />
      );
      break;
    case "rectangle":
      shapeMarkup = (
        <rect
          x={10}
          y={24}
          width={dimension - 20}
          height={dimension - 48}
          fill={fill}
          stroke={stroke}
          strokeWidth={6}
        />
      );
      break;
    case "triangle":
      shapeMarkup = (
        <polygon
          points={`${dimension / 2},14 ${dimension - 14},${dimension - 14} 14,${dimension - 14}`}
          fill={fill}
          stroke={stroke}
          strokeWidth={6}
          strokeLinejoin="round"
        />
      );
      break;
  }

  return (
    <svg
      width={dimension}
      height={dimension}
      viewBox={`0 0 ${dimension} ${dimension}`}
      className="text-math"
      role={ariaHidden ? undefined : "img"}
      aria-hidden={ariaHidden}
      aria-label={ariaHidden ? undefined : getShapeAriaLabel(shapeId)}
    >
      {shapeMarkup}
    </svg>
  );
}
