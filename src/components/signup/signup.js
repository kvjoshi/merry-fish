import { Alert } from "bootstrap";
import React, { useRef } from "react";
import { useState } from "react";
import { Form, Card, Button, FormGroup } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";

export default function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false)


  function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setErr("Try Again password do not match");
    }

    try {
      setErr("")
      setLoading(true)
      signup(emailRef.current.value, passwordRef.current.value);
    } catch {
      setErr("Failed to create an account!");
    }
    setLoading(false)
  }

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Sign Up</h2>
          {err &&   <Alert ></Alert>}
          <Form onSubmit = {handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Label>Password confirm</Form.Label>
              <Form.Control type="password" ref={passwordConfirmRef} required />
            </Form.Group>
            <Button disabled={loading} type="submit" className="w-100 btn btn-default">
            
              Sign Up
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Already have an account? Log In
      </div>
    </>
  );
}
