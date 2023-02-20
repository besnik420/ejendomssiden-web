import React from 'react';
import RegisterImg from "../HomePage/assets/HeroSection/Login-Img.jpg";

const Login = () => {
  return (
    <div>
      <input type="checkbox" id="my-modal-Login" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative w-11/12 max-w-5xl p-0">
          <label
            htmlFor="my-modal-Login"
            className="btn btn-sm btn-circle absolute right-2 top-2 "
          >
            ✕
          </label>
          <div className="flex">
            <div className="w-6/12 ">
              <img src={RegisterImg} alt="" />
            </div>
            <div className="w-6/12 flex flex-col justify-center items-center">
              <h3 className="text-lg font-bold text-center my-4">
                Log ind på din konto
              </h3>
              <div className="flex flex-col justify-center items-center w-full">
                <input
                  type="text"
                  placeholder="Brugernavn"
                  className="input input-bordered w-full max-w-xs mb-2"
                />
                <input
                  type="text"
                  placeholder="Adgangskode"
                  className="input input-bordered w-full max-w-xs my-2"
                />
                <button className="rounded-md mt-6 p-2 text-white bg-blue-500 border-0 hover:bg-blue-600 w-7/12 ">
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login