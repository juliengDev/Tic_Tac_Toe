import * as React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import iconO from "../../assets/icon-o-dark.svg";
import iconX from "../../assets/icon-x-dark.svg";
import iconOAlt from "../../assets/icon-x-grey.svg";
import iconXAlt from "../../assets/icon-o-grey.svg";
import { useGameStore } from "@/store/gameStore";
import { Team } from "@/types/game";

const Switch = React.forwardRef<
  React.ComponentRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => {
  const { selectedTeam, setSelectedTeam } = useGameStore();
  const [isChecked, setIsChecked] = React.useState(selectedTeam === "O");

  React.useEffect(() => {
    setIsChecked(selectedTeam === "O");
  }, [selectedTeam]);

  const handleCheckedChange = (checked: boolean) => {
    const team: Team = checked ? "O" : "X";
    setIsChecked(checked);
    setSelectedTeam(team);

    if (props.onCheckedChange) {
      props.onCheckedChange(checked);
    }
  };

  return (
    <SwitchPrimitives.Root
      className={cn(
        "peer relative mb-4 inline-flex h-[72px] w-[279px] cursor-pointer items-center rounded-xl border-transparent bg-(--color-dark-navy) transition-colors focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:w-[412px]",
        className,
      )}
      {...props}
      ref={ref}
      checked={isChecked}
      onCheckedChange={handleCheckedChange}
    >
      <div className="absolute top-1/2 left-[58px] flex -translate-y-1/2 items-center justify-center">
        <img
          src={iconOAlt}
          className={cn("h-8 w-8 transition-all", "data-[state=checked]:text-slate-400 data-[state=unchecked]:text-slate-200")}
          alt="icon team O"
        />
      </div>
      <div className="absolute top-1/2 right-[58px] flex -translate-y-1/2 items-center justify-center">
        <img
          src={iconXAlt}
          className={cn("h-8 w-8 transition-all", "data-[state=checked]:text-slate-200 data-[state=unchecked]:text-slate-400")}
          alt="icon team X"
        />
      </div>
      <motion.div
        layout
        className={cn(
          "pointer-events-none absolute left-[9px] h-[54px] rounded-lg bg-[#A8BFC9] ring-0 shadow-lg",
          "w-[139px] md:w-[206px]",
        )}
        animate={{
          x: isChecked ? (window.innerWidth >= 768 ? 188 : 122) : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 300, // Réduit l'exagération du rebond
          damping: 22, // Freine le mouvement en `md+`
          mass: 0.8, // Rend l'animation plus légère
          bounce: 0.15, // Réduit l'amplitude du rebond pour éviter le dépassement
        }}
      >
        <div className="flex h-full items-center justify-center">
          <span className="flex items-center justify-center">
            {isChecked ? (
              <img src={iconO} className="h-8 w-8" alt="icon team O" />
            ) : (
              <img src={iconX} className="h-8 w-8" alt="icon team X" />
            )}
          </span>
        </div>
      </motion.div>
    </SwitchPrimitives.Root>
  );
});

Switch.displayName = "TeamSwitch";

export { Switch };
