import React from "react";
import Styles from "./popularCourses.module.css";
import sports_2 from "../assets/sports_2.jpg";
import sports_4 from "../assets/sports_4.jpg";
import people_2 from "../assets/people_2.jpg";
import { useHistory } from "react-router-dom";
export default function PopularCourses({ title, mentor, no }) {
  const history = useHistory();
  return (
    <div>
      <div className={Styles.mainGrid}>
        <div
          className={Styles.course_pic}
          style={
            no === "2"
              ? { backgroundImage: `url(${sports_2})` }
              : no === "1"
              ? { backgroundImage: `url(${sports_4})` }
              : { backgroundImage: `url(${people_2})` }
          }
        />
        <div
          className={Styles.course_title}
          onClick={() =>
            history.push({
              pathname: "/courseDetails",
              courseName: title,
              students: "35",
              price: "60$",
              shift: "Morning",
              category: "yoga",
              duration: "14 days",
            })
          }
        >
          {title}
        </div>
        <div className={Styles.course_mentor}>
          Mentor : <span style={{ color: "tomato" }}>{mentor}</span>
        </div>
      </div>
    </div>
  );
}
