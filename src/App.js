import React from "react";
import { Container } from "react-bootstrap";
import Login from "./views/login/login";
import SignUp from "./views/signUp/signUp";
import {useSelector} from "react-redux"
import {BrowserRouter as Router} from "react-router-dom"
import Sidebar from "./views/sidebar/sidebar"
import ViewBugs from "./views/viewBugs"
import { getDefaultMiddleware } from '@reduxjs/toolkit';


function App() {
    const {auth} = useSelector(state => state);
   
  return (
  <Router>
      {!auth.loggedIn ? <Login/> : <h1>Hello</h1>}
      <>
          <Sidebar />
          <ViewBugs />

      </>
     {/* <Container
    //   className="d-flex align-items-center justify-content-center"
    //   style={{ minHeight: "100vh" }}
    // >
    //   <div className="w-100" style={{maxWidth: "400px"}}>
    //     <SignUp/>
    //   </div>
    // </Container> */}
    </Router>
  );
}

export default App;
