import React from "react";
import "../styles/App.css";
import Routes from "./Routes";
import { Auth0Provider } from "@auth0/auth0-react";

const App = () => {
  return (
    <div className="App">
      <Routes />
    </div>
  );
};
export default App;
