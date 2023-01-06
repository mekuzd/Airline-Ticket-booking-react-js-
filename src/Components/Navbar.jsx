import { useState } from "react";
import { FaBars, FaAngleDown, FaAngleUp, FaUserCircle } from "react-icons/fa";
import { AiOutlineLogin } from "react-icons/ai";

import Sidebar from "./Sidebar";
import Dropdown from "./Dropdown";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [dropdown, setdropdown] = useState(false);
  const showDropdown = () => {
    setdropdown(true);
  };
  const closeDropdown = () => {
    setdropdown(false);
  };

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <nav className="shadow">
      {/* mobile navbar  */}

      <Link to={"/"} className="fs-3">
        Mekuz Airline
      </Link>

      <button className="d-block d-md-none ms-auto barsbtn ">
        <FaBars className="bars" onClick={handleShow} />
      </button>
      {/* toggle bar */}
      <Sidebar
        show={show}
        handleClose={handleClose}
        showDropdown={showDropdown}
        dropdown={dropdown}
        closeDropdown={closeDropdown}
      />

      {/* nav links on desktop */}
      <div className="d-none d-md-flex  justify-content-center align-items-center ">
        <li className="links mx-4 fs-6 ">Book Now</li>
        <Link to={"/explore"} className="links mx-4  fs-6 ">
          Explore{" "}
        </Link>
        <li
          className="links ms-2 fs-6 position-relative "
          onMouseOver={showDropdown}
          onMouseOut={closeDropdown}
        >
          About us{" "}
          <span className="mx-1">
            {dropdown ? <FaAngleUp /> : <FaAngleDown />}
          </span>
          {dropdown && <Dropdown />}
        </li>
      </div>

      <div className="d-none d-md-flex justify-content-center align-items-center">
        <Link to={"/signup"} className="links fs-5 ">
          <span className="mx-2">
            <FaUserCircle />
          </span>
          SignUp
        </Link>
        <Link to={"/login"} className="mx-4 links fs-5  ">
          Login{" "}
          <span>
            <AiOutlineLogin />
          </span>
        </Link>
      </div>
    </nav>
  );
};
export default Navbar;
