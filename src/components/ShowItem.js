import DeleteItem from "./DeleteItem";

function ShowItem({ items, setItems }) {
  return(
    <div>
      {items.length === 0 ? (
        <p>No tasks yet</p>
      ) : (
        <ul>
          {items.map((item, index) => (
            <li key={index} className="show-item-li">
              <span className="show-item-span">{item}</span>
              <DeleteItem items={items} setItems={setItems} indexToDelete={index} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ShowItem;
