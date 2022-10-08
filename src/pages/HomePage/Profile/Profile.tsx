import React, { useContext } from "react";
import "./Profile.css";
import { auth } from "../../../firebase";
import { AppContext } from "../../../context";
const Profile: React.FC = () => {
  const ctx = useContext(AppContext);
  const currentUser = auth.currentUser;

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    auth.signOut().then(() => {
      ctx?.setAuth(false);
    });
  };
  return (
    <div className="profile">
      <form className="profile-data" onSubmit={submitHandler}>
        <h3>Username : {currentUser?.email}</h3>
        <h4>Plan : Normal</h4>
        <h4>CreatedAt : {currentUser?.metadata.creationTime}</h4>
        <button type="submit">Signout</button>
      </form>
    </div>
  );
};

export default Profile;
