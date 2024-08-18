import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ResponsiveLogo from "../components/ResponsiveLogo";

const Ubication = () => {
  const [addressLine, setAddressLine] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const navigate = useNavigate();

  const handleSaveAddress = () => {
    const addressData = {
      addressLine,
      city,
      state,
      postalCode,
    };

    localStorage.setItem("address", JSON.stringify(addressData));
    navigate("/");
  };

  return (
    <div>
      <header className="w-full bg-[#ffeb3b] p-3 flex">
        <Link to="/">
          <ResponsiveLogo />
        </Link>
      </header>
      <main>
        <div className="p-8">
          <h2 className="text-lg font-bold mb-4">
            Ingresa tu dirección completa
          </h2>
          <div className="mb-4">
            <label className="text-sm font-medium text-gray-700">
              Dirección Línea
            </label>
            <input
              value={addressLine}
              onChange={(e) => setAddressLine(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label className="text-sm font-medium text-gray-700">Ciudad</label>
            <input
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label className="text-sm font-medium text-gray-700">
              Departamento
            </label>
            <input
              value={state}
              onChange={(e) => setState(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label className="text-sm font-medium text-gray-700">
              Código Postal
            </label>
            <input
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
          </div>
          <div className="flex justify-end">
            <button
              onClick={handleSaveAddress}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg"
            >
              Guardar Dirección
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Ubication;
