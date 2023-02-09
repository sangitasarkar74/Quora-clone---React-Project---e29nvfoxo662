import React, { useState } from "react";
import Search from "./Search";
import { Link, useHistory } from "react-router-dom";
import MainPage from "./MainPage";
import Img from "./logo-quora.png";
import SearchIcon from "@material-ui/icons/Search";
import Hamburger from "./Hamburger";

const Header = ({ query, setQuery }) => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  let user = JSON.parse(localStorage.getItem("users"));
  console.log(user);

  const history = useHistory();
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("users") ? true : false
  );

  function logOut() {
    localStorage.removeItem("users");
    setIsLoggedIn(false);
    history.push("/");
  }
  console.log(user);
  return (
    <div id="header">
      <img src={Img} alt="Image" />
      <div className="search-input">
        <SearchIcon />
        <Search setQuery={setQuery} query={query} />
      </div>
      <div className="hamburger" onClick={toggleHamburger}>
        <Hamburger isOpen={hamburgerOpen} />
      </div>
      <ul className="nav-links">
        {isLoggedIn ? (
          <>
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/AddQuestion">
              <li>Add Question</li>
            </Link>
            <Link to="/AddAnswer">
              <li>Add Answer</li>
            </Link>
            <Link onClick={logOut}>
              <li>Logout</li>
            </Link>
          </>
        ) : (
          <>
            <Link to="/Login">
              <li>Login</li>
            </Link>
            <Link to="/register">Not a member? Register here</Link>
          </>
        )}
      </ul>
      <style jsx>{`
        @media only screen and (max-width: 480px) {
          .nav-links {
            display: ${hamburgerOpen ? "inline" : "none"};
          }
        }
      `}</style>
    </div>
  );
};

export default Header;
