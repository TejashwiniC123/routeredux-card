import React, { Component } from "react";
import "./Card1.css";
export default class Card1 extends Component {
  onClick = url => {
    this.props.history.push("/Profile");
    this.props.getprofile(url);
  };
  render() {
    return (
      <div class="container">
        <img src={this.props.logo} alt="Snow" class="image" />

        <div class="bottom-left">
          <h1>{this.props.header1}</h1>

          <div class="icon">
            <a href="https://en.wikipedia.org/wiki/Republic_of_the_Congo">
              <img
                src={this.props.locationlogo2}
                alt="location"
                style={{ width: "5%", height: "5%" }}
              />
            </a>

            {this.props.foot1}
          </div>
        </div>
        <div class="top-left">
          <button class="role" onClick={() => this.onClick(this.props.url)}>
            Domestic
          </button>
        </div>
      </div>
    );
  }
}
