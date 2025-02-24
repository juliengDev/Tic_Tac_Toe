import React from "react";
import { BoardProps } from "@/types/game";

const Board: React.FC<BoardProps> = ({ renderSquare }) => {
  return (
    <div>
      <div className="mb-5 grid grid-cols-3 gap-5">
        {Array(9)
          .fill(null)
          .map((_, i) => (
            <div key={i}>{renderSquare(i)}</div>
          ))}
      </div>
    </div>
  );
};

export default Board;
