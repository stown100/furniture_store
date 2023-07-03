import React from "react";
import styles from "./cart.module.scss";
import Form from "../../components/Form/Form";
import CartCards from "../../components/CartCards/CartCards";
import Button from "../../components/ui/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { selectData, setCartData } from "../../redux/slices/dataSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartData } = useSelector(selectData);
  const dispatch = useDispatch();

  const clearCart = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    dispatch(setCartData([]));
  };

  return (
    <div className={`${styles.Cart} Content`}>
      <div className={styles.CartContent}>
        <div className={styles.Preview}>
          <span className={styles.PreviewText}>Товар</span>
          <span className={styles.PreviewText}>К-во</span>
        </div>
        <CartCards />
        {cartData.length > 0 && (
          <div className={styles.CartContentButtons}>
            <Button onClick={clearCart}>Очистить корзину</Button>
            <Link to="/">
              <Button color="black">Продолжить покупки</Button>
            </Link>
          </div>
        )}
      </div>
      <Form />
    </div>
  );
};

export default Cart;
