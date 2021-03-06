import React, { useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/mode-javascript";
// import "ace-builds/src-noconflict/theme-tomorrow_night_blue";
import "ace-builds/src-noconflict/theme-solarized_dark";
// import "ace-builds/src-noconflict/theme-monokai";
// import "ace-builds/src-noconflict/theme-github";
// import "ace-builds/src-noconflict/theme-tomorrow_night";
import "ace-builds/src-noconflict/theme-chrome";
import "ace-builds/src-noconflict/keybinding-vscode";
// import "ace-builds/src-noconflict/keybinding-sublime";
import classNames from "classnames/bind";
import styles from "./styles.module.scss";
import CustomModal from "../CustomModal";
import BoxUpload from "../BoxUpload";
import SelectLang from "../SelectLang";
const cx = classNames.bind(styles);


const UploadBtn = ({ handleOpen }) => (
  <button className={cx("uploadBtn")} onClick={handleOpen}>Upload</button>
)


export default ({
  langs,
  lang,
  setLang,
  isOpen,
  setIsOpen,
  isQuestion,
  setIsQuestion,
  caption,
  setCaption,
  code,
  setCode,
  onUpload
}) => (
  <div className={cx("wrapper")}>
    <div className={cx("userInput", isOpen ? "open" : "close")}>
      <div className={cx("question")}>

        <div className={cx("btns")}>
          <div className={cx("checkbox")} onClick={() => setIsQuestion(!isQuestion)}>
            <img src={require(`../../assets/${isQuestion ? "checked-blue" : "unchecked"}.png`)} />
            <span className={cx(isQuestion && "in")}>질문으로 올리기</span>
          </div>

          <div className={cx("lang")}>
            <SelectLang index={lang} setIndex={setLang} />
          </div>

          <div className={cx("upload")}>
            <CustomModal btnComponent={UploadBtn} contentComponent={BoxUpload} onUp={onUpload} />
          </div>
        </div>

        {isQuestion && (
          <TextareaAutosize
            className={cx("caption")}
            placeholder="궁금한 점을 자세히 설명해 주세요."
            spellCheck={false}
            value={caption}
            onChange={e=>setCaption(e.target.value)}
          />
        )}
      </div>

      <AceEditor
        width={"auto"}
        placeholder="코드를 이곳에 작성해주세요."
        theme="solarized_dark"
        // theme="chrome"
        mode={langs[lang]}
        onChange={setCode}
        fontSize={14}
        showPrintMargin={true}
        showGutter={true}
        highlightActiveLine={true}
        value={code}
        keyboardHandler={"vscode"}
        setOptions={{
          showLineNumbers: true,
          tabSize: 4,
          fontSize: 16,
          useSoftTabs: true
        }}
        style={{
          overflow: "scroll",
          padding: 10
        }}
      />
    </div>

    <div className={cx("openContainer")}>
      <hr className={cx("divLine")} />
      <span className={cx("openBtn")} onClick={()=>setIsOpen(!isOpen)}>
        <img className={cx(isOpen ? "open" : "close")} src={require("../../assets/down-arrow.png")} />
        Upload / Ask my code
      </span>
    </div>
  </div>
);