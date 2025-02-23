import { useState } from "react";
import Button from "./Button";

const GridBoard = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const classname = "btn-base btn-4 flex h-[96px] min-w-[96px] items-center justify-center rounded-[10px] px-7 py-6";

  return (
    <div className="mb-5 grid grid-cols-3 gap-5">
      <Button className={classname} value={squares[0]}></Button>
      <Button className={classname} value={squares[1]}></Button>
      <Button className={classname} value={squares[2]}></Button>

      <Button className={classname} value={squares[3]}></Button>
      <Button className={classname} value={squares[4]}></Button>
      <Button className={classname} value={squares[5]}></Button>

      <Button className={classname} value={squares[6]}></Button>
      <Button className={classname} value={squares[7]}></Button>
      <Button className={classname} value={squares[8]}></Button>
    </div>
  );
};

export default GridBoard;
