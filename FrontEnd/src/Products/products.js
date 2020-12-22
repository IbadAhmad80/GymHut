import React, { useState, useEffect } from "react";
import SingleProduct from "./singleProduct";
import Styles from "./products.module.css";
import NavBar from "../navbar";
import Fotter from "../footer";
import Styles_1 from "../MembershipsComponents/members.module.css";
import axios from "axios";
import Loader from "react-loader-spinner";
import { FaCartArrowDown } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import { useHistory } from "react-router-dom";

export default function Products() {
  const history = useHistory();
  const [values, setValues] = useState({ name: "" });
  const [loading, isLoading] = useState(false);
  const [load, setLoad] = useState(true);
  const [products, setProducts] = useState({ items: [] });
  const [value, setValue] = useState({ dropdown: "option" });

  const handleChange = (event) => {
    setValue({ dropdown: event.target.value });
    isLoading(false);
    setLoad(false);
    event.target.value === "Highest"
      ? axios
          .get(`http://localhost:3000/products/pricey`)
          .then((response) => {
            setProducts({ items: response.data });
            isLoading(true);
          })
          .catch((error) => {
            console.log("error is :", error);
          })
      : event.target.value === "Lowest"
      ? axios
          .get(`http://localhost:3000/products/cheapest`)
          .then((response) => {
            setProducts({ items: response.data });
            isLoading(true);
          })
          .catch((error) => {
            console.log("error is :", error);
          })
      : axios
          .get(`http://localhost:3000/products`)
          .then((response) => {
            setProducts({ items: response.data });
            isLoading(true);
            setLoad(true);
          })
          .catch((error) => {
            console.log("error is :", error);
          });
  };

  const handleSubmit = (event) => {
    alert("Your favorite {submit} flavor is: " + value.dropdown);
    event.preventDefault();
  };

  const getProductByName = () => {
    isLoading(false);
    setLoad(true);
    axios
      .get(`http://localhost:3000/products/${values.name}`)
      .then((response) => {
        setProducts({ items: response.data });
        setValues({ name: "" });
        isLoading(true);
      })
      .catch((error) => {
        console.log("error is :", error);
      });
  };

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
      <h6
        style={{
          marginTop: "3vw",
          textAlign: "center",
          fontSize: "1.6vw",
          fontWeight: "bolder",
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
      </h6>
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
          Get the best of our Gym merchandise cheaply
        </div>
      </div>

      <div className={Styles.getProducts}>
        <div className={Styles.searchBar}>
          <div className={Styles.search}>
            <input
              type="text"
              placeholder="Search By Name"
              className={Styles.search}
              value={values.name}
              onChange={(e) => setValues({ name: e.target.value })}
            />
          </div>
          <div className={Styles.searchLogo}>
            <BsSearch onClick={() => getProductByName()} />
          </div>
        </div>
        <div className={Styles.dropdownItem}>
          <form onSubmit={handleSubmit}>
            <label className={Styles.sortHeading}>
              Sort By:
              <select
                value={value.dropdown}
                onChange={handleChange}
                className={Styles.dropdown}
              >
                <option value="option">Select Type</option>
                <option value="Highest">Highest</option>
                <option value="Lowest">Lowest</option>
              </select>
            </label>
          </form>
        </div>
      </div>
      {/* <div><h6>No of Items in the Cart</h6><h5>{length}</h5></div> */}

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
          Load All
        </button>
      ) : (
        console.log("")
      )}
      <Fotter />
    </div>
  );
}
