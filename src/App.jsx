import HomePage from "./pages/HomePage";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ProductPage from "./pages/ProductPage";
import { Navigate, Route, Routes } from "react-router-dom";
import { useAuthContext } from "./store/AuthCtx";
import AddProduct from "./pages/AddProduct";
import Wrapper from "./components/Ul/Wrapper";
import ProtectedUserRoutes from "./pages/ProtectedUserRoutes";
import ProtectedAdminRoutes from "./pages/ProtectedAdminRoutes";
import toast, { Toaster } from "react-hot-toast";

function App() {
  const { isUserLoggedIn, role } = useAuthContext();
  return (
    <Wrapper>
      <Toaster />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={isUserLoggedIn ? <Navigate to="/" replace /> : <Register />} />
        <Route path="/login" element={isUserLoggedIn ? <Navigate to="/" replace /> : <Login />} />
        <Route element={<ProtectedAdminRoutes role={role} />}>
          <Route path="/addProduct" element={<AddProduct />} />
        </Route>
        <Route path="/product/:productId" element={<ProductPage />} />
      </Routes>
    </Wrapper>
  );
}

export default App;
