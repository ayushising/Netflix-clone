import React, { useState, useEffect } from "react";
import "./Nav.css";
function Nav() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    const scrollhandler = () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    };
    window.addEventListener("scroll", scrollhandler);
    return () => {
      window.removeEventListener("scroll", scrollhandler);
    };
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      {/* <div className='nav'> */}
      <img
        src="https://vignette.wikia.nocookie.net/dynastytv/images/5/54/Netflix_logo.png/revision/latest?cb=20171022162747"
        className="nav_logo"
        alt="logo"
      />
      <img
        src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
        alt="avatar"
        className="nav_avatar"
      />
    </div>
  );
}

export default Nav;
