import iconX from "../../assets/icon-x.svg";
import iconO from "../../assets/icon-o.svg";

interface LogoProps {
  className?: string;
}
function Logo({ className = "" }: LogoProps) {
  return (
    <div className={`flex items-center justify-center gap-2 ${className}`}>
      <img className="w-8" src={iconX} alt="logo X" />
      <img className="w-8" src={iconO} alt="logo O" />
    </div>
  );
}

export default Logo;
