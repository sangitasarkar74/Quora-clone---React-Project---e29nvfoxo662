import React, { useState } from "react";
import "../styles/App.css";
import { Link } from "react-router-dom";

function Search({ query, setQuery }) {
  const onChangeHandle = (e) => {
    const { value } = e.target;
    setQuery(value);
  };
  return (
    <div id="mainpage">
      <Link to="/">
        <input
          type="text"
          id="search"
          onChange={onChangeHandle}
          placeholder="Enter your question here"
        />
      </Link>
      {/* <Link to="/">Search</Link> */}
    </div>
  );
}
export default Search;
