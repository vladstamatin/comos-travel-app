import React from "react";
import Menu from "../components/Menubar";
import Slider from "../components/Slider";
import Footer from "../components/Footer";
import PflBar from "./../components/PflBar";
import PflCheckout from "./../components/PflCheckout";

const Home = () => {
  return (
    <div className="homepage">
      <Menu />
      <Slider />
      <PflBar />
      <PflCheckout />
      <Footer />
    </div>
  );
};

export default Home;
