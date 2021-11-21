import Box from './Box';

export interface TileProps {
  posX: number;
  posY: number;
  state: 'BLACK' | 'WHITE' | 'EMPTY';
  onClick: () => void;
}

const BOX_SIZE = 100 / 8;
const OFFSET_HEIGHT = 10;

const Tile = (props: TileProps) => {
  return (
    <g>
      <Box
        x={props.posX * BOX_SIZE}
        y={props.posY * BOX_SIZE + OFFSET_HEIGHT}
        size={BOX_SIZE}
        onClick={props.onClick}
      />
      {(props.state === 'BLACK' || props.state === 'WHITE') && (
        <circle
          cx={props.posX * BOX_SIZE + BOX_SIZE / 2}
          cy={props.posY * BOX_SIZE + OFFSET_HEIGHT + BOX_SIZE / 2}
          r={BOX_SIZE / 2 - 2}
          fill={props.state === 'BLACK' ? 'black' : 'white'}
        />
      )}
    </g>
  );
};

export default Tile;
