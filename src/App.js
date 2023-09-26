import { React } from "react";
import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/home";
import Blog from "./components/Blog/blog";
import Features from "./components/Features/features";
import Newarrival from "./components/Newarrival/newarrival";
import Contact from "./components/Contact/contact";
import Cart from "./components/cart/cart";
import Signin from "./components/Admin/Signin/signin";
import Register from "./components/Admin/Register/register";
import Dashboard from "./components/Admin/Dashboard/dashboard";
import Protected from "./components/Protected";

function App() {
  const [isSignedIn, setIsSignedIn] = useState(() => {
    const userLogged = localStorage.getItem("access_token");
    return userLogged || false;
  });

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="blog" element={<Blog />} />
        <Route path="features" element={<Features />} />
        <Route path="newarrival" element={<Newarrival />} />
        <Route path="home" element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="cart" element={<Cart />} />
        <Route path="signin" element={<Signin />} />
        <Route path="register" element={<Register />} />

        <Route
          path="/dashboard"
          element={
            <Protected isSignedIn={isSignedIn}>
              <Dashboard />
            </Protected>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
