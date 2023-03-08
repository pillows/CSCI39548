import logo from './logo.svg';
import './App.css';

function App() {
  const name = 'Matt';

  function handleClick(event) {
    console.log(event);
    alert("You clicked me! " + name);
  }

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          onClick={(event) => handleClick(event)}
          className="App-link"
          href="#"
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
