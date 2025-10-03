import { useState } from "react";
import Item from "./Item";

function PackingList({ items, onClearList, onDeleteItem, onToggleItem }) {
  // Variables
  const [sortBy, setSortBy] = useState("input");
  let sortedItems;
  // Functions

  // Logic;
  if (sortBy === "input") sortedItems = items;
  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  if (sortBy === "itemLength")
    sortedItems = items.slice().sort((a, b) => b.quantity - a.quantity);

  // Main
  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>
      <div className="actions">
        <select
          value={sortBy}
          onChange={(event) => setSortBy(event.target.value)}
        >
          <option value="input">Sort by input order</option>
          <option value="description">sort by description</option>
          <option value="packed">Sort by packed status</option>
          <option value="itemLength">Sort by number of items</option>
        </select>
        <button className="actions" onClick={onClearList}>
          Clear List
        </button>
      </div>
    </div>
  );
}

export default PackingList;
