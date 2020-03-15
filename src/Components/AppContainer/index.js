import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./styles.module.scss";
import Nav from "../Nav";
import MainScreen from "../../Screens/MainScreen";
import Footer from "../Footer";
const cx = classNames.bind(styles);

export default () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <div className={cx("wrapper")}>
      <Nav isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

      {isLoggedIn ? <MainScreen /> : <div className={cx("fake")} />}

      <Footer isLoggedIn={isLoggedIn} />
    </div>
  );
};
