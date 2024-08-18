import React, { useState } from "react";
// * Firebase
import { auth } from "../data/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
// * Router
import { Link, useNavigate } from "react-router-dom";
// * Images
import ResponsiveLogo from "../components/ResponsiveLogo";

const Login = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const navegador = useNavigate();

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navegador("/");
    } catch (error) {
      console.log("No se ha podido loguear: " + error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-between w-full min-h-screen bg-white">
      <header className="w-full bg-[#ffeb3b] p-3 flex">
        <Link to="/">
          <ResponsiveLogo />
        </Link>
      </header>
      <main className="flex flex-col items-center w-full max-w-lg p-4 space-y-5">
        <h1 className="text-2xl font-bold text-center">
          Ingresa tu E-mail, teléfono o usuario de Mercado Libre
        </h1>
        <div className="w-full">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            E-mail, teléfono o usuario
          </label>
          <div>
            <input
              type="text"
              id="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-3"
              placeholder="E-mail, teléfono o usuario"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="w-full">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            Contraseña
          </label>
          <div>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-3"
              placeholder="Contraseña"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <div className="w-full flex flex-col">
          <button
            className="font-semibold bg-blue-500 text-white py-2 rounded-md text-center hover:bg-blue-600"
            onClick={handleLogin} 
          >
            Iniciar Sesion
          </button>
          <Link
            className="py-2 rounded-md text-blue-600 font-semibold text-center"
            to="/register"
          >
            Crear cuenta
          </Link>
        </div>
        <div className="w-full p-4 bg-white border border-gray-200 rounded-md space-y-4">
          <h2 className="text-sm font-medium text-gray-700">
            Reportar un problema
          </h2>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span>Robo o pérdida de teléfono</span>
            </div>
          </div>
        </div>
        <a href="#" className="text-blue-500 font-semibold">
          Necesito ayuda con otros temas
        </a>
      </main>
      <footer className="w-full p-4 text-center text-sm text-gray-500 bg-gray-100">
        <p>
          Protegido por reCAPTCHA -{" "}
          <a
            href="https://policies.google.com/privacy?hl=es"
            className="text-blue-500 font-semibold"
          >
            Privacidad
          </a>{" "}
          -{" "}
          <a
            href="https://policies.google.com/terms?hl=es-419"
            className="text-blue-500 font-semibold"
          >
            Condiciones
          </a>
        </p>
        <p>
          <Link className="text-blue-500 font-semibold" to="/centroPrivacidad">
            Cómo cuidamos tu privacidad
          </Link>
        </p>
        <p>Copyright © 1999-2024 MercadoLibre Colombia LTDA.</p>
      </footer>
    </div>
  );
};

export default Login;
