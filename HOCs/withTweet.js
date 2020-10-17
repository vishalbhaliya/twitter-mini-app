import React from 'react';
import { callAPI } from '../libs/APICall';
import { getCookie } from '../libs/Cookies';
import io from "socket.io-client";

const socket = io.connect("http://localhost:3001");

const withTweet = (Component) => {
  return class extends React.Component {

    state = {
      tweets: [],
      user: null,
      loading: false
    }

    componentDidMount() {
      let url = '/getTweets';
      const user = getCookie("user");

      if (user) {
        const parsedUser = JSON.parse(user);
        if (parsedUser) {
          url = url + "?userId="+parsedUser._id
        }
      }
      callAPI(url, null, "GET")
      .then(response => {
        if (response && response.status === 200) {
          this.setState({
            tweets: response.data,
            user: JSON.parse(user)
          });
        }
      })
      .catch(err => {
        console.log("Error while fetching tweets ", err);
      });

      socket.on("tweet", (data)=> {
        const { tweets } = this.state;
        tweets.unshift(data);
        this.setState({
          tweets
        })
      });
    }

    createTweet = async (tweet) => {
      const user = getCookie("user");
      console.log("user ", user);
      if (user) {
        const parsedUser =JSON.parse(user);
        callAPI("/createTweet", {
          userId: parsedUser._id,
          tweet
        })
        .then(res => {
          
        })
        .catch(err => {
  
        });
      }
    }

    render() {
      return (
        <Component user={this.state.user} createTweet={this.createTweet} tweets={this.state.tweets} {...this.props} />
      )
    }
  }
}

export default withTweet;