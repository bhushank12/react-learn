function AddItem({ addItem }) {
  function addItemHandler() {
    addItem();
  }

  return(
    <button
      onClick={addItemHandler}
      className="add-button"
    >
      Add
    </button>
  );
}

export default AddItem;
