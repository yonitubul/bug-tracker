import React from "react";
import { Container } from "react-bootstrap";
import Login from "./views/login/login";
import SignUp from "./views/signUp/signUp";
function App() {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{maxWidth: "400px"}}>
        <SignUp/>~
      </div>
    </Container>
  );
}

export default App;
