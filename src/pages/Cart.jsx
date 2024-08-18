import React from "react";
// * Routes
import { Link, useNavigate } from "react-router-dom";
// * Images
import ResponsiveLogo from "../components/ResponsiveLogo";

const Cart = ({ cart, removeFromCart, clearCart }) => {
  const calcularTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  const navigate = useNavigate();

  return (
    <div className="bg-gray-200 min-h-screen">
      <header className="w-full bg-[#ffeb3b] p-3 flex">
        <Link to="/">
          <ResponsiveLogo />
        </Link>
      </header>
      <main className="flex justify-center items-center min-h-screen gap-10">
        <div className="container p-4 bg-white rounded-md shadow-md w-11/12 lg:w-3/5">
          <h1 className="text-2xl font-bold">Carrito de Compras</h1>
          {cart.length === 0 ? (
            <p className="mt-4">Tu carrito está vacío.</p>
          ) : (
            <div className="mt-4">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col lg:flex-row justify-between items-center lg:items-start py-2 w-full"
                >
                  <div className="flex items-center border-b p-2 w-full">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-20 h-auto lg:w-24 lg:h-auto"
                    />
                    <div className="ml-4 flex-1">
                      <h2 className="text-lg lg:truncate w-full">
                        {item.title}
                      </h2>
                      <div className="py-2">
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="bg-red-500 text-white px-1 py-1 rounded-md"
                        >
                          Eliminar
                        </button>
                      </div>
                      <p className="text-end text-xl font-medium mr-5">
                        ${item.price}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
              <div className="lg:hidden flex flex-col mt-2 w-full">
                <button
                  onClick={() =>
                    navigate("/compra", { state: { products: cart } })
                  }
                  className="bg-blue-500 text-white px-4 py-2 rounded-md w-full mt-2 hover:bg-blue-700"
                >
                  Proceder a la compra
                </button>
                <button
                  onClick={clearCart}
                  className="text-center text-blue-500 text-sm mt-2"
                >
                  Vaciar carrito
                </button>
              </div>
            </div>
          )}
        </div>
        <div className="hidden lg:block bg-white rounded-md shadow-md w-1/5 p-4">
          {cart.length === 0 ? (
            <p className="mt-4">Tu carrito está vacío.</p>
          ) : (
            <>
              <h3 className="text-xl font-bold mb-4 border-b py-2">
                Resumen de Compra
              </h3>
              <ul>
                {cart.map((product, index) => (
                  <li key={index} className="flex justify-between py-2">
                    <p className="truncate w-32">{product.title}</p>
                    <p className="font-semibold text-lg">
                      ${product.price.toFixed(2)}
                    </p>
                  </li>
                ))}
              </ul>
              <div className="flex justify-between border-t py-2">
                <h3 className="text-lg">Total</h3>
                <p className="text-xl font-medium">$ {calcularTotal()}</p>
              </div>
              <div className="flex flex-col mt-2">
                <button
                  onClick={() =>
                    navigate("/compra", { state: { products: cart } })
                  }
                  className="bg-blue-500 text-white px-4 py-2 rounded-md w-full hover:bg-blue-700"
                >
                  Proceder a la compra
                </button>
                <button
                  onClick={clearCart}
                  className="text-center text-blue-500 text-sm mt-2"
                >
                  Vaciar carrito
                </button>
              </div>
            </>
          )}
        </div>
      </main>
    </div>
  );
};

export default Cart;
