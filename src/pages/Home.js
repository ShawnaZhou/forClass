import React, { useState, useEffect } from "react";
import BookList from "../components/bookList";
import Nav from "../components/Nav";
import styles from "./home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className="styles.header">
          <Nav />
      </div>
      <div className="styles.bookListCon">
        <BookList />
      </div>
    </div>
  );
};

export default Home;
