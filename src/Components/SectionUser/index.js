import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./styles.module.scss";
import LineGroup from "../LineGroup";
const cx = classNames.bind(styles);

export default () => (
  <div className={cx("wrapper")}>
    <div className={cx("user")}>
      <img src={require("../../assets/no-profile.png")} draggable={false} />
      <div className={cx("username")}>jngcii</div>
      <div className={cx("name")}>정형수</div>
    </div>

    <span className={cx("in")}>in</span>

    <div className={cx("group")}>
      <span className={cx("title")}>Group</span>
      <Link className={cx("more")} to={"/group"}>더보기</Link>
      <div className={cx("list")}>
        
        <div className={cx("line")}>
          <LineGroup name={"ssafy31"} count={23} />
        </div>
        <div className={cx("line")}>
          <LineGroup name={"my group"} count={5} />
        </div>
        <div className={cx("line")}>
          <LineGroup name={"your group"} count={129} />
        </div>
      </div>
    </div>
  </div>
);