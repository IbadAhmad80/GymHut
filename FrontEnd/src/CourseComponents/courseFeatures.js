import React from "react";
import Styles from "./courseFeatures.module.css";
import Rodal from "rodal";
import SignInForm from "./form";
import Styles_1 from "../MembershipsComponents/form.module.css";
// include styles
import "rodal/lib/rodal.css";
import "./modalStyles.css";

export default class Features extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visible: false };
  }

  show() {
    this.setState({ visible: true });
  }

  hide() {
    this.setState({ visible: false });
  }

  render() {
    if (this.props.payment !== "set") {
      return (
        <div>
          <h3 className={Styles.featureHeading}>Class Features</h3>
          <h3 className={Styles.categoryHeading}>
            Category:
            <span style={{ paddingLeft: "2vw", color: "rgb(134, 128, 128)" }}>
              {this.props.category}
            </span>
          </h3>
          <h3 className={Styles.durationHeading}>
            Duration:
            <span style={{ paddingLeft: "2vw", color: "rgb(134, 128, 128)" }}>
              {this.props.duration} days
            </span>
          </h3>
          <h3 className={Styles.studentsHeading}>
            Students:
            <span style={{ paddingLeft: "3vw", color: "rgb(134, 128, 128)" }}>
              {this.props.students}
            </span>
          </h3>
          <h3 className={Styles.shiftHeading}>
            Shift:
            <span style={{ paddingLeft: "4vw", color: "rgb(134, 128, 128)" }}>
              {this.props.shift}
            </span>
          </h3>
          <h3 className={Styles.priceHeading}>
            Price:
            <span style={{ paddingLeft: "4vw", color: "rgb(134, 128, 128)" }}>
              {this.props.price} $
            </span>
          </h3>
          <button
            className={Styles.joinNow}
            type="button"
            onClick={this.show.bind(this)}
          >
            Join Now
          </button>
          <Rodal
            height={340}
            width={450}
            visible={this.state.visible}
            onClose={this.hide.bind(this)}
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
              Course Enrollment
            </h2>

            <SignInForm
              type={"course_1"}
              membership={"none"}
              payment={"non-set"}
              price={this.props.price}
              course={this.props.name}
            />
          </Rodal>
        </div>
      );
    } else {
      return (
        <div>
          {" "}
          <button
            style={{
              padding: "0.8vw",
              float: "right",
            }}
            className={Styles_1.not_member}
            onClick={this.show.bind(this)}
            type="button"
          >
            Already a User?
          </button>
          <Rodal
            height={350}
            width={550}
            visible={this.state.visible}
            onClose={this.hide.bind(this)}
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
              Payment SetUp
            </h2>
            <SignInForm
              type={"course"}
              membership={this.props.membership}
              payment={"set"}
              price={this.props.price}
              course={this.props.name}
            />
          </Rodal>
        </div>
      );
    }
  }
}
