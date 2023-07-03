import React from "react";
import Form from "../../components/Form/Form";
import Select from "../../components/ui/Select/Select";
import styles from "./home.module.scss";
import Cards from "../../components/Cards/Cards";

const Home = () => {
  return (
    <div className={`${styles.Home} Content`}>
      <div className={styles.HomeSelect}>
        <div></div>
        <Select />
      </div>
      <div className={styles.HomeContent}>
        <Cards />
      </div>
    </div>
  );
};

export default Home;
