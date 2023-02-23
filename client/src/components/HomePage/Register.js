import React, {useState, useEffect} from "react";
import RegisterImg from "../HomePage/assets/HeroSection/Register-Img.jpg";
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash} from "@fortawesome/free-solid-svg-icons";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [passwordType, setPasswordType] = useState("password");
  const [confirmPasswordType, setConfirmPasswordType] = useState("password");
  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };
  const toggleConfirmPassword = () => {
    if (confirmPasswordType === "password") {
      setConfirmPasswordType("text");
      return;
    }
    setConfirmPasswordType("password");
  };
  const handleSubmit = (event) => {
    console.log(formData);
    event.preventDefault();
    axios
      .post("http://localhost:8000/registerForm", formData)
      .then((response) => {
        console.log("Form submitted successfully");
        setFormData({
          username: "",
          email: "",
          password: "",
        });
      })
      .catch((error) => {
        console.error("Error submitting form", error);
      });
  };
   const handleChange = (event) => {
     setFormData({
       ...formData,
       [event.target.name]: event.target.value,
     });
   };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="checkbox"
          id="my-modal-Register"
          className="modal-toggle"
        />
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
                    name="username"
                    className="input input-bordered w-full max-w-xs mb-2"
                    value={formData.username}
                    onChange={handleChange}
                  />
                  <input
                    type="email"
                    placeholder="E-mail"
                    name="email"
                    className="input input-bordered w-full max-w-xs"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <div className="w-full max-w-xs my-2">
                    <label className="input-group">
                      <input
                        type={passwordType}
                        placeholder="Adgangskode"
                        name="password"
                        className="input input-bordered w-full"
                        value={formData.password}
                        onChange={handleChange}
                      />
                      <button
                        className="btn btn-ghost bg-slate-200"
                        onClick={togglePassword}
                      >
                        {passwordType === "password" ? (
                          <FontAwesomeIcon icon={faEyeSlash} />
                        ) : (
                          <FontAwesomeIcon icon={faEye} />
                        )}
                      </button>
                    </label>
                  </div>
                  <div className="w-full max-w-xs">
                    <label className="input-group">
                      <input
                        type={confirmPasswordType}
                        name="confirm-password"
                        placeholder="Bekræft adgangskode"
                        className="input input-bordered w-full"
                      />
                      <button className="btn btn-ghost bg-slate-200" onClick={toggleConfirmPassword}>
                        {confirmPasswordType === "password" ? (
                          <FontAwesomeIcon icon={faEyeSlash} />
                        ) : (
                          <FontAwesomeIcon icon={faEye} />
                        )}
                      </button>
                    </label>
                  </div>
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
      </form>
    </div>
  );
};

export default Register;
