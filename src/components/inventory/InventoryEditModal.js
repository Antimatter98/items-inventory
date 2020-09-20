import React, { useState } from "react";

export const modalDisplay = () => {
  document.getElementsByClassName("inventoryModal")[0].style.display = "flex";
};

const closeModal = () => {
  document.getElementsByClassName("inventoryModal")[0].style.display = "none";
};

const InventoryEditModal = ({ selectedData, editItemFromInventory }) => {
  const initialState = {
    id: "",
    product: "",
    quantity: "",
    customer_email: "",
    customer_name: "",
  };

  const [formState, setFormState] = useState(initialState);

  //only change the state when new item is passed.
  //to avoid re-renders
  if (selectedData.id !== formState.id) {
    setFormState((prevState) => selectedData);
  }

  const handleChange = ({ target }) => {
    setFormState((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    editItemFromInventory(formState);
    closeModal();
  };

  return (
    <div className="inventoryModal">
      <div className="modal">
        <button className="modal__close-button" onClick={closeModal}>
          &#10006;
        </button>
        <h3>Edit item:</h3>
        <form>
          <div className="modal__form-item">
            <label htmlFor="customer_name">Name:</label>
            <input
              type="text"
              value={formState.customer_name}
              placeholder={selectedData.customer_name}
              onChange={handleChange}
              name="customer_name"
            />
          </div>
          <div className="modal__form-item">
            <label htmlFor="customer_email">Email:</label>
            <input
              type="email"
              value={formState.customer_email}
              placeholder={selectedData.customer_email}
              onChange={handleChange}
              name="customer_email"
            />
          </div>
          <div className="modal__form-item">
            <label htmlFor="product">Product:</label>
            <input
              type="text"
              value={formState.product}
              placeholder={selectedData.product}
              onChange={handleChange}
              name="product"
            />
          </div>
          <div className="modal__form-item">
            <label htmlFor="quantity">Quantity:</label>
            <input
              type="number"
              value={formState.quantity}
              placeholder={selectedData.quantity}
              onChange={handleChange}
              name="quantity"
            />
          </div>
          <div align="center" className="modal__form-item">
            <button className="modal__submit" onClick={handleFormSubmit}>
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default InventoryEditModal;
