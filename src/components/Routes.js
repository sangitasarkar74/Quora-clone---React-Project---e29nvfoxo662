import React, { useState } from "react";
import "../styles/App.css";
import MainPage from "./MainPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddAnswer from "./AddAnswer";
import AddQuestion from "./AddQuestion";
import Header from "./Header";
import Login from "./Login";
import Register from "./Register";

const Routes = () => {
  const [query, setQuery] = useState("");
  console.log("Inside routes", query);
  return (
    <Router>
      <div className="routes">
        <Header query={query} setQuery={setQuery} />
        <Switch>
          <Route
            path="/"
            exact
            render={(props) => (
              <MainPage {...props} query={query} setQuery={setQuery} />
            )}
          />
          <Route path="/AddQuestion" component={AddQuestion} />
          <Route path="/AddAnswer" component={AddAnswer} />
          <Route path="/Login" component={Login} />
          <Route path="/Register" component={Register} />
        </Switch>
      </div>
      
    </Router>
    
  );
};
export default Routes;
