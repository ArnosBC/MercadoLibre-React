import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Direction = ({ isOpen, onClose, onSave }) => {
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [savedAddress, setSavedAddress] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const address = localStorage.getItem("address");
    if (address) {
      setSavedAddress(JSON.parse(address));
    }
  }, []);

  const handleSave = () => {
    const newAddress = { state, city };
    localStorage.setItem("address", JSON.stringify(newAddress));
    onSave(newAddress);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-lg font-bold mb-4">
          Elige dónde recibir tus compras
        </h2>
        <p className="mb-4 text-sm text-gray-600">
          Podrás ver costos y tiempos de entrega precisos en todo lo que
          busques.
        </p>
        <div className="mb-4">
          <label className="block mb-2">Departamento</label>
          <select
            value={state}
            onChange={(e) => setState(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg"
          >
            <option value="">Elija una opción</option>
            <option value="Antioquia">Antioquia</option>
            <option value="Cundinamarca">Cundinamarca</option>
            <option value="Valle del Cauca">Valle del Cauca</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block mb-2">Municipio, capital o localidad</label>
          <select
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg"
          >
            <option value="">Elija una opción</option>
            <option value="Medellín">Medellín</option>
            <option value="Bogotá">Bogotá</option>
            <option value="Cali">Cali</option>
          </select>
        </div>
        <div className="flex justify-end">
          <button
            onClick={handleSave}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg mr-2 disabled:bg-gray-300"
            disabled={!state || !city}
          >
            Aceptar
          </button>
          <button
            onClick={onClose}
            className="bg-gray-500 text-white px-4 py-2 rounded-lg"
          >
            Cerrar
          </button>
        </div>
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

        <div className="mt-4 text-center">
          <button
            className="text-blue-500"
            onClick={() => navigate("/ubication")}
          >
            Agregar dirección completa
          </button>
        </div>
      </div>
    </div>
  );
};

export default Direction;
