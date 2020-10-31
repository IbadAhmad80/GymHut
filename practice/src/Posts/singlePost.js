import React from "react";
import { FiCalendar } from "react-icons/fi";
import { GoPerson } from "react-icons/go";
import Styles from "./singlePost.module.css";
import { useHistory } from "react-router-dom";
export default function SinglePost({
  post,
  date,
  author,
  heading,
  description,
}) {
  const history = useHistory();
  return (
    <div>
      <div className={Styles.mainGrid}>
        <div
          className={
            post === "1"
              ? Styles.pic_1
              : post === "2"
              ? Styles.pic_2
              : post === "3"
              ? Styles.pic_3
              : post === "4"
              ? Styles.pic_4
              : post === "5"
              ? Styles.pic_5
              : Styles.pic_6
          }
        ></div>
        <div style={{ display: "flex", marginTop: "1vw" }}>
          <h1 className={Styles.calenderLogo}>
            <FiCalendar />
          </h1>
          <h1 className={Styles.date}>{date}</h1>
          <h1 className={Styles.personLogo}>
            <GoPerson />
          </h1>

          <h1 className={Styles.author}>{author}</h1>
        </div>
        <div className={Styles.heading}>{heading}</div>
        <div className={Styles.description}>{description}</div>
        <div
          className={Styles.readMore}
          onClick={() =>
            history.push({
              pathname: "/blogDetails",
              name: heading,
            })
          }
        >
          --- Read More
        </div>
      </div>
    </div>
  );
}
