import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";
import { Team, GameScore, GameMode, Difficulty } from "../types/game";

interface GameState {
  selectedTeam: Team | null;
  gameMode: GameMode;
  cpuDifficulty: Difficulty;
  scores: GameScore;
  startingTeam: Team;
  setSelectedTeam: (team: Team) => void;
  setGameMode: (mode: GameMode) => void;
  setCpuDifficulty: (difficulty: Difficulty) => void;
  updateScore: (winner: Team | "tie") => void;
  resetScores: () => void;
  toggleStartingTeam: () => void;
}

export const useGameStore = create<GameState>()(
  devtools(
    persist(
      (set) => ({
        selectedTeam: null,
        gameMode: "player",
        cpuDifficulty: "hard",
        scores: { X: 0, O: 0, ties: 0 },
        startingTeam: "X",
        setSelectedTeam: (team) => set({ selectedTeam: team }),
        setGameMode: (mode) => set({ gameMode: mode }),
        setCpuDifficulty: (difficulty) => set({ cpuDifficulty: difficulty }),
        updateScore: (winner) => {
          set((state) => {
            const newScores = {
              ...state.scores,
              ...(winner === "tie" ? { ties: state.scores.ties + 1 } : { [winner]: state.scores[winner] + 1 }),
            };

            return { scores: newScores };
          });
        },
        resetScores: () => set({ scores: { X: 0, O: 0, ties: 0 } }),
        toggleStartingTeam: () => set((state) => ({ startingTeam: state.startingTeam === "X" ? "O" : "X" })),
      }),
      {
        name: "game-storage",
      },
    ),
  ),
);
