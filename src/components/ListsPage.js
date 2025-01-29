import React, { useState, useEffect } from "react";
import { fetchLists } from "../services/api";
import ListContainer from "./ListContainer";
import Loader from "./Loader";
import { useNavigate } from "react-router-dom";
import "../styles/ListsPage.css";

const ListsPage = () => {
  const [lists, setLists] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedLists, setSelectedLists] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchLists()
      .then((data) => {
        if (Array.isArray(data)) {
          setLists(data);
        } else if (data && Array.isArray(data.lists)) {
          setLists(data.lists);
        } else {
          setError("Invalid data format");
        }
        setIsLoading(false);
      })
      .catch(() => {
        setError("Failed to load lists");
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <Loader />;
  if (error) return <p className="error-message">{error}</p>;

  const handleCheckboxChange = (listNumber) => {
    if (selectedLists.includes(listNumber)) {
      setSelectedLists(selectedLists.filter((num) => num !== listNumber));
    } else {
      if (selectedLists.length < 2) {
        setSelectedLists([...selectedLists, listNumber]);
      }
    }
  };

  const handleCreateList = () => {
    if (selectedLists.length !== 2) {
      alert("You should select exactly 2 lists to create a new list.");
      return;
    }
    navigate("/create", { state: { selectedLists } });
  };

  return (
    <div className="lists-container">
      <h1>List Creation</h1>
      <button className="create-list-button" onClick={handleCreateList}>
        Create a new list
      </button>
      <div className="lists-grid">
        <ListContainer
          title="List 1"
          items={lists.filter((item) => item.list_number === 1)}
          onCheckboxChange={() => handleCheckboxChange(1)}
          isChecked={selectedLists.includes(1)}
        />
        <ListContainer
          title="List 2"
          items={lists.filter((item) => item.list_number === 2)}
          onCheckboxChange={() => handleCheckboxChange(2)}
          isChecked={selectedLists.includes(2)}
        />
      </div>
    </div>
  );
};

export default ListsPage;