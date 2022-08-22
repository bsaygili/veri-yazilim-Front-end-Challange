import React from "react";
import searchImg from "../assets/search(17).png";
import filterBtn from "../assets/Filter-button.png";

function SearchBar() {
  return (
    <div className="d-flex flex-column align-items-center">
      <div className="input-group shadow mb-5 bg-body rounded mt-5">
        <span className="input-group-text" id="inputGroupPrepend">
          <img src={searchImg} alt="search" />
        </span>
        <input type="text" className="form-control " placeholder="Mekan ara" />
        <img src={filterBtn} alt="filter" />
      </div>
    </div>
  );
}

export default SearchBar;
