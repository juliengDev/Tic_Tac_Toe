import Button from "@/components/ui/Button";
import ChoosePlayer from "@/components/ui/ChoosePlayer";
import Logo from "@/components/ui/Logo";


function Home() {
  const btnText1 = "NEW GAME (VS CPU)";
  const btnText2 = "NEW GAME (VS PLAYER)";

  return (
    <div className="mx-6 my-30 flex h-full flex-col items-center gap-y-4">
      <Logo className="mb-8" />
      <ChoosePlayer />
      <Button className="btn-1 max-w-xs rounded-[15px] px-19 py-3.5 text-base font-bold text-(--color-dark-navy)">{btnText1}</Button>
      <Button className="btn-2 max-w-xs rounded-[15px] px-15 py-3.5 text-base font-bold text-(--color-dark-navy)">{btnText2}</Button>
    </div>
  );
}

export default Home;
