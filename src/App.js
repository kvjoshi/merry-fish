import "./App.css";
import React from "react";
import Signup from "./components/signup/signup";
import {Container,Row, Col,Alert} from "reactstrap";
import "./assets/plugins/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./assets/css/argon-dashboard-react.css";

import { AuthProvider } from "./components/contexts/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Container
        className="d-flex align-items-center justyfy-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <Signup />
        </div>
      </Container>
    </AuthProvider>
  );
}

export default App;
