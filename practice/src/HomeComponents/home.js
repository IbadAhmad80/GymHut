import React from "react";
import Styles from "./home.module.css";
import NavBar from "../navbar";
import { FiArrowRight } from "react-icons/fi";
import HomeCards from "./homeCards";
import HomeToAboutGrid from "./homeToAboutGrid";
import HomeCenterAttachment from "./homeCenterAttachment";
import {
  GiWeightLiftingUp,
  GiMuscleUp,
  GiCycling,
  GiWeightLiftingDown,
} from "react-icons/gi";
import HomeServiceCatalog from "./homeServiceCatalog";
import { IoMdBody, IoIosFitness } from "react-icons/io";
import HomeImageGallery from "./imageGallery";
import weights from "../assets/weights.jpg";
import athlete from "../assets/athlete.jpg";
import bodybuilder from "../assets/bodybuilder.jpg";
import bodybuilder_1 from "../assets/bodybuilder_1.jpg";
import plank from "../assets/plank.jpg";
import abs from "../assets/abs.jpg";
import gym from "../assets/gym.jpg";
import man from "../assets/man.jpg";
import Fotter from "../footer";

export default function Home() {
  return (
    <div>
      <div className={Styles.grid}>
        <NavBar />
        <div className={Styles.mainGrid}>
          <div style={{ gridColumn: "1/4", gridRow: "1" }}></div>
          <div className={Styles.boxContent}>
            <h3
              style={{
                border: "1px solid white",
                textAlign: "center",
              }}
            >
              Gym Fitness Club
            </h3>
          </div>
          <div className={Styles.moto_1}>Step up your</div>
          <div className={Styles.moto_2}> fitness challenge</div>
          <div className={Styles.moto_3}> with us</div>
          <button type="button" className={Styles.join_us_button}>
            Join Us Now &nbsp;
            <FiArrowRight />
          </button>
        </div>
      </div>
      <div className={Styles.cardGrid}>
        <div className={Styles.card}>
          {" "}
          <HomeCards
            title={"modern equipment"}
            content={
              " Vestibulum sit amet blan augue, sit amet vehicula mi. Aliquam vitae varius. "
            }
          />
        </div>
        <div className={Styles.card}>
          {" "}
          <HomeCards
            title={"professional trainer"}
            content={
              " Vestibulum sit amet blan augue, sit amet vehicula mi. Aliquam vitae varius. "
            }
          ></HomeCards>
        </div>
        <div className={Styles.card}>
          {" "}
          <HomeCards
            title={"healthy diet plan"}
            content={
              " Vestibulum sit amet blan augue, sit amet vehicula mi. Aliquam vitae varius. "
            }
          ></HomeCards>
        </div>
      </div>
      <HomeToAboutGrid />
      <HomeCenterAttachment />
      <div className={Styles.serviceCatalog}>
        <div className={Styles.serviceborderTop}>___</div>
        <div className={Styles.serviceHeading}>Our Services</div>
        <div className={Styles.serviceSub_heading}>
          We offer group exercises, aerobic classes each week.
        </div>
      </div>
      <div className={Styles.row_1_services}>
        <HomeServiceCatalog
          GiCycling={GiCycling}
          heading={"cycling"}
          content={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, molestias."
          }
          background_Color={"white"}
          logo_color={"tomato"}
        />
        <HomeServiceCatalog
          GiCycling={GiWeightLiftingUp}
          heading={"fitness track"}
          content={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, molestias."
          }
          background_Color={"white"}
          logo_color={"tomato"}
        />
        <HomeServiceCatalog
          GiCycling={GiWeightLiftingDown}
          heading={"weight lifting"}
          content={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, molestias."
          }
          background_Color={"white"}
          logo_color={"tomato"}
        />
      </div>
      <div className={Styles.row_1_services}>
        <HomeServiceCatalog
          GiCycling={IoMdBody}
          heading={"yoga meditation"}
          content={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, molestias."
          }
          background_Color={"white"}
          logo_color={"tomato"}
        />
        <HomeServiceCatalog
          GiCycling={IoIosFitness}
          heading={"building body"}
          content={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, molestias."
          }
          background_Color={"white"}
          logo_color={"tomato"}
        />
        <HomeServiceCatalog
          GiCycling={GiMuscleUp}
          heading={"fitness freak"}
          content={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, molestias."
          }
          background_Color={"white"}
          logo_color={"tomato"}
        />
      </div>
      <div className={Styles.serviceCatalog_1}>
        <div className={Styles.serviceborderTop}>___</div>
        <div className={Styles.serviceHeading}>Our Gallery</div>
        <div className={Styles.serviceSub_heading}>
          We offer group exercises, aerobic classes each week.
        </div>
      </div>
      <div className={Styles.imageGallery}>
        <HomeImageGallery image={weights} />
        <HomeImageGallery image={man} />
        <HomeImageGallery image={plank} />
        <HomeImageGallery image={abs} />
        <HomeImageGallery image={bodybuilder} />
        <HomeImageGallery image={bodybuilder_1} />
        <HomeImageGallery image={athlete} />
        <HomeImageGallery image={gym} />
      </div>
      <Fotter />
    </div>
  );
}
