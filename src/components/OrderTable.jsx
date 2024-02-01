import React, { useState } from "react";
import { orderData } from "../data/orderData";
import { MdOutlineRemoveRedEye, MdDeleteOutline } from "react-icons/md";
import EditModal from "./EditModal";

const OrderTable = ({ searchTerm }) => {
  const [tableData, setTableData] = useState(orderData);
  const [showModal, setShowModal] = useState(false);
  const [editOrderID, setEditOrderID] = useState("");

  const handleDelete = (index) => {
    const conf_msg = window.confirm("Are you sure want to delete ?");
    if (conf_msg) {
      const newData = [...tableData];
      newData.splice(index, 1);
      setTableData(newData);
    } else {
    }
  };
  const handleShow = (id) => {
    setShowModal(true);
    const editItem = orderData.find((elem) => {
      return elem.orderID === id;
    });
    setEditOrderID(editItem);
  };
  const handleClose = () => setShowModal(false);

  return (
    <div>
      <EditModal
        showModal={showModal}
        handleClose={handleClose}
        data={editOrderID}
      />
      <table className="table caption-top text-center shadow-sm mb-5">
        <caption className="table-caption mt-4 rounded-top-3 fw-bold fs-6 px-3">
          Latest Order
        </caption>
        <thead>
          <tr>
            <th scope="col">Customer</th>
            <th scope="col">Order Id</th>
            <th scope="col">Photo</th>
            <th scope="col">Product</th>
            <th scope="col">Quantity</th>
            <th scope="col">Date</th>
            <th scope="col">Status</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {tableData
            ?.filter((item) => {
              return String(searchTerm).toLowerCase() === ""
                ? item
                : item.customer.toLowerCase().includes(searchTerm) ||
                    item.orderID.toLowerCase().includes(searchTerm) ||
                    item.status.toLowerCase().includes(searchTerm) ||
                    item.quantity.toLowerCase().includes(searchTerm) ||
                    item.date.toLowerCase().includes(searchTerm) ||
                    item.product.toLowerCase().includes(searchTerm);
            })
            ?.map((item, index) => {
              return (
                <tr className="align-middle" key={index}>
                  <td>{item?.customer}</td>
                  <td>{item?.orderID}</td>
                  <td>
                    <img src={item?.photo} alt="prod_img" height={50} />
                  </td>
                  <td>{item?.product}</td>
                  <td>{item?.quantity}</td>
                  <td>{item?.date}</td>
                  <td>
                    <p
                      className={`${
                        item.status.toLowerCase() === "success"
                          ? "bg-success"
                          : item.status.toLowerCase() === "failed"
                          ? "bg-danger"
                          : item.status.toLowerCase() === "paid"
                          ? "bg-primary"
                          : "bg-dark"
                      } mb-0 fw-bold text-light rounded-pill text-center px-2`}
                    >
                      {item?.status}
                    </p>
                  </td>

                  <td>
                    <MdOutlineRemoveRedEye
                      className="fs-5 me-2"
                      type="button"
                      style={{ color: "#58B6FF" }}
                      onClick={() => handleShow(item.orderID)}
                    />
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default OrderTable;
