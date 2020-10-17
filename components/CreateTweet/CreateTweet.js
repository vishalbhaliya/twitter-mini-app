import { loadGetInitialProps } from "next/dist/next-server/lib/utils";
import React from "react";
import { TextArea, Button } from "semantic-ui-react";
import styled from "styled-components";

const TweetButton = styled(Button)`
  width: 200px;
  display: flex;
  align-self: flex-end;
  margin-top: 10px;
`;
const CreateTweet = (props) => {
  const [tweet, setTweet] = React.useState(null);
    return (
      <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
        <TextArea value={tweet} onChange={(e) => setTweet(e.target.value)} rows="5" placeholder="Tell us more" />
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <Button onClick={() => props.createTweet(tweet)} className="tweet-btn" primary disabled={!tweet}>
            Tweet
          </Button>
        </div>
      </div>
    );
}

export default CreateTweet;
