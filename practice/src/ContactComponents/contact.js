import React from "react";
import NavBar from "../navbar";
import Fotter from "../footer";
import Styles from "./contact.module.css";
import ContactFrom from "./contactForm";

import ContactReviewSlider from "./contactReviewSlider";
import App from "./app";

export default function Contact() {
  return (
    <div>
      <div className={Styles.grid}>
        <NavBar />
        <div className={Styles.mainGrid}>
          <div style={{ gridRow: "1" }}></div>
          <div className={Styles.boxContent}>
            <h3 style={{ fontSize: "1.3vw", color: "maroon" }}>Contact Us</h3>
            <h3> Our Help Center</h3>
          </div>
        </div>
      </div>
      <ContactFrom />
      <ContactReviewSlider />
      {/* <div className={Styles.cardContainer}>
        <HomeInfoCards
          FaHome={FaHome}
          heading={"Location"}
          content={"Bedford Heights,North London, USA."}
        />
        <HomeInfoCards
          FaHome={FaPhoneVolume}
          heading={"Phone"}
          content={"+23 45 67890."}
        />
        <HomeInfoCards
          FaHome={BiMessageRoundedDetail}
          heading={"Email"}
          content={"support@GymHub.com."}
        />
      </div> */}

      <div className={Styles.modals}>
        <div className={Styles.formborderTop}>_</div>
        <div className={Styles.formHeading}>FAQ's</div>

        <App
          Question={"What are the timings of The Jym?"}
          Answer={"Somwhere between 6am to 2am"}
        />
        <App
          Question={
            "From which course should i start my training program as a beginner?"
          }
          Answer={
            "If you are absolute starter in this field , then try to for our nutrition program. It has helped a lot of trainers at thier beginning."
          }
        />

        <App
          Question={"Are there any expert trainers in midnight shift too?"}
          Answer={
            "Yes there are , absolutely. Not lot of them but a bunch which are always there to sort our task"
          }
        />

        <App
          Question={
            "Tell me little about the history and developments of nutrition programs?"
          }
          Answer={
            "It was started for the middleweight beginners and with time it has risen like none other. Huge shout out to our loyal customers as well."
          }
        />

        <App
          Question={
            "What services do you get by availing the GOLD membership for straight year?"
          }
          Answer={
            "Amount of discounts and accessories you get on this special offer are enough to keep you going with one more year or so."
          }
        />
      </div>

      <Fotter />
    </div>
  );
}

{
}