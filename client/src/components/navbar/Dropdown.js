import React, { useState } from "react";
import Popper from "popper.js";
import { Link } from "react-router-dom";

export const Dropdown = ({ color, makeupType }) => {
  const [dropdownPopoverShow, setDropdownPopoverShow] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownItem, setDropdownItem] = useState([]);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const openDropdownPopover = () => {
    new Popper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start",
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };
  // bg colors
  let bgColor;
  color === "white"
    ? (bgColor = "bg-gray-800")
    : (bgColor = "bg-" + color + "-500");

  const handleDropdown = (dropdownId) => {
    const id = makeupType.filter((item) => item.id === dropdownId);
    setDropdownItem(id);
  };

  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full sm:w-6/12 md:w-4/12 px-4">
          <div className="relative inline-flex align-middle w-full">
            <button
              className={
                "text-white font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 " +
                bgColor
              }
              style={{ transition: "all .15s ease" }}
              type="button"
              ref={btnDropdownRef}
              onClick={() => {
                dropdownPopoverShow
                  ? closeDropdownPopover()
                  : openDropdownPopover();
              }}
            >
              {color === "white" ? "Shop" : color + " Dropdown"}
            </button>
            <div
              ref={popoverDropdownRef}
              className={
                (dropdownPopoverShow ? "block " : "hidden ") +
                (color === "white" ? "bg-white " : bgColor + " ") +
                "text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1"
              }
              style={{ minWidth: "12rem" }}
            >
              <Link
                to="/shop"
                className={
                  "text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent " +
                  (color === "white" ? " text-gray-800" : "text-white")
                }
              >
                Shop all
              </Link>
              {makeupType && (
                <>
                  {makeupType.map((data, idx) => {
                    return (
                      <>
                        {/* {data.name} */}
                        <button
                          key={idx}
                          className={
                            "text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap  " +
                            (color === "white"
                              ? " text-gray-800"
                              : "text-white")
                          }
                          onClick={() => {
                            handleDropdown(data.id);
                            setMenuOpen(!menuOpen);
                          }}
                        >
                          {data.name}
                        </button>
                      </>
                    );
                  })}
                </>
              )}
                    {dropdownItem && (
        <div>
          {dropdownItem.map((data) => {
            return data.items.map((type) => (
              <>
                <Link
                  key={type}
                  to={`/type/${type}`}
                  className={
                     `text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent float-left`
                    +
                    (color === "white" ? " text-gray-800" : "text-white") +
                    (menuOpen ? " flex" : " hidden")
                  }
                >
                  {type}
                </Link>
              </>
            ));
          })}{" "}
        </div>
      )}
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default function DropdownRender() {
  return (
    <>
      <Dropdown />
    </>
  );
}
