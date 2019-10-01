import React from "react";
import "./styles.css";

class Contact extends React.Component {
  render() {
    return (
      <>
        <br />

        <h2>Contact Us:</h2>
        <form action="">
          <section class="left">
            <div class="input-container">
              <label for="name">Name</label>
              <input type="text" required />
            </div>
            <div class="input-container">
              <label for="age" required>
                Age
              </label>
              <input type="text" required />
            </div>
            <div class="input-container">
              <label for="phone">Phone</label>
              <input type="text" required />
            </div>
            <div class="input-container">
              <label for="email">Email</label>
              <input type="text" required />
            </div>
          </section>
          <section class="right">
            <div class="input-container">
              <label for="address">Address 1</label>
              <input type="text" required />
            </div>
            <div class="input-container">
              <label for="subject">Subject</label>
              <input type="text" required />
            </div>
            <div class="input-container">
              <label for="comments">Comments</label>
              <textarea name="comments" id="" required />
            </div>
          </section>
          <div class="send-container">
            <input type="submit" value="Send" onclick="return true" />
          </div>
        </form>
      </>
    );
  }
}

export default Contact;
