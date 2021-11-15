import React from 'react';
import Board from './Board';
import Box from './Box';
import Score from './Score';

const SvgContainer = () => {
  return (
    <svg width="500" height="500" viewBox="0 0 100 110">
      <Score whiteScore={2} blackScore={2} nextPlayer={'BLACK'} />
      <Board />
    </svg>
  );
};

export default SvgContainer;
