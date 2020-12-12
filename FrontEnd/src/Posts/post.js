import React, { useState, useEffect } from "react";
import NavBar from "../navbar";
import Fotter from "../footer";
import Styles from "./post.module.css";
import SinglePost from "./singlePost";
import axios from "axios";
import { useLocation } from "react-router-dom";
import Loader from "react-loader-spinner";
import Styles_2 from "../MembershipsComponents/members.module.css";
// importing all the css for loader
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export default function Posts() {
  const location = useLocation();
  const [loading, isLoading] = useState(false);
  const [posts, setPosts] = useState({ singlePost: [] });
  useEffect(() => {
    let data =
      location.category === undefined &&
      location.author === undefined &&
      location.tag === undefined &&
      location.name === undefined ? (
        axios
          .get("http://localhost:3000/posts")
          .then((response) => {
            setPosts({ singlePost: response.data });
            isLoading(true);
          })
          .catch((error) => {
            console.log("error is :", error);
          })
      ) : location.tag !== undefined ? (
        // retrieving the posts with same Tags
        axios
          .get(`http://localhost:3000/posts/tags/${location.tag}`)
          .then((response) => {
            setPosts({ singlePost: response.data });
            isLoading(true);
          })
          .catch((error) => {
            console.log("error is :", error);
          })
      ) : location.category !== undefined ? (
        // retrieving the posts with same Category
        axios
          .get(`http://localhost:3000/posts/category/${location.category}`)
          .then((response) => {
            setPosts({ singlePost: response.data });
            isLoading(true);
          })
          .catch((error) => {
            console.log("error is :", error);
          })
      ) : location.name !== undefined ? (
        // retrieving the posts with specific name
        axios
          .get(`http://localhost:3000/posts/findPost?findPost=${location.name}`)
          .then((response) => {
            setPosts({ singlePost: response.data });
            isLoading(true);
          })
          .catch((error) => {
            console.log("error is :", error);
          })
      ) : (
        <div></div>
      );
  }, []);
  return loading === false ? (
    <div style={{ backgroundColor: " rgb(237, 237, 237)" }}>
      <div className={Styles.grid}>
        <NavBar />
        <div className={Styles.mainGrid}>
          <div style={{ gridRow: "1" }}></div>
          <div className={Styles.boxContent}>
            <h3
              style={{
                fontSize: "1.3vw",
                color: "maroon",
                fontFamily: '"Oswald", sans-serif',
              }}
            >
              Our Blogs
            </h3>
            <h3 style={{ fontFamily: '"Oswald", sans-serif' }}>
              Blog Articles
            </h3>
          </div>
        </div>
      </div>
      <div
        style={{
          marginTop: "3vw",
          textAlign: "center",
          fontSize: "2vw",
          fontWeight: "bold",
          marginBottom: "3vw",
        }}
      >
        Loading&nbsp;&nbsp;&nbsp;
        <span>
          <Loader
            style={{ marginTop: "1vw" }}
            type="Bars"
            color="#00BFFF"
            height={50}
            width={70}
            timeout={1000000} //1000 secs
          />
        </span>
      </div>
      <Fotter />
    </div>
  ) : (
    <div style={{ backgroundColor: " rgb(237, 237, 237)" }}>
      <div className={Styles.grid}>
        <NavBar />
        <div className={Styles.mainGrid}>
          <div style={{ gridRow: "1" }}></div>
          <div className={Styles.boxContent}>
            <h3
              style={{
                fontSize: "1.3vw",
                color: "maroon",
                fontFamily: '"Oswald", sans-serif',
              }}
            >
              Our Blogs
            </h3>
            <h3 style={{ fontFamily: '"Oswald", sans-serif' }}>
              Blog Articles
            </h3>
          </div>
        </div>
      </div>
      <div className={Styles_2.imageCatalog}>
        <div className={Styles_2.imageborderTop}>___</div>
        <div className={Styles_2.imageHeading}>Popular Blogs</div>
        <div className={Styles_2.imageSub_heading}>
          Get insights of our top most rated professionals
        </div>
      </div>
      <div className={Styles.posts}>
        {posts.singlePost.map(
          ({ id, name, description, pubDate, author, tags, category, no }) => (
            <SinglePost
              key={id}
              date={pubDate}
              author={author}
              heading={name}
              description={description}
              post={no}
              tags={tags}
              category={category}
            ></SinglePost>
          )
        )}
      </div>

      <Fotter />
    </div>
  );
}
