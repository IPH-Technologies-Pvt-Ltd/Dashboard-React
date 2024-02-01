import { useState } from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Sidebar from "./components/Sidebar";

function App() {
  const [toggle, setToggle] = useState(true);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className="w-auto bg-clr">
      <div className="row g-0">
        {toggle && (
          <div className="col-2">
            <Sidebar />
          </div>
        )}
        <div className={`${toggle ? "col-10" : "col-12"}`}>
          <Dashboard toggle={toggle} handleToggle={handleToggle} />
        </div>
      </div>
    </div>
  );
}

export default App;
