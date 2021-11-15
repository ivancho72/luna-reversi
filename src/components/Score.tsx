export interface ScoreProps {
  whiteScore: number;
  blackScore: number;
  nextPlayer: string;
}

const Score = (props: ScoreProps) => {
  return (
    <g>
      <rect
        x="0"
        y="0"
        width="100"
        height="10"
        fill="DarkTurquoise"
        stroke="DarkTurquoise"
        strokeWidth="1"
      />
      <text
        x="30"
        y="6"
        textAnchor="middle"
        fill="white"
        fontSize="5"
        fontFamily="Verdana"
      >
        Black: {props.blackScore} {props.nextPlayer === 'BLACK' ? ' *' : ''}{' '}
      </text>
      <text
        x="70"
        y="6"
        textAnchor="middle"
        fill="white"
        fontSize="5"
        fontFamily="Verdana"
      >
        White: {props.whiteScore} {props.nextPlayer === 'WHITE' ? ' *' : ''}
      </text>
    </g>
  );
};

export default Score;
