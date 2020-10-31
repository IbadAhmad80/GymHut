import React from "react";
import PopularCourses from "../MembershipsComponents/popularCourses";
import Styles from "../MembershipsComponents/members.module.css";
import NavBar from "../navbar";
import Fotter from "../footer";
import weight_lifting from "../assets/weight_lifting.jpg";

export default function AllCourses() {
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
        <PopularCourses
          title={"Build Body"}
          mentor={"Jimmmy Karter"}
          no={"1"}
        />
        <PopularCourses
          title={"Training legs"}
          mentor={"Jon Parker"}
          no={"2"}
        />
        <PopularCourses
          title={"Nutrition Buildup"}
          mentor={"Etzabeth Milen"}
          no={"3"}
        />
        <PopularCourses
          title={"Build Body"}
          mentor={"Jimmmy Karter"}
          no={"3"}
        />
        <PopularCourses
          title={"Training legs"}
          mentor={"Jon Parker"}
          no={"1"}
        />
        <PopularCourses
          title={"Nutrition Buildup"}
          mentor={"Etzabeth Milen"}
          no={"2"}
        />
        <PopularCourses
          title={"Build Body"}
          mentor={"Jimmmy Karter"}
          no={"2"}
        />
        <PopularCourses
          title={"Training legs"}
          mentor={"Jon Parker"}
          no={"3"}
        />
        <PopularCourses
          title={"Nutrition Buildup"}
          mentor={"Etzabeth Milen"}
          no={"1"}
        />
      </div>
      <Fotter />
    </div>
  );
}
