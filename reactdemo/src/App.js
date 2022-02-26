import logo from './logo.svg';
import './App.css';
import Tutorial from './Tutorial';
import Links from './Links';

function sayHello(){
  alert("Hello");
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Welcome to ReactJS!</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Tutorial></Tutorial>
        <form onClick={sayHello}>Click Me!</form>
        <Links></Links>
      </header>
    </div>
  );
}

export default App;
