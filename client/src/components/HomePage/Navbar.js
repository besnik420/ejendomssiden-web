import React from 'react'
import Logo from "../HomePage/assets/HeroSection/Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faChevronDown, faChevronRight, faBarsStaggered } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <FontAwesomeIcon icon={faBarsStaggered} />
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-slate-200  rounded-box w-52"
          >
            <li>
              <a>Køb</a>
            </li>
            <li tabIndex={0}>
              <a className="justify-between">
                Leje
                <FontAwesomeIcon icon={faChevronRight} />
              </a>
              <ul className="p-2 bg-slate-200 ml-3">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Sælg</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost w-28">
          <img src={Logo} />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 ">
          <li>
            <a>Køb</a>
          </li>
          <li tabIndex={0}>
            <a>
              Leje
              <FontAwesomeIcon icon={faChevronDown} />
            </a>
            <ul className="p-2 bg-slate-200 mt-3">
              <li>
                <a>Submenu 1</a>
              </li>
              <li>
                <a>Submenu 2</a>
              </li>
            </ul>
          </li>
          <li>
            <a>Sælg</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="rounded-md p-2 text-white bg-blue-500 border-0 hover:bg-blue-600">
          Opret bolig
        </a>
      </div>
    </div>
  );
}

export default Navbar