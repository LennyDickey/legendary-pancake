import React from "react";
import "./styles.css";
import { getHashes } from "crypto";

export default class Dump extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      products: []
    };
  }

  contactDump() {
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
    const { error, isLoaded, products } = this.state;

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return contactDump(contact)
    }
  }
}
