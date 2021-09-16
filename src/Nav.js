import React, { useEffect, useState } from "react";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        className='nav__logo'
        src='https://www.freepnglogos.com/uploads/netflix-logo-circle-png-5.png'
        alt='NETFLIX LOGO'
      />
      <img
        className='nav__avatar'
        src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
        alt='User Logo'
      />
    </div>
  );
}

export default Nav;
