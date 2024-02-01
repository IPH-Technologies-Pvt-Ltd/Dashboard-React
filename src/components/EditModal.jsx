import React, { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { orderData } from "../data/orderData";

const EditModal = ({ showModal, handleClose, data }) => {
  console.log(data);

  return (
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Order Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="input-group mb-3">
          <span
            className="w-25 input-group-text"
            id="inputGroup-sizing-default"
          >
            Customer
          </span>
          <span
            className="w-75 input-group-text"
            id="inputGroup-sizing-default"
          >
            {data.customer}
          </span>
        </div>
        <div className="input-group mb-3">
          <span
            className="w-25 input-group-text"
            id="inputGroup-sizing-default"
          >
            Order ID
          </span>
          <span
            className="w-75 input-group-text"
            id="inputGroup-sizing-default"
          >
            {data.orderID}
          </span>
        </div>
        <div className="input-group mb-3">
          <span
            className="w-25 input-group-text"
            id="inputGroup-sizing-default"
            style={{ height: "auto" }}
          >
            Image
          </span>
          <span
            className="w-75 input-group-text"
            id="inputGroup-sizing-default"
            style={{ height: "auto" }}
          >
            <img src={data.photo} alt="img" width={50} />
          </span>
        </div>
        <div className="input-group mb-3">
          <span
            className="w-25 input-group-text"
            id="inputGroup-sizing-default"
          >
            Product
          </span>
          <span
            className="w-75 input-group-text"
            id="inputGroup-sizing-default"
          >
            {data.product}
          </span>
        </div>
        <div className="input-group mb-3">
          <span
            className="w-25 input-group-text"
            id="inputGroup-sizing-default"
          >
            Quantity
          </span>
          <span
            className="w-75 input-group-text"
            id="inputGroup-sizing-default"
          >
            {data.quantity}
          </span>
        </div>
        <div className="input-group mb-3">
          <span
            className="w-25 input-group-text"
            id="inputGroup-sizing-default"
          >
            Date
          </span>
          <span
            className="w-75 input-group-text"
            id="inputGroup-sizing-default"
          >
            {data.date}
          </span>
        </div>
        <div className="input-group mb-3">
          <span
            className="w-25 input-group-text"
            id="inputGroup-sizing-default"
          >
            Status
          </span>
          <span
            className="w-75 input-group-text"
            id="inputGroup-sizing-default"
          >
            {data.status}
          </span>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default EditModal;
