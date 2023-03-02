import React from 'react'
import Logo from "../HomePage/assets/HeroSection/Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faChevronDown, faChevronRight, faBarsStaggered, faUser } from "@fortawesome/free-solid-svg-icons";
import Register from './Register';
import Login from "./Login";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar absolute top-0 ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <FontAwesomeIcon icon={faBarsStaggered} />
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-slate-200  rounded-box w-52 text-white"
          >
            <li>
              <a className="active:bg-blue-600">Køb</a>
            </li>
            <li tabIndex={0}>
              <a className="justify-between active:bg-blue-600">
                Leje
                <FontAwesomeIcon icon={faChevronRight} />
              </a>
              <ul className="p-2 bg-slate-200 ml-3">
                <li>
                  <a className="active:bg-blue-600">Submenu 1</a>
                </li>
                <li>
                  <a className="active:bg-blue-600">Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <Link className="active:bg-blue-600" to="/RegisterProperty">
                Sælg
              </Link>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost w-28">
          <img src={Logo} />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-white">
          <li>
            <a className="active:bg-blue-600">Køb</a>
          </li>
          <li tabIndex={0}>
            <a className="active:bg-blue-600">
              Leje
              <FontAwesomeIcon icon={faChevronDown} />
            </a>
            <ul className="p-2 bg-slate-200 mt-3 text-black">
              <li>
                <a className="active:bg-blue-600">Submenu 1</a>
              </li>
              <li>
                <a className="active:bg-blue-600">Submenu 2</a>
              </li>
            </ul>
          </li>
          <li>
            <Link className="active:bg-blue-600" to="/RegisterProperty">
              Sælg
            </Link>
          </li>
          <li>
            <a className="active:bg-blue-600">Fagfolk</a>
          </li>
          <li>
            <a className="active:bg-blue-600">Om os</a>
          </li>
          <li>
            <a className="active:bg-blue-600">Kontakt</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <div className="dropdown dropdown-bottom dropdown-end">
          <label tabIndex={0} className="btn btn-ghost m-1 text-white">
            <FontAwesomeIcon icon={faUser} />
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 text-black"
          >
            <li>
              <label
                className="cursor-pointer active:bg-blue-600"
                htmlFor="my-modal-Register"
              >
                Registrer
              </label>
            </li>
            <li>
              <label
                className="cursor-pointer active:bg-blue-600"
                htmlFor="my-modal-Login"
              >
                Login
              </label>
            </li>
          </ul>
        </div>

        {/* The button to open modal */}
        <button className="rounded-md py-2 px-4 text-white bg-blue-500 border-0 hover:bg-blue-600 cursor-pointer">
          Opret bolig
        </button>
      </div>

      <Register />
      <Login />
    </div>
  );
}

export default Navbar