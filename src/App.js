import logo from "./logo.svg";
import "./App.css";
import React,{ useState } from "react";

function App() {
  const [counter, setCounter] = useState()

  function Incraese(){
    setCounter(counter+1)
  }


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>Nigga</code> and save to reload.
        </p>
        <button onClick={Incraese}>Press header</button>
        <p>{Incraese(0)}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
