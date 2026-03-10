import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import CartSidebar from "./components/CartSidebar";
import About from "./components/About";
import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (item) => {
    // Tambah item ke array cart
    setCart([...cart, item]);
    console.log("Berhasil tambah:", item.name); // Cek di Inspect Element > Console
  };

  const decreaseCart = (id) => {
    const index = cart.findIndex((item) => item.id === id);
    if (index !== -1) {
      const newCart = [...cart];
      newCart.splice(index, 1); // Menghapus 1 item berdasarkan index
      setCart(newCart);
    }
  };

  return (
    <div>
      <Navbar cartCount={cart.length} setIsCartOpen={setIsCartOpen} />
      <Hero />
      <Menu addToCart={addToCart} />
      <CartSidebar
        isOpen={isCartOpen}
        setIsOpen={setIsCartOpen}
        cart={cart}
        addToCart={addToCart}
        decreaseCart={decreaseCart}
      />
      <About />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
