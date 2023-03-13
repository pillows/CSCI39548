// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Item from './Item';

/*
[
  {
    text: 'Learn React',
    completed: false
  }

]
*/
function App() {
  const [items, setItems] = useState([]);

  function addItem() {
    const inputText = document.getElementById('input').value;
    setItems([...items, {
      text: inputText,
      completed: false
    }]);
    document.getElementById('input').value = '';
  }

  function removeItem(index) {
    setItems(items.filter((_, i) => i !== index));
  }

  function toggleCompleted(index) {
    setItems(items.map((todo, i) => {
      if (i === index) {
        todo.completed = !todo.completed;
      }
      return todo;
    }));
    console.log('current item', items[index]);
  }

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <ul id='items'>
            {items.map((todo, index) => (
              <Item key={index} toggleCompleted={toggleCompleted} checked={todo.completed} removeItem={removeItem} index={index} itemText={todo.text} test={todo + index.toString()} />
            ))}
          </ul>
          <textarea id='input' rows='5' cols='50'></textarea>
          <br />
          <input onClick={addItem} id='submit' type='submit' value='Submit' />
        </div>
      </header >
    </div >
  );
}

export default App;
