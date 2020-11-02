import React from "react";
import { theme, ThemeProvider } from "@chakra-ui/core";
import Header from "./components/Header";
import { Route, Switch } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Footer from "./components/Footer";
import YourTime from "./pages/YourTime";
import Error from "./pages/Error";

const breakpoints = ["360px", "768px", "1024px", "1440px"];
breakpoints.sm = breakpoints[0];
breakpoints.md = breakpoints[1];
breakpoints.lg = breakpoints[2];
breakpoints.xl = breakpoints[3];

const newTheme = {
  ...theme,
  breakpoints
};

function App() {
  return (
    <ThemeProvider theme={newTheme}>
      <Header />
      <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/time" component={YourTime} />
      <Route component={Error} />
      </Switch>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
