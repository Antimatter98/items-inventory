import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPencilAlt } from "@fortawesome/free-solid-svg-icons";

const DisplayAllOrders = ({
  inventory,
  setSelectedData,
  modalDisplay,
  deleteItemFromInventory,
}) =>
  inventory.map((item) => {
    return (
      <div className="item-card" key={item.id}>
        <p className="item-card__text">Order ID: {item.id}</p>
        <p className="item-card__text">Customer Name: {item.customer_name}</p>
        <p className="item-card__text">Customer Email: {item.customer_email}</p>
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

export default DisplayAllOrders;
