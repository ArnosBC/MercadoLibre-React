import React, { useState } from "react";
// * Firebase
import { auth } from "../data/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
// * Routes
import { Link, useNavigate } from "react-router-dom";
// * Images
import ResponsiveLogo from "../components/ResponsiveLogo";

const Register = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [username, setUsername] = useState(null);
  const [phone, setPhone] = useState(null);

  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      await setDoc(doc(db, "users", user.uid), {
        username: username,
        phone: phone,
        email: email,
      });

      navigate("/login");
    } catch (error) {
      console.log("No se ha podido Registrar: " + error);
    }
  };

  return (
    <div className="flex flex-col items-center w-full min-h-screen lg:bg-gray-200 ">
      <header className="w-full bg-[#ffeb3b] p-3 flex">
        <Link to="/">
          <ResponsiveLogo />
        </Link>
      </header>
      <main className="flex flex-col w-full lg:max-w-lg p-4 space-y-5 bg-white rounded-md lg:drop-shadow-md lg:m-auto">
        <div className="flex flex-col items-center w-full">
          <h1 className="text-2xl font-bold text-center pb-2">
            Completa los datos para crear tu cuenta
          </h1>
          <div className="w-full">
            <ul className="space-y-1 w-full">
              <li className="px-8">
                <div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-700">Agrega tu e-mail</h3>
                    <p className="text-gray-400 text-sm">
                      Recibirás información de tu cuenta.
                    </p>
                  </div>
                  <div>
                    <input
                      type="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-3"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
              </li>
              <li className="px-8">
                <div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-700">Elige un nombre</h3>
                    <p className="text-gray-400 text-sm">
                      Se mostrará a las personas que interactúen contigo.
                    </p>
                  </div>
                  <div>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-3"
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                </div>
              </li>
              <li className="px-8">
                <div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-700">Valida tu teléfono</h3>
                    <p className="text-gray-400 text-sm">
                      Podrás usarlo para iniciar sesión en tu cuenta.
                    </p>
                  </div>
                </div>
                <div>
                  <input
                    type="tel"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-3"
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              </li>
              <li className="px-8">
                <div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-700">Crea tu contraseña</h3>
                    <p className="text-gray-400 text-sm">
                      Mantendrás tu cuenta protegida.
                    </p>
                  </div>
                  <div>
                    <input
                      type="password"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-3"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="px-8 w-full flex">
          <Link
            className="w-full font-semibold bg-blue-500 text-white py-2 rounded-md text-center hover:bg-blue-600"
            to="/Login"
            onClick={handleRegister}
          >
            Registrarse
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Register;
