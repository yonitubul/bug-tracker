import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signIn } from "../../controllers/redux/authSlice";
import "./login.css";

export default function Login() {
  const dispatch = useDispatch();
  const [formInput, setFormInput] = useState({
    name: "",
    password: "",
  });
  const handleInput = (e) => {
    setFormInput({
      ...formInput,
      [e.target.name]: e.target.value,
    });
  };
  const submit = (e) => {
    dispatch(signIn(formInput));
    e.preventDefault();
  };

  return (
    <div className="container mx:auto flex justify-center p-60  ">
      <div className="bg-blue-100 flex items-center justify-center w-5/12 shadow-2xl rounded-xl">
        <form className=" flex flex-col p-8  ">
          <h1 className="text-center">Sign In</h1>
          <h8 className="text-gray-500 pb-2">Sign In to your account</h8>
          <div className="flex flex-col  mb-8 mt-4 bg-slate-200 rounded ">
            <label className=" text-sm p-2 font-semibold ">Username</label>
            <input
              className="rounded bg-gray-50 border-b-4 border-gray-300 focus:border-purple-600 transition duration-500"
              type="text"
              name="name"
              onChange={handleInput}
              value={formInput.name}
            ></input>
          </div>

          <div className="flex flex-col bg-slate-200 mb-4 rounded">
            <label className="text-sm p-2 font-semibold">Password</label>

            <input
              className="rounded bg-gray-50 border-b-4 border-gray-300 focus:border-purple-600 transition duration-500"
              name="password"
              type="password"
              onChange={handleInput}
              value={formInput.password}
            ></input>
          </div>
          <div className=" flex justify-center items-center ">
            <button
              type="submit"
              onClick={submit}
              className="bg-purple-500 rounded w-1/2 "
            >
              Log In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
