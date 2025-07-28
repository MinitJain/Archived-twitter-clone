import React from "react";

const Login = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="flex items-center justify-evenly w-[80%] ">
        <div>
          <img
            width={"200px"}
            src="/EchoLogo.png"
            alt="Logo"
            className="logo mb-4"
          />
        </div>
        <div>
          <div>
            <h1 className="text-8xl font-bold mb-4">Welcome to Echo.</h1>
          </div>
          <h1 className="text-2xl font-bold mb-4">Login</h1>
          <form className="flex flex-col w-full max-w-[300px] space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="  outline-blue-500 border border-gray-300 p-2 rounded-md font-medium"
            />
            <input
              type="text"
              placeholder="Username"
              className=" outline-blue-500 border border-gray-300 p-2 rounded-md font-medium"
            />
            <input
              type="text"
              placeholder="Email"
              className=" outline-blue-500 border border-gray-300 p-2 rounded-md font-medium"
            />
            <input
              type="text"
              placeholder="Password"
              className=" outline-blue-500 border border-gray-300 p-2 rounded-md font-medium"
            />
            <button className=" bg-slate-900 text-white p-2 rounded-md font-semibold hover:bg-slate-700 transition duration-300">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
