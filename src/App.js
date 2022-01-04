import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Book from "./Book";
import Seats from "./Seats";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/book" component={Book} />
        <Route exact path="/seats" component={Seats} />
      </Switch>
    </div>
  );
}

export default App;
