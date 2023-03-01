import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import LoginImg from "../HomePage/assets/HeroSection/Login-Img.jpg";
import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCredentials } from "../../features/auth/authSlice";
import { useLoginMutation } from "../../features/auth/authApiSlice";
import Cookies from "js-cookie";

const Login = () => {
  const userRef = useRef();
  const errRef = useRef();
  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const navigate = useNavigate();
  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useDispatch();
  const [passwordType, setPasswordType] = useState("password");
  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleUserInput = (e) => setUser(e.target.value);
  const handlePwdInput = (e) => setPwd(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userData = await login({ email:user, password:pwd }).unwrap();
      dispatch(setCredentials({ user, token: userData.token }));
     Cookies.set("token", userData.token);
      setUser("");
      setPwd("");
      navigate("/welcome");
      console.log("Logged in successfully");
    } catch (err) {
      if (!err?.originalStatus) {
        // isLoading: true until timeout occurs
        setErrMsg("No Server Response");
      } else if (err.originalStatus === 400) {
        setErrMsg("Missing Username or Password");
      } else if (err.originalStatus === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
      }
      errRef.current.focus();
    }
  };
  const content = isLoading ? (
    <h1>Loading...</h1>
  ) : (
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
          <form onSubmit={handleSubmit}>
            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"}></p>
            <div className="flex">
              <div className="w-6/12 ">
                <img src={LoginImg} alt="" />
              </div>
              <div className="w-6/12 flex flex-col justify-center items-center">
                <h3 className="text-lg font-bold text-center my-4">
                  Log ind på din konto
                </h3>
                <div className="flex flex-col justify-center items-center w-full">
                  <input
                    type="text"
                    ref={userRef}
                    placeholder="Brugernavn"
                    className="input input-bordered w-full max-w-xs mb-2"
                    required
                    onChange={handleUserInput}
                  />
                  <div className="w-full max-w-xs my-2">
                    <label className="input-group">
                      <input
                        type={passwordType}
                        placeholder="Adgangskode"
                        className="input input-bordered w-full"
                        required
                        onChange={handlePwdInput}
                      />
                      <button
                        type="button"
                        className="btn btn-ghost bg-slate-200 "
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
                  <button className="rounded-md mt-6 p-2 text-white bg-blue-500 border-0 hover:bg-blue-600 w-7/12 ">
                    Login
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
  return content;
};

export default Login;
