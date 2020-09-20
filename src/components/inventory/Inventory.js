import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import InventoryEditModal, { modalDisplay } from "./InventoryEditModal";

const data = require("../data/DummyData.json");

const Inventory = () => {
  const initialEditSelectedItem = {
    id: "",
    product: "",
    quantity: "",
    customer_email: "",
    customer_name: "",
  };
  const [inventory, setInventory] = useState(data);
  const [selectedData, setSelectedData] = useState(initialEditSelectedItem);

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

  const loadAllInventoryItems = () =>
    inventory.map((item) => {
      return (
        <div className="item-card" key={item.id}>
          <p className="item-card__text">Order ID: {item.id}</p>
          <p className="item-card__text">Customer Name: {item.customer_name}</p>
          <p className="item-card__text">
            Customer Email: {item.customer_email}
          </p>
          <p className="item-card__text">Product: {item.product}</p>
          <p className="item-card__text">Quantity: {item.quantity}</p>
          <div className="item-card__buttons">
            <button
              className="item-card__button"
              onClick={() => {
                setSelectedData((prevItem) => item);
                modalDisplay();
              }}
            >
              <FontAwesomeIcon icon={faPencilAlt} color="green" />
            </button>
            <button
              className="item-card__button"
              onClick={() => deleteItemFromInventory(item.id)}
            >
              <FontAwesomeIcon icon={faTrash} color="red" />
            </button>
          </div>
        </div>
      );
    });

  return (
    <div className="item-card-container">
      <InventoryEditModal selectedData={selectedData} />
      {loadAllInventoryItems()}
      {console.log(inventory.length)}
    </div>
  );
};

export default Inventory;
