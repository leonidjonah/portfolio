import React from "react";
import About from "./section/About";
import FormaDiplo from "./section/FormaDiplo";
import Portfolio from "./section/Portfolio";
import Skills from "./section/Skills";

function Body() {
  return (
    <div>
      <main id="main">
        <About/>
        <Skills/>
        <Portfolio/>
        <FormaDiplo/>
      </main>
    </div>
  );
}

export default Body;
