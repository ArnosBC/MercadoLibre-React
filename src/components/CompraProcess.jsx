import React, { useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { ShoppingConfirm } from "./NotiShopping";
import ResponsiveLogo from "./ResponsiveLogo";
import { MetodoPago, FormDire } from "../components/MetodoPago";
import Logo from "../assets/LogoMobile.png";

const CompraProcess = () => {
  const [step, setStep] = useState(1);
  const location = useLocation();
  const navigate = useNavigate();
  const [confirmShop, setConfirmShop] = useState(false);

  const products = location.state?.products || [];

  const calcularTotal = () => {
    return products.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  const handleNextStep = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      setConfirmShop(true);
    }
  };

  const handlePrevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handlePaymentSubmit = () => {
    handleNextStep();
  };

  const CloseConfirmShop = () => {
    setConfirmShop(false);
    navigate("/");
  };

  return (
    <div className="flex flex-col bg-gray-200 min-h-screen">
      <header className="w-full bg-[#ffeb3b] p-3 flex">
        <Link to="/">
          <ResponsiveLogo />
        </Link>
      </header>
      <main className="bg-white w-11/12 m-auto rounded-md shadow-md">
        <div className="container mx-auto p-4">
          {step === 1 && (
            <div className="flex gap-x-5 items-center justify-center">
              <div className="w-3/4">
                <h2 className="text-start text-xl font-medium">
                  Selecciona tu dirección
                </h2>
                <FormDire />
                <div className="flex justify-end mt-5">
                  <button
                    onClick={handleNextStep}
                    className="text-white bg-blue-500 px-3 py-2 rounded-md hover:bg-blue-700"
                  >
                    Siguiente
                  </button>
                </div>
              </div>
              <div className="hidden lg:block w-1/4 bg-gray-100 rounded-md p-4">
                <h2 className="text-lg font-bold border-b border-gray-300 py-2">
                  Resumen de Compra
                </h2>
                <ul>
                  {products.map((product, index) => (
                    <li key={index} className="flex justify-between py-2">
                      <p className="truncate w-32">{product.title}</p>
                      <p className="font-semibold text-lg">
                        ${product.price.toFixed(2)}
                      </p>
                    </li>
                  ))}
                </ul>
                <div className="flex justify-between border-t border-gray-300 py-2 my-2">
                  <h2 className="text-lg">Total</h2>
                  <p className="text-xl font-medium">${calcularTotal()}</p>
                </div>
              </div>
            </div>
          )}
          {step === 2 && (
            <div className="flex gap-x-5 items-center justify-center">
              <div className="w-3/4">
                <h2 className="text-start text-xl font-medium">
                  Revisa tu entrega y selecciona método de pago
                </h2>
                <MetodoPago onSubmit={handlePaymentSubmit} />
                <div className="flex justify-between mt-4">
                  <button
                    onClick={handlePrevStep}
                    disabled={step === 1}
                    className="text-white bg-blue-500 px-3 py-2 rounded-md hover:bg-blue-700"
                  >
                    Atrás
                  </button>
                  <button
                    onClick={handleNextStep}
                    className="text-white bg-blue-500 px-3 py-2 rounded-md hover:bg-blue-700"
                  >
                    Siguiente
                  </button>
                </div>
              </div>
              <div className="hidden lg:block w-1/4 bg-gray-100 rounded-md p-4">
                <h2 className="text-lg font-bold border-b border-gray-300 py-2">
                  Resumen de Compra
                </h2>
                <ul>
                  {products.map((product, index) => (
                    <li key={index} className="flex justify-between py-2">
                      <p className="truncate w-32">{product.title}</p>
                      <p className="font-semibold text-lg">
                        ${product.price.toFixed(2)}
                      </p>
                    </li>
                  ))}
                </ul>
                <div className="flex justify-between border-t border-gray-300 py-2 my-2">
                  <h2 className="text-lg">Total</h2>
                  <p className="text-xl font-medium">${calcularTotal()}</p>
                </div>
              </div>
            </div>
          )}
          {step === 3 && (
            <div className="flex gap-x-5 items-center justify-center">
              <div className="w-3/4">
                <div className="flex flex-col items-center gap-y-3">
                  <h2 className="text-center text-2xl font-medium">
                    Confirmación de compra
                  </h2>
                  <p className="text-center text-xl">
                    Tu pedido está casi listo.
                  </p>
                  <img src={Logo} className="h-[100px]" alt="" />
                </div>
                <div className="flex justify-between mt-4">
                  <button
                    onClick={handlePrevStep}
                    disabled={step === 1}
                    className="text-white bg-blue-500 px-3 py-2 rounded-md hover:bg-blue-700"
                  >
                    Atrás
                  </button>
                  <button
                    onClick={handleNextStep}
                    className="text-white bg-blue-500 px-3 py-2 rounded-md hover:bg-blue-700"
                  >
                    Finalizar Compra
                  </button>
                </div>
              </div>
              <div className="hidden lg:block w-1/4 bg-gray-100 rounded-md p-4">
                <h2 className="text-lg font-bold border-b border-gray-300 py-2">
                  Resumen de Compra
                </h2>
                <ul>
                  {products.map((product, index) => (
                    <li key={index} className="flex justify-between py-2">
                      <p className="truncate w-32">{product.title}</p>
                      <p className="font-semibold text-lg">
                        ${product.price.toFixed(2)}
                      </p>
                    </li>
                  ))}
                </ul>
                <div className="flex justify-between border-t border-gray-300 py-2 my-2">
                  <h2 className="text-lg">Total</h2>
                  <p className="text-xl font-medium">${calcularTotal()}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      {confirmShop && <ShoppingConfirm IsClose={CloseConfirmShop} />}
    </div>
  );
};

export default CompraProcess;
