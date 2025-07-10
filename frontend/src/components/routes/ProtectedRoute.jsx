import React from "react";
import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { Context } from "@/contextProvider";

function ProtectedRoute({ redirectTo = "/403", children }) {
  const { store } = useContext(Context);
  const user = store.getData()?.user;

  if (!user || user.user_role !== "ADMIN") {
    return <Navigate to={redirectTo} replace />;
  }

  return children;
}

export default ProtectedRoute;
