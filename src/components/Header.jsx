import React, { useEffect, useState } from "react";
import { LuSunMoon, LuLanguages } from "react-icons/lu";
import { IoSearch } from "react-icons/io5";
import { FaBars } from "react-icons/fa";
import "../Styles/Header.css";

const Header = ({ toggle, handleToggle, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [theme, setTheme] = useState("light-theme");

  const handleChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    onSearch(term);
  };
  console.log(toggle);

  const toggleTheme = () => {
    if (theme === "dark-theme") {
      setTheme("light-theme");
    } else {
      setTheme("dark-theme");
    }
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <nav className={`navbar ${toggle ? "" : "py-0"}`}>
      <div className="container-fluid">
        <div className="d-flex justify-content-start align-items-center">
          <div
            className={`d-flex justify-content-start align-items-center ${
              toggle ? "d-none" : "d-block"
            }`}
          >
            <img src="logo.png" alt="logo" width={50} />
            <h5 className="fw-bold align-middle mb-0 text-light ms-2 me-5 fs-4">
              Materially
            </h5>
          </div>
          <FaBars
            className="text-light fs-4"
            type="button"
            onClick={handleToggle}
          />
        </div>
        <div className="d-flex justify-content-start align-items-center">
          <form
            className="d-flex justify-content-start align-items-center searchBox me-4"
            role="search"
            value={searchTerm}
            onChange={handleChange}
          >
            <IoSearch className="text-light fs-5 ms-2" />
            <input
              className="bg-transparent searchInput text-light"
              type="search"
              placeholder="Search..."
              aria-label="Search"
            />
          </form>
          <LuLanguages className="text-light fs-5" />
          <select
            className="bg-transparent langSelect text-light me-4"
            aria-label="Default select example"
          >
            <option defaultValue="english">English</option>
          </select>
          <LuSunMoon
            className="text-light me-5 fs-3"
            type="button"
            onClick={() => toggleTheme()}
          />
        </div>
      </div>
    </nav>
  );
};

export default Header;
