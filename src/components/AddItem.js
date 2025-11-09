function AddItem({ items, setItems, inputValue, setInputValue }) {
  function addItem() {
    if(inputValue.trim() === "") return;
    setItems([...items, inputValue]);
    setInputValue("")
  }

  return(
    <button
      onClick={addItem}
      className="add-button"
    >
      Add
    </button>
  );
}

export default AddItem;
