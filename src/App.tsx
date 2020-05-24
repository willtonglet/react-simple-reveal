import React from "react";
import RevealTransition from "./reveal-transition";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <RevealTransition position="left">
        <section className="section1">
          <RevealTransition position="bottom" delay={800}>
            <h1>Scroll Down</h1>
          </RevealTransition>
        </section>
      </RevealTransition>
      <RevealTransition position="right">
        <section className="section2">
          <RevealTransition position="top" delay={800}>
            <h1>Scroll Down</h1>
          </RevealTransition>
        </section>
      </RevealTransition>
      <RevealTransition position="left">
        <section className="section1">
          <RevealTransition position="bottom" delay={800}>
            <h1>Scroll Down</h1>
          </RevealTransition>
        </section>
      </RevealTransition>
      <RevealTransition position="right">
        <section className="section2">
          <RevealTransition position="top" delay={800}>
            <h1>Scroll Down</h1>
          </RevealTransition>
        </section>
      </RevealTransition>
    </div>
  );
}

export default App;
