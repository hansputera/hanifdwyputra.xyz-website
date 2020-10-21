import React from "react";
import { Switch, Route } from "react-router-dom";

// Pages
import Home from "./components/Home.jsx";
import Error from "./components/Error.jsx";
import Social from "./components/Social.jsx";

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