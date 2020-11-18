import React from "react";
import Styles from "./membershipCards.module.css";
import { BiDollar } from "react-icons/bi";
import Rodal from "rodal";

// include styles
import "rodal/lib/rodal.css";
import MemberShipForm from "./form";

export default class MembersgipCards extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visible: false };
  }

  show() {
    this.setState({ visible: true });
  }

  hide() {
    console.log("hide function");
    this.setState({ visible: false });
  }

  render() {
    const heading_style = {
      backgroundColor: "black",
      color: "white",
      fontSize: "1.2vw",
      paddingLeft: "0.2vw",
      paddingRight: "0.2vw",
      letterSpacing: "0.05cm",
      marginLeft: "3vw",
    };

    return (
      <div>
        <div className={Styles.mainGrid}>
          <div className={Styles.membership_1}>
            <h2>
              <span
                className={Styles.heading_1}
                style={
                  this.props.heading_1 === "" ? console.log("") : heading_style
                }
              >
                {this.props.heading_1}
              </span>
              <span
                className={Styles.mainHeading}
                style={
                  this.props.heading_1 === ""
                    ? { marginLeft: "3vw" }
                    : { marginLeft: "1vw" }
                }
              >
                {this.props.heading_2}
              </span>
            </h2>
          </div>
          <h2>
            <BiDollar className={Styles.dollar_logo} />
            <span className={Styles.priceValue}>{this.props.price}</span>
          </h2>
          <h2>
            <span
              className={Styles.logoColor}
              style={{ color: this.props.logo_1_color }}
            >
              {this.props.logo_1_color === "red" ? (
                <this.props.TiTickOutline />
              ) : (
                <this.props.ImCross />
              )}
            </span>
            <span
              className={Styles.services}
              style={{ color: this.props.service_1_color }}
            >
              {this.props.service_1}
            </span>
          </h2>
          <h2 style={{ marginTop: "0.5vw" }}>
            <span
              className={Styles.logoColor}
              style={{ color: this.props.logo_2_color }}
            >
              {this.props.logo_2_color === "red" ? (
                <this.props.TiTickOutline />
              ) : (
                <this.props.ImCross />
              )}
            </span>
            <span
              className={Styles.services}
              style={{ color: this.props.service_2_color }}
            >
              {this.props.service_2}
            </span>
          </h2>
          <h2 style={{ marginTop: "0.3vw" }}>
            <span
              className={Styles.logoColor}
              style={{ color: this.props.logo_3_color }}
            >
              {this.props.logo_3_color === "red" ? (
                <this.props.TiTickOutline />
              ) : (
                <this.props.ImCross />
              )}
            </span>
            <span
              className={Styles.services}
              style={{ color: this.props.service_3_color }}
            >
              {this.props.service_3}
            </span>
          </h2>
          <h2 style={{ marginTop: "0.3vw" }}>
            <span
              className={Styles.logoColor}
              style={{ color: this.props.logo_4_color }}
            >
              {this.props.logo_4_color === "red" ? (
                <this.props.TiTickOutline />
              ) : (
                <this.props.ImCross />
              )}
            </span>
            <span
              className={Styles.services}
              style={{ color: this.props.service_4_color }}
            >
              {this.props.service_4}
            </span>
          </h2>
          <h2 style={{ marginTop: "0.3vw", marginBottom: "0.3vw" }}>
            <span
              className={Styles.logoColor}
              style={{ color: this.props.logo_5_color }}
            >
              {this.props.logo_5_color === "red" ? (
                <this.props.TiTickOutline />
              ) : (
                <this.props.ImCross />
              )}
            </span>
            <span
              className={Styles.services}
              style={{ color: this.props.service_5_color }}
            >
              {this.props.service_5}
            </span>
          </h2>
          <button
            className={Styles.buyNow}
            type="button"
            onClick={this.show.bind(this)}
            style={
              this.props.heading_1 === ""
                ? {
                    backgroundImage: "white",
                    color: "black",
                    border: "1px solid black",
                  }
                : {
                    backgroundImage: "linear-gradient(tomato, orange)",
                    color: "white",
                    border: "1px solid white",
                  }
            }
          >
            Buy Now
          </button>
          <Rodal
            height={470}
            width={550}
            visible={this.state.visible}
            onClose={this.hide.bind(this)}
            enterAnimation={"rotate"}
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
              Become a Full Time Member
            </h2>
            <MemberShipForm
              type="membership"
              membership={this.props.heading_2}
              hide={this.hide}
            />
          </Rodal>
        </div>
      </div>
    );
  }
}
