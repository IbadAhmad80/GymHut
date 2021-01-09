import React, { useState } from "react";
import pant_1 from "../assets/pant_1.jpeg";
import pant_2 from "../assets/pant_2.jpg";
import pant_3 from "../assets/pant_3.jpg";
import shirt_1 from "../assets/shirt_1.jpg";
import shirt_2 from "../assets/shirt_2.jpg";
import shirt_3 from "../assets/shirt_3.jpg";
import cap_1 from "../assets/cap_1.jpg";
import cap_2 from "../assets/cap_2.jpg";
import cap_3 from "../assets/cap_3.jpeg";
import hoodie_1 from "../assets/hoodie_1.png";
import hoddie_2 from "../assets/hoddie_2.jpg";
import hoddie_3 from "../assets/hoddie_3.jpg";
import protien_1 from "../assets/protien_1.jpg";
import protien_2 from "../assets/protien_2.jpg";
import protien_3 from "../assets/protien_3.jpg";
import { FaCartArrowDown } from "react-icons/fa";
import Styles from "./singleProduct.module.css";
import { useHistory } from "react-router-dom";

import { BsStar, BsStarHalf, BsStarFill } from "react-icons/bs";
import Rodal from "rodal";
import ProductRodal from "./productRodal";
import { useDispatch, useSelector } from "react-redux";
import { add } from "./actions";

export default function SingleProduct({ prod, name, price, buyers }) {
  const [state, setState] = useState({ visible: false });
  const products = useSelector((state) => state.product.products);
  const dispatch = useDispatch();
  const [status, setStatus] = useState("");
  const history = useHistory();

  const show = () => {
    setState({ visible: true });
  };

  const hide = () => {
    setState({ visible: false });
    setStatus("added");
  };

  const addToCart = () => {
    dispatch(add(name, price, prod));
    show();
  };
  return (
    <div style={{}}>
      <div
        className={Styles.post}
        style={{
          position: "relative",
          cursor: "pointer",
          backgroundColor: "white",
          width: "300px",
          height: "400px",
          marginTop: "6vw",
          marginLeft: "5vw",
          marginRight: "1vw",
          // border: "1px solid rgb(102,102,102)",
          boxShadow: "3px 3px 3px black",
        }}
      >
        <img
          style={{
            marginTop: "3vw",
            width: "290px",
            height: "220px",
            backgroundAttachment: "cover",
            backgroundSize: "100% 100%",
            backgroundRepeat: "norepeat",
          }}
          onClick={() =>
            history.push({
              pathname: "/productDetail",
              name: name,
              price: price,
              prod: prod,
              buyers: buyers,
            })
          }
          src={
            prod === "pant_1"
              ? pant_1
              : prod === "pant_2"
              ? pant_2
              : prod === "pant_3"
              ? pant_3
              : prod === "shirt_1"
              ? shirt_1
              : prod === "shirt_2"
              ? shirt_2
              : prod === "shirt_3"
              ? shirt_3
              : prod === "cap_1"
              ? cap_1
              : prod === "cap_2"
              ? cap_2
              : prod === "cap_3"
              ? cap_3
              : prod === "hoddie_1"
              ? hoodie_1
              : prod === "hoddie_2"
              ? hoddie_2
              : prod === "hoddie_3"
              ? hoddie_3
              : prod === "protien_1"
              ? protien_1
              : prod === "protien_2"
              ? protien_2
              : protien_3
          }
        />
        <div className={Styles.post_s}>
          <div>
            <h2
              className={
                products.includes(name) ? Styles.added : Styles.yetToBe
              }
              onClick={addToCart}
            >
              {products.includes(name) ? "Added" : <FaCartArrowDown />}
            </h2>
          </div>
        </div>
        <div className={Styles.detail}>
          <div className={Styles.name}>{name}</div>
          <div className={Styles.price}>{price} $</div>
        </div>
        <div
          style={{
            marginTop: "0vw",
            paddingLeft: "2vw",
            marginBottom: "2vw",
            display: "flex",
          }}
        >
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          {prod.split("_")[0] === "pant" ||
          prod.split("_")[0] === "shirt" ||
          prod.split("_")[0] === "hoddie" ? (
            <BsStarHalf />
          ) : (
            <BsStarFill />
          )}
          {prod.split("_")[0] === "pant" ||
          prod.split("_")[0] === "shirt" ||
          prod.split("_")[0] === "hoddie" ? (
            <BsStar />
          ) : (
            <BsStarFill />
          )}
        </div>
      </div>
      {status !== "added" ? (
        <Rodal
          height={520}
          width={350}
          visible={state.visible}
          onClose={hide}
          enterAnimation={"zoom"}
          duration={700}
          leaveAnimation={"zoom"}
        >
          <h2
            style={{
              fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
              fontsize: "1.2vw",
              fontWeight: "bolder",
              textAlign: "center",
            }}
          >
            Added to Cart
          </h2>
          <ProductRodal
            product={name}
            price={price}
            hide_Rodal={hide}
            prod={prod}
            buyers={buyers}
          />
        </Rodal>
      ) : (
        console.log("Item already in the CART")
      )}
    </div>
  );
}
