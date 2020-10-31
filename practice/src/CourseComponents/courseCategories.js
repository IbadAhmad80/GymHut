import React from "react";
import Styles from "./courseFeatures.module.css";
import { FiArrowRight } from "react-icons/fi";

export default function CourseCategories() {
  return (
    <div>
      <h3 className={Styles.featureHeading}>Class Categories</h3>
      <h3 className={Styles.categoryHeading}>
        <FiArrowRight />
        <span style={{ paddingLeft: "2vw", color: "rgb(134, 128, 128)" }}>
          Meditation
        </span>
      </h3>
      <h3 className={Styles.durationHeading}>
        <FiArrowRight />
        <span style={{ paddingLeft: "2vw", color: "rgb(134, 128, 128)" }}>
          Gym Fitness
        </span>
      </h3>
      <h3 className={Styles.studentsHeading}>
        <FiArrowRight />
        <span style={{ paddingLeft: "2vw", color: "rgb(134, 128, 128)" }}>
          Yoga
        </span>
      </h3>
      <h3 className={Styles.shiftHeading}>
        <FiArrowRight />
        <span style={{ paddingLeft: "2vw", color: "rgb(134, 128, 128)" }}>
          Cycling
        </span>
      </h3>
      <h3 className={Styles.priceHeading}>
        <FiArrowRight />
        <span style={{ paddingLeft: "2vw", color: "rgb(134, 128, 128)" }}>
          Boxing
        </span>
      </h3>
    </div>
  );
}
