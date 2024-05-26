import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div className={styles.header}>
      <div className="container">
        <div className={styles.container}>
          <Link to="/" className={styles.logo} />
          <Link className={styles.phone}>4343</Link>
        </div>
      </div>
    </div>
  );
}
