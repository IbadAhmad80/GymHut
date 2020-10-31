import React from "react";
import Styles from "./courseStats.module.css";

export default function CourseStats({ main_text, sub_text }) {
  const text = {
    marginTop: "4vw",
    marginBottom: "2vw",
    fontSize: "1.3vw",
    textAlign: "justify",
    fontWeight: "400",
    color: "gray",
    fontFamily: "'Quicksand', sans-serif",
  };
  return (
    <div>
      <div className={Styles.mainFlex}>
        <div className={Styles.flex_1}>
          <span
            style={{ color: "tomato", fontSize: "4vw", marginRight: "0.5vw" }}
          >
            2.5
          </span>
          Hours
        </div>
        <div className={Styles.flex_2}>
          <span
            style={{ color: "tomato", fontSize: "4vw", marginRight: "0.5vw" }}
          >
            600+
          </span>
          calories burnt
        </div>
        <div className={Styles.flex_3}>
          <span
            style={{ color: "tomato", fontSize: "4vw", marginRight: "0.5vw" }}
          >
            75%
          </span>
          workout intensity
        </div>
      </div>
      <h2 style={text}>{main_text}</h2>
      <h2 style={text}>{sub_text}</h2>
    </div>
  );
}
