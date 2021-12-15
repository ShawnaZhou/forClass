import React, { useState } from "react";
import styles from "./login.module.css";
import { Link,useNavigate } from "react-router-dom";

const Login = () => {
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const logReq = () => {
    let tempData = {
      account: account,
      password: password,
    };
    fetch("http://127.0.0.1:8080/login", {
      method: "POST",
      mode: "cors",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(tempData),
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        if (json.code === 200) {
          if (json.user) {
            sessionStorage.setItem("user", json.user);
            navigate(`/home`);
            return;
          } else if (json.msg) {
            throw new Error(json.msg);
          }
        } else throw new Error("network err");
      })
      .catch((err) => {
        alert(err);
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
