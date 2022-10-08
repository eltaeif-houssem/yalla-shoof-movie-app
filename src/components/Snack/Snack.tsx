import React, { useEffect } from "react";
import type { snackInt } from "../../util/interfaces";

// Import styles
import "./Snack.css";

interface Props {
  snack: snackInt;
  setSnack: React.Dispatch<React.SetStateAction<snackInt>>;
}

const Snack: React.FC<Props> = ({ snack, setSnack }) => {
  useEffect(() => {});
  const closeSnackHandler = () => {
    setSnack({ open: false, severity: "", message: "" });
  };
  return (
    <div
      className={`snack ${snack.severity === "error" && "error"} ${
        snack.open && "active"
      }`}
    >
      <p>{snack.message}</p>
      <span onClick={closeSnackHandler}>
        <i className="fa-solid fa-xmark"></i>
      </span>
    </div>
  );
};

export default Snack;
