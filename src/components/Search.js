import React, { useState } from "react";
import "../styles/App.css";

function Search({ query, setQuery }) {
  const onChangeHandle = (e) => {
    const { value } = e.target;
    setQuery(value);
  };
  return (
    <div id="mainpage">
      <input type="text" id="search" onChange={onChangeHandle} />
    </div>
  );
}
export default Search;
