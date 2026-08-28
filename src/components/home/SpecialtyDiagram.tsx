import { useMemo } from "react";

type SpecialtyDiagramProps = {
  accent: string;
  centerLabel: string;
  technologies: string[];
};

type Position = {
  x: number;
  y: number;
};

type DiagramNode = Position & {
  label: string;
};

type DiagramNodeProps = {
  label: string;
  x: number;
  y: number;
  accent: string;
};

const VIEWBOX_WIDTH   = 660;
const VIEWBOX_HEIGHT  = 360;

const CENTER = {
  x: 50,
  y: 50,
};

export default function SpecialtyDiagram({
  accent,
  centerLabel,
  technologies,
}: SpecialtyDiagramProps) {
  const nodes = useMemo(
    () => generateNodes(technologies),
    [technologies],
  );

  return (
    <div className="relative h-full min-h-[320px] w-full">
      <svg
        aria-hidden="true"
        viewBox={`0 0 ${VIEWBOX_WIDTH} ${VIEWBOX_HEIGHT}`}
        preserveAspectRatio="xMidYMid meet"
        className="absolute inset-0 h-full w-full"
      >
        {nodes.map((node) => (
          <path
            key={`path-${node.label}`}
            d={createPath(node)}
            fill="none"
            stroke="white"
            strokeOpacity="0.22"
            strokeWidth="1"
          />
        ))}

        {nodes.map((node) => (
          <circle
            key={`point-${node.label}`}
            cx={percentageToSvgX(node.x)}
            cy={percentageToSvgY(node.y)}
            r="1.5"
            fill={accent}
            opacity="0.4"
          />
        ))}
      </svg>

      {/* Nó central */}
      <div
        className="
          absolute
          left-1/2
          top-1/2
          flex
          -translate-x-1/2
          -translate-y-1/2
          flex-col
          items-center
        "
      >
        <span
          className="h-2.5 w-2.5 rounded-full"
          style={{
            backgroundColor: accent,
            boxShadow: `0 0 12px ${accent}`,
          }}
        />

        <span
          className="
            mt-2
            font-body
            text-[14px]
            font-semibold
            uppercase
            tracking-[0.2em]
            text-white/65
          "
        >
          {centerLabel}
        </span>
      </div>

      {/* Tecnologias */}
      {nodes.map((node) => (
        <DiagramNode
          key={node.label}
          node={node}
          accent={accent}
        />
      ))}
    </div>
  );
}

function generateNodes(
  technologies: string[],
): DiagramNode[] {
  const positions: Position[] = [];

  return technologies.map((technology) => {
    let position: Position;
    let attempts = 0;

    do {
      position = generatePosition();
      attempts++;
    } while (
      positions.some(
        (existing) =>
          distance(existing, position) < 22,
      ) &&
      attempts < 100
    );

    positions.push(position);

    return {
      label: technology,
      ...position,
    };
  });
}

function generatePosition(): Position {
  let position: Position;

  do {
    position = {
      x: randomBetween(10, 90),
      y: randomBetween(10, 90),
    };
  } while (
    position.x > 35 &&
    position.x < 65 &&
    position.y > 35 &&
    position.y < 65
  );

  return position;
}

function randomBetween(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

function distance(a: Position, b: Position) {
  return Math.sqrt(
    Math.pow(a.x - b.x, 2) +
      Math.pow(a.y - b.y, 2),
  );
}

function createPath(node: DiagramNode) {
  const centerX = percentageToSvgX(CENTER.x);
  const centerY = percentageToSvgY(CENTER.y);

  const targetX = percentageToSvgX(node.x);
  const targetY = percentageToSvgY(node.y);

  const controlX =
    centerX + (targetX - centerX) * 0.5;

  const controlY =
    centerY +
    (targetY - centerY) * 0.5 -
    18;

  return `
    M ${centerX} ${centerY}
    Q ${controlX} ${controlY}
      ${targetX} ${targetY}
  `;
}
function percentageToSvgX(x: number) {
  return (x / 100) * VIEWBOX_WIDTH;
}

function percentageToSvgY(y: number) {
  return (y / 100) * VIEWBOX_HEIGHT;
}

function DiagramNode({
  node,
  accent,
}: {
  node: DiagramNode;
  accent: string;
}) {
  return (
    <div
      className="
        absolute
        flex
        -translate-x-1/2
        -translate-y-1/2
        items-center
        gap-2
      "
      style={{
        left: `${node.x}%`,
        top: `${node.y}%`,
      }}
    >
      <span
        className="h-1.5 w-1.5 rounded-full"
        style={{
          backgroundColor: accent,
          boxShadow: `0 0 8px ${accent}`,
        }}
      />

      <span
        className="
          font-body
          text-[10px]
          font-medium
          uppercase
          tracking-[0.14em]
          text-white/35
        "
      >
        {node.label}
      </span>
    </div>
  );
}