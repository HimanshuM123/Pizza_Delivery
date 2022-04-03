import React from "react";
import styles from "../../styles/Login.module.css";
import { useRouter } from "next/router";
import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState(false);
  const router = useRouter();

  const handleClick = async () => {
    try {
      await axios.post("http://localhost:3000/api/login", {
        username,
        password,
      });
      router.push("/admin");
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1>Admin Dashboard!</h1>
        <input
          placeholder="username"
          className={styles.input}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <input
          placeholder="password"
          className={styles.input}
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button className={styles.button} onClick={handleClick}>
          Sign In
        </button>
        {error && <span className={styles.error}>Wrong credentials!</span>}
      </div>
    </div>
  );
};

export default Login;
