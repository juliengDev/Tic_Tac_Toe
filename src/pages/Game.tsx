import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useGameStore } from "../store/gameStore";
import { Team } from "@/types/game";
import { calculateWinner } from "@/lib/calculateWinner";
import Button from "@/components/ui/Button";
import Board from "@/components/ui/Board";
import Logo from "@/components/ui/Logo";
import ResultLayout from "@/components/ui/ResultLayout";
import Modal from "@/components/ui/Modal";

interface HeaderProps {
  xIsNext: boolean;
  handleResetClick: () => void;
}

function Header({ xIsNext, handleResetClick }: HeaderProps) {
  return (
    <header className="mb-16 flex items-center justify-between">
      <Logo className="mb-0" />
      <Button
        iconType={xIsNext}
        value="icon"
        className="btn-base btn-3 flex items-center justify-center gap-2 rounded-[5px] px-3.5 py-2.5 text-(--color-silver)"
      >
        <p>TURN</p>
      </Button>
      <Button onBtnClick={handleResetClick} value="reset" className="btn-restart w-10 rounded-[5px] p-3"></Button>
    </header>
  );
}

function Game() {
  const navigate = useNavigate();
  const [squares, setSquares] = useState<(string | null)[]>(Array(9).fill(null));
  const [modalOpen, setModalOpen] = useState(false);
  const [isReset, setIsReset] = useState(false);

  const { selectedTeam, scores, updateScore } = useGameStore();
  const { startingTeam, resetScores } = useGameStore();

  const classname = "btn-base btn-4 flex h-[96px] min-w-[96px] items-center justify-center rounded-[10px] px-7 py-6";
  const xIsNext = squares.filter(Boolean).length % 2 === 0 ? startingTeam === "X" : startingTeam === "O";
  const winner = calculateWinner(squares);
  const isDraw = !winner && squares.every(Boolean);

  useEffect(() => {
    if (squares.every((square) => square === null)) {
      return;
    }

    if (winner || isDraw) {
      if (winner) {
        updateScore(winner as Team);
      } else if (isDraw) {
        updateScore("tie");
      }
      setModalOpen(true);
    }
  }, [winner, isDraw, squares]);

  const handleClick = (i: number) => {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }

    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? "X" : "O";
    setSquares(nextSquares);
  };

  const handleQuit = () => {
    navigate("/");
    setModalOpen(false);
    setIsReset(false);
  };

  const handleNextRound = () => {
    setSquares(Array(9).fill(null));
    setModalOpen(false);
    useGameStore.getState().toggleStartingTeam();
  };
  const handleResetClick = () => {
    setIsReset(true);
    setModalOpen(true);
  };

  const handleConfirmReset = () => {
    resetScores();
    setSquares(Array(9).fill(null));
    setModalOpen(false);
    setIsReset(false);
  };
  const handleCloseModal = () => {
    setModalOpen(false);
    setIsReset(false);
  };

  const renderSquare = (i: number): React.ReactElement => {
    return <Button className={classname} value={squares[i]} onBtnClick={() => handleClick(i)} />;
  };

  return (
    <div className="m-6 mx-auto max-w-[20.5rem]">
      <Header xIsNext={xIsNext} handleResetClick={handleResetClick} />
      <Board renderSquare={renderSquare} />
      <ResultLayout scores={scores} />
      {modalOpen && (
        <Modal
          winner={winner as Team | null}
          isDraw={isDraw}
          selectedTeam={selectedTeam}
          isReset={isReset}
          onQuit={isReset ? handleCloseModal : handleQuit}
          onNextRound={isReset ? handleConfirmReset : handleNextRound}
        />
      )}
    </div>
  );
}

export default Game;
