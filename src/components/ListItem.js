import React from "react";
import "../styles/ListContainer.css";

const ListItem = ({ item }) => {
  return (
    <div className="list-item">
      <p className="item-name"><b>{item.name}</b></p>
      <p className="item-description">{item.description}</p>
    </div>
  );
};

export default ListItem;