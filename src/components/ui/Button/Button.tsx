import React from "react";
import { Props } from "./IButton";
import styles from "./button.module.scss";

const Button: React.FC<Props> = (props) => {
  const {
    children,
    width = "200px",
    height = "40px",
    color,
    disabled = false,
    onClick,
  } = props;
  const style = {
    width: width,
    height: height,
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={style}
      className={`${styles.Button} ${color === "black" && styles.ButtonBlack}`}
    >
      {children}
    </button>
  );
};

export default Button;
