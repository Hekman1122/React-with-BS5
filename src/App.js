import React from "react";
import { Routes, Route } from "react-router-dom";
//components
import NavCom from "./components/NavCom";
import Footer from "./components/Footer";
import Main from "./components/Main";
import LoginForm from "./components/LoginForm";
import AllProducts from "./components/AllProducts";
//scss
import "./style/index.scss";
import Collapse from "bootstrap/js/dist/collapse";
import Dropdown from "bootstrap/js/dist/dropdown";
import Carousel from "bootstrap/js/dist/carousel";
import OffCanvas from "bootstrap/js/dist/offcanvas";
import Modal from "bootstrap/js/dist/modal";
const App = () => {
  return (
    <div>
      <NavCom />
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/authenticate" element={<LoginForm />} />
        <Route exact path="/all" element={<AllProducts />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
