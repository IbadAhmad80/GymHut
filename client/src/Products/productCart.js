import React, { useState, useEffect } from "react";
import Styles from "./productCart.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import MemberShipForm from "../MembershipsComponents/form";
import Rodal from "rodal";
import NavBar from "../navbar";
import Fotter from "../footer";
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
import axios from "axios";
import { BsFillTrashFill } from "react-icons/bs";
import StripeCheckout from "react-stripe-checkout";
import { incProd, decProd, removeProd, removeAll } from "./actions";
import "rodal/lib/rodal.css";
import { toast } from "react-toastify";
import "../CourseComponents/modalStyles.css";
toast.configure();

export default function ProductCart() {
  const [load, setLoad] = useState("");
  const history = useHistory();
  const product = useSelector((state) => state.product);
  const accountData = useSelector((state) => state.account.userName);

  const dispatch = useDispatch();
  const [state, setState] = useState({ visible: false });

  useEffect(() => {
    setLoad(Math.random());
  }, [accountData]);

  const show = () => {
    setState({ visible: true });
  };

  const hide = () => {
    setState({ visible: false });
  };

  const incrementProd = (name) => {
    dispatch(incProd(name));
    setLoad(Math.random());
  };

  const decrementProd = (name) => {
    dispatch(decProd(name));
    setLoad(Math.random());
  };

  const deleteProd = (name) => {
    dispatch(removeProd(name));
    setLoad(Math.random());
  };

  const deleteCart = () => {
    dispatch(removeAll());
    setLoad(Math.random());
  };

  const calculateBill = () => {
    let totalBill = 0;
    product.products.map(
      (prod, index) => (totalBill += parseInt(product.price[index]))
    );
    return totalBill;
  };

  const handleStripe = (token, _) => {
    // console.log(token);
    axios
      .put("https://gymhut.herokuapp.com/products/productCustomers", {
        productsData: product,
        email: accountData.userId,
      })
      .catch((error) => {
        if (error.response) {
          toast(`${error.response.data} in stripe payment`, {
            type: "error",
          });
        } else toast(`failed to make payment due to error`, { type: "error" });
      });
    axios
      .post("https://gymhut.herokuapp.com/products/productPayment", {
        token,
        totalPrice: calculateBill() + Math.ceil((calculateBill() * 2) / 100),
      })
      .then((response) => {
        const { status } = response.data;

        if (status === "success") {
          toast(`Success! Payment has been made`, {
            type: "info",
          });
          console.log("payment has been made");
        }
      })
      .catch((error) => {
        if (error.response) {
          toast(`${error.response.data} in stripe payment`, {
            type: "error",
          });
        } else toast(`failed to make payment due to error`, { type: "error" });
      });
  };
  return (
    <div>
      <NavBar type="product" />
      <div className={Styles.cartHeading}>
        {Object.entries(product.products).length === 0
          ? "Your Cart is Empty"
          : "Your Cart"}
      </div>
      {Object.entries(product.products).length !== 0 ? (
        <div>
          <h6 className={Styles.emptyCart} onClick={() => deleteCart()}>
            Empty Cart?
          </h6>
          <div className={Styles.cartMenu}>
            <div className={Styles.product}>PRODUCT</div>
            <div className={Styles.name}>NAME OF PRODUCT</div>
            <div className={Styles.price}>PRICE</div>
            <div className={Styles.quantity}>QUANITY</div>
            <div className={Styles.remove}>REMOVE</div>
          </div>

          {product.products.map((name, index) => (
            <div className={Styles.cartMenu_1} id={name}>
              <div className={Styles.product}>
                <img
                  style={{
                    width: "100px",
                    height: "100px",
                    backgroundAttachment: "cover",
                    backgroundSize: "100% 100%",
                    backgroundRepeat: "norepeat",
                  }}
                  src={
                    product.type[index] === "pant_1"
                      ? pant_1
                      : product.type[index] === "pant_2"
                      ? pant_2
                      : product.type[index] === "pant_3"
                      ? pant_3
                      : product.type[index] === "shirt_1"
                      ? shirt_1
                      : product.type[index] === "shirt_2"
                      ? shirt_2
                      : product.type[index] === "shirt_3"
                      ? shirt_3
                      : product.type[index] === "cap_1"
                      ? cap_1
                      : product.type[index] === "cap_2"
                      ? cap_2
                      : product.type[index] === "cap_3"
                      ? cap_3
                      : product.type[index] === "hoddie_1"
                      ? hoodie_1
                      : product.type[index] === "hoddie_2"
                      ? hoddie_2
                      : product.type[index] === "hoddie_3"
                      ? hoddie_3
                      : product.type[index] === "protien_1"
                      ? protien_1
                      : product.type[index] === "protien_2"
                      ? protien_2
                      : protien_3
                  }
                />
              </div>
              <div className={Styles.name_1}>{name}</div>
              <div className={Styles.price_1}>{product.price[index]}$</div>
              <div className={Styles.quantity_1}>
                <span
                  style={{
                    paddingRight: "0.8vw",
                    paddingLeft: " 0.8vw",
                    paddingTop: "0.6vw",
                    paddingBottom: "0.6vw",
                    border: "1px solid black ",
                    marginRight: "1vw",
                    cursor: "pointer",
                  }}
                  onClick={() => incrementProd(name)}
                >
                  +
                </span>
                {product.quantity[index]}
                <span
                  style={{
                    paddingRight: "0.8vw",
                    paddingLeft: " 0.8vw",
                    paddingTop: "0.6vw",
                    paddingBottom: "0.6vw",
                    border: "1px solid black ",
                    marginLeft: "1vw",
                    cursor: "pointer",
                  }}
                  onClick={() => decrementProd(name)}
                >
                  -
                </span>
              </div>
              <div className={Styles.remove_1}>
                <BsFillTrashFill onClick={() => deleteProd(name)} />
              </div>
            </div>
          ))}

          <div style={{ marginBottom: "6vw" }}>
            <h6 className={Styles.bill}>
              Calculated Bill : {calculateBill()}$
            </h6>
            <h6 className={Styles.bill}>
              Tax (5%) : {Math.ceil((calculateBill() * 5) / 100)}$
            </h6>
            <h6 className={Styles.bill}>
              Total Bill :{" "}
              {calculateBill() + Math.ceil((calculateBill() * 2) / 100)}$
            </h6>
            {accountData !== "" ? (
              <StripeCheckout
                stripeKey="pk_test_51HndUcEynMwgZp7ZbDkkWsib4j8KiQJSN1m0B5GyvLpbNBmKflvbEBOJvTkAOMrF8HVWttyYeg0h6cO4WgvPbgpv00bxeRO8cs"
                token={handleStripe}
                name={"Payment SetUp"}
                amount={
                  (calculateBill() + Math.ceil((calculateBill() * 2) / 100)) *
                  100
                }
              >
                <button className={Styles.paymentButton}>Pay with Card</button>
              </StripeCheckout>
            ) : (
              <div>
                <button className={Styles.paymentButton} onClick={show}>
                  Continue Payment
                </button>
                <Rodal
                  height={430}
                  width={550}
                  visible={state.visible}
                  onClose={hide}
                  enterAnimation={"flip"}
                  duration={500}
                  leaveAnimation={"slideUp"}
                >
                  <h2
                    style={{
                      fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
                      fontsize: "1.2vw",
                      fontWeight: "bolder",
                      textAlign: "center",
                    }}
                  >
                    Product Payment
                  </h2>
                  <MemberShipForm
                    type={"product"}
                    payment={"product"}
                    productsData={product}
                    accountData={accountData}
                    totalPrice={
                      calculateBill() + Math.ceil((calculateBill() * 2) / 100)
                    }
                  />
                </Rodal>
              </div>
            )}
          </div>
        </div>
      ) : (
        console.log("Your Cart is empty")
      )}

      <Fotter />
    </div>
  );
}
