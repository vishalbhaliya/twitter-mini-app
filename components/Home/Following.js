import React, { Component } from "react";
import { Card, Feed } from "semantic-ui-react";
import withFollowing from "../../HOCs/withFollowing";

class Following extends Component {
  render() {
    return (
      <div className="trending-header-flex" style={{ marginTop: "20px" }}>
        <Card>
          <Card.Content>
            <Card.Header>You're Following </Card.Header>
          </Card.Content>
          <Card.Content>
            <Feed>
              {this.props.following.map((item) => {
                return (
                  <Feed.Event>
                    <Feed.Label image="/images/jenny.jpg" />
                    <Feed.Content>
                      <Feed.Summary>{item.name}</Feed.Summary>
                    </Feed.Content>
                  </Feed.Event>
                );
              })}
            </Feed>
          </Card.Content>
        </Card>
      </div>
    );
  }
}

export default withFollowing(Following);
