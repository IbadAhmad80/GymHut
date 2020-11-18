import React from "react";
import Styles from "./trainers.module.css";
import { FaFacebookF } from "react-icons/fa";
import { GrTwitter } from "react-icons/gr";
import { IoLogoGoogleplus } from "react-icons/io";

export default function Trainers({ man, name, job, content }) {
  // const Background = { backgroundImage: "url(" + man + ")" };
  return (
    <div>
      <div className={Styles.mainGrid}>
        <div
          className={Styles.pic_1}
          style={{ backgroundImage: "url(" + man + ")" }}
        ></div>
        <div className={Styles.name}>{name}</div>
        <div className={Styles.job}>{job}</div>
        <div className={Styles.content}>{content}</div>
        <div className={Styles.logos}>
          <FaFacebookF className={Styles.social_logo} />
          <GrTwitter className={Styles.social_logo} />
          <IoLogoGoogleplus className={Styles.social_logo} />
        </div>
      </div>
    </div>
  );
}
