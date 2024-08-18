import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const CardProducts = ({ products }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const navigate = useNavigate();

  const itemsPerPage = 5;
  const pages = Math.ceil(products.length / itemsPerPage);

  const handleNext = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % pages);
  };

  const handlePrev = () => {
    setCurrentPage((prevPage) => (prevPage - 1 + pages) % pages);
  };

  const currentItems = products.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const renderProductItem = (item) => (
    <div
      key={item.id}
      className="group flex flex-col items-center w-[190px] h-[260px] py-2 cursor-pointer"
      onClick={() => navigate(`/product/${item.id}`)}
    >
      <img src={item.image} className="h-[130px] my-4" alt={item.title} />
      <div className="flex flex-col justify-start">
        <h2 className="text-sm line-clamp-2 group-hover:text-blue-500">
          {item.title}
        </h2>
        <h1 className="pt-3 font-medium text-lg">$ {item.price}</h1>
      </div>
    </div>
  );

  const renderProductItemMobile = (item) => (
    <div
      key={item.id}
      className="flex flex-col items-center w-[150px] h-[250px] py-2 mx-2 cursor-pointer"
      onClick={() => navigate(`/product/${item.id}`)}
    >
      <img src={item.image} className="h-[130px] my-4" alt={item.title} />
      <div className="flex flex-col justify-start">
        <h2 className="text-xs line-clamp-2">{item.title}</h2>
        <h1 className="pt-3 font-medium text-lg">$ {item.price}</h1>
      </div>
    </div>
  );

  const category1Items = products.filter(
    (product) => product.category === "men's clothing"
  );
  const category2Items = products.filter(
    (product) => product.category === "jewelery"
  );

  return (
    <div className="relative flex flex-col items-center w-full min-h-screen bg-gray-200">
      <div className="relative hidden lg:block w-4/5 bg-white rounded-md mt-5">
        <div className="absolute inset-y-0 left-[-25px] flex items-center">
          <button
            onClick={handlePrev}
            className="bg-white text-blue-400 px-5 py-5 rounded-full shadow-md hover:shadow-lg"
          >
            <FaChevronLeft />
          </button>
        </div>
        <div className="absolute inset-y-0 right-[-25px] flex items-center">
          <button
            onClick={handleNext}
            className="bg-white text-blue-400 px-5 py-5 rounded-full shadow-md hover:shadow-lg"
          >
            <FaChevronRight />
          </button>
        </div>
        <div className="flex flex-wrap justify-between mx-5">
          {currentItems.map(renderProductItem)}
        </div>
      </div>

      <div className="hidden lg:block w-4/5 bg-white rounded-md mt-8">
        <h3 className="text-xl font-medium mx-4 pt-2">Men's Clothing</h3>
        <div className="flex flex-wrap justify-between mx-5">
          {category1Items.map(renderProductItem)}
        </div>
      </div>

      <div className="hidden lg:block w-4/5 bg-white rounded-md mt-8">
        <h3 className="text-xl font-medium mx-4 pt-2">Jewelery</h3>
        <div className="flex flex-wrap justify-between mx-5">
          {category2Items.map(renderProductItem)}
        </div>
      </div>

      {/* Mobile */}
      <div className="block lg:hidden w-4/5 bg-white rounded-md my-5">
        <div className="flex flex-wrap justify-center divide-y">
          {currentItems.map(renderProductItemMobile)}
        </div>
      </div>

      <div className="block lg:hidden w-4/5 bg-white rounded-md my-5">
        <div className="flex flex-wrap justify-center divide-y">
          <div className="flex flex-wrap justify-center divide-y">
            {category1Items.map(renderProductItemMobile)}
          </div>
        </div>
      </div>

      <div className="block lg:hidden w-4/5 bg-white rounded-md my-5">
        <div className="flex flex-wrap justify-center divide-y">
          <div className="flex flex-wrap justify-center divide-y">
            {category2Items.map(renderProductItemMobile)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProducts;
