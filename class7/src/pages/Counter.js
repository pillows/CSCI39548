// import logo from './logo.svg';
import { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  useEffect(() => {
    console.log('state changed', name);
  }, [name])

  useEffect(() => {
    if (count > 10) alert('You have reached the limit');
  },
    [count])

  useEffect(() => {
    console.log('i activate anytime there\'s a state change');
  })

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

export default Counter;
