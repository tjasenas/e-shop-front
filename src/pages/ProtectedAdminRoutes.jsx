import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedAdminRoutes({ role }) {
  console.log(role);
  if (role === "admin") return <Outlet />;
  return <Navigate to="/" replace />;
}
