import { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import About from "./pages/About";

import { Routes, Route } from "react-router-dom";
import API from "./api";

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cart, setCart] = useState([]);

  
  useEffect(() => {
    fetchCart();
  }, []);

  const fetchCart = async () => {
    try {
      const res = await API.get("/cart");
      setCart(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  
  const addToCart = async (item) => {
    try {
      await API.post("/cart", item);
      fetchCart();
    } catch (err) {
      console.log(err);
    }
  };

  
  const removeFromCart = async (id) => {
    try {
      await API.delete(`/cart/${id}`);
      fetchCart();
    } catch (err) {
      console.log(err);
    }
  };


  if (!isLoggedIn) {
    return <Login setIsLoggedIn={setIsLoggedIn} />;
  }

  return (
    <div>

      <Navbar cart={cart} />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route
          path="/menu"
          element={<Menu addToCart={addToCart} />}
        />

        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              removeFromCart={removeFromCart}
            />
          }
        />

        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />

      </Routes>

      <Footer />

    </div>
  );
}

export default App;