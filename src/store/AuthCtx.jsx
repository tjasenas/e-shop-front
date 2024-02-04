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
  addToCart() {},
  removeFromCart() {},
  isUserLoggedIn: false,
  token: null,
  userEmail: "",
  role: "",
  userId: "",
  cart: {
    items: [],
    totalPrice: 0,
  },
});

function AuthCtxProvider({ children }) {
  const tokenData = parseJwtTokenData(localStorage.getItem("bit_token"));

  const [token, setToken] = useState(tokenData?.token || "");
  const [userEmail, setUserEmail] = useState(tokenData?.email || "");
  const [role, setRole] = useState(tokenData?.role || "");
  const [cart, setCart] = useState({ items: [], totalPrice: 0 });

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
  function logout() {
    setToken("");
    setUserEmail("");
    setRole("");
    localStorage.removeItem("bit_token");
  }

  function addToCart(item) {
    setCart((prev) => {
      const cartHasItem = prev.items.findIndex((cartItem) => cartItem.id === item.id);
      const totalPrice = prev.totalPrice + Number(item.price);
      let newCart = {};

      if (cartHasItem !== -1) {
        prev.items[cartHasItem].qty += 1;
        return (newCart = { items: [...prev.items], totalPrice });
      } else {
        item.qty = 1;
        return (newCart = { items: [...prev.items, item], totalPrice });
      }
    });
  }
  function removeFromCart(id) {
    setCart((prev) => {
      const newItems = prev.items.filter((cartItem) => cartItem.id !== id);
      const totalPrice = newItems.reduce((acc, item) => acc + item.price * item.qty, 0);
      return { items: [...newItems], totalPrice };
    });
  }

  const ctxValue = {
    login,
    logout,
    addToCart,
    removeFromCart,
    token,
    isUserLoggedIn,
    userEmail,
    role,
    userId,
    cart,
  };

  return <AuthContext.Provider value={ctxValue}> {children} </AuthContext.Provider>;
}

export default AuthCtxProvider;

export function useAuthContext() {
  return useContext(AuthContext);
}
