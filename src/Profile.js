import React, { Component } from "react";
import Card3 from "./component/Card3";
export default class User extends Component {
  render() {
    console.log("HERE pro", this.props);
    return (
      <div>
        <div>profile</div>
        <hr />
        {this.props.userData1 && (
          <Card3
            logo={this.props.userData1.avatar_url}
            login={this.props.userData1.login}
            url={this.props.userData1.url}
            history={this.props.userData1.history}
          />
        )}
      </div>
    );
  }
}
