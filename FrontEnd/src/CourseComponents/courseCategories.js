import React from "react";
import Styles from "./courseFeatures.module.css";
import { DiCodeigniter } from "react-icons/di";
import { useHistory } from "react-router-dom";

export default function CourseCategories() {
  const history = useHistory();

  return (
    <div>
      <h3 className={Styles.featureHeading}>Class Categories</h3>
      <h3 className={Styles.categoryHeading}>
        <DiCodeigniter />
        <span
          style={{ paddingLeft: "2vw", color: "rgb(134, 128, 128)" }}
          className={Styles.category}
          onClick={() =>
            history.push({
              pathname: "/courses",
              category: "Fitness",
              cat: "none",
            })
          }
        >
          Fitness
        </span>
      </h3>
      <h3 className={Styles.durationHeading}>
        <DiCodeigniter />
        <span
          style={{ paddingLeft: "2vw", color: "rgb(134, 128, 128)" }}
          className={Styles.category}
          onClick={() =>
            history.push({
              pathname: "/courses",
              category: "Wait loss",
            })
          }
        >
          Wait Loss
        </span>
      </h3>
      <h3 className={Styles.studentsHeading}>
        <DiCodeigniter />
        <span
          style={{ paddingLeft: "2vw", color: "rgb(134, 128, 128)" }}
          className={Styles.category}
          onClick={() =>
            history.push({
              pathname: "/courses",
              category: "Yoga",
            })
          }
        >
          Yoga
        </span>
      </h3>
      <h3 className={Styles.shiftHeading}>
        <DiCodeigniter />
        <span
          style={{ paddingLeft: "2vw", color: "rgb(134, 128, 128)" }}
          className={Styles.category}
          onClick={() =>
            history.push({
              pathname: "/courses",
              category: "Dieting",
            })
          }
        >
          Dieting
        </span>
      </h3>
      <h3 className={Styles.priceHeading}>
        <DiCodeigniter />
        <span
          style={{ paddingLeft: "2vw", color: "rgb(134, 128, 128)" }}
          className={Styles.category}
          onClick={() =>
            history.push({
              pathname: "/courses",
              category: "Cycling",
            })
          }
        >
          Cycling
        </span>
      </h3>
    </div>
  );
}
