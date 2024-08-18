import React from "react";
import BarMenu from "../components/barMenu";
import Slider from "../components/Slider";
import Cards from "../components/Cards";
import CardProducts from "../components/CardProducts";
import FooterPages from "../components/FooterPages";

const Home = ({ products, addToCart }) => {
  return (
    <div className="bg-gray-200 flex flex-col justify-between min-h-screen">
      <header>
        <BarMenu />
      </header>
      <main>
        <Slider />
        <Cards />
        <CardProducts products={products} addToCart={addToCart} />
      </main>
      <footer className="bg-white mt-40 hidden lg:block">
        <FooterPages />
      </footer>
    </div>
  );
};

export default Home;
