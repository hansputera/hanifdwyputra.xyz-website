import React from "react";
import { Switch, Route } from "react-router-dom";

// Pages
import Home from "./components/Home";
import Error from "./components/Error";
import Social from "./components/Social";
import Discord from "./components/Discord";

function App() {
  return (
    <main>
      <Switch>
        <Route path="/" component={Home} exact></Route>
        <Route path="/social" component={Social}></Route>
        <Route path="/discord" component={Discord}></Route>
        <Route component={Error}></Route>
      </Switch>
    </main>
  )
}

export default App;