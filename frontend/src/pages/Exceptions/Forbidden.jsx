import React from "react";
import { Link } from "react-router-dom";

function Forbidden() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="text-center">
        <h1 className="text-7xl font-extrabold text-black mb-4">403</h1>
        <p className="text-2xl font-semibold text-gray-800 mb-2">
          Доступ запрещён
        </p>
        <p className="text-gray-600 mb-6">
          У вас нет прав для просмотра этой страницы.
        </p>
        <Link
          to="/"
          className="inline-block bg-black text-white px-6 py-3 rounded-md text-sm font-medium hover:bg-gray-800 transition"
        >
          На главную
        </Link>
      </div>
    </div>
  );
}

export default Forbidden;