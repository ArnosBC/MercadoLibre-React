import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const MetodoPago = ({ onSubmit }) => {
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ cardName, cardNumber, expiryDate, cvv });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mt-5">Nombre en la Tarjeta</label>
        <input
          type="text"
          value={cardName}
          onChange={(e) => setCardName(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Número de Tarjeta</label>
        <input
          type="text"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Fecha de Expiración</label>
        <input
          type="text"
          value={expiryDate}
          onChange={(e) => setExpiryDate(e.target.value)}
          placeholder="MM/AA"
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">CVV</label>
        <input
          type="text"
          value={cvv}
          onChange={(e) => setCvv(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
      </div>
    </form>
  );
};

export const FormDire = () => {
  const [savedAddress, setSavedAddress] = useState(null);

  useEffect(() => {
    const address = localStorage.getItem("address");
    if (address) {
      setSavedAddress(JSON.parse(address));
    }
  }, []);

  return (
    <>
      <div className="flex flex-col space-y-4">
        {savedAddress && (
          <div className="mt-4 p-4 border border-gray-300 rounded-lg">
            <h3 className="text-lg font-bold">Dirección Guardada</h3>
            <p>
              <strong>Línea:</strong> {savedAddress.addressLine}
            </p>
            <p>
              <strong>Ciudad:</strong> {savedAddress.city}
            </p>
            <p>
              <strong>Departamento:</strong> {savedAddress.state}
            </p>
            <p>
              <strong>Código Postal:</strong> {savedAddress.postalCode}
            </p>
          </div>
        )}
        <div className="flex flex-col items-center">
          <Link
            className="text-blue-500 text-center text-sm mt-0 cursor-pointer"
            to="/ubication"
          >
            Cambiar de Dirección
          </Link>
        </div>
      </div>
    </>
  );
};
