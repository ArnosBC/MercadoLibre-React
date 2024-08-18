import "./App.css";
// * Router
import { BrowserRouter, useNavigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ProductPage from "./pages/ProductPage";
import Ubication from "./pages/Ubication";
import React, { useEffect, useState } from "react";
import Cart from "./pages/Cart";
import CompraProcess from "./components/CompraProcess";
import { NotiShopping } from "./components/NotiShopping";
import { auth } from "./data/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

function AppContent() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [cartShopping, setCartShopping] = useState(false);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    const getProducts = async () => {
      try {
        const resp = await fetch("https://fakestoreapi.com/products");
        const data = await resp.json();
        setProducts(data);
      } catch (error) {
        console.log("Error en los datos del producto", error);
      }
    };
    getProducts();
  }, []);

  const addToCart = (product) => {
    if (!user) {
      navigate("/login");
    } else {
      setCart((prevCart) => [...prevCart, product]);
      setCartShopping(true);
      setTimeout(() => setCartShopping(false), 3000);
    }
  };

  const CloseCartShopping = () => {
    setCartShopping(false);
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <>
      <div>
        <Routes>
          <Route
            path="/"
            element={<Home products={products} addToCart={addToCart} />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/product/:id"
            element={<ProductPage products={products} addToCart={addToCart} />}
          />
          <Route path="/ubication" element={<Ubication />} />
          <Route
            path="/carrito"
            element={
              <Cart
                cart={cart}
                removeFromCart={removeFromCart}
                clearCart={clearCart}
              />
            }
          />
          <Route path="/compra" element={<CompraProcess cart={cart} />} />
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>

        {cartShopping && <NotiShopping IsClose={CloseCartShopping} />}
      </div>
    </>
  );
}

export default App;
