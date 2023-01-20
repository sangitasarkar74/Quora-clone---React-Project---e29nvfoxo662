import React, { useState } from "react";
import Search from "./Search";
import { Link } from "react-router-dom";
import MainPage from "./MainPage";
import Img from "./logo-quora.png";

const Header = ({ query, setQuery }) => {
  return (
    <div id="header">
      <img src={Img} alt="Image" />
      <Search setQuery={setQuery} query={query} />
      <ul className="nav-links">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/AddQuestion">
          <li>Add Question</li>
        </Link>
        <Link to="/AddAnswer">
          <li>Add Answer</li>
        </Link>
        <Link to="/Login">
          <li>Login</li>
        </Link>
      </ul>
    </div>
  );
};

export default Header;
