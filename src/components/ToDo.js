import { useState } from 'react';
import AddItem from './AddItem';
import ShowItem from './ShowItem';

function ToDo() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");

  return (
    <div>
      <h2>Listing Tasks</h2>
      <div>
        <input
          type="text"
          value={inputValue}
          placeholder="Enter Task Name"
          onChange={e => setInputValue(e.target.value)}
          className="to-do-input-value"
        />
        <AddItem items={items} setItems={setItems} inputValue={inputValue} setInputValue={setInputValue} />
        <ShowItem items={items} setItems={setItems} />
      </div>
    </div>
  );
}

export default ToDo;
