import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Card, Form, Button } from "react-bootstrap";
import { createUser } from "../../controllers/redux/authSlice";

export default function SignUp() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

  const dispatch = useDispatch();
  const [currentUser, setCurrentUser] = useState({
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const inputChange = (e) => {
    setCurrentUser({
      ...currentUser,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    dispatch(createUser(currentUser));
    e.preventDefault();
  };
  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Sign Up</h2>
          <Form>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                name="email"
                type="email"
                ref={emailRef}
                required
                onChange={inputChange}
                value={currentUser.email}
              ></Form.Control>
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                name="password"
                type="password"
                ref={passwordRef}
                required
                onChange={inputChange}
                value={currentUser.password}
              ></Form.Control>
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Label>Confirm Password</Form.Label>ss
              <Form.Control
                name="passwordConfirm"
                type="password"
                ref={passwordConfirmRef}
                required
                onChange={inputChange}
                value={currentUser.passwordConfirm}
              ></Form.Control>
            </Form.Group>
            <Button
              name="submit"
              type="submit"
              className="w-100"
              style={{ marginTop: "10px" }}
              onSubmit={handleSubmit}
            >
              Sign Up
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Have an account? Log In here!
      </div>
    </>
  );
}
