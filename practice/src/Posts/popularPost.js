import React from "react";
import Capture_5 from "../assets/Capture_5.PNG";
import Capture_2 from "../assets/Capture_2.PNG";
import Capture_3 from "../assets/Capture_3.PNG";
import abs from "../assets/abs.jpg";
import Styles from "./popularPost.module.css";
export default function PopularPost({ title, id }) {
  const style = {
    backgroundImage: `url(${Capture_5})`,
    flex: "1",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 100%",
  };
  const style_1 = {
    backgroundImage: `url(${Capture_2})`,
    flex: "1",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 100%",
  };
  const style_2 = {
    backgroundImage: `url(${Capture_3})`,
    flex: "1",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 100%",
  };
  const style_3 = {
    backgroundImage: `url(${abs})`,
    flex: "1",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 100%",
  };
  return (
    <div
      style={{
        display: "flex",
        marginTop: "2vw",
        justifyContent: "space-between",
      }}
    >
      <div
        style={
          id === "1"
            ? style
            : id === "2"
            ? style_1
            : id === "4"
            ? style_3
            : style_2
        }
      ></div>
      <div className={id === "4" ? Styles.content : Styles.title}>{title}</div>
    </div>
  );
}
