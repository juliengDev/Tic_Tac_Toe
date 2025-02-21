import Button from "@/components/ui/Button";
import iconRestart from "../assets/icon-restart.svg";
import Logo from "@/components/ui/Logo";
import iconX from "../assets/icon-x-grey.svg";
import iconO from "../assets/icon-o.svg";
import Modal from "@/components/ui/Modal";

const Header = () => {
  return (
    <header className="mb-16 flex items-center justify-between">
      <Logo className="mb-0" />
      <Button className="btn-base btn-3 flex items-center justify-center gap-2 rounded-[5px] px-3.5 py-2.5 text-(--color-silver)">
        <img className="w-4" src={iconX} alt="X icon" />
        <p>TURN</p>
      </Button>
      <Button className="btn-restart w-10 rounded-[5px] p-3">
        <img className="w-[15px]" src={iconRestart} alt="" />
      </Button>
    </header>
  );
};

const GridBoard = () => {
  return (
    <div className="mb-5 grid grid-cols-3 gap-5">
      {Array.from({ length: 9 }, (_, i) => (
        <Button key={i} className="btn-base btn-4 flex h-[96px] w-[96px] items-center justify-center rounded-[10px] px-7 py-6">
          <img className="w-10" src={iconO} alt="" />
        </Button>
      ))}
    </div>
  );
};

const ResultLayout = () => {
  return (
    <div className="grid grid-cols-3 gap-x-5">
      <div className="flex flex-col items-center justify-center rounded-[10px] bg-(--color-light-blue) px-5 py-4 text-xl font-bold text-(--color-dark-navy)">
        <p className="text-[0.875rem] font-medium tracking-[0.88px]">X(YOU)</p>
        <p className="text-xl">14</p>
      </div>
      <div className="flex flex-col items-center justify-center rounded-[10px] bg-(--color-silver) px-5 py-4 text-xl font-bold text-(--color-dark-navy)">
        <p className="text-[0.875rem] font-medium tracking-[0.88px]">Ties</p>
        <p className="text-xl">32</p>
      </div>
      <div className="flex flex-col items-center justify-center rounded-[10px] bg-(--color-light-yellow) px-5 py-4 text-xl font-bold text-(--color-dark-navy)">
        <p className="text-[0.875rem] font-medium tracking-[0.88px]">O (CPU)</p>
        <p className="text-xl">11</p>
      </div>
    </div>
  );
};

function Game() {
  return (
    <div className="m-6 mx-auto max-w-[20.5rem]">
      <Modal player="o" />
      <Header />
      <GridBoard />
      <ResultLayout />
    </div>
  );
}

export default Game;
