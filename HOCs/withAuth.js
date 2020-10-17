import React from 'react';
import { callAPI } from '../libs/APICall';
import { getCookie, setCookie } from '../libs/Cookies';

const withAuth = (Component) => {
  return class extends React.Component {

    state = {
      loading: false,
    }
    
    login = (email, password) => {
      return new Promise((resolve, reject) => {
        callAPI("/login", {
          email, password
        }, "POST")
        .then(resp => {
          console.log("login response", resp);
          if (resp && resp.status === 200) {
            const user = resp.data[0];
            setCookie("token", user.accessToken);
            setCookie("user", user);
            window.location.href ='/'
            resolve(user);
          } else{
            reject(false)
          }
        })
        .catch(err => {
          console.log("login err", err);
          reject(err);
        })
      })
    }

    signup = (name, email, password) => {
      return new Promise((resolve, reject) => {
        callAPI("/signup", {
          email, password, name
        }, "POST")
        .then(resp => {
          console.log("signup response", resp);
          if (resp && resp.status === 200) {
            const user = resp.data[0];
            setCookie("token", user.accessToken);
            setCookie("user", user);
            window.location.href ='/'
            resolve(user);
          } else{
            reject(false)
          }
        })
        .catch(err => {
          console.log("signup err", err);
          reject(err);
        })
      })
    }

    follow = (userId, followId) => {
      return new Promise((resolve, reject) => {
        callAPI("/users/follow", {
          userId, followId
        }, "POST")
        .then(resp => {
          if (resp && resp.status === 200) {
            window.location.href ='/'
            resolve(true);
          } else{
            reject(false)
          }
        })
        .catch(err => {
          reject(err);
        })
      })
    }

    render() {
      return (
        <Component login={this.login} signup={this.signup} follow={this.follow} {...this.props} />
      )
    }
  }
}

export default withAuth;