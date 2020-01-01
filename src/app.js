import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./css/general.css";
import Welcomemsg from "./components/WelcomeMsg";
import MainApp from "./components/Application";
//
//
//
//
//
//
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
    return <div>{this.state.showWelcome ? <Welcomemsg /> : <MainApp />}</div>;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
