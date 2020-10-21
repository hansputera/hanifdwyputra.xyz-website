import React from "react";
import { Switch, Route } from "react-router-dom";

// Pages
import Home from "./components/Home";

function App() {
  return (
    <main>
      <Switch>
        <Route path="/" component={Home}></Route>
        <Route component={Error}></Route>
      </Switch>
    </main>
  )
}

export default App;