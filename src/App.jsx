import HomePage from "./pages/HomePage";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ProductPage from "./pages/ProductPage";
import { Route, Routes } from "react-router-dom";
import ProtectedRoutes from "./pages/ProtectedRoutes";
import { useAuthContext } from "./store/AuthCtx";

function App() {
  const { isUserLoggedIn } = useAuthContext();
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route element={<ProtectedRoutes isUserLoggedIn={isUserLoggedIn} />}>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Route>
        <Route path="/product/:productId" element={<ProductPage />} />
      </Routes>
    </>
  );
}

export default App;
