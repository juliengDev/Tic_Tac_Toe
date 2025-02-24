export type Team = "X" | "O";
export type GameScore = {
  X: number;
  O: number;
  ties: number;
};

export type BoardProps = {
  renderSquare: (i: number) => React.ReactElement;
};
