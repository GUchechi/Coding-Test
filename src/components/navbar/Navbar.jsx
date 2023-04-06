import { useState } from "react";
import { NavData } from "../navbar/NavData";
import { HiX } from "react-icons/hi";
import { FaBars } from "react-icons/fa";
import logo from "../../assets/logo.png";
import "./Navbar.css";

const Navbar = () => {
  const [toggleIcon, setToggleIcon] = useState(false);

  const handleToggle = () => {
    setToggleIcon(!toggleIcon);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar__container">
          <div >
            <img src={logo} alt="logo" className="nav__logo"/>
          </div>
          <ul
            className={`navbar__container__menu ${toggleIcon ? "active" : ""}`}
          >
            {NavData.map((item, index) => (
              <li key={index} className="navbar__container__menu__item" >
                {item.label}
              </li>
            ))}
          </ul>
          <div className="nav-icon" onClick={handleToggle}>
            {toggleIcon ? <HiX size={30} /> : <FaBars size={30} />}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
