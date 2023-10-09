// src/App.jsx
import "./App.css";
import icon1 from "./assets/icon1.png";
import icon2 from "./assets/icon2.png";
import icon3 from "./assets/icon3.png";
import icon4 from "./assets/icon4.png";
import logoimage from "./assets/ironhack-logo-xs.png";
import menuimage from "./assets/menu-top-xs.png";

function App() {
  return (
    <div className="App">
      <header>
        <div className="logo">
          <img src={logoimage} alt="Logo" />
        </div>
        <div className="menu">
          <img src={menuimage} alt="Menu" />
        </div>
      </header>
      <main>
        <h1 className="title">Say hello to ReactJS</h1>
        <p className="description">
          You will learn how to use the most popular front end library, and
          become a super ninja developer.
        </p>
        <button className="cta">Awesome!</button>
      </main>
      <footer>
        <ul className="advantages">
          <li className="item">
            <img
              style={{
                width: "5rem",
              }}
              className="adv-icon"
              src={icon1}
              alt="Declarative"
            />
            <h2 className="adv-title">Declarative</h2>
            <p className="adv-content">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque
              doloribus placeat deleniti!
            </p>
          </li>

          <li className="item">
            <img
              style={{
                width: "5rem",
              }}
              className="adv-icon"
              src={icon2}
              alt="Declarative"
            />
            <h2 className="adv-title">Components</h2>
            <p className="adv-content">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque
              doloribus placeat deleniti!
            </p>
          </li>

          <li className="item">
            <img
              style={{
                width: "5rem",
              }}
              className="adv-icon"
              src={icon3}
              alt="Declarative"
            />
            <h2 className="adv-title">Single-Way</h2>
            <p className="adv-content">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque
              doloribus placeat deleniti!
            </p>
          </li>

          <li className="item">
            <img
              style={{
                width: "5rem",
              }}
              className="adv-icon"
              src={icon4}
              alt="Declarative"
            />
            <h2 className="adv-title">JSX</h2>
            <p className="adv-content">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque
              doloribus placeat deleniti!
            </p>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
