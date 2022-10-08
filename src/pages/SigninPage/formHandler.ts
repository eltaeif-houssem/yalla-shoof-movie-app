import React from "react";
import { snackInt } from "../../util/interfaces";

const formHandler = (
  email: string,
  password: string,
  setSnack: React.Dispatch<React.SetStateAction<snackInt>>
) => {
  if (!email || !password) {
    setSnack({
      open: true,
      severity: "warning",
      message: "All fields are required",
    });

    setTimeout(() => {
      setSnack({
        open: false,
        severity: "",
        message: "",
      });
    }, 6000);

    return false;
  }

  if (!email.trim() || !email.includes("@") || !email.includes(".")) {
    setSnack({
      open: true,
      severity: "warning",
      message: "Please enter a valid email",
    });

    setTimeout(() => {
      setSnack({
        open: false,
        severity: "",
        message: "",
      });
    }, 6000);
    return false;
  }

  if (password.length < 6) {
    setSnack({
      open: true,
      severity: "warning",
      message: "Password min length is 6",
    });

    setTimeout(() => {
      setSnack({
        open: false,
        severity: "",
        message: "",
      });
    }, 6000);
    return false;
  }

  return true;
};

export default formHandler;
