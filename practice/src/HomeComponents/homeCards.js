import React from "react";
import Styles from "./homeCards.module.css";

export default function HomeCards({ title, content }) {
  return (
    <div className={Styles.mainContainer}>
      <div className={Styles.container}>
        <div className={Styles.cardTitle}>{title}</div>
        <div className={Styles.cardContent}>{content}</div>
        <div className={Styles.read_more}>- More Details</div>
      </div>
    </div>
  );
}
