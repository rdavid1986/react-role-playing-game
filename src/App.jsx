import logo from './logo.svg';
import './App.css';
import DarkMode from "./components/darkMode.jsx"
import Main from "./components/Main.jsx";

function App() {

  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>React role playing game</p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Learn React</a>
        <DarkMode/>
      </header>
      <Main />
    </div>
  );
}


export default App;
