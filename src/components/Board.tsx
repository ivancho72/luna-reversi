import React from 'react';
import Box from './Box';
import Tile from './Tile';

enum BoardSates {
  BLACK = 'BLACK',
  WHITE = 'WHITE',
  EMPTY = 'EMPTY',
}

const Board = () => {
  let gameData: BoardSates[][] = [];
  initBoardState(gameData);

  const renderTiles = () => {
    const boxes = [];
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        boxes.push(
          <Tile
            key={`BOX-${i}-${j}`}
            posX={i}
            posY={j}
            state={gameData[i][j]}
          />,
        );
      }
    }
    return boxes;
  };

  return (
    <>
      <Box x={0} y={10} size={100} />
      {renderTiles()}
    </>
  );
};

const initBoardState = (boardData: BoardSates[][]) => {
  for (let i = 0; i < 8; i++) {
    boardData[i] = [];
    for (let j = 0; j < 8; j++) {
      if ((i === 3 && j === 3) || (i === 4 && j === 4)) {
        boardData[i][j] = BoardSates.WHITE;
      } else if ((i === 3 && j === 4) || (i === 4 && j === 3)) {
        boardData[i][j] = BoardSates.BLACK;
      } else {
        boardData[i][j] = BoardSates.EMPTY;
      }
    }
  }
};

export default Board;
