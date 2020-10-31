import React from "react";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaPinterestSquare,
  FaLinkedin,
  FaGoogle,
} from "react-icons/fa";

export default function SocialLogos() {
  return (
    <div>
      <h4 style={{ marginTop: "4vw" }}>
        <span
          style={{
            marginLeft: "0vw",
            fontSize: "2.5vw",
            fontWeight: "lighter",
            color: "red",
          }}
        >
          -
        </span>
        <span style={{ paddingLeft: "0.5vw", fontSize: "1.5vw" }}>
          {" "}
          Follow us
        </span>
      </h4>
      <div
        style={{
          marginRight: "3vw",
          marginTop: "1vw",
          display: "flex",
          justifyContent: "space-around",
          color: "gray",
          fontSize: "1.5vw",
        }}
      >
        <div
          style={{
            paddingLeft: "0.6vw",
            paddingRight: "0.6vw",
            paddingTop: "0.4vw",
            paddingBottom: "0.4vw",
            backgroundColor: "white",
          }}
        >
          <FaFacebookSquare />
        </div>
        <div
          style={{
            paddingLeft: "0.6vw",
            paddingRight: "0.6vw",
            paddingTop: "0.4vw",
            paddingBottom: "0.4vw",
            backgroundColor: "white",
          }}
        >
          <FaTwitterSquare />
        </div>
        <div
          style={{
            paddingLeft: "0.6vw",
            paddingRight: "0.6vw",
            paddingTop: "0.4vw",
            paddingBottom: "0.4vw",
            backgroundColor: "white",
          }}
        >
          {" "}
          <FaPinterestSquare />
        </div>
        <div
          style={{
            paddingLeft: "0.6vw",
            paddingRight: "0.6vw",
            paddingTop: "0.4vw",
            paddingBottom: "0.4vw",
            backgroundColor: "white",
          }}
        >
          <FaLinkedin />
        </div>
        <div
          style={{
            paddingLeft: "0.6vw",
            paddingRight: "0.6vw",
            paddingTop: "0.4vw",
            paddingBottom: "0.4vw",
            backgroundColor: "white",
          }}
        >
          <FaGoogle />
        </div>
      </div>
    </div>
  );
}
