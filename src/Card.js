import React, { Component } from "react";
import Card1 from "./component/Card1";
import logo1 from "./image/16.jpg";
import logo2 from "./image/13.jpg";
export default class Card extends Component {
  componentWillMount() {
    this.props.dataUser();
  }
  render() {
    return (
      <div>
        <div>Redux training</div>
        <hr />
        {this.props.users &&
          this.props.users.userData &&
          this.props.users.userData.length > 0 &&
          this.props.users.userData.map(user => {
            return (
              <Card1
                history={this.props.history}
                logo={logo1}
                url={user.url}
                getprofile={this.props.getProfile}
                header1={user.id}
                foot1={"Democractic Republic of the congo"}
                locationlogo2={logo2}
                link1={user.login}
              />
            );
          })}
      </div>
    );
  }
}
