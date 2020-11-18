import React from "react";
import { FaFacebookSquare, FaTwitterSquare, FaLinkedin } from "react-icons/fa";
import Styles from "./upvotePost.module.css";

export default function UpvotePost() {
  return (
    <div
      style={{ marginLeft: "15vw", marginRight: "15vw", marginBottom: "5vw" }}
    >
      <div className={Styles.content}>like the post ?</div>
      <div className={Styles.logos}>
        <FaFacebookSquare />
        <FaTwitterSquare />
        <FaLinkedin />
      </div>
    </div>
  );
}
