import React from "react";
import Styles from "./footer.module.css";
import { FaFacebookF } from "react-icons/fa";
import { GrTwitter } from "react-icons/gr";
import { IoLogoGoogleplus } from "react-icons/io";
import { AiFillYoutube } from "react-icons/ai";

export default function Fotter() {
  const footerContainer = {
    backgroundColor: "rgb(68, 70, 70)",
    gridRow: "8",
    gridColumn: "1/6",
    alignSelf: "center",
  };
  return (
    <div>
      <div className={Styles.mainGrid}>
        <div className={Styles.footer_heading}>Want to Know Something ?</div>

        <div className={Styles.getStart}>
          <div className={Styles.heading}>Get Started</div>
          <ul style={{ paddingTop: "1vw" }}>
            <li style={{ paddingTop: "1vw" }}>Home</li>
            <li style={{ paddingTop: "1vw" }}>Services</li>
            <li style={{ paddingTop: "1vw" }}>Membership</li>
            <li style={{ paddingTop: "1vw" }}>About us</li>
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

        <div className={Styles.subscribe}>
          <input
            className={Styles.email}
            placeholder="&nbsp;&nbsp;&nbsp;&nbsp;Enter your email"
            type="text"
          ></input>
        </div>
        <div className={Styles.subscribe_button}>Subscribe</div>
        <div style={footerContainer}>
          <div className={Styles.copyrighted_text}>
            <div className={Styles.social_logos}>
              <FaFacebookF style={{ marginRight: "3vw" }} />
              <GrTwitter style={{ marginRight: "3vw" }} />
              <IoLogoGoogleplus style={{ marginRight: "3vw" }} />
              <AiFillYoutube />
            </div>
            GymHut © 2020 , Website by IbadAhmad
          </div>
        </div>
      </div>
    </div>
  );
}
