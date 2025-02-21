import iconX from "../../assets/icon-x.svg";
import iconO from "../../assets/icon-o.svg";

function Logo() {
  return (
    <div className="mb-8 flex items-center justify-center gap-2">
      <img className="w-8" src={iconX} alt="logo X" />
      <img className="w-8" src={iconO} alt="logo O" />
    </div>
  );
}

export default Logo;
