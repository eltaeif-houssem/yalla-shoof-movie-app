import React, { useRef, useState, useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import { AppContext } from "../../context";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

import formHandler from "./formHandler";
import type { snackInt } from "../../util/interfaces";

// Import components
import { Snack } from "../../components";

// Import styles
import "./SignupPage.css";

// Define vars
const initialSnack: snackInt = {
  open: false,
  severity: "",
  message: "",
};

const SignupPage: React.FC = () => {
  // Define context
  const ctx = useContext(AppContext);

  // Define states
  const [snack, setSnack] = useState<snackInt>(initialSnack);

  // Define refs
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const passwordCnfRef = useRef<HTMLInputElement>(null);

  // change snack status handler

  // submit form handler
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const email = emailRef.current!.value;
    const password = passwordRef.current!.value;
    const passwordCnf = passwordCnfRef.current!.value;

    if (!formHandler(email, password, passwordCnf, setSnack)) {
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        ctx?.setAuth(true);
      })
      .catch((e) => {
        setSnack({
          open: true,
          severity: "warning",
          message: "Email already in use",
        });

        setTimeout(() => {
          setSnack({
            open: false,
            severity: "",
            message: "",
          });
        }, 6000);
      });
  };

  return ctx!.isLoggedIn ? (
    <Navigate to="/" />
  ) : (
    <div className="signup-page">
      <h2>Signup now!</h2>
      <form onSubmit={submitHandler}>
        <div className="form-input">
          <i className="fa-solid fa-envelope"></i>
          <input type="text" placeholder="Email" autoFocus ref={emailRef} />
        </div>

        <div className="form-input">
          <i className="fa-solid fa-lock"></i>
          <input type="password" placeholder="Password" ref={passwordRef} />
        </div>

        <div className="form-input">
          <i className="fa-solid fa-key"></i>
          <input
            type="password"
            placeholder="Confirm password"
            ref={passwordCnfRef}
          />
        </div>
        <p>
          Already have an account? <Link to="/signin">Sign in</Link>
        </p>
        <button type="submit" className="create-account-btn">
          Create account
        </button>
      </form>
      <Snack snack={snack} setSnack={setSnack} />
    </div>
  );
};

export default SignupPage;
