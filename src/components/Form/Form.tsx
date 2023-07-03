import React, { useState } from "react";
import styles from "./form.module.scss";
import Button from "../ui/Button/Button";
import Input from "../ui/Input/Input";
import { useSelector } from "react-redux";
import { selectSum } from "../../redux/slices/cartSlice";

const Form = () => {
  const { sum } = useSelector(selectSum);
  const [dataState, setDataState] = useState({
    name: "",
    phone: "",
    address: "",
  });
  const [onClick, setOnClick] = useState(false);
  const isValidName = dataState.name.length > 1;
  const isValidPhone = dataState.phone.length === 11;
  const isValidAddress = dataState.address.length > 2;
  const isValid = isValidName && isValidPhone && isValidAddress;

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    setDataState((prev) => {
      let newState = { ...prev };
      newState = {
        ...prev,
        [name]: name === "phone" ? `+${Number(value.match(/\d+/g))}` : value,
      };
      return newState;
    });
  };

  const checkout = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setOnClick(true);
  };

  return (
    <form className={styles.Form}>
      <h3 className={styles.FormTitle}>Оформление заказа</h3>
      <div className={styles.FormElement}>
        <Input
          name="name"
          placeholder="Имя"
          value={dataState.name}
          onChange={handleChangeInput}
        />
        {!isValidName && onClick && (
          <span className={styles.FormElementError}>
            Введите существующее имя
          </span>
        )}
      </div>
      <div className={styles.FormElement}>
        <Input
          name="phone"
          placeholder="Телефон"
          type="phone"
          value={dataState.phone}
          onChange={handleChangeInput}
        />
        {!isValidPhone && onClick && (
          <span className={styles.FormElementError}>
            Введите существующий телефон
          </span>
        )}
      </div>
      <div className={styles.FormElement}>
        <Input
          name="address"
          placeholder="Адрес доставки"
          value={dataState.address}
          onChange={handleChangeInput}
        />
        {!isValidAddress && onClick && (
          <span className={styles.FormElementError}>
            Введите существующий адрес
          </span>
        )}
      </div>
      <p className={styles.FormText}>
        Итого: <span className={styles.FormTextSpan}>{sum} руб.</span>
      </p>
      <Button
        onClick={checkout}
        children={"Оформить заказ"}
        disabled={sum === 0 && !isValid}
      />
    </form>
  );
};

export default Form;
