import React from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoutes({ isUserLoggedIn, children }) {
  if (isUserLoggedIn) {
    return <Navigate to="/" replace />;
  }
  return <>{children}</>;
}
