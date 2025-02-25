import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useGameStore } from "../store/gameStore";
import { Team } from "@/types/game";
import { calculateWinner } from "@/lib/calculateWinner";
import { getCpuMove } from "@/lib/cpuAlgorithm";
import Button from "@/components/ui/Button";
import Board from "@/components/ui/Board";
import Logo from "@/components/ui/Logo";
import ResultLayout from "@/components/ui/ResultLayout";
import Modal from "@/components/ui/Modal";

interface HeaderProps {
  xIsNext: boolean;
  handleResetClick: () => void;
  isCpuThinking: boolean;
  gameMode: "player" | "cpu";
  selectedTeam: Team | null;
}

function Header({ xIsNext, handleResetClick, isCpuThinking, gameMode, selectedTeam }: HeaderProps) {
  const isCpuTurn = gameMode === "cpu" && ((selectedTeam === "X" && !xIsNext) || (selectedTeam === "O" && xIsNext));

  return (
    <header className="mb-16 flex items-center justify-between">
      <Logo className="mb-0" />
      <Button
        iconType={xIsNext}
        value="icon"
        className={`btn-base btn-3 flex items-center justify-center gap-2 rounded-[5px] px-3.5 py-2.5 text-(--color-silver) ${isCpuThinking && isCpuTurn ? "animate-pulse" : ""}`}
      >
        <p>{isCpuThinking && isCpuTurn ? "CPU..." : "TURN"}</p>
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
  const [isCpuThinking, setIsCpuThinking] = useState(false);

  const { selectedTeam, scores, updateScore, startingTeam, resetScores, cpuDifficulty, gameMode } = useGameStore();

  const classname = "btn-base btn-4 flex h-[96px] min-w-[96px] items-center justify-center rounded-[10px] px-7 py-6";
  const xIsNext = squares.filter(Boolean).length % 2 === 0 ? startingTeam === "X" : startingTeam === "O";
  const winner = calculateWinner(squares);
  const isDraw = !winner && squares.every(Boolean);

  // Determine if it's CPU's turn
  const isCpuTurn = gameMode === "cpu" && ((selectedTeam === "X" && !xIsNext) || (selectedTeam === "O" && xIsNext));

  // CPU's team
  const cpuTeam: Team = selectedTeam === "X" ? "O" : "X";

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

  // CPU move effect
  useEffect(() => {
    if (isCpuTurn && !winner && !isDraw && !modalOpen) {
      setIsCpuThinking(true);
      // Add a small delay to make the CPU's move feel more natural
      const timeoutId = setTimeout(() => {
        const cpuMoveIndex = getCpuMove(squares, cpuTeam, cpuDifficulty);
        if (cpuMoveIndex !== -1) {
          const nextSquares = squares.slice();
          nextSquares[cpuMoveIndex] = xIsNext ? "X" : "O";
          setSquares(nextSquares);
        }
        setIsCpuThinking(false);
      }, 500); // 500ms delay for CPU "thinking"

      return () => clearTimeout(timeoutId);
    }
  }, [squares, isCpuTurn, winner, isDraw, modalOpen]);

  const handleClick = (i: number) => {
    // Prevent moves if CPU is thinking, game is over, or square is already filled
    if (isCpuThinking || squares[i] || calculateWinner(squares) || isCpuTurn) {
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
    useGameStore.getState().toggleStartingTeam();
    setModalOpen(false);
    setIsReset(false);
    navigate("/");
  };
  const handleCloseModal = () => {
    setModalOpen(false);
    setIsReset(false);
  };

  const renderSquare = (i: number): React.ReactElement => {
    return (
      <Button
        className={`${classname} ${isCpuThinking ? "opacity-80" : ""}`}
        value={squares[i]}
        onBtnClick={() => handleClick(i)}
        disabled={isCpuThinking}
      />
    );
  };

  return (
    <div className="m-6 mx-auto max-w-[20.5rem]">
      <Header
        xIsNext={xIsNext}
        handleResetClick={handleResetClick}
        isCpuThinking={isCpuThinking}
        gameMode={gameMode}
        selectedTeam={selectedTeam}
      />
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
