import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const addModalDisplay = () => {
  document.getElementsByClassName("inventoryAddModal")[0].style.display =
    "flex";
};

const closeModal = () => {
  document.getElementsByClassName("inventoryAddModal")[0].style.display =
    "none";
};

const Addorder = ({ addItemToInventory }) => {
  const initialState = {
    id: "",
    product: "",
    quantity: "",
    customer_email: "",
    customer_name: "",
  };

  const [formState, setFormState] = useState(initialState);

  const handleChange = ({ target }) => {
    if (formState.id !== "") {
      setFormState((prevState) => ({
        ...prevState,
        [target.name]: target.value,
      }));
    } else {
      setFormState((prevState) => ({
        ...prevState,
        id: uuidv4(),
        [target.name]: target.value,
      }));
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    addItemToInventory(formState);
    closeModal();
  };

  return (
    <div className="inventoryAddModal">
      <div className="modal">
        <button className="modal__close-button" onClick={closeModal}>
          &#10006;
        </button>
        <h3>Add item:</h3>
        <form>
          <div className="modal__form-item">
            <label htmlFor="customer_name">Name:</label>
            <input
              type="text"
              value={formState.customer_name}
              placeholder="Name"
              onChange={handleChange}
              name="customer_name"
            />
          </div>
          <div className="modal__form-item">
            <label htmlFor="customer_email">Email:</label>
            <input
              type="email"
              value={formState.customer_email}
              placeholder="email"
              onChange={handleChange}
              name="customer_email"
            />
          </div>
          <div className="modal__form-item">
            <label htmlFor="product">Product:</label>
            <select
              value={formState.product}
              onChange={handleChange}
              name="product"
            >
              <option value="">--select--</option>
              <option value="Product 1">Product 1</option>
              <option value="Product 2">Product 2</option>
              <option value="Product 3">Product 3</option>
            </select>
          </div>
          <div className="modal__form-item">
            <label htmlFor="quantity">Quantity:</label>
            <input
              type="number"
              value={formState.quantity}
              placeholder="quantity"
              onChange={handleChange}
              name="quantity"
            />
          </div>
          <div align="center" className="modal__form-item">
            <button className="modal__submit" onClick={handleFormSubmit}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Addorder;
