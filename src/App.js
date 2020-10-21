import React from "react";
import { Switch, Route } from "react-router-dom";

// Pages
import Home from "./components/Home";
import Error from "./components/Error";
import Social from "./components/Social";

function App() {
  return (
    <main>
      <Switch>
        <Route path="/" component={Home} exact></Route>
        <Route path="/social" component={Social}></Route>
        <Route component={Error}></Route>
      </Switch>
    </main>
  )
}

export default App;