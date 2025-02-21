import { Link, useNavigate } from "react-router-dom";
import { ReactNode } from "react";

interface LinkButtonProps {
  children: ReactNode;
  to: string;
}

function LinkButton({ children, to }: LinkButtonProps) {
  const navigate = useNavigate();
  const className = "px-5 py-2 btn flex justify-center items-center gap-2 btn-error transition duration-200 ease-in-out";

  if (to === "-1")
    return (
      <button className={className} onClick={() => navigate(-1)}>
        {children}
      </button>
    );

  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
}

export default LinkButton;
