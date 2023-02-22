import React from 'react';
import RegisterImg from "../HomePage/assets/HeroSection/Register-Img.jpg";

const Register = () => {
  return (
    <div>
      <input type="checkbox" id="my-modal-Register" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative w-11/12 max-w-5xl p-0">
          <label
            htmlFor="my-modal-Register"
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

export default Register