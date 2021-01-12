import React, { useState, useEffect } from "react";
import NavBar from "../navbar";
import Fotter from "../footer";
import { useLocation } from "react-router-dom";
import Styles from "./postDetails.module.css";
import { BsSearch } from "react-icons/bs";
import SocialLogos from "./socialLogos";
import PopularPost from "./popularPost";
import PostCategories from "./postCategories";
import Tags from "./tags";
import UpvotePost from "./upvotePost";
import SameAuthor from "./sameAuthor";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Loader from "react-loader-spinner";
// importing all the css for loader
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export default function PostDetails() {
  const [loadingAut, isLoadingAut] = useState(false);
  const [loadingCat, isLoadingCat] = useState(false);
  const history = useHistory();
  const location = useLocation();
  const [sameCat, setSameCat] = useState({ singlePost: [] });
  const [sameAut, setSameAut] = useState({ singlePost: [] });
  const [values, setValues] = useState({ name: "" });
  useEffect(() => {
    // retrieving the posts with same Author
    axios
      .get(`https://gymhut.herokuapp.com/posts/author/${location.author}`)
      .then((response) => {
        setSameAut({ singlePost: response.data });

        isLoadingAut(true);
      })
      .catch((error) => {
        console.log("error is :", error);
      });
    // retrieving the posts with same category
    axios
      .get(`https://gymhut.herokuapp.com/posts/category/${location.category}`)
      .then((response) => {
        setSameCat({ singlePost: response.data });
        isLoadingCat(true);
      })
      .catch((error) => {
        console.log("error is :", error);
      });
  }, []);

  return (
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
              Single Post
            </h3>
            <h3 style={{ fontFamily: '"Oswald", sans-serif' }}>
              {location.name}
            </h3>
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
              id={"5"}
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
                value={values.name}
                onChange={(e) => setValues({ name: e.target.value })}
              />
            </div>
            <div className={Styles.searchLogo}>
              <BsSearch
                onClick={() => {
                  history.push({
                    pathname: "/blogs",
                    name: values.name,
                  });
                }}
              />
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
          {loadingCat === false ? (
            <div
              style={{
                marginTop: "3vw",
                textAlign: "center",
                fontSize: "1.5vw",
                fontWeight: "medium",
                marginBottom: "3vw",
              }}
            >
              Loading&nbsp;&nbsp;&nbsp;
              <span>
                <Loader
                  type="Puff"
                  color="#00BFFF"
                  height={50}
                  width={70}
                  timeout={1000000} //1000 secs
                />
              </span>
            </div>
          ) : (
            sameCat.singlePost.map(({ name, no }) => (
              <PopularPost
                title={name}
                id={Math.ceil(Math.random() * 4).toString()}
              ></PopularPost>
            ))
          )}

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
            <PostCategories category={"Cycling"} number={"3"} />
            <PostCategories category={"Body Building"} number={"3"} />
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
            {location.tags.map((tag) => (
              <Tags id={tag} tag={tag} />
            ))}
          </div>
        </div>
      </div>
      <div
        style={{
          marginTop:
            loadingCat === false && location.tags.length > 3
              ? "15vw"
              : loadingCat === false && location.tags.length < 3
              ? "19vw"
              : loadingCat === true && location.tags.length > 3
              ? "1vw"
              : "3vw",
          fontSize: "2.3vw",
          fontWeight: "bolder",
          fontFamily: "'Quicksand', sans-serif",
          marginBottom: "4vw",
          marginLeft: "4vw",
        }}
      >
        More From Author
      </div>

      {loadingAut === false ? (
        <div
          style={{
            marginTop: "3vw",
            textAlign: "left",
            fontSize: "1.5vw",
            fontWeight: "medium",
            marginBottom: "6vw",
            marginLeft: "7vw",
          }}
        >
          Loading&nbsp;&nbsp;&nbsp;
          <span>
            <Loader
              type="Circles"
              color="#00BFFF"
              height={50}
              width={70}
              timeout={1000000} //1000 secs
            />
          </span>
        </div>
      ) : (
        <div className={Styles.fromSameAuthor}>
          {sameAut.singlePost.map(
            ({ id, name, description, pubDate, author, no }) => (
              <SameAuthor
                key={id}
                date={pubDate}
                author={author}
                heading={name}
                description={description}
                post={Math.ceil(Math.random() * 3).toString()}
              ></SameAuthor>
            )
          )}
        </div>
      )}

      <UpvotePost />
      <Fotter />
    </div>
  );
}
