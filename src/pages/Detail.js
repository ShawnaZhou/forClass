import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import styles from "./detail.module.css";
import Nav from "../components/Nav";

const Detail = () => {
  const { id } = useParams(); //you will get book's id,then send request to get book's details;
  const [bookInfo, setBookInfo] = useState({});
  const [mode, setMode] = useState(false);
  const location = useLocation();

  const [name, setName] = useState("");
  const [file, setFile] = useState("");
  const [author, setAuthor] = useState("");
  const [stock, setStock] = useState(0);

  console.log(location.state);
  useEffect(() => {
    setBookInfo(JSON.parse(location.state));
  }, [id, setBookInfo, location]);


  useEffect(() => {
    window.scrollTo({
        top: 1000,
        behavior: "smooth"
    });
  },[mode])
  const editBook = async () => {};
  return (
    <div>
      <Nav />
      <div className={styles.container}>
        <img
          className={styles.img}
          src={bookInfo.image}
          title={bookInfo.bookName}
          alt={bookInfo.bookName}
        />
        <h4 className={styles.item}>Book Name: {bookInfo.bookName}</h4>
        <h4 className={styles.item}>Author: {bookInfo.author}</h4>
        <h4 className={styles.item}>Stock: {bookInfo.stock}</h4>
        <button
          className={styles.editBtn}
          onClick={() => setMode((prev) => !prev)}
        >
          Edit
        </button>
      </div>
      {mode && (
        <div className={styles.editContainer}>
          <h3>Edit</h3>
          <h5 className={styles.title}>Book's Name </h5>
          <input
            className={styles.normalInput}
            title="Book's Name"
            placeholder="Book Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <h5 className={styles.title}>Book's Author </h5>
          <input
            className={styles.normalInput}
            title="Author"
            placeholder="Author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
          <h5 className={styles.title}>Book's Stock </h5>
          <input
            type="number"
            className={styles.normalInput}
            title="Book's Stock"
            placeholder="Stock"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
          />
          <h5 className={styles.title}>Book's Cover </h5>
          <input
            className={styles.fileInput}
            title="Book's Cover"
            placeholder="Stock"
            type="file"
            name="Book's Cover"
            value={file}
            onChange={(e) => setFile(e.target.value)}
          />
          <button
            disabled={
              name.length == 0 ||
              stock == 0 ||
              file.length == 0 ||
              author.length == 0
            }
            onClick={() => editBook()}
            className={styles.conBtn}
            title={
              name.length == 0 ||
              stock == 0 ||
              file.length == 0 ||
              author.length == 0
                ? "Can't upload while input exist empty"
                : "click to upload"
            }
          >
            CONFIRM
          </button>
          <button
          className={styles.conBtn}
          onClick={() => setMode((prev) => !prev)}
        >
          Cancel
        </button>
        </div>
      )}
    </div>
  );
};

export default Detail;
