import React, { useState, useEffect } from "react";
import NavBar from "../navbar";
import Fotter from "../footer";
import Styles from "./post.module.css";
import SinglePost from "./singlePost";
import axios from "axios";
import { useLocation } from "react-router-dom";
export default function Posts() {
  const location = useLocation();
  const [posts, setPosts] = useState({ singlePost: [] });
  useEffect(() => {
    const a =
      location.category === undefined &&
      location.author === undefined &&
      location.tag === undefined &&
      location.name === undefined ? (
        axios
          .get("http://localhost:3000/posts")
          .then((response) => {
            setPosts({ singlePost: response.data });
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
          })
          .catch((error) => {
            console.log("error is :", error);
          })
      ) : (
        <div></div>
      );
  }, []);
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
        {posts.singlePost.map(
          ({ id, name, description, pubDate, author, tags, category }) => (
            <SinglePost
              key={id}
              date={pubDate}
              author={author}
              heading={name}
              description={description}
              post={Math.ceil(Math.random() * 10).toString()}
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
