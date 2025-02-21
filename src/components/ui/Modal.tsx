import iconO from "../../assets/icon-o.svg";
import iconX from "../../assets/icon-x.svg";
import Button from "./Button";

interface ModalProps {
  player: "o" | "x";
}

function Modal({ player }: ModalProps) {
  const color = "text-(--color-light-yellow)";

  return (
    <div className="fixed inset-0 z-1 flex justify-center bg-black/50">
      <div className="mt-[13.75rem] flex max-h-[228px] w-full flex-col items-center bg-(--color-semi-dark-navy) px-10 py-10">
        <h3 className="mb-4 text-sm font-bold tracking-[0.88px] uppercase">oh no, you lost...</h3>
        <div className="mb-6 flex items-center justify-between gap-2">
          {player === "x" ? (
            <img className="w-[30px]" src={iconX} alt="player icon X" />
          ) : (
            <img className="w-[30px]" src={iconO} alt="player icon O" />
          )}
          <h4 className={`text-2xl font-bold tracking-[1.5px] uppercase ${color}`}>takes the round</h4>
        </div>
        <div className="flex items-center justify-between gap-4">
          <Button className="btn btn-restart rounded-[10px] px-[17px] py-[15px] text-base text-[#1A2A33] uppercase">quit</Button>
          <Button className="btn btn-5 rounded-[10px] px-[17px] py-[15px] text-base text-[#1A2A33] uppercase">next round</Button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
