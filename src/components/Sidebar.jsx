import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Materially_menu,
  Application_Menu,
  UI_Element,
} from "../data/sidebarData";
import "../Styles/Sidebar.css";

const Sidebar = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  const handleMenuClick = (index) => {
    setActiveMenu(index);
  };

  return (
    <div className="mt-0">
      <div className="sidebar_head container-fluid mt-0 d-flex justify-content-start align-items-center">
        <img src="logo.png" alt="logo" width={50} />
        <h5 className="fw-bold align-middle mb-0 text-light ms-2 fs-4">
          Materially
        </h5>
      </div>
      <div className="list-group sidebar-bg list-group-flush">
        <ul className="nav-menu-items">
          <li className="nav-sub mb-0">
            <p className="nav-sub-head mb-0 pt-3">Materially</p>
            <p className="nav-sub-text">Dashboard & Widget</p>
          </li>
          {Materially_menu.map((item, index) => {
            return (
              <li
                key={index}
                className={`${item.cName} ${
                  activeMenu === item.title ? "active" : ""
                }`}
              >
                <Link
                  to={item.path}
                  onClick={() => handleMenuClick(item.title)}
                >
                  {item.icons}
                  <span className="nav-title">{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
        <ul className="nav-menu-items">
          <li className="nav-sub">
            <p className="nav-sub-head mb-0">Application</p>
            <p className="nav-sub-text">Prebuild Applications</p>
          </li>
          {Application_Menu.map((item, index) => {
            return (
              <li
                key={index}
                className={`${item.cName} ${
                  activeMenu === item.title ? "active" : ""
                }`}
              >
                <Link
                  to={item.path}
                  onClick={() => handleMenuClick(item.title)}
                >
                  {item.icons}
                  <span className="nav-title">{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
        <ul className="nav-menu-items">
          <li className="nav-sub">
            <p className="nav-sub-head mb-0">UI Elements</p>
            <p className="nav-sub-text">Material UI Components</p>
          </li>
          {UI_Element.map((item, index) => {
            return (
              <li
                key={index}
                className={`${item.cName} ${
                  activeMenu === index ? "active" : ""
                }`}
              >
                <Link to={item.path} onClick={() => handleMenuClick(index)}>
                  {item.icons}
                  <span className="nav-title">{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
