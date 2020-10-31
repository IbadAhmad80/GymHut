import React from "react";
import NavBar from "../navbar";
import Fotter from "../footer";
import Styles from "./members.module.css";
import MembershipCards from "./membershipCards";
import HomeImageGallery from "../HomeComponents/imageGallery";
import sport_3 from "../assets/sport_3.jpg";
import athlete from "../assets/athlete.jpg";
import bodybuilder from "../assets/bodybuilder.jpg";
import bodybuilder_1 from "../assets/bodybuilder_1.jpg";
import plank from "../assets/plank.jpg";
import abs from "../assets/abs.jpg";
import gym from "../assets/gym.jpg";
import man from "../assets/man.jpg";
import { TiTick } from "react-icons/ti";
import { ImCross } from "react-icons/im";
import PopularCourses from "./popularCourses";

export default function Membership() {
  return (
    <div>
      <div className={Styles.grid}>
        <NavBar />
        <div className={Styles.mainGrid}>
          <div style={{ gridRow: "1" }}></div>
          <div className={Styles.boxContent}>
            <h3 style={{ fontSize: "1.3vw", color: "maroon" }}>
              Get Memberships
            </h3>
            <h3>Discounts we offer</h3>
          </div>
        </div>
      </div>
      <div className={Styles.topGrid}>
        <div className={Styles.cardborderTop}>___</div>
        <div className={Styles.cardHeading}>Package Pricing</div>
      </div>
      <div className={Styles.membershipCards}>
        <MembershipCards
          price={"12"}
          heading_1={""}
          heading_2={"Standard"}
          TiTickOutline={TiTick}
          ImCross={ImCross}
          logo_1_color={"red"}
          logo_2_color={"red"}
          logo_3_color={"grey"}
          logo_4_color={"grey"}
          logo_5_color={"grey"}
          service_1={"Training overview"}
          service_2={"Foundation Training"}
          service_3={"Begineers Classes"}
          service_4={"Olympic weighlifting"}
          service_5={"Personal Training"}
          service_1_color={"black"}
          service_2_color={"black"}
          service_3_color={"grey"}
          service_4_color={"grey"}
          service_5_color={"grey"}
        />
        <MembershipCards
          price={"25"}
          heading_1={"popular"}
          heading_2={"Pro"}
          TiTickOutline={TiTick}
          ImCross={ImCross}
          logo_1_color={"red"}
          logo_2_color={"red"}
          logo_3_color={"red"}
          logo_4_color={"grey"}
          logo_5_color={"grey"}
          service_1={"Training overview"}
          service_2={"Foundation Training"}
          service_3={"Begineers Classes"}
          service_4={"Olympic weighlifting"}
          service_5={"Personal Training"}
          service_1_color={"black"}
          service_2_color={"black"}
          service_3_color={"black"}
          service_4_color={"grey"}
          service_5_color={"grey"}
        />
        <MembershipCards
          price={"39"}
          heading_1={""}
          heading_2={"Gold"}
          TiTickOutline={TiTick}
          ImCross={ImCross}
          logo_1_color={"red"}
          logo_2_color={"red"}
          logo_3_color={"red"}
          logo_4_color={"red"}
          logo_5_color={"red"}
          service_1={"Training overview"}
          service_2={"Foundation Training"}
          service_3={"Begineers Classes"}
          service_4={"Olympic weighlifting"}
          service_5={"Personal Training"}
          service_1_color={"black"}
          service_2_color={"black"}
          service_3_color={"black"}
          service_4_color={"black"}
          service_5_color={"black"}
        />
      </div>
      <div className={Styles.imageCatalog}>
        <div className={Styles.imageborderTop}>___</div>
        <div className={Styles.imageHeading}>Popular Courses</div>
        <div className={Styles.imageSub_heading}>
          We offer group exercises, aerobic classes each week.
        </div>
      </div>
      <div className={Styles.popular_courses}>
        <PopularCourses
          title={"Build Body"}
          mentor={"Jimmmy Karter"}
          no={"1"}
        />
        <PopularCourses
          title={"Training legs"}
          mentor={"Jon Parker"}
          no={"2"}
        />
        <PopularCourses
          title={"Nutrition Buildup"}
          mentor={"Etzabeth Milen"}
          no={"3"}
        />
        <button type="button" className={Styles.all_courses_button}>
          See all our courses
        </button>
      </div>
      <div className={Styles.imageCatalog}>
        <div className={Styles.imageborderTop}>___</div>
        <div className={Styles.imageHeading}>Our Gallery</div>
        <div className={Styles.imageSub_heading}>
          We offer group exercises, aerobic classes each week.
        </div>
      </div>
      <div className={Styles.imageGallery}>
        <HomeImageGallery image={bodybuilder_1} />
        <HomeImageGallery image={gym} />
        <HomeImageGallery image={plank} />
        <HomeImageGallery image={sport_3} />
        <HomeImageGallery image={man} />
        <HomeImageGallery image={abs} />
        <HomeImageGallery image={bodybuilder} />
        <HomeImageGallery image={athlete} />
      </div>

      <Fotter />
    </div>
  );
}
