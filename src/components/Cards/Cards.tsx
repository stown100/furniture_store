import React from "react";
import Card from "../Card/Card";
import styles from "./cards.module.scss";
import { useSelector } from "react-redux";
import { selectData } from "../../redux/slices/dataSlice";

const Cards = () => {
  const { data } = useSelector(selectData);
  return (
    <div className={styles.Cards}>
      {data.map((card) => (
        <Card key={card.id} {...card} />
      ))}
    </div>
  );
};

export default Cards;
