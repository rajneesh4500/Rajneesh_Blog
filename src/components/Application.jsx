import React from "react";
import {
  About_me,
  About_mepara,
  Aboute_mep2,
  About_mep3,
  Message_final,
  Specialities
} from "../static_content/Aboutme";
import NavBar from "./NavBar";
//
const MainApp = () => {
  return (
    <div>
      <NavBar />
      <div className="content">
        <h1>Aboute Me</h1>
        <p>{About_me}</p>
        <p>{About_mepara}</p>
        <p>{Aboute_mep2}</p>
        <p>{About_mep3}</p>
        <p>{Message_final}</p>
      </div>
    </div>
  );
};

export default MainApp;
