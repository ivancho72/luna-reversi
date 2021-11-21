import React from 'react';
export interface BoxProps {
  x: number;
  y: number;
  size: number;
  onClick?: () => void;
}

const Box = (props: BoxProps) => {
  return (
    <rect
      x={props.x}
      y={props.y}
      width={props.size}
      height={props.size}
      fill="gray"
      stroke="white"
      strokeWidth="1"
      onClick={() => props.onClick && props.onClick()}
    />
  );
};

export default Box;
