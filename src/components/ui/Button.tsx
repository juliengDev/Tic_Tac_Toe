import iconX from "../../assets/icon-x.svg";
import iconO from "../../assets/icon-o.svg";
import iconRestart from "../../assets/icon-restart.svg";

interface ButtonProps {
  className?: string;
  children?: React.ReactNode;
  value?: string | null; // Changed to allow null
  onBtnClick?: () => void;
  index?: number;
  iconType?: boolean;
  disabled?: boolean;
}

function Button({ iconType, className = "", value = "", children, onBtnClick, disabled }: ButtonProps) {
  return (
    <button onClick={onBtnClick} disabled={disabled} className={`btn ${className}`}>
      {value === "X" && <img className="w-10 md:w-15.5" src={iconX} alt="icon X" />}
      {value === "O" && <img className="w-10 md:w-15.5" src={iconO} alt="icon O" />}
      {value === "icon" && iconType && <img className="w-[20px]" src={iconX} alt="icon O" />}
      {value === "icon" && !iconType && <img className="w-[20px]" src={iconO} alt="icon O" />}
      {value === "reset" && <img className="w-[15px] md:w-[20px]" src={iconRestart} alt="" />}
      {children}
    </button>
  );
}

export default Button;
