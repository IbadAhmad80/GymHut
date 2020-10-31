import React, { Component } from "react";
import NavBar from "../navbar";
import Fotter from "../footer";
import Styles from "./post.module.css";
import SinglePost from "./singlePost";

export default class Post extends Component {
  render() {
    return (
      <div style={{ backgroundColor: " rgb(237, 237, 237)" }}>
        <div className={Styles.grid}>
          <NavBar />
          <div className={Styles.mainGrid}>
            <div style={{ gridRow: "1" }}></div>
            <div className={Styles.boxContent}>
              <h3 style={{ fontSize: "1.3vw", color: "maroon" }}>Our Blogs</h3>
              <h3>Blog Articles</h3>
            </div>
          </div>
        </div>
        <div className={Styles.posts}>
          <SinglePost
            date={"March 25, 2020"}
            author={"John Smith"}
            heading={"Make your fitness Boost with us"}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, minima."
            }
            post={"1"}
          />
          <SinglePost
            date={"March 25, 2020"}
            author={"John Smith"}
            heading={"Ethernity beauty health diet plan"}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, minima."
            }
            post={"2"}
          />
          <SinglePost
            date={"March 25, 2020"}
            author={"John Smith"}
            heading={"Ever too late to lose weight?"}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, minima."
            }
            post={"3"}
          />
          <SinglePost
            date={"March 25, 2020"}
            author={"John Smith"}
            heading={"Make your fitness Boost with us"}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, minima."
            }
            post={"4"}
          />
          <SinglePost
            date={"March 25, 2020"}
            author={"John Smith"}
            heading={"Ethernity beauty health diet plan"}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, minima."
            }
            post={"5"}
          />
          <SinglePost
            date={"March 25, 2020"}
            author={"John Smith"}
            heading={"Ever too late to lose weight?"}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, minima."
            }
            post={"6"}
          />
          <SinglePost
            date={"March 25, 2020"}
            author={"John Smith"}
            heading={"Make your fitness Boost with us"}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, minima."
            }
            post={"2"}
          />
          <SinglePost
            date={"March 25, 2020"}
            author={"John Smith"}
            heading={"Ethernity beauty health diet plan"}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, minima."
            }
            post={"3"}
          />
          <SinglePost
            date={"March 25, 2020"}
            author={"John Smith"}
            heading={"Ever too late to lose weight?"}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, minima."
            }
            post={"5"}
          />
        </div>

        <Fotter />
      </div>
    );
  }
}
