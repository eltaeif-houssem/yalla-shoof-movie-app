import React, { useRef, useState, useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import { AppContext } from "../../context";
import formHandler from "./formHandler";
import type { snackInt } from "../../util/interfaces";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

// Import components
import { Snack } from "../../components";

// Import styles
import "./SigninPage.css";

// Define vars
const initialSnack: snackInt = {
  open: false,
  severity: "",
  message: "",
};

const SigninPage: React.FC = () => {
  // Define context
  const ctx = useContext(AppContext);

  // Define states
  const [snack, setSnack] = useState<snackInt>(initialSnack);

  // Define refs
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const email = emailRef.current!.value;
    const password = passwordRef.current!.value;

    if (!formHandler(email, password, setSnack)) {
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        ctx?.setAuth(true);
      })
      .catch((e) => {
        setSnack({
          open: true,
          severity: "warning",
          message: "Something gone wrong!",
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

  const joinAsGuestHandler = (e: React.FormEvent) => {
    emailRef.current!.value = "guest@email.com";
    passwordRef.current!.value = "123456";
    submitHandler(e);
  };
  return ctx!.isLoggedIn ? (
    <Navigate to="/" />
  ) : (
    <div className="signin-page">
      <h2>Signin now!</h2>
      <form onSubmit={submitHandler}>
        <div className="form-input">
          <i className="fa-solid fa-envelope"></i>
          <input type="text" placeholder="Email" autoFocus ref={emailRef} />
        </div>

        <div className="form-input">
          <i className="fa-solid fa-lock"></i>
          <input type="password" placeholder="Password" ref={passwordRef} />
        </div>

        <p>
          Don't have an account yet? <Link to="/signup">Sign up</Link>
        </p>
        <button type="submit" className="create-account-btn">
          Enter to your account
        </button>
        <button className="create-account-btn" onClick={joinAsGuestHandler}>
          Join as guest
        </button>
      </form>
      <Snack snack={snack} setSnack={setSnack} />
    </div>
  );
};

export default SigninPage;
