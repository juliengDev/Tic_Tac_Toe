import * as React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";
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
        "peer relative inline-flex h-[72px] w-[279px] cursor-pointer items-center rounded-xl border-2 border-transparent bg-[#1F3641] shadow-lg transition-colors focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
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
      <SwitchPrimitives.Thumb
        className={cn(
          "pointer-events-none absolute left-[9px] h-[54px] w-[132px] rounded-lg bg-[#A8BFC9] ring-0 shadow-lg transition-transform duration-200",
          "data-[state=checked]:translate-x-[129px] data-[state=unchecked]:translate-x-0",
        )}
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
      </SwitchPrimitives.Thumb>
    </SwitchPrimitives.Root>
  );
});

Switch.displayName = "TeamSwitch";

export { Switch };
