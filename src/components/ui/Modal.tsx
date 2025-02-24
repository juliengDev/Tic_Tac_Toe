import { Team } from "@/types/game";
import iconO from "../../assets/icon-o.svg";
import iconX from "../../assets/icon-x.svg";
import Button from "./Button";

interface ModalProps {
  winner: Team | null;
  isDraw: boolean;
  selectedTeam: Team | null;
  isReset: boolean;
  onQuit: () => void;
  onNextRound: () => void;
}

function Modal({ winner, isDraw, selectedTeam, isReset, onQuit, onNextRound }: ModalProps) {
  const getMessage = () => {
    if (isReset) return "Restart Game?";
    if (isDraw) return "Round Tied!";
    if (winner === selectedTeam) return "You Won!";
    return "Oh no, you Lost...";
  };

  return (
    <div className="fixed inset-0 z-1 flex justify-center bg-black/50">
      <div className="mt-[13.75rem] flex max-h-[228px] w-full flex-col items-center bg-(--color-semi-dark-navy) px-10 py-10">
        <h3 className="mb-4 text-sm font-bold tracking-[0.88px] uppercase">{getMessage()}</h3>
        {!isDraw && !isReset && (
          <div className="mb-6 flex items-center justify-between gap-2">
            <img className="w-[30px]" src={winner === "X" ? iconX : iconO} alt={`Player ${winner}`} />
            <h4 className="text-2xl font-bold tracking-[1.5px] text-(--color-light-yellow) uppercase">takes the round</h4>
          </div>
        )}
        <div className="flex items-center justify-between gap-4">
          <Button className="btn btn-restart rounded-[10px] px-[17px] py-[15px] text-base text-[#1A2A33] uppercase" onBtnClick={onQuit}>
            {isReset ? "No, Cancel" : "Quit"}
          </Button>
          <Button className="btn btn-5 rounded-[10px] px-[17px] py-[15px] text-base text-[#1A2A33] uppercase" onBtnClick={onNextRound}>
            {isReset ? "Yes, Restart" : "Next Round"}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
