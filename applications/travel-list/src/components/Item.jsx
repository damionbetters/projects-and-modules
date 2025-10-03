function Item({ item, onDeleteItem, onToggleItem }) {
  if (!item) return null;

  return (
    <li className={item.packed ? "packed" : ""}>
      <label
        style={{ cursor: "pointer", display: "flex", alignItems: "center" }}
      >
        <input
          type="checkbox"
          checked={item.packed}
          onChange={() => onToggleItem(item.id)}
          style={{ marginRight: "8px" }}
        />
        <span>
          {item.quantity} {item.description}
        </span>
      </label>
      <button
        onClick={() => onDeleteItem(item.id)}
        style={{ marginLeft: "8px" }}
      >
        ❌
      </button>
    </li>
  );
}

export default Item;
