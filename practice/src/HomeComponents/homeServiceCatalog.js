import React from "react";
import Styles from "./homeServiceCatalog.module.css";
export default function HomeServiceCatalog({
  GiCycling,
  heading,
  content,
  background_Color,
  logo_color,
}) {
  return (
    <div>
      <div
        className={Styles.mainGrid}
        style={{ backgroundColor: background_Color }}
      >
        <GiCycling className={Styles.logo} style={{ color: logo_color }} />
        <div className={Styles.heading}>{heading}</div>
        <div className={Styles.content}>{content}</div>
      </div>
    </div>
  );
}
