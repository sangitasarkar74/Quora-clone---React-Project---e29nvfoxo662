import React, { useState } from "react";
import Search from "./Search";
import { Link, useHistory } from "react-router-dom";
import MainPage from "./MainPage";
import Img from "./logo-quora.png";
import SearchIcon from "@material-ui/icons/Search";

const Header = ({ query, setQuery }) => {
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
            <h2>{user && user.username}</h2>
            <Link onClick={logOut}>Logout</Link>
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
      {/* {localStorage.getItem("users") ? (
        <>
          <p>{user && user.username}</p>
          <Link onClick={logOut}>Logout</Link>
        </>
      ) : null} */}
    </div>
  );
};

export default Header;
