import React from "react";
import { useHistory } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./styles.module.scss";
import Title from "../Title";
import OptionMenu from "../OptionMenu";
import OptionsBtn from "../OptionsBtn";
const cx = classNames.bind(styles);

export default ({ problem }) => {
  const history = useHistory();

  return(
  <div className={cx("wrapper")}>
    <header>
      <div className={cx("btn")} onClick={()=>history.goBack()}>
        <img src={require("../../assets/go-back.png")} />
      </div>

      <Title originId={problem.origin.id} self={true} />

      <div style={{flex:1}} />

      <OptionMenu btnComponent={OptionsBtn} probId={problem.id} />
    </header>

    <section>
      <a href={problem.origin.url} target="_blank">
        {problem.origin.url}
      </a>
    </section>
  </div>
)};
