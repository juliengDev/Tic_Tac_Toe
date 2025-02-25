import { Switch } from "@/components/ui/Switch";

function ChoosePlayer() {
  return (
    <div className="mb-8 flex flex-col items-center justify-center rounded-[15px] bg-(--color-semi-dark-navy) p-6 shadow-(--shadow-4) md:min-w-[460px]">
      <h1 className="pb-8 text-base font-bold tracking-[1px] text-(--color-silver)">PICK PLAYER 1’S MARK</h1>
      <Switch />
      <h2 className="text-sm font-medium">REMEMBER : X GOES FIRST</h2>
    </div>
  );
}

export default ChoosePlayer;
