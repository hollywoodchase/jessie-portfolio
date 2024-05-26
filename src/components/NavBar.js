import React, { useState } from "react";
import "../styles/NavBar.css";
import { Link } from "react-router-dom";
// import ResponsiveMenu from "react-responsive-navbar";
// import { FaBars, FaWindowClose } from "react-icons/fa";
// import styled from "styled-components";

const BasicDropdown = ({ showDropdown, setShowDropdown }) => {
  return (
    <div class="dropdown-wrapper">
      <Link onClick={setShowDropdown} className="trigger-button nav-link">
        Digital Art
      </Link>
      {showDropdown && (
        <div className="link-col">
          <Link
            onClick={setShowDropdown}
            class="dropdown nav-link"
            to="/artgallery"
          >
            Pet Portraits
          </Link>
          <Link onClick={setShowDropdown} class="dropdown nav-link" to="/misc">
            Miscellaneous
          </Link>
        </div>
      )}
    </div>
  );
};

const NavBar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const closeDropdown = () => setShowDropdown(false);
  return (
    <div className="resp-menu">
      <div className="nav-row">
        <Link className="nav-link" to="/" onClick={closeDropdown}>
          Home
        </Link>
        <Link className="nav-link" to="/shop" onClick={closeDropdown}>
          Shop
        </Link>

        <BasicDropdown
          showDropdown={showDropdown}
          setShowDropdown={() => setShowDropdown(!showDropdown)}
        />
        {/* <Link className="nav-link" to="/contact">Contact</Link> */}
      </div>
    </div>
  );
};

export default NavBar;
