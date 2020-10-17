import React from "react";
import { withRouter } from "next/router";
import { Button, Container, Menu, Segment, Image } from "semantic-ui-react";
import UserInfoSidebar from "../User/UserInfoSidebar";
import Following from "../Home/Following";
import SignupModal from "./SignupModal";
import LoginModal from "./LoginModal";
import { getCookie, setCookie } from "../../libs/Cookies";

const withLayout = (Component) => {
  class Layout extends React.Component {
    state = {
      signupModal: false,
      loginModal: false,
      user: null
    };

    componentDidMount() {
      const user = getCookie("user");
      if (user) {
        this.setState({
          user: JSON.parse(user)
        })
      }
    }

    logout() {
      setCookie("token", null);
      setCookie("user", null);
      window.location.href ='/'
    }
    hideFixedMenu = () => this.setState({ fixed: false });
    showFixedMenu = () => this.setState({ fixed: true });

    
    render() {
      const { fixed, signupModal, loginModal, user } = this.state;

      return (
        <Segment
          inverted
          style={{ minHeight: 700, padding: "1em 0em" }}
          vertical
        >
          <Container>
            <div className="header-flex">
              <div className="logo">
                <Image src="/images/twitter2.svg" />
              </div>
              {!user ? <div>
                <Button
                  as="a"
                  inverted
                  onClick={() => {
                    this.setState({
                      loginModal: !loginModal,
                    });
                  }}
                >
                  Log in
                </Button>
                <Button
                  as="a"
                  inverted
                  primary={fixed}
                  style={{ marginLeft: "0.5em" }}
                  onClick={() => {
                    this.setState({
                      signupModal: !signupModal,
                    });
                  }}
                >
                  Sign Up
                </Button>
              </div>:
              <div style={{ display: "flex", flexDirection: "row", alignItems:"center", justifyContent:"center" }}>
                <h3 style={{ marginRight: 10}}>
                {user.name}
                </h3>
              <Button
                  as="a"
                  inverted
                  onClick={() => {
                    this.logout()
                  }}
                >
                  Logout
                </Button>
              </div>}
            </div>

            <div className="header-flex">
              <div style={{ width: "16%", borderRight: "1px solid #727679" }}>
                <UserInfoSidebar />
              </div>
              <div style={{ width: "60%" }}>
                <Component {...this.props} />
              </div>
              <div style={{ width: "20%" }}>
                <Following {...this.props} />
              </div>
            </div>
          </Container>
          <SignupModal
            {...this.props}
            open={signupModal}
            onClose={() => {
              this.setState({
                signupModal: false,
              });
            }}
          />
          <LoginModal
            {...this.props}
            open={loginModal}
            onClose={() => {
              this.setState({
                loginModal: false,
              });
            }}
          />
        </Segment>
      );
    }
  }
  return withRouter(Layout);
};

export default withLayout;
