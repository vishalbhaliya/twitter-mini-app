import React from "react";
import { Button, Card, Image } from "semantic-ui-react";
import styled from "styled-components";
import moment from "moment";
import FollowUser from "../User/FollowUser";
const StyledCard = styled(Card)`
  width: 100%;
  &.ui.card,
  .ui.cards > .card {
    width: 100%;
  }
`;

const getFollowingStatus = (data) => {
  let isFollowing = false;
  const { tweet, user } = data;
  if (tweet && tweet.user && user) {
    if (
      Array.isArray(tweet.user.following) &&
      tweet.user.following.includes(user._id)
    ) {
      isFollowing = true;
    }
    if (!isFollowing) {
      return (
        <FollowUser followUser={tweet.user} user={user} />
      );
    }
  }
};
const Tweet = (props) => (
  <StyledCard>
    <StyledCard.Content>
    {getFollowingStatus(props)}
      <StyledCard.Header>
        {props.tweet.user ? props.tweet.user.name : "Test"}
      </StyledCard.Header>
      <StyledCard.Meta>
        {moment(props.tweet.createdAt).format("MMM DD' YY HH:MM")}
      </StyledCard.Meta>
      <StyledCard.Description>{props.tweet.tweet}</StyledCard.Description>
    </StyledCard.Content>
  </StyledCard>
);

export default Tweet;
