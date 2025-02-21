import * as React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import iconO from "../../assets/icon-o-dark.svg";
import iconX from "../../assets/icon-x-dark.svg";
import iconOAlt from "../../assets/icon-x-grey.svg";
import iconXAlt from "../../assets/icon-o-grey.svg";

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => {
  const [isChecked, setIsChecked] = React.useState(false);

  const handleCheckedChange = (checked: boolean) => {
    setIsChecked(checked);
    if (props.onCheckedChange) {
      props.onCheckedChange(checked);
    }
  };

  return (
    <SwitchPrimitives.Root
      className={cn(
        "peer relative mb-4 inline-flex h-[72px] w-[279px] cursor-pointer items-center rounded-xl border-transparent bg-(--color-dark-navy) transition-colors focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
      ref={ref}
      onCheckedChange={handleCheckedChange}
    >
      <div className="absolute top-1/2 left-[58px] flex -translate-y-1/2 items-center justify-center">
        <img
          src={iconOAlt}
          className={cn("h-8 w-8 transition-all", "data-[state=checked]:text-slate-400 data-[state=unchecked]:text-slate-200")}
          alt="icon team 0"
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
        className={cn("pointer-events-none absolute left-[9px] h-[54px] w-[132px] rounded-lg bg-[#A8BFC9] ring-0 shadow-lg")}
        animate={{
          x: isChecked ? 129 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 25,
          mass: 1,
          bounce: 0.25,
        }}
      >
        <div className="flex h-full items-center justify-center">
          <span className="flex items-center justify-center">
            {isChecked ? (
              <img src={iconO} className="h-8 w-8" alt="icon team 0" />
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
