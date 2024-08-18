import React from "react";
import Confirm from "../assets/ConfirmIcon.png";

export const NotiShopping = ({ IsClose }) => {
  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="flex flex-col items-center bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
          <img src={Confirm} className="w-1/2" alt="" />
          <h2 className="text-xl font-bold">
            Su producto fue añadido al carrito
          </h2>
          <button
            onClick={IsClose}
            className="w-full bg-blue-500 text-white my-4 py-3 rounded shadow-md text-sm hover:bg-blue-700"
          >
            Cerrar
          </button>
        </div>
      </div>
    </>
  );
};

export const ShoppingConfirm = ({ IsClose }) => {
  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="flex flex-col items-center bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
          <img src={Confirm} className="w-1/2" alt="" />
          <h2 className="text-xl font-bold">Tu compra ha sido completada</h2>
          <button
            className="w-full bg-blue-500 text-white my-4 py-3 rounded shadow-md text-sm hover:bg-blue-700"
            onClick={IsClose}
          >
            Cerrar
          </button>
        </div>
      </div>
    </>
  );
};
