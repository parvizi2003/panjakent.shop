import React from "react";
import styles from "./Navbar.module.css";

import { Link } from "react-router-dom";

import homeImg from "/public/house.svg";
import cartImg from "/public/cart.svg";
import ordersImg from "/public/receipt.svg";
import profileImg from "/public/person.svg";

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Link
            to="/"
            className={styles.link}
            style={{ backgroundImage: `url(${homeImg})` }}
          >
            Главная
          </Link>
        </li>
        <li className={styles.item}>
          <Link
            to="/"
            className={styles.link}
            style={{ backgroundImage: `url(${cartImg})` }}
          >
            Корзина
          </Link>
        </li>
        <li className={styles.item}>
          <Link
            to="/"
            className={styles.link}
            style={{ backgroundImage: `url(${ordersImg})` }}
          >
            Заказы
          </Link>
        </li>
        <li className={styles.item}>
          <Link
            to="/"
            className={styles.link}
            style={{ backgroundImage: `url(${profileImg})` }}
          >
            Профиль
          </Link>
        </li>
      </ul>
    </div>
  );
}
