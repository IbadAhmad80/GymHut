import React from "react";
import Styles from "./homeCenterAttachment.module.css";

export default function HomeCenterAttachment() {
  return (
    <div className={Styles.grid}>
      <div className={Styles.mainGrid}>
        <div className={Styles.topContent}>discover tour potential</div>
        <div className={Styles.mainContent_1}>Book your early seat to get</div>
        <div className={Styles.mainContent_2}>
          <span style={{ color: "tomato" }}>summer 25% </span>discount
        </div>
        <button className={Styles.button}>Join today</button>
      </div>
    </div>
  );
}
