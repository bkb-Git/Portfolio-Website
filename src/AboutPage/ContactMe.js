import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons";
import React from "react";

export default function ContactMe(props) {
  const { display } = props;

  return (
    <div>
      <h2
        className="header"
        style={{ display: display === "contact" ? "none" : "block" }}
      >
        Contact <span>Me</span>
      </h2>
      <FontAwesomeIcon icon={faEnvelopeOpenText} className="fa-10x" />
      <form action="">
        <section>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            autoComplete="off"
            autoFocus={true}
            required
          ></input>

          <input
            type="text"
            id="subject"
            name="text"
            placeholder="Subject"
            autoComplete="off"
            required
          ></input>

          <input
            type="text"
            id="email"
            name="email"
            placeholder="E-mail"
            autoComplete="off"
            required
          ></input>
        </section>

        <textarea
          id="comment"
          name="comment"
          placeholder="Comment..."
          autoComplete="off"
        ></textarea>

        <input type="submit" value="Submit"></input>
      </form>
    </div>
  );
}
