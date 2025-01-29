import React from "react";
import "../styles/ListContainer.css";

const ListContainer = ({ title, items, onCheckboxChange, isChecked }) => {
  return (
    <div className="list-container">
      <div className="list-header">
        <input type="checkbox" checked={isChecked} onChange={onCheckboxChange} />
        <h2>{title}</h2>
      </div>
      <ul className="list-items">
        {items.length > 0 ? (
          items.map((item) => (
            <li key={item.id} className="list-item">
              <p><strong>{item.name}</strong></p>
              <p>{item.description}</p>
            </li>
          ))
        ) : (
          <p>No items available</p>
        )}
      </ul>
    </div>
  );
};

export default ListContainer;