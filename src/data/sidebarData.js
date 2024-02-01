import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as LuIcons from "react-icons/lu";
import * as BsIcons from "react-icons/bs";
import * as PiIcons from "react-icons/pi";

export const Materially_menu = [
  {
    title: "Dashboard",
    path: "/",
    icons: <AiIcons.AiOutlineHome />,
    cName: "nav-text",
  },
  {
    title: "Widget",
    path: "/",
    icons: <PiIcons.PiToolbox />,
    cName: "nav-text",
  },
  {
    title: "RTL Layout",
    path: "/",
    icons: <FaIcons.FaGitter />,
    cName: "nav-text",
  },
];
export const Application_Menu = [
  {
    title: "User",
    path: "/",
    icons: <FaIcons.FaRegUserCircle />,
    cName: "nav-text",
  },
  {
    title: "E-commerce",
    path: "/",
    icons: <AiIcons.AiOutlineShoppingCart />,
    cName: "nav-text",
  },
  {
    title: "Contact",
    path: "/",
    icons: <LuIcons.LuContact />,
    cName: "nav-text",
  },
  {
    title: "Mail",
    path: "/",
    icons: <FaIcons.FaRegEnvelope />,
    cName: "nav-text",
  },
  {
    title: "Chat",
    path: "/",
    icons: <BsIcons.BsChatLeftText />,
    cName: "nav-text",
  },
];
export const UI_Element = [
  {
    title: "Basic",
    path: "/",
    icons: <BsIcons.BsBoxes />,
    cName: "nav-text",
  },
  {
    title: "Advance",
    path: "/",
    icons: <BsIcons.BsTag />,
    cName: "nav-text",
  },
];

export const Menu_Heads = [
  {
    title: "Materially",
    text: "Dashboard & Widget",
  },
  {
    title: "Application",
    text: "Prebuild Applications",
  },
  {
    title: "UI Elements",
    text: "Material UI Components",
  },
];
