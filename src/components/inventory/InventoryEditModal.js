import React, { useState } from "react";
import CommonModalBody from "./CommonModalBody";

// Modal display and hide functions
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

  // form change handling functions
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
    <CommonModalBody
      closeModal={closeModal}
      formState={formState}
      handleChange={handleChange}
      handleFormSubmit={handleFormSubmit}
      modalTitle="Edit Item: "
      className="inventoryModal"
    />
  );
};

export default InventoryEditModal;
