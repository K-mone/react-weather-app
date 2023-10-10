import "./App.css";
import Weather from "./Weather";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello World!!</h1>
        <p>🤡</p>
        <Weather />
      </header>
      <footer>
        This project was created by K-Mone. This is
        <a href="https://github.com/K-mone/react-weather-app">
          {" "}
          github repo
        </a>{" "}
        and deploy it on{" "}
        <a href="https://sparkling-malabi-aecf6d.netlify.app/"> Netlify</a>
      </footer>
    </div>
  );
}

export default App;
