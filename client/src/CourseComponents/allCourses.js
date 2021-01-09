import React, { useState, useEffect } from "react";
import PopularCourses from "../MembershipsComponents/popularCourses";
import Styles from "../MembershipsComponents/members.module.css";
import NavBar from "../navbar";
import Fotter from "../footer";
import axios from "axios";
import weight_lifting from "../assets/weight_lifting.jpg";
import { useLocation } from "react-router-dom";
import Loader from "react-loader-spinner";
import { useSelector } from "react-redux";
// importing all the css for loader
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export default function AllCourses() {
  const location = useLocation();
  const [loading, isLoading] = useState(false);
  const [course, setCourse] = useState({ courses: [] });
  const [load, setLoad] = useState(true);

  useEffect(() => {
    const type =
      location.category === undefined
        ? axios
            .get("http://localhost:8000/courses")
            .then((response) => {
              setCourse({ courses: response.data });
              isLoading(true);
            })
            .catch((error) => {
              console.log("error is :", error);
            })
        : axios
            .get(`http://localhost:8000/courses/${location.category}`)
            .then((response) => {
              setCourse({ courses: response.data });
              isLoading(true);
            })
            .catch((error) => {
              console.log("error is :", error);
            });
  }, []);

  const setAllCourses = () => {
    axios
      .get(`http://localhost:8000/courses/AllCourses`)
      .then((response) => {
        setCourse({ courses: response.data });

        setLoad(false);
      })
      .catch((error) => {
        console.log("error is :", error);
      });
  };

  return loading === false ? (
    <div style={{ backgroundColor: " rgb(237, 237, 237)" }}>
      <div
        className={Styles.grid}
        style={{ backgroundImage: `url(${weight_lifting})` }}
      >
        <NavBar />
        <div className={Styles.mainGrid}>
          <div style={{ gridRow: "1" }}></div>
          <div className={Styles.boxContent}>
            <h3
              style={{
                fontSize: "1.3vw",
                color: "maroon",
                fontFamily: '"Oswald", sans-serif',
              }}
            >
              Our Courses
            </h3>
            <h3 style={{ fontFamily: '"Oswald", sans-serif' }}>
              What we Offer
            </h3>
          </div>
        </div>
      </div>
      <div
        style={{
          marginTop: "3vw",
          textAlign: "center",
          fontSize: "2vw",
          fontWeight: "bold",
          marginBottom: "3vw",
        }}
      >
        Loading&nbsp;&nbsp;&nbsp;
        <span>
          <Loader
            type="ThreeDots"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={1000000} //1000 secs
          />
        </span>
      </div>
      <Fotter />
    </div>
  ) : (
    <div>
      <div
        className={Styles.grid}
        style={{ backgroundImage: `url(${weight_lifting})` }}
      >
        <NavBar />
        <div className={Styles.mainGrid}>
          <div style={{ gridRow: "1" }}></div>
          <div className={Styles.boxContent}>
            <h3
              style={{
                fontSize: "1.3vw",
                color: "maroon",
                fontFamily: '"Oswald", sans-serif',
              }}
            >
              Our Courses
            </h3>
            <h3 style={{ fontFamily: '"Oswald", sans-serif' }}>
              What we Offer
            </h3>
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
            no,
          }) => (
            <PopularCourses
              no={no}
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
      {load === true && location.cat === undefined ? (
        <button
          type="button"
          style={{ marginLeft: "45vw", marginBottom: "4vw" }}
          className={Styles.loadMore}
          onClick={setAllCourses}
        >
          Load More{" "}
        </button>
      ) : (
        console.log("")
      )}

      <Fotter />
    </div>
  );
}
