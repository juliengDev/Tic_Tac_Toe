import iconX from "../../assets/icon-x-grey.svg";
import iconO from "../../assets/icon-o.svg";
import iconRestart from "../../assets/icon-restart.svg";

interface ButtonProps {
  className?: string;
  children?: React.ReactNode;
  value?: string;
}

function Button({ className = "", value = "", children }: ButtonProps) {
  return (
    <button className={`btn ${className}`}>
      {value === "X" ? <img className="w-10" src={iconX} alt="icon X" /> : null}
      {value === "O" ? <img className="w-10" src={iconO} alt="icon O" /> : null}
      {value === "icon-x" ? <img className="w-[20px]" src={iconX} alt="icon O" /> : null}
      {value === "reset" ? <img className="w-[15px]" src={iconRestart} alt="" /> : null}
      {children}
    </button>
  );
}

export default Button;
