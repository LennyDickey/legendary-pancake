import React from "react";
import "./styles.css";

class Contact extends React.Component {
  
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        contact: []
      };
    }
  
    componentDidMount() {
      fetch("/contact")
        .then(res => res.json())
        .then(
          data => {
            console.log("data.contact - ", data);
            this.setState({
              isLoaded: true,
              contact: data
            });
          },
          error => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        );
    }
    render() {
      const { error, isLoaded, contact } = this.state;

    return (
      <>
        <div id="con">
          <h2>Contact Us:</h2>
          <form action="">
            <section className="left">
              <div className="input-container">
                <label htmlFor="name">Name</label>
                <input type="text" required />
              </div>
              <div className="input-container">
                <label htmlFor="age" required>
                  Age
                </label>
                <input type="text" required />
              </div>
              <div className="input-container">
                <label htmlFor="phone">Phone</label>
                <input type="text" required />
              </div>
              <div className="input-container">
                <label htmlFor="email">Email</label>
                <input type="text" required />
              </div>
            </section>
            <section className="right">
              <div className="input-container">
                <label htmlFor="address">Address 1</label>
                <input type="text" required />
              </div>
              <div className="input-container">
                <label htmlFor="subject">Subject</label>
                <input type="text" required />
              </div>
              <div className="input-container">
                <label htmlFor="comments">Comments</label>
                <textarea name="comments" id="" required />
              </div>
            </section>
            <div className="send-container">
              <input type="submit" value="Send" onClick="return true" />
              {/* <br/> */}
            </div>
          </form>
        </div>
        <br></br>
        {contact.map((contact, index) => (

        <div className="container">
          <div id="carouselContent" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner" role="listbox">
            {/* {contact.map((contact, index) => ( */}

              <div className="carousel-item active text-center p-4">
                <p>"{contact.comment}"</p>
                <p>
                  <font>{contact.name}</font>
                </p>
              </div>
              <div className="carousel-item text-center p-4">
                <p>"Second quote goes here."</p>
                <p>
                  <font>First Last</font>
                </p>
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#carouselContent"
              role="button"
              data-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselContent"
              role="button"
              data-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
        )
        )}
      </>
    );
  }
}

export default Contact;
