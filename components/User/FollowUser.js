import React, { Component } from "react";
import { Button } from "semantic-ui-react";
import withAuth from "../../HOCs/withAuth";

const FollowUser = (props) => {
    return (
      <Button onClick={() => props.follow(props.user._id, props.followUser._id)} size="mini" floated="right">
        Follow
      </Button>
    );
}

export default withAuth(FollowUser);
