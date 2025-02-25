// lib/cpuAlgorithm.ts

import { Difficulty } from "@/types/game";
import { calculateWinner } from "./calculateWinner";

export const getCpuMove = (squares: (string | null)[], cpuTeam: "X" | "O", difficulty: Difficulty = "medium"): number => {
  // Get available moves
  const availableMoves = squares
    .map((square, index) => (square === null ? index : null))
    .filter((index): index is number => index !== null);

  if (availableMoves.length === 0) return -1;

  // Easy: Random move
  if (difficulty === "easy") {
    const randomIndex = Math.floor(Math.random() * availableMoves.length);
    return availableMoves[randomIndex];
  }

  // Hard: Use minimax algorithm
  if (difficulty === "hard") {
    return getBestMove(squares, cpuTeam);
  }

  // Medium: Mix of strategic and random moves
  // First check if CPU can win in the next move
  for (const move of availableMoves) {
    const squaresCopy = [...squares];
    squaresCopy[move] = cpuTeam;
    if (calculateWinner(squaresCopy) === cpuTeam) {
      return move;
    }
  }

  // Then check if player can win in the next move and block it
  const playerTeam = cpuTeam === "X" ? "O" : "X";
  for (const move of availableMoves) {
    const squaresCopy = [...squares];
    squaresCopy[move] = playerTeam;
    if (calculateWinner(squaresCopy) === playerTeam) {
      return move;
    }
  }

  // If center is available, take it
  if (squares[4] === null) {
    return 4;
  }

  // Take a corner if available
  const corners = [0, 2, 6, 8].filter((corner) => squares[corner] === null);
  if (corners.length > 0) {
    const randomCornerIndex = Math.floor(Math.random() * corners.length);
    return corners[randomCornerIndex];
  }

  // Take any available edge
  const edges = [1, 3, 5, 7].filter((edge) => squares[edge] === null);
  if (edges.length > 0) {
    const randomEdgeIndex = Math.floor(Math.random() * edges.length);
    return edges[randomEdgeIndex];
  }

  // Fallback to random move
  const randomIndex = Math.floor(Math.random() * availableMoves.length);
  return availableMoves[randomIndex];
};

// Minimax algorithm for unbeatable AI
const getBestMove = (squares: (string | null)[], cpuTeam: "X" | "O"): number => {
  const playerTeam = cpuTeam === "X" ? "O" : "X";
  let bestScore = -Infinity;
  let bestMove = -1;

  // For each available move
  for (let i = 0; i < squares.length; i++) {
    if (squares[i] === null) {
      // Try this move
      const squaresCopy = [...squares];
      squaresCopy[i] = cpuTeam;

      // Calculate score for this move
      const score = minimax(squaresCopy, 0, false, cpuTeam, playerTeam);

      // If this move is better than our best so far, update bestMove
      if (score > bestScore) {
        bestScore = score;
        bestMove = i;
      }
    }
  }

  return bestMove;
};

const minimax = (squares: (string | null)[], depth: number, isMaximizing: boolean, cpuTeam: "X" | "O", playerTeam: "X" | "O"): number => {
  // Check if there's a winner or a draw
  const winner = calculateWinner(squares);
  if (winner === cpuTeam) return 10 - depth;
  if (winner === playerTeam) return depth - 10;
  if (squares.every(Boolean)) return 0;

  if (isMaximizing) {
    let bestScore = -Infinity;
    for (let i = 0; i < squares.length; i++) {
      if (squares[i] === null) {
        const squaresCopy = [...squares];
        squaresCopy[i] = cpuTeam;
        const score = minimax(squaresCopy, depth + 1, false, cpuTeam, playerTeam);
        bestScore = Math.max(score, bestScore);
      }
    }
    return bestScore;
  } else {
    let bestScore = Infinity;
    for (let i = 0; i < squares.length; i++) {
      if (squares[i] === null) {
        const squaresCopy = [...squares];
        squaresCopy[i] = playerTeam;
        const score = minimax(squaresCopy, depth + 1, true, cpuTeam, playerTeam);
        bestScore = Math.min(score, bestScore);
      }
    }
    return bestScore;
  }
};
