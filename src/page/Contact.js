import React from "react";
import PizzaLeft from "../asset/pizzaLeft.jpg";
import "../styles/Contact.css";
function Contact() {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${PizzaLeft})` }}
      ></div>
      <div className="rightSide">
        <h1>CONTACT US</h1>
        <form id="contact-form" method="POST">
          <label htmlFor="name">FULL NAME</label>
          <input
            name="name"
            placeholder="Enter fullName..."
            type="text"
          ></input>
          <label htmlFor="email">EMAIL</label>
          <input
            name="email"
            placeholder="Enter yourEmail..."
            type="email"
          ></input>
          <label htmlFor="message">Message</label>
          <textarea
            rows={6}
            placeholder="Enter your Message..."
            name="message"
            required
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
