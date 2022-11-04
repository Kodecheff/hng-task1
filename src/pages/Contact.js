import React from "react";

function Contact() {
  return (
    <div className="contact-page">
      <h1>Contact Me</h1>
      <p>Hi there, contact me to ask me about anything you have in mind</p>
      <form>
        <div className="row mt-3">
          <div className="col d-flex flex-column">
            <label>First name</label>
            <input
              type={"text"}
              id="first_name"
              placeholder="Enter your first name"
            />
          </div>

          <div className="col d-flex flex-column">
            <label>Last name</label>
            <input
              type={"text"}
              id="last_name"
              placeholder="Enter your last name"
            />
          </div>
        </div>

        <div className="row mt-3">
          <div className="col d-flex flex-column">
            <label>Email</label>
            <input type={"email"} id="email" placeholder="yourname@email.com" />
          </div>
        </div>

        <div className="row mt-3">
          <div className="col d-flex flex-column">
            <label>Message</label>
            <textarea
              id="message"
              placeholder="Send me a message and I'll reply you as soon as possible"
              rows={5}
            ></textarea>
          </div>
        </div>

        <div className="row mt-3">
          <div className="col d-flex">
            <input type={"checkbox"} />
            <label>
              You agree to providing your data to Pascal who may contact me.
            </label>
          </div>
        </div>

        <button type="submit" id="btn__submit" className="mt-3">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
