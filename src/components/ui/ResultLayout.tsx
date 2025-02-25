import { GameScore } from "@/types/game";
import { useGameStore } from "@/store/gameStore";

interface ScoreBoardProps {
  scores: GameScore;
}

const ResultLayout = ({ scores }: ScoreBoardProps) => {
  const { gameMode, selectedTeam } = useGameStore();

  const playerX = gameMode === "cpu" ? "YOU" : selectedTeam === "X" ? "P1" : "P2";
  const playerO = gameMode === "cpu" ? "CPU" : selectedTeam === "O" ? "P1" : "P2";

  return (
    <div className="grid grid-cols-3 gap-x-5">
      <div className="flex flex-col items-center justify-center rounded-[10px] bg-(--color-light-blue) px-2 py-4 text-xl font-bold text-(--color-dark-navy)">
        <p className="text-[0.875rem] font-medium tracking-[0.88px]">X ({playerX})</p>
        <p className="text-xl">{scores.X}</p>
      </div>
      <div className="flex flex-col items-center justify-center rounded-[10px] bg-(--color-silver) px-2 py-4 text-xl font-bold text-(--color-dark-navy)">
        <p className="text-[0.875rem] font-medium tracking-[0.88px]">Ties</p>
        <p className="text-xl">{scores.ties}</p>
      </div>
      <div className="flex flex-col items-center justify-center rounded-[10px] bg-(--color-light-yellow) px-2 py-4 text-xl font-bold text-(--color-dark-navy)">
        <p className="text-[0.875rem] font-medium tracking-[0.88px]">O ({playerO})</p>
        <p className="text-xl">{scores.O}</p>
      </div>
    </div>
  );
};

export default ResultLayout;
