import React, { useEffect, useState } from 'react';
import lugaflix from './imagens/lugaflix.png';
import avatar from './imagens/avatar.png';
import './Nav.css';

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
    <div className={`nav ${show && "nav_black"}`}>
        <img
            className="nav_logo"
            src={lugaflix}
            alt="Lugaflix Logo"
        />

        <img
            className="nav_avatar"
            src={avatar}
            alt="Lugaflix Logo"
        />
    </div>
  );
}

export default Nav;
