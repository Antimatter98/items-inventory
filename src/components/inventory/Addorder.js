import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import CommonModalBody from "./CommonModalBody";

// Modal display and hide functions
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

  // form change handling functions
  const handleChange = ({ target }) => {
    setFormState((prevState) => ({
      ...prevState,
      id: uuidv4(),
      [target.name]: target.value,
    }));
  };

  //set unique id for order and submit
  const handleFormSubmit = (event) => {
    event.preventDefault();
    setFormState((prevState) => ({
      ...prevState,
      id: uuidv4(),
    }));
    addItemToInventory(formState);
    closeModal();
  };

  return (
    <CommonModalBody
      closeModal={closeModal}
      formState={formState}
      handleChange={handleChange}
      handleFormSubmit={handleFormSubmit}
      modalTitle="Add Item: "
      className="inventoryAddModal"
    />
  );
};

export default Addorder;
