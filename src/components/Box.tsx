import React from 'react';
export interface BoxProps {
  x: number;
  y: number;
  size: number;
}

const Box = (props: BoxProps) => {
  return (
    <rect
      x={props.x}
      y={props.y}
      width={props.size}
      height={props.size}
      fill="none"
      stroke="white"
      strokeWidth="1"
    />
  );
};

export default Box;
