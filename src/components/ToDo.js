import { useState } from 'react';
import AddItem from './AddItem';
import ShowItem from './ShowItem';

function ToDo() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");

  function addItemHandler() {
    if(inputValue.trim() === "") return;
    setItems([...items, inputValue]);
    clearInput();
  }

  function deleteItemHandler(indexToDelete) {
    const remainingItems = items.filter((item, index) => index !== indexToDelete);
    setItems(remainingItems);
  }

  function setInputValueHandler(event) {
    setInputValue(event.target.value);
  }

  function clearInput() {
    setInputValue("");
  }

  return (
    <div>
      <h2>Listing Tasks</h2>
      <div>
        <input
          type="text"
          value={inputValue}
          placeholder="Enter Task Name"
          onChange={setInputValueHandler}
          className="to-do-input-value"
        />
        <AddItem addItem={addItemHandler} />
        <ShowItem items={items} deleteItem={deleteItemHandler} />
      </div>
    </div>
  );
}

export default ToDo;
