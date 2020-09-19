import React, { useState } from "react";

const data = require("../data/DummyData.json");

const Inventory = () => {
  const [inventory, setInventory] = useState(data);

  const loadAllInventoryItems = () =>
    inventory.map((item) => {
      return (
        <div className="item-card">
          <p className="item-card__text">Order ID: {item.id}</p>
          <p className="item-card__text">Customer Name: {item.customer_name}</p>
          <p className="item-card__text">
            Customer Email: {item.customer_email}
          </p>
          <p className="item-card__text">Product: {item.product}</p>
          <p className="item-card__text">Quantity: {item.quantity}</p>
        </div>
      );
    });

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

  return <div className="item-card-container">{loadAllInventoryItems()}</div>;
};

export default Inventory;
