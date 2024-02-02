import { jwtDecode } from "jwt-decode";
import { createContext, useContext, useState } from "react";

function parseJwtTokenData(token) {
  if (!token) return;
  const { email, sub, role } = jwtDecode(token);
  return { email, sub, role, token };
}

const AuthContext = createContext({
  login() {},
  logout() {},
  isUserLoggedIn: false,
  token: null,
  userEmail: "",
  role: "",
  userId: "",
});

function AuthCtxProvider({ children }) {
  const tokenData = parseJwtTokenData(localStorage.getItem("bit_token"));

  const [token, setToken] = useState(tokenData?.token || null);
  const [userEmail, setUserEmail] = useState(tokenData?.email || "");
  const [role, setRole] = useState(tokenData?.role || "");

  const isUserLoggedIn = !!token;
  let userId = tokenData?.sub || "";

  function login(token) {
    const { email, sub, role } = parseJwtTokenData(token);
    setToken(token);
    setUserEmail(email);
    setRole(role);
    userId = sub;
    localStorage.setItem("bit_token", token);
  }
  function logout() {}

  const ctxValue = {
    login,
    logout,
    token,
    isUserLoggedIn,
    userEmail,
    role,
    userId,
  };

  return <AuthContext.Provider value={ctxValue}> {children} </AuthContext.Provider>;
}

export default AuthCtxProvider;

export function useAuthContext() {
  return useContext(AuthContext);
}
