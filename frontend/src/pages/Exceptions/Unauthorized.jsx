import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "@/contextProvider";

function Unauthorized() {
  const { store } = useContext(Context);
  const isActivated = store.getData().user.isActicated;
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="text-center">
        <h1 className="text-7xl font-extrabold text-black mb-4">403</h1>
        <p className="text-2xl font-semibold text-gray-800 mb-2">
          {isActivated ? "" : "Unathorized"}
        </p>
        <p className="text-gray-600 mb-6">
          {"Please activate youre account on your email"}
        </p>
        <Link
          to="/"
          className="inline-block bg-black text-white px-6 py-3 rounded-md text-sm font-medium hover:bg-gray-800 transition"
        >
          Main page
        </Link>
      </div>
    </div>
  );
}

export default Unauthorized;
