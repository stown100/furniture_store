import React, { useEffect } from "react";
import styles from "./cart-cards.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { selectData } from "../../redux/slices/dataSlice";
import CartCard from "../CartCard/CartCard";
import { selectSum, setSum } from "../../redux/slices/cartSlice";
import { ICard } from "../../entries/Card";

const CartCards = () => {
  const { cartData } = useSelector(selectData);
  const { sum } = useSelector(selectSum);
  const dispatch = useDispatch();

  const uniqueObjects: ICard[] = cartData.reduce((acc: ICard[], obj: ICard) => {
    const isDuplicate: boolean = acc.some(
      (item: ICard) => item.name === obj.name
    );
    if (!isDuplicate) {
      acc.push(obj);
    }
    return acc;
  }, []);

  useEffect(() => {
    const totalPrice = cartData.reduce(
      (acc, product) => acc + product.price,
      0
    );
    dispatch(setSum(totalPrice));
  }, [sum, cartData.length]);

  return (
    <div className={styles.Cards}>
      {uniqueObjects.length > 0 ? (
        uniqueObjects.map((card) => <CartCard key={card.id} {...card} />)
      ) : (
        <h2 className={styles.CardsTitle}>Корзина пуста</h2>
      )}
    </div>
  );
};

export default CartCards;
