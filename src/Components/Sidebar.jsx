import { FaAngleDown } from "react-icons/fa";
import { AiOutlineLogin } from "react-icons/ai";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useState } from "react";

const Sidebar = ({ show, handleClose }) => {
  const [dropdown, setdropdown] = useState(false);

  return (
    <Offcanvas
      show={show}
      onHide={handleClose}
      className={`  ${
        show
          ? "animate__animated animate__slideInDown "
          : "animate__animated animate__slideOutUp"
      } `}
    >
      <Offcanvas.Header closeButton>
        {" "}
        <div to={"/"} className="fs-3 fw-bold text-dark">
          Mekus Airline
        </div>
      </Offcanvas.Header>
      <Offcanvas.Body>
        {" "}
        <div className=" d-column-flex justify-content-between align-items-center ">
          <li className=" fs-6">BookNow</li>
          <li className="  fs-6">Explore </li>
          <li
            className="text-dark  fs-6"
            onClick={() => setdropdown(!dropdown)}
          >
            Aboutus{" "}
            <span>
              <FaAngleDown />
            </span>
            {dropdown && (
              <ul>
                <li>Contacts</li>
                <li>Team</li>
                <li>Testimonials</li>
              </ul>
            )}
          </li>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <li className="text-dark fs-5">SignUp</li>
          <li className="mx-4 text-dark fs-5">
            Login{" "}
            <span>
              <AiOutlineLogin />
            </span>
          </li>
        </div>
      </Offcanvas.Body>
    </Offcanvas>
  );
};
export default Sidebar;
