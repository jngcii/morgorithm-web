import React from "react";
import classNames from "classnames/bind";
import styles from "./styles.module.scss";
import Solution from "../../Components/Solution";
import Comment from "../../Components/Comment";
const cx = classNames.bind(styles);

export default () => (
  <div className={cx("wrapper")}>
    <Solution />
    <Comment />
  </div>
);