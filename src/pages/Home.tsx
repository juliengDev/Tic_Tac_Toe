import { useNavigate } from "react-router-dom";
import { useGameStore } from "../store/gameStore";
import { Difficulty } from "@/types/game";
import Button from "@/components/ui/Button";
import ChoosePlayer from "@/components/ui/ChoosePlayer";
import Logo from "@/components/ui/Logo";

function Home() {
  const navigate = useNavigate();
  const { selectedTeam, setGameMode, setCpuDifficulty } = useGameStore();

  const handleStartGame = () => {
    if (selectedTeam) {
      setGameMode("player");
      navigate("/game");
    }
  };
  const handleStartCpuGame = (difficulty: Difficulty) => {
    setCpuDifficulty(difficulty);
    setGameMode("cpu");
    navigate("/game");
  };

  const btnText1 = "NEW GAME (VS CPU)";
  const btnText2 = "NEW GAME (VS PLAYER)";

  return (
    <div className="mx-6 my-30 flex h-full flex-col items-center gap-y-4 md:my-[96px] md:mt-[277px] md:gap-y-5">
      <Logo className="mb-8" />
      <ChoosePlayer />
      <Button
        onBtnClick={() => handleStartCpuGame("hard")}
        className="btn-1 max-w-xs rounded-[15px] px-19 py-3.5 text-base font-bold text-(--color-dark-navy) md:min-w-[460px]"
      >
        {btnText1}
      </Button>
      <Button
        onBtnClick={handleStartGame}
        className="btn-2 max-w-xs rounded-[15px] px-15 py-3.5 text-base font-bold text-(--color-dark-navy) md:min-w-[460px]"
      >
        {btnText2}
      </Button>
    </div>
  );
}

export default Home;
