import React, { useEffect, useState } from "react";
import { ICard } from "../../entries/Card";
import styles from "./cart-card.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { selectData, setCartData } from "../../redux/slices/dataSlice";
import topArrImg from "../../images/cart/topArrow.svg";
import bottomArrImg from "../../images/cart/bottomArrow.svg";

const CartCard: React.FC<ICard> = (props) => {
  const dispatch = useDispatch();
  const { cartData } = useSelector(selectData);
  const { id, name, type, description, price, img } = props;
  const [count, setCount] = useState(1);

  const removeProductFromCart = (itemId: number) => {
    const updatedArray = cartData.filter((item) => item.id !== itemId);
    dispatch(setCartData(updatedArray));
  };

  const handleChangeCount = (e: any) => {
    const name = e.target.title;
    setCount((prev) =>
      name === "plus" ? prev + 1 : prev > 1 ? prev - 1 : prev
    );
    if (name === "plus") {
      dispatch(setCartData([...cartData, props]));
    }
    if (name === "minus" && count > 1) {
      const updatedCartData = [...cartData];
      const index = updatedCartData.findIndex((item) => item.id === props.id);
      if (index !== -1) {
        updatedCartData.splice(index, 1);
        dispatch(setCartData(updatedCartData));
      }
    }
  };

  return (
    <div className={styles.Card}>
      <img className={styles.CardImg} src={img} alt={`logo: ${name}`} />
      <div className={styles.CardContent}>
        <h3 className={styles.CardContentTitle}>{`${type} ${name}`}</h3>
        <p className={styles.CardContentDescription}>{description}</p>
        <span className={styles.CardContentPrice}>{`${
          price * count
        } руб.`}</span>
        <div className={styles.CardContentButtons}>
          {/* Не совсем понял, куда должна вести эта кнопка */}
          <button className={styles.CardContentButtonsButton}>Избранные</button>
          <button
            className={styles.CardContentButtonsButton}
            onClick={() => removeProductFromCart(id)}
          >
            Удалить
          </button>
        </div>
      </div>
      <div className={styles.CardCounter}>
        <span className={styles.CardCounterCount}>{count}</span>
        <div className={styles.CardCounterArrows}>
          <img
            className={styles.CardCounterArrowsArrow}
            title="plus"
            src={topArrImg}
            alt="plus"
            onClick={handleChangeCount}
          />
          <img
            className={styles.CardCounterArrowsArrow}
            title="minus"
            src={bottomArrImg}
            alt="minus"
            onClick={handleChangeCount}
          />
        </div>
      </div>
    </div>
  );
};

export default CartCard;
