import React, { useContext, useState, useEffect, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../../context";

// Import assets
import navbarLogo from "../../assets/yalla-shoof.png";
import avatar from "../../assets/avatar.jpeg";

// Import styles
import "./Navbar.css";

const Navbar: React.FC = () => {
  const [hide, setHide] = useState<boolean>(false);

  const scrollEffectHandler = useCallback(() => {
    if (window.scrollY > 50) {
      setHide(true);
    } else {
      setHide(false);
    }
  }, []);

  const ctx = useContext(AppContext);
  const navigate = useNavigate();

  useEffect(() => {
    window.addEventListener("scroll", scrollEffectHandler);
    return () => {
      window.removeEventListener("scroll", scrollEffectHandler);
    };
  }, [scrollEffectHandler]);

  return (
    <nav className={`navbar ${hide && "hide"}`}>
      <Link to="/">
        <img src={navbarLogo} alt="" />
      </Link>
      {ctx!.isLoggedIn && (
        <img src={avatar} alt="" onClick={() => navigate("/profile")} />
      )}
    </nav>
  );
};

export default Navbar;
