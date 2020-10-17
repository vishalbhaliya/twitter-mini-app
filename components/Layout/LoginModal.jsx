import React, { useState } from "react";
import {
  Button,
  Container,
  Menu,
  Segment,
  Image,
  Icon,
  Modal,
  Form,
} from "semantic-ui-react";
import withAuth from "../../HOCs/withAuth";

const LoginModal = (props) => {
  const { open, onClose } = props;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    props
      .login(email, password)
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
        <Modal.Header>Login</Modal.Header>
        <Modal.Content>
          <Form>
            {/* <Form.Group widths="equal"> */}
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
          <Button
            positive
            type="submit"
            onClick={login}
            disabled={!email || !password}
          >
            Login
          </Button>
        </Modal.Actions>
      </Modal>
    </div>
  );
};

export default withAuth(LoginModal);
