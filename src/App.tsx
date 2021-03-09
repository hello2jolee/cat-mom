import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import asyncComponent from "./utils/asyncComponent";
import ROUTES from "./constants/routes.js";

// eslint-disable-next-line
import logo from "./assets/IconSvg/logo.svg";

import "./App.scss";

// pages
const SignUp = asyncComponent(() => import("./pages/SignUp"));
const Home = asyncComponent(() => import("./pages/Home"));

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={ROUTES.ROOT} component={Home} />
        <Route path={ROUTES.SIGNUP} component={SignUp} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
