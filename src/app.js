import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./css/general.css";
import Welcomemsg from "./components/WelcomeMsg";
import MainApp from "./components/Application";
import { Router } from "react-router-dom";
import AppRouter from "./Router/Router";

class App extends Component {
  state = {
    showWelcome: true
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState(() => ({ showWelcome: false }));
    }, 5000);
  }
  render() {
    return <div>{this.state.showWelcome ? <Welcomemsg /> : <AppRouter />}</div>;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
