import React from "react";

// A common modal structure for adding and editing orders
const CommonModalBody = ({
  closeModal,
  formState,
  handleChange,
  handleFormSubmit,
  modalTitle,
  className,
}) => {
  return (
    <div className={className}>
      <div className="modal">
        <button className="modal__close-button" onClick={closeModal}>
          &#10006;
        </button>
        <h3>{modalTitle}</h3>
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

export default CommonModalBody;
