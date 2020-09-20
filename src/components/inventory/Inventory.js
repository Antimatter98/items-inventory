import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import InventoryEditModal, { modalDisplay } from "./InventoryEditModal";
import Addorder, { addModalDisplay } from "./Addorder";
import DisplayAllOrders from "./DisplayAllOrders";

//import JSON
const data = require("../data/DummyData.json");

const Inventory = () => {
  const initialState = {
    id: "",
    product: "",
    quantity: "",
    customer_email: "",
    customer_name: "",
  };
  const [inventory, setInventory] = useState(data);
  // item selected to edit is loaded up in this state
  const [selectedData, setSelectedData] = useState(initialState);

  //Add, Update and delete orders functionality
  const deleteItemFromInventory = (id) => {
    setInventory((prevState) => prevState.filter((item) => item.id !== id));
  };

  const editItemFromInventory = (item) => {
    setInventory((prevState) =>
      prevState.map((prevItem) => {
        if (item.id === prevItem.id) {
          return item;
        }
        return prevItem;
      })
    );
  };

  const addItemToInventory = (item) => {
    setInventory((prevState) => [item, ...prevState]);
  };

  // display all items in the inventory
  const loadAllInventoryItems = () => (
    <DisplayAllOrders
      inventory={inventory}
      setSelectedData={setSelectedData}
      modalDisplay={modalDisplay}
      deleteItemFromInventory={deleteItemFromInventory}
    />
  );

  return (
    <div className="item-card-container">
      {/* Modals */}
      <InventoryEditModal
        selectedData={selectedData}
        editItemFromInventory={editItemFromInventory}
      />
      <Addorder addItemToInventory={addItemToInventory} />

      {/* Rest of the page content */}
      <p>Total orders: {inventory.length}</p>
      <button onClick={addModalDisplay} className="add-button">
        <FontAwesomeIcon icon={faPlus} color="blue" />
        <span>Add an Order</span>
      </button>
      {loadAllInventoryItems()}
    </div>
  );
};

export default Inventory;
