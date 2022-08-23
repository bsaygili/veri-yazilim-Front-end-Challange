import React from "react";
import searchImg from "../assets/search(17).png";
import filterBtn from "../assets/Filter-button.png";

function SearchBar() {
  return (
    <div
      className="input-group bg-body rounded-2 m-auto mb-2 align-self-center shadow"
      style={{
        width: 343,
        boxShadow:
          "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
      }}
    >
      <img
        src={searchImg}
        alt="search"
        className="position-absolute"
        style={{
          width: 14.58,
          height: 14.58,
          zIndex: 10,
          top: 18.5,
          left: 9,
        }}
      />
      <input
        type="text"
        placeholder="Mekan ara"
        className="form-control rounded-2"
        style={{
          paddingLeft: 35,
          width: 343,
          height: 51,
        }}
      />

      <img
        src={filterBtn}
        alt="filter"
        className="position-absolute"
        style={{
          width: 46,
          height: 46,
          zIndex: 10,
          top: 2.5,
          right: 5,
        }}
      />
    </div>
  );
}

export default SearchBar;
