import React, { useEffect, useState } from "react";
import styles from "./Restaurants.module.css";

export default function Restaurants() {
  let restaurants = [];

  useEffect(() => {
    fetch("https://panjakent.shop:3000/restaurants")
      .then((response) => response.json())
      .then((data) => (restaurants = data))
      .then((data) => console.log(data))
      .catch((error) => {
        console.error("Error fetching restaurants: ", error);
      });
  }, []);

  return (
    <section className={styles.restaurants}>
      <div className={styles.cards}>
        {restaurants.length !== 0 && console.log("asdf")}
      </div>
    </section>
  );
}
