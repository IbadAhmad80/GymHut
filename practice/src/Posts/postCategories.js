import React from "react";
import Styles from "./postCategories.module.css";

export default function PostCategories({ category, number }) {
  return (
    <div>
      <h4
        style={{ marginTop: "0.7vw", display: "flex", marginBottom: "0.7vw" }}
      >
        <div className={Styles.category}>{category}</div>
        <div className={Styles.count}>&nbsp;{number}</div>
      </h4>
    </div>
  );
}
