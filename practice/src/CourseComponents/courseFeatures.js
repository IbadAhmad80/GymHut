import React from "react";
import Styles from "./courseFeatures.module.css";

export default function Features({
  category,
  price,
  duration,
  students,
  shift,
}) {
  console.log(price, category, duration, students, shift);
  return (
    <div>
      <h3 className={Styles.featureHeading}>Class Features</h3>
      <h3 className={Styles.categoryHeading}>
        Category:
        <span style={{ paddingLeft: "2vw", color: "rgb(134, 128, 128)" }}>
          {category}
        </span>
      </h3>
      <h3 className={Styles.durationHeading}>
        Duration:
        <span style={{ paddingLeft: "2vw", color: "rgb(134, 128, 128)" }}>
          {duration}
        </span>
      </h3>
      <h3 className={Styles.studentsHeading}>
        Students:
        <span style={{ paddingLeft: "2vw", color: "rgb(134, 128, 128)" }}>
          {students}
        </span>
      </h3>
      <h3 className={Styles.shiftHeading}>
        Shift:
        <span style={{ paddingLeft: "2vw", color: "rgb(134, 128, 128)" }}>
          {shift}
        </span>
      </h3>
      <h3 className={Styles.priceHeading}>
        Price:
        <span style={{ paddingLeft: "2vw", color: "rgb(134, 128, 128)" }}>
          {price}
        </span>
      </h3>
      <button className={Styles.joinNow} type="button">
        Join now
      </button>
    </div>
  );
}
