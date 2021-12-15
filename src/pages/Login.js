import React, { useState } from "react";
import styles from "./login.module.css";
import { Link } from "react-router-dom";

const Login = () => {
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");

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
          <h1 className={styles.header}>Login</h1>
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
          <Link className={styles.regBtn} to={`/register`}>Register</Link>
          <button className={styles.logBtn} onClick={() => logReq()}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
