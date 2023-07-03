import React from "react";
import { Link } from "react-router-dom";

import styles from "./header.module.scss";
import itemsImg from "../../images/items.svg";
import cartImg from "../../images/cart.svg";

const Header = () => {
  return (
    <div className={`${styles.Header} Content`}>
      <h1 className={styles.HeaderTitle}>
        <Link to="/">Интерьер.</Link>
      </h1>
      <nav className={styles.Nav}>
        <ul className={styles.NavList}>
          <li className={styles.NavListElement}>
            <Link to="/">Каталог</Link>
          </li>
          <li className={styles.NavListElement}>
            <Link to="/cart">Корзина</Link>
          </li>
          <li className={styles.NavListElement_mobile}>
            <Link to="/">
              <img src={itemsImg} alt="items" />
            </Link>
          </li>
          <li className={styles.NavListElement_mobile}>
            <Link to="/cart">
              <img src={cartImg} alt="cart" />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
