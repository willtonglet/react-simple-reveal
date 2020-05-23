import React from "react";
import RevealTransition from "./reveal-transition";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <RevealTransition position="left">
        <section className="section1">
          <h1>Scroll Down</h1>
        </section>
      </RevealTransition>
      <RevealTransition position="right">
        <section className="section2">
          <h1>Scroll Down</h1>
        </section>
      </RevealTransition>
      <RevealTransition position="left">
        <section className="section1">
          <h1>Scroll Down</h1>
        </section>
      </RevealTransition>
      <RevealTransition position="right">
        <section className="section2">
          <h1>Scroll Down</h1>
        </section>
      </RevealTransition>
    </div>
  );
}

export default App;
