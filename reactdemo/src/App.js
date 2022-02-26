import logo from './logo.svg';
import './App.css';
import Card from './Card';
import Tutorial from './Tutorial';

function sayHello(){
  alert("Hello");
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to ReactJS!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        
        <Tutorial></Tutorial>

        <h1>Let's make something!</h1>
        <p>Let's add a simple card with the following:</p>
        <p>1. Card Container </p>
        <p>2. Card Details </p>
        <Card></Card>

        <h1>Let's make a button!</h1>
        <p>1. Create a button the way you usually do</p>
        <p>2. Set onClick within tag</p>
        <p>3. Create a function to handle the onClick event</p>
        <form onClick={sayHello}>Click Me!</form>

        <footer><a href='https://github.com/TimothyBlajsa/ReactDemo'>Investigate the source code!</a></footer>
      </header>
    </div>
  );
}

export default App;
