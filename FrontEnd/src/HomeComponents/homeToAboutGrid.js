import React from "react";
import Styles from "./homeToAboutGrid.module.css";
import { useHistory } from "react-router-dom";

export default function HomeToAbout() {
  const history = useHistory();
  return (
    <div>
      <div className={Styles.mainGrid}>
        <div className={Styles.picGrid}></div>
        <div className={Styles.topContentGrid}>
          <div>WE’VE SKILL IN </div>
          <div>
            WIDE <span style={{ color: "tomato" }}>RANGE OF FITNESS</span> AND
            OTHER
          </div>

          <div>BODY HEALTH FACILITY.</div>
        </div>
        <div className={Styles.bottomContentGrid}>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis Theme natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          Aliquam lorem ante, dapibus in.
        </div>
        <button
          className={Styles.button}
          onClick={() => history.push("./about")}
        >
          Learn More{" "}
        </button>
      </div>
    </div>
  );
}
