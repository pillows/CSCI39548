import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <div>
          {/* TODO explain why there are two console logs*/}
          {console.log('hi i am here')}
          <button onClick={() => setCount(count + 1)}>+</button>
          <div id="count">{count}</div>
          <button onClick={() => setCount(count - 1)}>-</button>
        </div>
      </header>
    </div>
  );
}

export default App;
