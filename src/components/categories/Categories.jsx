import React from "react";
import styles from "./Categories.module.css";

export default function Categories() {
  return (
    <section className={styles.categories}>
      <div className="container">
        <h2 className={styles.title}>Категории</h2>
      </div>
      <ul className={styles.list}>
        <li className={styles.item}>Национальная</li>
      </ul>
    </section>
  );
}
