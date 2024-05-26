import React from "react";
import styles from "./Home.module.css";
import Categories from "../categories/Categories";
import Restaurants from "../restaurants/Restaurants";

export default function Home() {
  return (
    <main className={styles.home}>
      <div className={styles.banner}>
        <div className={styles.imgContainer}></div>
      </div>
      <Categories />
      <Restaurants />
    </main>
  );
}
