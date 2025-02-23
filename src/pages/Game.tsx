import Button from "@/components/ui/Button";
import GridBoard from "@/components/ui/GridBoard";
import Logo from "@/components/ui/Logo";
import ResultLayout from "@/components/ui/ResultLayout";
// import Modal from "@/components/ui/Modal";

const Header = () => {
  return (
    <header className="mb-16 flex items-center justify-between">
      <Logo className="mb-0" />
      <Button
        value="icon-x"
        className="btn-base btn-3 flex items-center justify-center gap-2 rounded-[5px] px-3.5 py-2.5 text-(--color-silver)"
      >
        <p>TURN</p>
      </Button>
      <Button value="reset" className="btn-restart w-10 rounded-[5px] p-3"></Button>
    </header>
  );
};

function Game() {
  return (
    <div className="m-6 mx-auto max-w-[20.5rem]">
      {/* <Modal player="o" /> */}
      <Header />
      <GridBoard />
      <ResultLayout />
    </div>
  );
}

export default Game;
