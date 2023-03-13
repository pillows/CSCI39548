function Item({ itemText, index, removeItem, checked, toggleCompleted }) {
  // TODO look at error
  /*
  You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.
  */
  return <li><input type="checkbox" checked={checked} onClick={() => toggleCompleted(index)} /> {itemText} <button onClick={() => removeItem(index)}>x</button></li>;
}

export default Item;