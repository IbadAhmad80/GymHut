import React from "react";
import Styles from "./tags.module.css";

export default function Tags({ tag }) {
  return <div className={Styles.tags}>{tag}</div>;
}
