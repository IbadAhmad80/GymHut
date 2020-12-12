import React, { useState, useEffect } from "react";
import SingleProduct from "./singleProduct";
import Styles from "./products.module.css";
import NavBar from "../navbar";
import Fotter from "../footer";
import Styles_1 from "../MembershipsComponents/members.module.css";
import axios from "axios";
import Loader from "react-loader-spinner";
import { FaCartArrowDown } from "react-icons/fa";
import { useHistory } from "react-router-dom";

export default function Products() {
  const history = useHistory();
  const [loading, isLoading] = useState(false);
  const [load, setLoad] = useState(true);
  const [products, setProducts] = useState({ items: [] });

  useEffect(() => {
    axios
      .get("http://localhost:3000/products")
      .then((response) => {
        setProducts({ items: response.data });
        isLoading(true);
      })
      .catch((error) => {
        console.log("error is :", error);
      });
  }, []);

  const setAllProducts = () => {
    axios
      .get("http://localhost:3000/products/allProducts")
      .then((response) => {
        setProducts({ items: response.data });
        isLoading(true);
        setLoad(false);
      })
      .catch((error) => {
        console.log("error is :", error);
      });
  };
  return loading === false ? (
    <div>
      <NavBar type="product" />
      <div className={Styles_1.topGrid}>
        <div className={Styles_1.cardborderTop}>___</div>
        <div className={Styles_1.cardHeading}>Our Products</div>
        <div className={Styles_1.imageSub_heading}>
          Get the best of our Gym products cheaply
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
            type="Oval"
            color="#00BFFF"
            height={50}
            width={70}
            timeout={1000000} //1000 secs
          />
        </span>
        <Fotter />
      </div>
    </div>
  ) : (
    <div style={{ backgroundColor: "rgb(240, 245, 245)" }}>
      <NavBar type="product" />
      <button className={Styles.myCartButton}>
        <span style={{ fontSize: "2.4vw", paddingTop: "0.9vw" }}>
          <FaCartArrowDown />
        </span>{" "}
        <span
          style={{
            paddingTop: "1vw",
            fontFamily: '"Anton", sans-serif',
            letterSpacing: "0.05cm",
            fontWeight: "lighter",
          }}
          onClick={() => history.push("/cart")}
        >
          &nbsp;&nbsp;My Cart
        </span>
      </button>
      <div className={Styles_1.topGrid}>
        <div className={Styles_1.cardborderTop}>___</div>
        <div className={Styles_1.cardHeading}>Our Products</div>
        <div className={Styles_1.imageSub_heading}>
          Get the best of our Gym products cheaply
        </div>
      </div>

      <div className={Styles.products}>
        {products.items.map(({ name, price, type }) => (
          <SingleProduct name={name} price={price} prod={type} />
        ))}
      </div>
      {load === true ? (
        <button
          type="button"
          style={{ marginTop: "-5vw", marginLeft: "42vw", marginBottom: "4vw" }}
          className={Styles_1.loadMore}
          onClick={setAllProducts}
        >
          Load More
        </button>
      ) : (
        console.log("")
      )}
      <Fotter />
    </div>
  );
}
