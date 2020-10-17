import React, { useState } from "react";
import {
  Button,
  Modal,
  Form,
} from "semantic-ui-react";
import withAuth from "../../HOCs/withAuth";

const SignupModal = (props) => {
  
  const { open, onClose } = props;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signup = () => {
    props
      .signup(name, email, password)
      .then((res) => {
        onClose();
      })
      .catch((err) => {
        onClose();
      });
  };
  return (
    <div>
      <Modal size={"tiny"} open={open} onClose={() => onClose()}>
        <Modal.Header>Sign Up</Modal.Header>
        <Modal.Content>
          <Form>
            {/* <Form.Group widths="equal"> */}
            <Form.Input
              onChange={(e, d) => {
                console.log(e, d.value);
                setName(d.value);
              }}
              fluid
              label="Name"
              placeholder="Name"
            />
            <Form.Input
              onChange={(e, d) => {
                console.log(e, d.value);
                setEmail(d.value);
              }}
              fluid
              label="Email"
              placeholder="Email"
            />
            <Form.Input
              onChange={(e, d) => {
                console.log(e, d.value);
                setPassword(d.value);
              }}
              fluid
              label="Password"
              placeholder="Password"
            />
            {/* </Form.Group> */}
          </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button negative onClick={() => onClose()}>
            Cancel
          </Button>
          <Button positive type="submit" onClick={signup} disabled={!name || !email || !password}>
            Sign up
          </Button>
        </Modal.Actions>
      </Modal>
    </div>
  );
}

export default withAuth(SignupModal);
