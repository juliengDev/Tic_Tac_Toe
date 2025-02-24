import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";
import { Team, GameScore } from "../types/game";

interface GameState {
  selectedTeam: Team | null;
  scores: GameScore;
  gameMode: "player" | "cpu" | null;
  startingTeam: Team;
  setSelectedTeam: (team: Team) => void;
  setGameMode: (mode: "player" | "cpu") => void;
  updateScore: (winner: Team | "tie") => void;
  resetScores: () => void;
  toggleStartingTeam: () => void;
}

export const useGameStore = create<GameState>()(
  devtools(
    persist(
      (set) => ({
        selectedTeam: null,
        scores: { X: 0, O: 0, ties: 0 },
        gameMode: null,
        startingTeam: "X",
        setSelectedTeam: (team) => set({ selectedTeam: team }),
        setGameMode: (mode) => set({ gameMode: mode }),
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
