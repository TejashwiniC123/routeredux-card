import React, { Component } from "react";
import "./Card3.css";
import { Link } from "react-router-dom";
export default class Card3 extends Component {
  render() {
    return (
      <div class="card3">
        <img src={this.props.logo} alt="Avatar" class="avatar" />

        <p class="title">{this.props.login}</p>
        <button class="role" onClick={() => this.onClick(this.props.url)}>
          uxdesigner
        </button>
      </div>
    );
  }
}
