import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>
        Dictionary App
        <img src={logo} width="50px" />
      </h1>
      <footer>
        <a
          className="github-link"
          href="https://github.com/hewittmv/dictionary-project"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open Source Code by VHM
        </a>
      </footer>
    </div>
  );
}

export default App;
