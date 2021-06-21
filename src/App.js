import "./App.css";
import React from "react";
import Signup from "./components/signup/signup";
import {Container,Row, Col,Alert} from "react-bootstrap";

import { Windmill } from '@windmill/react-ui'

import { AuthProvider } from "./components/contexts/AuthContext";

function App() {
  return (
    <AuthProvider>
        <Windmill>
      <Container
        className="d-flex align-items-center justyfy-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <Signup />
        </div>
      </Container>
        </Windmill>
    </AuthProvider>
  );
}

export default App;
