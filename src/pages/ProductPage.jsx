import React from "react";
import BarMenu from "../components/barMenu";
import { useNavigate, useParams } from "react-router-dom";
import { auth } from "../data/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const ProductPage = ({ products, addToCart }) => {
  const { id } = useParams();
  const [user] = useAuthState(auth);
  const product = products.find((item) => item.id === parseInt(id));

  const navigate = useNavigate();

  const handleBuyNow = () => {
    if (!user) {
      navigate("/login");
    } else {
      navigate("/compra", { state: { products: [product] } });
    }
  };

  return (
    <div className="bg-gray-200">
      <header>
        <BarMenu />
      </header>
      <main className="mt-14 m-auto rounded-lg bg-white p-4 lg:p-8 lg:w-11/12">
        <div className="flex flex-col lg:flex-row">
          <div className="flex lg:w-4/5 justify-center items-center">
            <div className="flex w-full max-w-md">
              <div className="flex justify-end items-start space-x-2 mt-4">
                <img
                  src={product.image}
                  alt="Thumbnail 1"
                  className="w-16 h-16 object-cover border rounded"
                />
                <img src={product.image} alt="Kindle" className="w-full" />
              </div>
            </div>
          </div>

          <div>
            {/* Información del producto */}
            <div className="lg:pl-8 mt-8 lg:mt-0 border rounded-lg p-6">
              <h2 className="text-lg font-bold">{product.title}</h2>
              <div className="flex items-center mt-4">
                <span className="text-4xl">$ {product.price}</span>
              </div>
              <p className="text-blue-500 text-sm mt-2 cursor-pointer">
                Ver los medios de pago
              </p>

              <p className="text-green-600 mt-4">Llega gratis el sábado</p>
              <p className="text-gray-500 text-sm">
                Comprando dentro de las próximas 6 h 41 min
              </p>
              <p className="text-blue-500 text-sm mt-2 cursor-pointer">
                Más formas de entrega
              </p>
              <p className="mt-4 text-gray-600">
                <span className="font-bold">Stock disponible</span>
                <br />
                Almacenado y enviado por{" "}
                <span className="text-green-600 font-bold">FULL</span>
              </p>

              <div className="mt-8">
                <button
                  onClick={handleBuyNow}
                  className="w-full bg-blue-500 text-white py-3 rounded text-sm hover:bg-blue-700"
                >
                  Comprar ahora
                </button>
                <button
                  onClick={() => addToCart(product)}
                  className="w-full bg-blue-100 hover:bg-blue-200 text-blue-700 py-3 rounded mt-2 font-semibold text-sm"
                >
                  Agregar al carrito
                </button>
              </div>
            </div>

            <div className="lg:pl-8 mt-8 border rounded-lg p-6 flex flex-col gap-y-3">
              <div className="flex flex-col gap-y-5 border-b">
                <h2 className="text-xl py-2">Devolución gratis</h2>
                <p className="py-2 text-gray-400 text-sm">
                  Tenés 30 dias desde que recibís el producto para devolverlo.
                  ¡No importa el motivo!
                </p>

                <p className="text-blue-500 text-sm mt-2 cursor-pointer pb-6">
                  Conocer más sobre devoluciones
                </p>
              </div>

              <div className="flex flex-col gap-y-5">
                <h2 className="text-lg font-bold pt-4">Garantía</h2>
                <h3 className="text-base pt-2">
                  Compra Protegida con Mercado Pago
                </h3>
                <p className="text-gray-400 text-sm">
                  Recibí el producto que esperabas o te devolvemos tu dinero
                </p>
                <h3 className="text-bas">Garantía del vendedor</h3>
                <p className="text-gray-400 text-sm">Sin garantía</p>

                <p className="text-blue-500 text-sm cursor-pointer pb-6">
                  Conocer más sobre garantía
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 border-y p-6">
          <h2 className="text-2xl">Descripción</h2>

          <p className="py-2 text-gray-500 text-lg">{product.description}</p>
        </div>
      </main>

      <footer></footer>
    </div>
  );
};

export default ProductPage;
