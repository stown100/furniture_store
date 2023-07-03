import React from "react";
import { Props } from "./IInput";
import styles from "./input.module.scss";

const Input: React.FC<Props> = (props) => {
  const { value, onChange, placeholder = "", name = "", type = "" } = props;
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className={styles.Input}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
