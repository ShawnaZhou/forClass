import React, { useState } from "react";
import styles from "./login.module.css";
import { Link } from "react-router-dom";

const Register = () => {
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");
  const [conPassword,setConPassword] = useState("");
  
  const logReq = () => {
    let tempData = {
      account: account,
      password: password,
    };
    fetch("", {
      method: "POST",
      mode: "cors",
      headers: {
        contentType: "application/json",
      },
      body: JSON.stringify(tempData),
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className={styles.container}>
      <div className={styles.containerContent}>
        <div className={styles.content}>
          <h1 className={styles.header}>Register</h1>
          <input
            className={styles.input}
            placeholder="Username"
            value={account}
            onChange={(e) => setAccount(e.target.value)}
          />
          <input
            className={styles.input}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            className={styles.input}
            placeholder="Confirm Your Password"
            value={conPassword}
            onChange={(e) => setConPassword(e.target.value)}
          />
          <Link className={styles.regBtn} to={`/login`}>
            Login
          </Link>
          <button className={styles.logBtn} onClick={() => logReq()}>
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
