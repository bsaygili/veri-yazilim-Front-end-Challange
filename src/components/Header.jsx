import React from "react";
import menuButton from "../assets/Menu-button.png";
import bucket from "../assets/Group-36265.png";
import bill from "../assets/Group-36267.png";

function Header() {
  return (
    <>
      <nav className="navbar navbar-light bg-body w-100 sticky-top mb-3 justify-content-between align-items-center">
        <img src={menuButton} alt="" />
        <h1
          style={{
            fontSize: 14,
          }}
        >
          Ana Sayfa
        </h1>
        <div className="navbar-nav flex-row">
          <a className="nav-item nav-link active" href="/">
            <img src={bucket} alt="bucket" />
          </a>
          <a className="nav-item nav-link active" href="/">
            <img src={bill} alt="bill" />
          </a>
        </div>
      </nav>
    </>
  );
}

export default Header;
