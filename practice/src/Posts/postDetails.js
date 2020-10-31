import React from "react";
import NavBar from "../navbar";
import Fotter from "../footer";
import { useLocation } from "react-router-dom";
import Styles from "./postDetails.module.css";
import { BsSearch } from "react-icons/bs";
import SocialLogos from "./socialLogos";
import popularPost from "./popularPost";
import PopularPost from "./popularPost";
import PostCategories from "./postCategories";
import Tags from "./tags";
import UpvotePost from "./upvotePost";
import SameAuthor from "./sameAuthor";

export default function PostDetails() {
  const location = useLocation();
  return (
    <div style={{ backgroundColor: " rgb(237, 237, 237)" }}>
      <div className={Styles.grid}>
        <NavBar />
        <div className={Styles.mainGrid}>
          <div style={{ gridRow: "1" }}></div>
          <div className={Styles.boxContent}>
            <h3 style={{ fontSize: "1.3vw", color: "maroon" }}>Single Post</h3>
            <h3>{location.name}</h3>
          </div>
        </div>
      </div>
      <div className={Styles.topGrid}>
        <div className={Styles.leftGrid}>
          <div className={Styles.picture}></div>
          <div
            style={{
              textAlign: "justify",
              fontSize: "1.3vw",
              color: "gray",
              gridRow: "4",
              marginTop: "4vw",
              fontFamily: "'Quicksand', sans-serif",
            }}
          >
            Sed nec blandit nibh. Pellentesque commodo suscipit gravida. Sed sit
            amet ex sed mi dignissim elementum in ut quam. Vivamus laoreet non
            mauris eget mattis. Nam turpis orci, consectetur vel accumsan sed,
            condimentum at sapien. Nunc ut egestas neque, eu hendrerit lacus.
            Suspendisse fermentum congue dui nec fringilla. Duis volutpat nunc
            lectus. Suspendisse potenti. Suspendisse egestas venenatis nunc.
            Donec at laoreet lacus.
          </div>
          <div className={Styles.quotedText}>
            Merupakan fakta bahwa seorang pembaca akan terpengaruh oleh isitue
            tulisan dari sebuah halaman saat ia melihat tata letaknya. Maksud
            penggunaan Lorem Ipsum adalah karena ia kurang lebih memiliki
            penyebaran huruf.
          </div>
          <div style={{ marginTop: "4vw" }}>
            <PopularPost
              title={
                "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam quam elit, mollis at odio gravida, ultrices pulvinar justo. Vivamus eleifend mollis dolor, et ornare turpis vehicula in. Pellentesque auctor ac enim sit amet euismod. Ut eu accumsan nunc. Nam ultrices, orci a volutpat molestie, ipsum magna posuere ex, vel lobortis dolor purus tristique purus."
              }
              id={"4"}
            />
            <div
              style={{
                paddingTop: "2vw",
                paddingBottom: "2vw",
                fontSize: "1.3vw",
                fontWeight: "medium",
                fontFamily: "'Quicksand', sans-serif",
              }}
            >
              Aliquam lobortis efficitur velit, vel tempor dui iaculis non.
              Mauris non ullamcorper leo. Nulla consectetur arcu eget
              condimentum auctor. Aliquam sagittis dictum augue. Duis fringilla
              nec augue eu laore
            </div>
          </div>
          <div
            style={{
              textAlign: "center",
              marginTop: "4vw",
              marginBottom: "5vw",
              fontSize: "2vw",
              fontWeight: "bolder",
              fontFamily: "'Quicksand', sans-serif",
            }}
          >
            More From Author
          </div>
        </div>
        <div className={Styles.rightGrid}>
          <div
            style={{
              display: "flex",
              border: "1px solid gray",
              backgroundColor: "white",
            }}
          >
            <div className={Styles.search}>
              <input
                type="text"
                placeholder="Search"
                style={{ border: "none", outline: "none" }}
              />
            </div>
            <div className={Styles.searchLogo}>
              <BsSearch />
            </div>
          </div>
          <SocialLogos />
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
              Similar Posts
            </span>
          </h4>
          <PopularPost title={"Track your daily body fitness"} id={"1"} />
          <PopularPost title={"Keep your body fitness track"} id={"2"} />
          <PopularPost title={"Elevate your nutrition level "} id={"3"} />
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
              Categories
            </span>
          </h4>
          <div
            style={{
              padding: "0.5vw",
              backgroundColor: "white",
              marginTop: "1vw",
            }}
          >
            {" "}
            <PostCategories category={"Fitness"} number={"3"} />
            <PostCategories category={"Cycling"} number={"2"} />
            <PostCategories category={"ParaCycling"} number={"2"} />
            <PostCategories category={"BodyBuilding"} number={"3"} />
          </div>
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
              Tags
            </span>
          </h4>
          <div className={Styles.tags}>
            <Tags tag={"Body"} />
            <Tags tag={"Fitness"} />
            <Tags tag={"Cycling"} />
            <Tags tag={"Diet"} />
            <Tags tag={"Jym"} />
            <Tags tag={"Trainer"} />
          </div>
        </div>
      </div>

      <div className={Styles.fromSameAuthor}>
        <SameAuthor
          heading={"Make your Fitness boost with us"}
          author={"John Smith"}
          post={"1"}
        />
        <SameAuthor
          heading={"Ethernity beauty diet plan"}
          author={"John Smith"}
          post={"2"}
        />
        <SameAuthor
          heading={"Ever too late to loose weight?"}
          author={"John Smith"}
          post={"3"}
        />
      </div>
      <UpvotePost />
      <Fotter />
    </div>
  );
}
