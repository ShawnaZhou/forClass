import React, { useState, useEffect } from "react";
import styles from "./bookList.module.css";
import { Link } from "react-router-dom";

const bookList = () => {
  const creDate = new Date().toString();
  const [currentPage, setCurrentPage] = useState(1);
  const [initial, setInitial] = useState(true);
  const [bookList, setBookList] = useState([
    {
      id: 0,
      bookName: "lorem",
      author: "lorem",
      image:
        "https://images.pexels.com/photos/10243824/pexels-photo-10243824.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      stock: 10,
      createDate: creDate,
    },
    {
      id: 1,
      bookName: "lorem",
      author: "lorem",
      image:
        "https://images.pexels.com/photos/10243824/pexels-photo-10243824.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      stock: 10,
      createDate: creDate,
    },
    {
      id: 2,
      bookName: "lorem",
      author: "lorem",
      image:
        "https://images.pexels.com/photos/10243824/pexels-photo-10243824.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      stock: 10,
      createDate: creDate,
    },
    {
      id: 3,
      bookName: "lorem",
      author: "lorem",
      image:
        "https://images.pexels.com/photos/10243824/pexels-photo-10243824.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      stock: 10,
      createDate: creDate,
    },
    {
      id: 4,
      bookName: "lorem",
      author: "lorem",
      image:
        "https://images.pexels.com/photos/10243824/pexels-photo-10243824.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      stock: 10,
      createDate: creDate,
    },
    {
      id: 5,
      bookName: "lorem",
      author: "lorem",
      image:
        "https://images.pexels.com/photos/10243824/pexels-photo-10243824.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      stock: 10,
      createDate: creDate,
    },
  ]);

  useEffect(() => {
    Initial();
  }, [initial]); // This func work while page loaded, or when the 'initial' parameter is updated;

  const Initial = async () => {
    setInitial(false);
    await fetch("") //add your back-end url to get bookList data;
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        if (json.code === 200) {
        }
      })
      .catch((err) => {
        //  alert(err);
      });
  };

  const borrowBook = async (item) => {
    let bookId = item.id;
    fetch("") //for example, GET method: "http://127.0.0.1:8080/book/borrow/id="+bookId,
      //  POST method: fetch("http://127.0.0.1:8080/book/borrow",{method:"POST",mode:'cors',headers:{content_Type:"application/json"},body:JSON.stringify({id:bookId}) })
      .then((res) => res.json())
      .then((json) => {
        if (json.code == 200) setInitial(true);
        else throw new Error("borrow failed! ");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const returnBook = async (item) => {
    // similar with borrow action
  };

  const prevPage = async () => {
    setCurrentPage((prev) => prev - 1);
    setInitial(true);
  };

  const nextPage = async () => {
    setCurrentPage((prev) => prev + 1);
    setInitial(true);
  };

  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <h1 className={styles.header}>BookList</h1>
        <ul className={styles.list}>
          {bookList.length === 0 && <h2>BookList is empty</h2>}
          {bookList.map((item, index) => {
            return (
              <li className={styles.listItem} key={item.id}>
                <div className={styles.listContent}>
                  <Link state={JSON.stringify(item)} to={"/detail/" + item.id}>
                    <img
                      className={styles.itemCover}
                      src={item.image}
                      alt={item.bookName}
                    />
                  </Link>
                  <h3>Book's Name: {item.bookName}</h3>
                  <h4>Book ID: {item.id}</h4>
                  <span>Author: {item.author}</span>
                  <span>Stock: {item.stock}</span>
                  <span>CreateDate: {item.createDate}</span>
                  <button
                    onClick={(item) => borrowBook(item)}
                    className={styles.borrowBtn}
                  >
                    Borrow
                  </button>
                  <button
                    onClick={(item) => returnBook(item)}
                    className={styles.returnBtn}
                  >
                    Return
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className={styles.footerContainer}>
        <h4>Current Page: {currentPage} </h4>
        <button
          disabled={currentPage == 1}
          onClick={() => prevPage()}
          className={styles.prevBtn}
        >
          PREV
        </button>
        <button className={styles.nextBtn} onClick={() => nextPage()}>
          NEXT
        </button>
      </div>
    </div>
  );
};

export default bookList;
