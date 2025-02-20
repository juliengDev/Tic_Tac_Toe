interface ButtonProps {
  className?: string;
  children: React.ReactNode;
}

function Button({ className = "", children }: ButtonProps) {
  return <button className={`btn ${className}`}>{children}</button>;
}

export default Button;
