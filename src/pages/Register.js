import React, { useState } from "react";
import styles from "./login.module.css";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");
  const [conPassword, setConPassword] = useState("");
  const navigate = useNavigate();

  const logReq = () => {
    if (password !== conPassword) {
      alert("input error!");
      return;
    }
    let tempData = {
      account: account,
      password: password,
    };
    fetch("http://127.0.0.1:8080/register", {
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
        if (json.code == 200) {
          if (json.msg) throw new Error(json.msg);
          else if (json.id) {
            navigate(`/login`);
          }
        }
      })
      .catch((err) => {
        alert(err);
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
