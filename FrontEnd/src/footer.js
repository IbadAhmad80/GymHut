import React, { useEffect, useState } from "react";
import Styles from "./footer.module.css";
import { FaFacebookF, FaLinkedin } from "react-icons/fa";
import { GrTwitter } from "react-icons/gr";
import { AiFillYoutube } from "react-icons/ai";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

export default function Fotter() {
  const history = useHistory();
  const [data, setData] = useState({ email: "", validate: "" });
  const footerContainer = {
    backgroundColor: "rgb(68, 70, 70)",
    gridRow: "8",
    gridColumn: "1/6",
    alignSelf: "center",
  };

  useEffect(() => {
    console.log(`type of data : ${typeof data.email}`);
    data.email !== ""
      ? setData({ ...data, validate: "done" })
      : setData({ ...data, validate: "" });
  }, [data.email]);
  const subscription = (e) => {
    e.preventDefault();
    data.validate === "done"
      ? toast.info("Subscribed!! Check Email ", { position: "top-center" })
      : toast.error("Invalid Email , Check again ", { position: "top-center" });
  };
  return (
    <div>
      <div className={Styles.mainGrid}>
        <div className={Styles.footer_heading}>Want to Know Something ?</div>

        <div className={Styles.getStart}>
          <div className={Styles.heading}>Get Started</div>
          <ul style={{ paddingTop: "1vw" }}>
            <li
              style={{ paddingTop: "1vw", cursor: "pointer" }}
              onClick={() => history.push("/")}
            >
              Home
            </li>
            <li
              style={{ paddingTop: "1vw", cursor: "pointer" }}
              onClick={() => history.push("/courses")}
            >
              Services
            </li>
            <li
              style={{ paddingTop: "1vw", cursor: "pointer" }}
              onClick={() => history.push("/membership")}
            >
              Membership
            </li>
            <li
              style={{ paddingTop: "1vw", cursor: "pointer" }}
              onClick={() => history.push("/about")}
            >
              About us
            </li>
          </ul>
        </div>
        <div className={Styles.about_us}>
          <div className={Styles.heading}>About Us</div>
          <ul style={{ paddingTop: "1vw" }}>
            <li style={{ paddingTop: "1vw" }}>Location</li>
            <li style={{ paddingTop: "1vw" }}>Reviews</li>
            <li style={{ paddingTop: "1vw" }}>Information</li>
            <li style={{ paddingTop: "1vw" }}>Contact</li>
          </ul>
        </div>
        <form onSubmit={subscription} className={Styles.subscribe}>
          <div>
            <input
              className={Styles.email}
              placeholder="&nbsp;&nbsp;&nbsp;&nbsp;Enter your email"
              type="text"
              value={data.email}
              placeholder="Enter your email"
              onChange={(e) => setData(e.target.value)}
            ></input>
          </div>
          <button type="submit" className={Styles.subscribe_button}>
            Subscribe
          </button>
        </form>

        <div style={footerContainer}>
          <div className={Styles.copyrighted_text}>
            <div className={Styles.social_logos}>
              <a
                href="https://www.facebook.com/home.php?ref=wizard"
                target="_blank"
              >
                <FaFacebookF style={{ marginRight: "3vw", color: "white" }} />
              </a>
              <a href="https://mobile.twitter.com/login" target="_blank">
                <GrTwitter style={{ marginRight: "3vw", color: "white" }} />
              </a>
              <a href="https://www.linkedin.com/login/" target="_blank">
                <FaLinkedin style={{ marginRight: "3vw", color: "white" }} />
              </a>
              <a href="https://www.youtube.com/" target="_blank">
                <AiFillYoutube style={{ color: "white" }} />
              </a>
            </div>
            GymHut © 2020 , Website by IbadAhmad
          </div>
        </div>
      </div>
    </div>
  );
}
