import React from "react";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import "./Navbar.css";

const Navbar = () => {
  const [underline,setUnderline]=useState(0);

  const [toggleMenu, setToggleMenu] = useState(true);

  const underlineChange = (el) =>{
      setUnderline(el);
  }


  const change = () => {
    console.log("clicked");

    setToggleMenu(!toggleMenu);
  };
  

  const openedStyle = {
    left: "-4.5%",
    transition: "0.5s ease-in-out",
  };
  const closedStyle = {
    left: "-150%",
    transition: "0.5s ease-in-out",
  };
  return (
    <div class="nav-container">
      <nav>
        <div className="logo"></div>

        <div class="nav-sub-container">
        {toggleMenu ? (
          <MenuIcon
            className="hamburger"
            onClick={change}
            style={{ fontSize: "2rem", cursor: "pointer", marginLeft: "9rem"}}
          />
         ) : (
          <CloseIcon
            className="hamburger"
            onClick={change}
            style={{ fontSize: "2rem", cursor: "pointer", marginLeft: "9rem" }}
          />
        )}
          <ul style={toggleMenu ? closedStyle : openedStyle} >
            <li className={(underline===0? 'underline' : '')} onClick={() =>underlineChange(0)} >Home</li>
            <li className={(underline===1? 'underline' : '')} onClick={() =>underlineChange(1)} >About us</li>
            <li className={(underline===2? 'underline' : '')} onClick={() =>underlineChange(2)} >Our Artists</li>
            <li className={(underline===3? 'underline' : '')} onClick={() =>underlineChange(3)} >Platform</li>
            <li className={(underline===4? 'underline' : '')} onClick={() =>underlineChange(4)} >Contact</li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
