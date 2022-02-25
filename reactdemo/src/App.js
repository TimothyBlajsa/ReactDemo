import logo from './logo.svg';
import './App.css';
import Card from './Card';

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
        
        <h1>There are five main steps to getting a React app running!</h1>
        <h2>Step 1: Creating the app itself</h2>
        <p>1. Open a new terminal in VSCode</p>
        <p>2. Run the following: <code>npx create-react-app my-app</code></p>
        <p>3. Let run</p>

        <h2>Step 2: React Quickstart</h2>
        <p>1. This is a library developed by Facebook</p>
        <p>2. It allows the user to leverage code components rather than vanilla JS</p>
        <p>3. Easily modularize projects</p>

        <h2>Step 3: Components</h2>
        <p>1. Check your imports and exports</p>
        <p>2. If import does not exist, create a new one for the component you are creating:</p>
        <code>Import React from 'React'</code>
        <code>Import Component from './component'</code>
        <p>3. Write your function, this will contain your JSX html structure</p>
        <code>
            <code className='multiline-snippet'>const component()</code>
        </code>
        <p>4. Export your function</p>
        <code>export default component</code>

        <h2>Step 4: JSX</h2>
        <p>1. The easiest way to concetpualize JSX is as html</p>
        <p>2. Within the function created in the previous step, wrap your html within an empty tag</p>
        <p>3. Style with inline rules and syntax</p>
        <code>className='name'</code>

        <h2>Step 5: Running your new app</h2>
        <p>1. Using the script provided in the package.json file, open a new terminal</p>
        <p>Run the following: <code>npm run start</code></p>
        <p>2. Alternatively you can hover over the script and click <code>run</code></p>

        <h1>Let's make something!</h1>
        <p>Let's add a simple card with the following:</p>
        <p>1. Card Container </p>
        <p>2. Card Details </p>
        <Card></Card>

        <footer><a href='https://github.com/TimothyBlajsa/ReactDemo'>Investigate the source code!</a></footer>
      </header>
    </div>
  );
}

export default App;
