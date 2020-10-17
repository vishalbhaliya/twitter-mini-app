import React, { Component } from "react";
import { Image } from "semantic-ui-react";

class UserInfoSidebar extends Component {
  render() {
    return (
      <div className="user-info">
        <Image src="/images/home.svg" />
        <div style={{ marginLeft: "10px" }}>Home</div>
      </div>
    );
  }
}

export default UserInfoSidebar;
