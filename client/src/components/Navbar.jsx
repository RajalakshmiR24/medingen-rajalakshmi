import React from "react";
import { FaHome, FaPercent, FaBell, FaUser, FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";  
import logo from "../assets/migfulllogo.png"; 
import "./styles/Navbar.css";


const NavItem = ({ to, icon: Icon, label, navigate }) => {
  const handleClick = () => navigate(to); 

  return (
    <div onClick={handleClick} className="nav-item">
      <Icon className="icon" />
      <span>{label}</span>
    </div>
  );
};

const Navbar = () => {
  const navigate = useNavigate(); 

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="logo">
          <div onClick={() => navigate("/")}>
            <img src={logo} alt="Logo" className="logo-img" />
            <span className="logo-text">
              <strong>Medingen</strong>
            </span>
          </div>
        </div>
      </div>

      <div className="navbar-center">
        <NavItem to="/products" icon={FaHome} label="Home" navigate={navigate} />
        <NavItem to="/offers" icon={FaPercent} label="Offers" navigate={navigate} />
        <NavItem to="/notifications" icon={FaBell} label="Notification" navigate={navigate} />
        <NavItem to="/profile" icon={FaUser} label="Profile" navigate={navigate} />
      </div>

      <div className="navbar-right">
        <div className="cart-icon">
          <FaShoppingCart />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
