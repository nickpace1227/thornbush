import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { Wrapper } from "./styles.js";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [validName, setValidName] = useState("valid-input");
  const [validEmail, setValidEmail] = useState("valid-input");
  const [validMessage, setValidMessage] = useState("valid-message");
  const [validForm, setValidForm] = useState(false);

  const contactMessage = {
    from_name: name,
    reply_to: email,
    message,
  };

  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  const sendEmail = (e) => {
    e.preventDefault();

      if (name === "") {
        setValidName("invalid-input")
      };

      if (!email.match(emailRegex) || email === "") {
        setValidEmail("invalid-input")
      };

      if (message === "") {
        setValidMessage("invalid-message")
      };

      if (name !== "") {
        setValidName("valid-input")
      };

      if (email.match(emailRegex)) {
        setValidEmail("valid-input")
      };

      if (message !== "") {
        setValidMessage("valid-message")
      };

      if (name !== "" && email !== "" && email.match(emailRegex) && message !== "") {

      emailjs
        .send(
          "service_kbie0nm",
          "template_6v6pq99",
          contactMessage,
          "A50rxTr5mug440osn"
        )
        .then(
          function (response) {
            console.log("SUCCESS!", response.status, response.text);
          },
          function (error) {
            console.log("FAILED...", error);
          }
        );
      setValidName("valid-input");
      setValidEmail("valid-input");
      setValidMessage("valid-message");
      setValidForm(true);
    }
  }

  return (
    <Wrapper>
      <body className="contact-page">
        <h1>Feel the need to reach out?</h1>
        <div className="contact-explanation">
          If you like my portfolio and want to reach out for a print or a
          commission, feel free to fill out the contact form below. I'll get
          back to you as soon as I can.
        </div> 
        <input
          className={validName}
          type="text"
          placeholder="Name"
          name="from_name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className={validEmail}
          type="email"
          placeholder="Contact Email"
          name="reply_to"
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          className={validMessage}
          placeholder="Your Question/Commission/Print Details/Love Letter"
          name="message"
          onChange={(e) => setMessage(e.target.value)}
        />
        <button className="contact-button" type="button" onClick={sendEmail}>
          Submit
        </button>
        {validForm ? 
        <div className="thank-you-message">Thanks for the message. We'll get back to you as soon as we can!</div> : <div></div>}
      </body>
    </Wrapper>
  );
}
