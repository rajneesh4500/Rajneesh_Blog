import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import MainApp from "../components/Application";
import Blog from "../components/Blog";
import NavBar from "../components/NavBar";

const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Route exact path="/" component={MainApp} />
        <Route path="/Blog" component={Blog} />
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;
