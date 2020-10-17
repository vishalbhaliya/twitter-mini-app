import React from 'react';
import Tweet from './Tweet';

const TweetFeed = (props) => {
  console.log("props.tweet ", props);
  return props.tweets.map(tweet => <Tweet tweet={tweet} {...props} />)
}
export default TweetFeed;