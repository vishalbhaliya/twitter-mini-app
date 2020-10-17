import React from "react";
import { Form, TextArea } from "semantic-ui-react";
import withTweet from "../../HOCs/withTweet";
import CreateTweet from "../CreateTweet/CreateTweet";
import withLayout from "../Layout/withLayout";
import TweetFeed from "./TweetFeed";

class HomeContainer extends React.Component {
  render() {
    return (
      <div className="home-flex">
        <CreateTweet {...this.props} />
        <TweetFeed {...this.props} />
      </div>
    );
  }
}

export default withLayout(withTweet(HomeContainer));
