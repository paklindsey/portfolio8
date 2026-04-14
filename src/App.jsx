import logo from "./assets/logo.svg";
import "./App.css";

function App() {
  return (
    <div className="page">
      <section className="hero">
        <div className="heroHeader">
          <img src={logo} alt="Lindsey Pak" className="lp-logo" />
          <h1>Lindsey Pak</h1>
          <p className="bio">
            I'm Lindsey, a developer and designer. I build products from both
            sides, crafting the experience and writing the code that brings it
            to life.
          </p>
        </div>
      </section>

      <section className="projects">
        <div className="project-card" />
        <div className="project-card" />
        <div className="project-card" />
      </section>
    </div>
  );
}

export default App;
