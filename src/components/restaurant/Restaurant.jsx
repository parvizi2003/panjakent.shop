import React from "react";
import styles from "./Restaurant.module.css";
import Categories from "../categories/Categories";

export default function Restaurant({ restaurant }) {
  const [menu, setMenu] = React.useState();

  React.useEffect(() => {
    fetch(`https://panjakent.shop:3000/products?restaurant_id=${restaurant.id}`)
      .then((responce) => responce.json())
      .then((data) => {
        setMenu(data);
      });
  }, []);
  return (
    <div className={styles.restaurant}>
      <div className={styles.imgContainer}>
        <img
          src={restaurant.image}
          alt={restaurant.image}
          className={styles.img}
        />
        <div className={"container " + styles.title}>
          <h1 className={styles.name}>{restaurant.title}</h1>
          <div>Время доставки: {restaurant.delivery_time} мин</div>
        </div>
      </div>
      <Categories />
      <div className="container">
        <div className={styles.menu}>
          {menu &&
            menu.map((item) => {
              return (
                <div className={styles.item} key={item.id}>
                  <div className={styles.item_imgContainer}>
                    <img
                      src={item.image}
                      alt={item.image}
                      className={styles.item_img}
                    />
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
