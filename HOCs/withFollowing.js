import React from 'react';
import { callAPI } from '../libs/APICall';
import { getCookie } from '../libs/Cookies';

const withFollowing = (Component) => {
  return class extends React.Component {

    state = {
      loading: false,
      following: []
    }

    componentDidMount() {
      const user = getCookie("user");

      if (user) {
        const parsedUser = JSON.parse(user);
        if (parsedUser) {     
          callAPI("/users/following?userId="+parsedUser._id, null, "GET")
          .then(resp => {
            if (resp && resp.status === 200) {
              const following = resp.data;
              this.setState({
                following
              })
            } else{
              reject(false)
            }
          })
          .catch(err => {
            reject(err);
          })
        }
      }
    }
   

    render() {
      return (
        <Component following={this.state.following} {...this.props} />
      )
    }
  }
}

export default withFollowing;