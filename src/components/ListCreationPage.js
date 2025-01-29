import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/ListCreationPage.css";

const ListCreationPage = () => {
  const [listName, setListName] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  // Load existing lists from localStorage
  const existingLists = JSON.parse(localStorage.getItem("lists")) || [];

  const handleCreate = () => {
    if (listName.trim() === "" || description.trim() === "") {
      alert("Please enter both a list name and a description");
      return;
    }

    // Determine list_number (alternate between 1 and 2 based on count)
    const listNumber =
      existingLists.filter((list) => list.list_number === 1).length >
      existingLists.filter((list) => list.list_number === 2).length
        ? 2
        : 1;

    const newList = {
      id: Date.now(), // Unique ID
      name: listName,
      description: description,
      list_number: listNumber,
      items: [],
    };

    // Update lists in localStorage
    const updatedLists = [...existingLists, newList];
    localStorage.setItem("lists", JSON.stringify(updatedLists));

    // Notify ListsPage about the update
    window.dispatchEvent(new Event("storage"));

    // Navigate back to All Lists
    navigate("/");
  };

  return (
    <div className="list-creation-page">
      <h1>Create a New List</h1>
      <input
        type="text"
        placeholder="Enter list name"
        value={listName}
        onChange={(e) => setListName(e.target.value)}
        className="input-box"
      />
      <textarea
        placeholder="Enter description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="input-box"
      />
      <div className="buttons">
        <button onClick={handleCreate} className="create-button">Update</button>
        <button onClick={() => navigate("/")} className="cancel-button">Cancel</button>
      </div>
    </div>
  );
};

export default ListCreationPage;