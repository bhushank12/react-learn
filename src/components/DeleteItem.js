function DeleteItem({ items, setItems, indexToDelete }) {
  function deleteItem() {
    if(items.length == 0) return;
    const remainingItems = items.filter((item, index) => index !== indexToDelete);
    setItems(remainingItems);
  }

  return (
    <div>
      <button
        onClick={deleteItem}
        className="delete-button"
      >
        Delete
      </button>
    </div>
  );
}

export default DeleteItem;
