import React from 'react'
import Logo from "../HomePage/assets/HeroSection/Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faChevronDown, faChevronRight, faBarsStaggered, faUser } from "@fortawesome/free-solid-svg-icons";
import RegisterImg from "../HomePage/assets/HeroSection/Register-Img.jpg";

const Navbar = () => {
  return (
    <div className="navbar bg-slate-100">
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
              <a className="active:bg-blue-600">Sælg</a>
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
            <a className="active:bg-blue-600">Køb</a>
          </li>
          <li tabIndex={0}>
            <a className="active:bg-blue-600">
              Leje
              <FontAwesomeIcon icon={faChevronDown} />
            </a>
            <ul className="p-2 bg-slate-200 mt-3">
              <li>
                <a className="active:bg-blue-600">Submenu 1</a>
              </li>
              <li>
                <a className="active:bg-blue-600">Submenu 2</a>
              </li>
            </ul>
          </li>
          <li>
            <a className="active:bg-blue-600">Sælg</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <div className="dropdown dropdown-bottom dropdown-end">
          <label tabIndex={0} className="btn btn-ghost m-1">
            <FontAwesomeIcon icon={faUser} />
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <label
                className="cursor-pointer active:bg-blue-600"
                htmlFor="my-modal-3"
              >
                Register
              </label>
            </li>
          </ul>
        </div>

        {/* The button to open modal */}
        <btn className="rounded-md py-2 px-4 text-white bg-blue-500 border-0 hover:bg-blue-600 cursor-pointer">
          Opret bolig
        </btn>
      </div>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative w-11/12 max-w-5xl p-0">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2 "
          >
            ✕
          </label>
          <div className="flex">
            <div className="w-6/12">
              <img src={RegisterImg} alt="" />
            </div>
            <div className="w-6/12 items-center">
              <h3 className="text-lg font-bold text-center my-4">
                Opret en konto
              </h3>
              <div className="flex flex-col justify-center items-center">
                <input
                  type="text"
                  placeholder="Brugernavn"
                  className="input input-bordered w-full max-w-xs mb-2"
                />
                <input
                  type="text"
                  placeholder="E-mail"
                  className="input input-bordered w-full max-w-xs"
                />
                <input
                  type="text"
                  placeholder="Adgangskode"
                  className="input input-bordered w-full max-w-xs my-2"
                />
                <input
                  type="text"
                  placeholder="Bekræft adgangskode"
                  className="input input-bordered w-full max-w-xs"
                />
                <div className="form-control -ml-16">
                  <label className="cursor-pointer label">
                    <span className="label-text mx-1">
                      Jeg er enig i: vilkår & betingelserne
                    </span>
                    <input
                      type="checkbox"
                      className="checkbox checkbox-info text-white"
                    />
                  </label>
                </div>

                <button className="rounded-md mt-6 p-2 text-white bg-blue-500 border-0 hover:bg-blue-600 w-7/12 ">
                  Registrer
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar