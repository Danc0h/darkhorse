import React, { useEffect, useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Helmet } from "react-helmet-async";
import { Modal } from "react-bootstrap";
import { Store } from "../../Store";
import { toast } from "react-toastify";
import { getError } from "../../Util";

export default function SignupPage() {
  const navigate = useNavigate();
  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get("redirect");
  const redirect = redirectInUrl ? redirectInUrl : "/";

  const [name, setName] = useState(localStorage.getItem("name") || "");
  const [email, setEmail] = useState(localStorage.getItem("email") || "");
  const [password, setPassword] = useState(
    localStorage.getItem("password") || ""
  );
  const [confirmPassword, setConfirmPassword] = useState(
    localStorage.getItem("confirmPassword") || ""
  );
  const [hashedOTP, setHashedOTP] = useState("");
  const [showOTPModal, setShowOTPModal] = useState(false);

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { userInfo } = state;

  useEffect(() => {
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    localStorage.setItem("confirmPassword", confirmPassword);
  }, [name, email, password, confirmPassword]);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    try {
      toast.success("Please wait for the OTP prompt and check your email");
      const response = await fetch("http://localhost:9000/api/users/send-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Failed to send OTP");
      }

      setHashedOTP(data.hashedOTP);
      setShowOTPModal(true);
    } catch (err) {
      toast.error(getError(err));
    }
  };

  const verifyOTPHandler = async () => {
    const userOTP = document.getElementById("otpInput").value;
    if (!userOTP) {
      toast.error("Invalid OTP or no OTP entered");
      return;
    }

    try {
      const verifyResponse = await fetch(
        "http://localhost:9000/api/users/verify-otp",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            password,
            otp: userOTP,
            hashedOTP,
          }),
        }
      );
      const verifyData = await verifyResponse.json();
      if (!verifyResponse.ok) {
        throw new Error(verifyData.message || "Invalid OTP");
      }

      ctxDispatch({ type: "USER_SIGNIN", payload: verifyData });
      localStorage.setItem("userInfo", JSON.stringify(verifyData));
      navigate(redirect || "/");
    } catch (err) {
      toast.error(getError(err));
    }
  };

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, redirect, userInfo]);

  return (
    <Container className='small-container'>
      <Helmet>
        <title>Sign Up</title>
      </Helmet>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-md-8'>
            <h1 className='text-center my-3'>Sign Up</h1>
            <Form
              className='bg-light p-4 rounded shadow-sm'
              onSubmit={submitHandler}
            >
              <Form.Group className='mb-3' controlId='name'>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  required
                  className='bg-pink'
                />
              </Form.Group>

              <Form.Group className='mb-3' controlId='email'>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type='email'
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  className='bg-white'
                />
              </Form.Group>

              <Form.Group className='mb-3' controlId='password'>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type='password'
                  required
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  className='bg-white'
                />
              </Form.Group>

              <Form.Group className='mb-3' controlId='confirmPassword'>
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type='password'
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  value={confirmPassword}
                  required
                  className='bg-white'
                />
              </Form.Group>

              <div className='d-grid gap-2'>
                <Button type='submit'>Sign Up</Button>
              </div>

              <div className='text-center mt-3'>
                Already have an account?{" "}
                <Link to={`/signin?redirect=${redirect}`}>Sign-In</Link>
              </div>
            </Form>
          </div>
        </div>
      </div>

      <Modal show={showOTPModal} onHide={() => setShowOTPModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Enter OTP</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className='mb-3' controlId='otpInput'>
            <Form.Label>OTP</Form.Label>
            <Form.Control type='text' placeholder='Enter OTP' />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={() => setShowOTPModal(false)}>
            Close
          </Button>
          <Button variant='primary' onClick={verifyOTPHandler}>
            Verify OTP
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}
