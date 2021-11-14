import React from 'react';
import Box from './Box';

const SvgContainer = () => {
  const renderBoxes = () => {
    const boxes = [];
    const boxSize = 100 / 8;
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        boxes.push(
          <Box
            key={`BOX-${i}-${j}`}
            x={i * boxSize}
            y={j * boxSize}
            size={boxSize}
          />,
        );
      }
    }
    return boxes;
  };

  return (
    <svg width="500" height="500" viewBox="0 0 100 100">
      <Box x={0} y={0} size={100} />
      {renderBoxes()}
    </svg>
  );
};

export default SvgContainer;
