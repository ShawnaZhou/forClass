import React, { useState } from "react";
import Nav from "../components/Nav";
import styles from "./upload.module.css";

const Upload = () => {
  const [name, setName] = useState("");
  const [file, setFile] = useState("");
  const [author, setAuthor] = useState("");
  const [stock, setStock] = useState(0);

  const uploadBook = async () => {
    let tempData = {
      name: name,
      file: file,
      author: author,
      stock: stock,
    };
    console.log(tempData);
    let formData = new FormData();
    formData.append("name", name);
    formData.append("file", file);
    formData.append("stock", stock);
    formData.append("author", author);

    fetch("", {
      method: "POST",
      mode: "cors",
      headers: { content_Type: "application/x-www-form-urlencoded" },
      body: formData,
    })
      .then((response) => {
        response.json();
      })
      .then((json) => {
        console.log(json);
      });
  };
  return (
    <div>
      <Nav />
      <div className={styles.container}>
        <h2>Upload</h2>
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
          onClick={() => uploadBook()}
          className={styles.uploadBtn}
          title={
            name.length == 0 ||
            stock == 0 ||
            file.length == 0 ||
            author.length == 0
              ? "Can't upload while input exist empty"
              : "click to upload"
          }
        >
          UPLOAD
        </button>
      </div>
    </div>
  );
};

export default Upload;
