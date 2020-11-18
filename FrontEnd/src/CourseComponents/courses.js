import React, { useState } from "react";
import NavBar from "../navbar";
import Fotter from "../footer";
import Styles_1 from "../MembershipsComponents/members.module.css";
import Styles from "../CourseComponents/courses.module.css";
import training from "../assets/training.jpg";
import { useLocation } from "react-router-dom";
import Features from "./courseFeatures";
import CourseStats from "./courseStats";
import CourseCategories from "./courseCategories";
import CourseTiming from "./courseTiming";

export default function CoursDetails(props) {
  const location = useLocation();

  return (
    <div>
      <div
        className={Styles_1.grid}
        style={{ backgroundImage: `url(${training})` }}
      >
        <NavBar />
        <div className={Styles_1.mainGrid}>
          <div style={{ gridRow: "1" }}></div>
          <div className={Styles_1.boxContent}>
            <h3
              style={{
                color: "tomato",
                fontSize: "1.7vw",
                textTransform: "capitalize",
                marginBottom: "0.5vw",
              }}
            >
              Course Single
            </h3>
            <h3>{location.courseName}</h3>
          </div>
        </div>
      </div>

      <div className={Styles.topGrid}>
        <div className={Styles.leftGrid}></div>
        <div className={Styles.rightGrid}>
          <Features
            name={location.courseName}
            category={location.category}
            price={location.price}
            duration={location.duration}
            students={location.students}
            shift={location.shift}
          />
        </div>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "10fr 3fr",
          marginLeft: "4vw",
          marginRight: "4vw",
          columnGap: "3vw",
        }}
      >
        <div style={{ gridColumn: "1" }}>
          <CourseStats
            main_text={
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae deserunt ducimus quod at quasi reiciendis expedita quae officia voluptatum nesciunt obcaecati suscipit eius, sequi, optio, saepe soluta accusamus. At, nam. "
            }
            calories={location.calories}
            hours={location.hours}
            intensity={location.intensity}
            sub_text={
              "When our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."
            }
          />
          <div className={Styles.schedule}>Class Schedule</div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              marginTop: "2vw",
            }}
          >
            {location.days.map((day, index) => (
              <CourseTiming day={day} time={location.timings[index]} />
            ))}
          </div>
        </div>
        <div style={{ gridColumn: "2" }}>
          <CourseCategories />
        </div>
      </div>

      <Fotter />
    </div>
  );
}
