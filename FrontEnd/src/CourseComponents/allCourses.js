import React, { useState, useEffect } from "react";
import PopularCourses from "../MembershipsComponents/popularCourses";
import Styles from "../MembershipsComponents/members.module.css";
import NavBar from "../navbar";
import Fotter from "../footer";
import axios from "axios";
import weight_lifting from "../assets/weight_lifting.jpg";
import { useLocation } from "react-router-dom";

export default function AllCourses() {
  const location = useLocation();
  const [course, setCourse] = useState({ courses: [] });

  useEffect(() => {
    const type =
      location.category === undefined
        ? axios
            .get("http://localhost:3000/courses")
            .then((response) => {
              setCourse({ courses: response.data });
            })
            .catch((error) => {
              console.log("error is :", error);
            })
        : axios
            .get(`http://localhost:3000/courses/${location.category}`)
            .then((response) => {
              setCourse({ courses: response.data });
            })
            .catch((error) => {
              console.log("error is :", error);
            });
  }, []);

  return (
    <div>
      <div
        className={Styles.grid}
        style={{ backgroundImage: `url(${weight_lifting})` }}
      >
        <NavBar />
        <div className={Styles.mainGrid}>
          <div style={{ gridRow: "1" }}></div>
          <div className={Styles.boxContent}>
            <h3 style={{ fontSize: "1.3vw", color: "maroon" }}>Our Courses</h3>
            <h3>What we Offer</h3>
          </div>
        </div>
      </div>
      <div className={Styles.imageCatalog}>
        <div className={Styles.imageborderTop}>___</div>
        <div className={Styles.imageHeading}>Popular Courses</div>
        <div className={Styles.imageSub_heading}>
          We offer group exercises, aerobic classes each week.
        </div>
      </div>
      <div className={Styles.popular_courses}>
        {course.courses.map(
          ({
            name,
            mentor,
            students,
            intensity,
            calories,
            shift,
            duration,
            price,
            days,
            timings,
            category,
            hours,
          }) => (
            <PopularCourses
              no={Math.ceil(Math.random() * 4).toString()}
              title={name}
              mentor={mentor}
              intensity={intensity}
              shift={shift}
              duration={duration}
              price={price}
              students={students}
              days={days}
              timings={timings}
              calories={calories}
              category={category}
              hours={hours}
            />
          )
        )}
      </div>
      <Fotter />
    </div>
  );
}
