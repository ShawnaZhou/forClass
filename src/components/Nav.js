import React, { useEffect, useState } from "react";
import styles from "./nav.module.css";
import { Link } from "react-router-dom";

const Nav = () => {
  const navHeight = window.scrollY;
  const [mode, setMode] = useState(true);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 10) setMode(false);
      else setMode(true);
    });
  });
  return (
    <div className={mode ? styles.container : styles.othContainer}>
      <span className={styles.navItemsFir}>
        <Link to="../home">HOME</Link>
      </span>
      <span className={styles.navItemsSec}>
        <Link to="../upload">UPLOAD</Link>
      </span>
      <span className={styles.navItemsSec}>SOME THING ELSE</span>
      <span className={styles.navItemsLast}><Link to="../login">LOGOUT</Link></span>
    </div>
  );
};

export default Nav;
