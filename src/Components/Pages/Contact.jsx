import React, { useRef, useState /*, { useState } */ } from "react";
import emailjs from "emailjs-com";
import styled from "styled-components";

export default function Contact() {
  const [mailSent, isMailSent] = useState(false);

  const form = useRef();
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_bd9rsvc",
        "template_88i1uea",
        form.current,
        "2DEifTVyVNAAoXmob"
      )
      .then(
        (result) => {
          isMailSent(true);
          setTimeout(() => {
            isMailSent(false);
          }, 2000);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }


  return (
    <>
      <ContactPageContent active={true}>
        <h2>Hello, nice to meet you!</h2>
        <form ref={form} action="" onSubmit={sendEmail}>
          <div className="formWord">
            <input
              className="input100"
              type="text"
              placeholder="Name:"
              name="name"
              required
              pattern="[a-zA-Z\s]+"
            />
            <br />
            <input
              className="input100"
              type="text"
              placeholder="Phone:"
              name="phone"
              pattern="[0-9+\s]+"
            />
            <br />
            <input
              className="input100"
              type="text"
              placeholder="Email:"
              name="email"
              required
              pattern="^\S+@\S+\.\S+$"
            />
          </div>
          <textarea
            name="message"
            placeholder="Message content:"
            required
            rows="4"
            cols="50"
          ></textarea>
          <br />
          <input className="submitButton" type="submit" value="Submit" />
        </form>
        <div className={`emailSentBase ${mailSent === true && "emailSent"}`}>
          {" "}
          Email sent successfully!{" "}
        </div>
      </ContactPageContent>
    </>
  );
}

const ContactPageContent = styled.div`
  background-color: black;
  color: green;
  font-family: KlaptArabic;
  height: 100vh;
  text-align: center;
  vertical-align: middle;
  width: 100vw;
  font-size: 2vmin;

  color: ${(p) => (p.active ? "white" : "green")};

h2 {
  padding-bottom: 40px;
}

  textarea {
    background-color: inherit;
    border-color: green;
    color: green;
    font-family: KlaptArabic;
    font-weight: bolder;
    height: 25vh;
    width: 70vmin;
    font-size: 2vmin;
  }

  .submitButton {
    margin-top: 15px;
  }

  input {
    font-family: KlaptArabic;
    font-weight: bolder;
    text-align: center;
    background-color: black;
    color: green;
    border-color: green;
    margin-bottom: 1em;
    height: 5vh;
    width: 15%;
    font-size: 2vmin;
    &:invalid {
      color: red !important;
      font-weight: bolder;
    }
    .submitButton {
      height: 5vh;
      width: 10%;
      font-size: 2vmin;
    }
  }

  .formWord {
    position: relative;
    width: 100%;
    justify-content: center;
  }

  .emailSentBase {
    background-color: black;
    position: relative;
    opacity: 0;
    transition: 2s;
  }
  .emailSent {
    font-weight: bolder;
    background-color: black;
    opacity: 1;
  }
`;
