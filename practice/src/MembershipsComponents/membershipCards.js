import React from "react";
import Styles from "./membershipCards.module.css";
import { BiDollar } from "react-icons/bi";

export default function MembershipCards({
  heading_1,
  heading_2,
  service_1,
  logo_1_color,
  service_1_color,
  service_2,
  logo_2_color,
  service_2_color,
  service_3,
  logo_3_color,
  service_3_color,
  service_4,
  logo_4_color,
  service_4_color,
  service_5,
  logo_5_color,
  service_5_color,
  ImCross,
  TiTickOutline,

  price,
}) {
  const heading_style = {
    backgroundColor: "black",
    color: "white",
    fontSize: "1.2vw",
    paddingLeft: "0.2vw",
    paddingRight: "0.2vw",
    letterSpacing: "0.05cm",
    marginLeft: "3vw",
  };
  return (
    <div>
      <div className={Styles.mainGrid}>
        <div className={Styles.membership_1}>
          <h2>
            <span
              className={Styles.heading_1}
              style={
                heading_1 === ""
                  ? console.log("no style on heading")
                  : heading_style
              }
            >
              {heading_1}
            </span>
            <span
              className={Styles.mainHeading}
              style={
                heading_1 === "" ? { marginLeft: "3vw" } : { marginLeft: "1vw" }
              }
            >
              {heading_2}
            </span>
          </h2>
        </div>
        <h2>
          <BiDollar className={Styles.dollar_logo} />
          <span className={Styles.priceValue}>{price}</span>
        </h2>
        <h2>
          <span className={Styles.logoColor} style={{ color: logo_1_color }}>
            {logo_1_color === "red" ? <TiTickOutline /> : <ImCross />}
          </span>
          <span className={Styles.services} style={{ color: service_1_color }}>
            {service_1}
          </span>
        </h2>
        <h2 style={{ marginTop: "0.5vw" }}>
          <span className={Styles.logoColor} style={{ color: logo_2_color }}>
            {logo_2_color === "red" ? <TiTickOutline /> : <ImCross />}
          </span>
          <span
            className={Styles.services}
            style={{ color: { service_2_color } }}
          >
            {service_2}
          </span>
        </h2>
        <h2 style={{ marginTop: "0.3vw" }}>
          <span className={Styles.logoColor} style={{ color: logo_3_color }}>
            {logo_3_color === "red" ? <TiTickOutline /> : <ImCross />}
          </span>
          <span className={Styles.services} style={{ color: service_3_color }}>
            {service_3}
          </span>
        </h2>
        <h2 style={{ marginTop: "0.3vw" }}>
          <span className={Styles.logoColor} style={{ color: logo_4_color }}>
            {logo_4_color === "red" ? <TiTickOutline /> : <ImCross />}
          </span>
          <span className={Styles.services} style={{ color: service_4_color }}>
            {service_4}
          </span>
        </h2>
        <h2 style={{ marginTop: "0.3vw", marginBottom: "0.3vw" }}>
          <span className={Styles.logoColor} style={{ color: logo_5_color }}>
            {logo_5_color === "red" ? <TiTickOutline /> : <ImCross />}
          </span>
          <span className={Styles.services} style={{ color: service_5_color }}>
            {service_5}
          </span>
        </h2>
        <button
          className={Styles.buyNow}
          type="button"
          style={
            heading_1 === ""
              ? {
                  backgroundImage: "white",
                  color: "black",
                  border: "1px solid black",
                }
              : {
                  backgroundImage: "linear-gradient(tomato, orange)",
                  color: "white",
                  border: "1px solid white",
                }
          }
        >
          Buy Now
        </button>
      </div>
    </div>
  );
}
