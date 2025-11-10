function DeleteItem({ deleteItem, indexToDelete }) {
  function deleteItemHandler() {
    deleteItem(indexToDelete);
  }

  return (
    <div>
      <button
        onClick={ deleteItemHandler }
        className="delete-button"
      >
        Delete
      </button>
    </div>
  );
}

export default DeleteItem;
