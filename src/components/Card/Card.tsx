import React, { useState } from "react";
import { ICard } from "../../entries/Card";
import styles from "./card.module.scss";
import cartIcon from "../../images/cards/cart.svg";
import likeIcon from "../../images/cards/like.svg";
import likeActiveIcon from "../../images/cards/like_active.svg";
import { useDispatch, useSelector } from "react-redux";
import { selectData, setCartData } from "../../redux/slices/dataSlice";

const Card: React.FC<ICard> = (props) => {
  const dispatch = useDispatch();
  const { id, name, type, description, price, img } = props;
  const { data, cartData } = useSelector(selectData);
  const [like, setLike] = useState(false);

  const toggleLike = () => {
    setLike(!like);
  };

  const addProductToCart = (product: ICard) => {
    const isAlreadyInCart = cartData.some((item) => item.id === product.id);
    if (isAlreadyInCart) {
      alert("Товар уже добавлен в корзину");
    } else {
      dispatch(setCartData([...cartData, product]));
    }
  };

  return (
    <article className={styles.Card}>
      <div className={styles.CardIcons}>
        <img
          className={styles.CardIconsIcon}
          src={cartIcon}
          alt="cart"
          onClick={() => addProductToCart(props)}
        />
        <img
          className={styles.CardIconsIcon}
          src={like ? likeActiveIcon : likeIcon}
          alt="like"
          onClick={toggleLike}
        />
      </div>

      <img className={styles.CardImg} src={img} alt={`logo: ${name}`} />
      <h3 className={styles.CardTitle}>{`${type} ${name}`}</h3>
      <p className={styles.CardDescription}>{description}</p>
      <span className={styles.CardPrice}>{`${price} руб.`}</span>
    </article>
  );
};

export default Card;
