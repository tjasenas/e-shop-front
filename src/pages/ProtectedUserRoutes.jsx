import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedUserRoutes({ isUserLoggedIn }) {
  if (isUserLoggedIn) return <Navigate to="/" replace />;
  return <Outlet />;
}
