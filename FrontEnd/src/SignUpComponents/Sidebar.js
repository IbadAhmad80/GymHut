import React, { useState } from "react";
import styled from "styled-components";
import logo from "../assets/logo.svg";
import Input from "./Input";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { signIn, logIn } from "./actions";

const Sidebar = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  console.log("recent page", location.recentPage);
  const history = useHistory();

  const [data, setData] = useState({
    membership: "none",
    email: "",
    password: "",
    fullName: "",
    phoneNumber: "921111111111",
  });

  const [signInData, setSignInData] = useState({
    email: "",
    password: "",
  });
  const setSignUp = (event) => {
    event.preventDefault();
    console.log("object :", event);
    console.log(data.email, data.fullName, data.phoneNumber, data.password);
    axios
      .post("http://localhost:3000/members", data)
      .then((response) => {
        toast("Account has been created successfully", {
          type: "success",
        });
        console.log("Response from server :", response);
        dispatch(signIn(response.data.accessToken, response.data.userName));
        history.push(location.recentPage);
      })
      .catch((error) => {
        console.log(`error in   : ${error}`);
        if (error.response) {
          toast(`${error.response.data}`, { type: "error" });
        }
      });
  };

  const setSignIn = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3000/members/signIn", signInData)
      .then((response) => {
        toast("Account has been accessed successfully", {
          type: "success",
        });
        console.log("Response from server :", response);
        dispatch(logIn(response.data.accessToken, response.data.user));
        history.push(location.recentPage);
        //   axios
        //     .get("http://localhost:3000/members/authorize", {
        //       headers: {
        //         Authorization: `Bearer ${response.data.accessToken}`,
        //       },
        //     })
        //     .then((response) => {
        //       console.log("Id name:", response.data);
        //     });
        //   history.push(location.recentPage);
      })
      .catch((error) => {
        if (error.response) {
          toast(`${error.response.data}`, { type: "error" });
        }
      });
  };

  return location.type === "signup" ? (
    <Container>
      <LogoWrapper>
        <img src={logo} alt="" />
        <h3>
          Gym <span>Hut</span>
        </h3>
      </LogoWrapper>

      <h3>Sign Up</h3>
      <Form onSubmit={setSignUp}>
        <Input
          placeholder="Full Name"
          value={data.fullName}
          onChange={(e) => setData({ ...data, fullName: e.target.value })}
        />
        <Input
          type="number"
          placeholder="Contact No"
          value={data.phoneNumber}
          onChange={(e) => setData({ ...data, phoneNumber: e.target.value })}
        />
        <Input
          type="email"
          placeholder="Email"
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />
        <Input
          type="password"
          placeholder="Password"
          value={data.password}
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />

        <button type="submit" value="Submit">
          Sign Up
        </button>
      </Form>
      <div>
        <Terms>
          By signing up, I agree to the Privacy Policy <br /> and Terms of
          Service
        </Terms>
        <h4>
          Already have an account?{" "}
          <span
            onClick={() =>
              history.push({
                pathname: "./signIn",
                type: "signin",
                recentPage: location.recentPage,
              })
            }
          >
            Sign In
          </span>
        </h4>
      </div>
    </Container>
  ) : (
    <Container>
      <LogoWrapper>
        <img src={logo} alt="" />
        <h3>
          Gym <span>Hut</span>
        </h3>
      </LogoWrapper>
      <Form onSubmit={setSignIn}>
        <h3>Sign In</h3>
        <Input
          type="email"
          placeholder="Email"
          value={signInData.email}
          onChange={(e) =>
            setSignInData({ ...signInData, email: e.target.value })
          }
        />
        <Input
          type="password"
          placeholder="Password"
          value={signInData.password}
          onChange={(e) =>
            setSignInData({ ...signInData, password: e.target.value })
          }
        />

        <button>Sign In</button>
      </Form>
      <div>
        <Terms>
          By signing in, I agree to the Privacy Policy <br /> and Terms of
          Service
        </Terms>
        <h4>
          Dosn't have an account yet?{"  "}
          <span
            onClick={() =>
              history.push({
                pathname: "./signUp",
                type: "signup",
                recentPage: location.recentPage,
              })
            }
          >
            Sign Up
          </span>
        </h4>
      </div>
    </Container>
  );
};

const Terms = styled.p`
  padding: 0 1rem;
  text-align: center;
  font-size: 12px;
  color: gray;
  font-weight: 300;

  font-family: "Montserrat", sans-serif;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  h3 {
    color: #666666;
    margin-bottom: 2rem;
  }

  button {
    width: 75%;
    max-width: 350px;
    min-width: 250px;
    height: 40px;
    border: none;
    margin: 1rem 0;
    box-shadow: 0px 14px 9px -15px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    background-image: linear-gradient(tomato, orange);
    color: #fff;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease-in;

    &:hover {
      transform: translateY(-3px);
    }
  }
`;

const LogoWrapper = styled.div`
  img {
    height: 6rem;
  }

  h3 {
    color: #ff8d8d;
    text-align: center;
    font-size: 22px;
  }

  span {
    color: #5dc399;
    font-weight: 300;
    font-size: 18px;
  }
`;

const Container = styled.div`
  min-width: 400px;

  background-color: rgba(255, 255, 255, 0.8);
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 0 2rem;

  @media (max-width: 900px) {
    width: 100vw;
    position: absolute;
    padding: 0;
  }

  h4 {
    color: black;
    font-weight: bold;
    font-size: 16px;
    margin-top: 2rem;
    font-family: "Montserrat", sans-serif;

    span {
      color: maroon;
      cursor: pointer;
      fontsize: 16px;
      font-family: "Montserrat", sans-serif;
    }
  }
`;

export default Sidebar;
