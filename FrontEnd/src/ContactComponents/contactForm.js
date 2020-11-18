import React, { useState } from "react";
import Styles from "./contactForm.module.css";
import { FaFacebookF } from "react-icons/fa";
import { GrTwitter } from "react-icons/gr";
import { IoLogoGoogleplus } from "react-icons/io";

export default function ContactForm() {
  const [firstName, setFirstName] = useState("First Name");
  const [lastName, setLastName] = useState("Last Name");
  const [contact, setContact] = useState("Contact");
  const [email, setEmail] = useState("Email");
  const [message, setMessage] = useState("Message ..");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log("Your Email :", email);
    console.log("Your Name :", firstName + " " + lastName);
    console.log("Your contact", contact);
    console.log("Your Message :", message);
    console.log("object", evt);
  };
  return (
    <div>
      <div className={Styles.mainGrid}>
        <div className={Styles.formborderTop}>___</div>
        <div className={Styles.formHeading}>Let's Talk</div>
        <div className={Styles.formSub_heading}>
          Send us Query any time you carve it
        </div>

        <form className={Styles.form} onSubmit={handleSubmit}>
          <input
            className={Styles.first_name}
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            className={Styles.last_name}
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <input
            className={Styles.email}
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className={Styles.contact}
            type={Number}
            value={contact}
            onChange={(e) => setContact(e.target.value)}
          />
          <textarea
            className={Styles.text_area}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button className={Styles.submit_button} type="submit" value="Submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
