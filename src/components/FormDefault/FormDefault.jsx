import React, { useState } from "react";
import { Link } from "react-router-dom";

export const FormDefault = ({ title, handleClick }) => {
  const [email, setEmail] = useState();
  const [pass, setPass] = useState();

  const [] = useState();

  return (
    <div className="container mx-auto p-8 flex">
      <div className="max-w-md w-full mx-auto">
        <h1 className="text-4xl text-center mb-12 font-thin">Company</h1>

        <div className="bg-white rounded-lg overflow-hidden shadow-2xl">
          <div className="p-8">
            <form
              method="POST"
              className=""
              action="#"
              // onSubmit="return false;"
            >
              <div className="mb-5">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-600"
                >
                  Email
                </label>

                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  placeholder="email"
                  type="text"
                  name="email"
                  className="block w-full p-3 rounded bg-gray-200 border border-transparent focus:outline-none"
                />
              </div>

              <div className="mb-5">
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-600"
                >
                  Password
                </label>

                <input
                  value={pass}
                  onChange={(e) => setPass(e.target.value)}
                  placeholder="password"
                  type="text"
                  name="password"
                  className="block w-full p-3 rounded bg-gray-200 border border-transparent focus:outline-none"
                />
              </div>

              <button
                onClick={() => handleClick(email, pass)}
                className="w-full p-3 mt-4 bg-[#FF961F] text-white rounded shadow"
              >
                {title}
              </button>
            </form>
          </div>

          <div className="flex justify-between p-8 text-sm border-t border-gray-300 bg-gray-100">
            <Link to={"/sign-up"} className="font-medium text-indigo-500">
              Создать аккаунт
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
