import "./Button.scss";

export interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "danger" | "leader";
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  onClick?: () => void;
  style?: React.CSSProperties;
  logo?: string;
  className?: string;
}

const Button = ({ children, size="medium", variant="primary", disabled, onClick, style, logo, className }: ButtonProps) => {
    const buttonClasses = `button button--${variant} button--${size} ${disabled ? 'disabled' : ''} ${className || ''}`
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={buttonClasses.trim()}
      style={style}
    >   
      {logo && (
        <img
          src={logo}
          alt={"button logo"}
        //   className="button__logo"
        />
      )}{" "}
      {children}
    </button>
  );
}

export default Button