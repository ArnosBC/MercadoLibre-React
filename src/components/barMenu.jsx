import React, { useEffect, useState } from "react";

// * FireBase
import { auth } from "../data/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

// * icons
import {
  AiOutlineSearch,
  AiOutlineClockCircle,
  AiOutlineUnorderedList,
} from "react-icons/ai";
import { BiUser, BiShoppingBag } from "react-icons/bi";
import { GiHamburgerMenu, GiReceiveMoney } from "react-icons/gi";
import { GrHomeRounded, GrClose } from "react-icons/gr";
import {
  HiOutlineLocationMarker,
  HiOutlineShoppingCart,
  HiDownload,
} from "react-icons/hi";
import { IoShirtOutline } from "react-icons/io5";
import {
  MdKeyboardArrowDown,
  MdKeyboardArrowRight,
  MdOutlineLocalOffer,
  MdOutlineHeadsetMic,
  MdOutlineStorefront,
} from "react-icons/md";
import { TiDocumentText } from "react-icons/ti";

// * Routes
import { Link, useNavigate } from "react-router-dom";

import Direction from "./Direction";
import ResponsiveLogo from "./ResponsiveLogo";

const BarMenu = () => {
  const [placeholderMessage, setPlaceholderMessage] =
    useState("Estoy buscando...");
  const [burgerMenu, setBurgerMenu] = useState(false);
  const [user, setUser] = useState(null);
  const [savedAddress, setSavedAddress] = useState(null);
  const [isDirectionOpen, setIsDirectionOpen] = useState(false);
  const navigate = useNavigate();

  const handleBurgerMenu = () => {
    setBurgerMenu((prevState) => !prevState);
  };

  useEffect(() => {
    const address = localStorage.getItem("address");
    if (address) {
      setSavedAddress(JSON.parse(address));
    }
  }, []);

  const handleOpenDirection = () => {
    setIsDirectionOpen(true);
  };

  const handleCloseDirection = () => {
    setIsDirectionOpen(false);
  };

  const handleSaveAddress = (address) => {
    localStorage.setItem("address", JSON.stringify(address));
    setSavedAddress(address);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setPlaceholderMessage("Buscar Productos, marcas y más...");
      } else {
        setPlaceholderMessage("Estoy buscando...");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleSignOut = async () => {
    await signOut(auth);
    navigate("/login");
  };

  return (
    <>
      <div className="bg-[#ffeb3b] w-full">
        <div className="flex justify-between lg:justify-around items-center gap-2">
          <Link className="flex items-center" to="/">
            <ResponsiveLogo />
          </Link>

          <div className="flex items-center my-[10px] rounded-md w-full lg:w-1/2 bg-white shadow-sm gap-3">
            <AiOutlineSearch className="ml-3 lg:hidden" />
            <input
              type="text"
              placeholder={placeholderMessage}
              className="w-full rounded-md py-2 px-1 lg:ml-4"
            />
            <AiOutlineSearch className="ml-3 lg:ml-auto lg:mr-3 hidden lg:block lg:rounded-md" />
          </div>

          <div className="flex items-center gap-2">
            {burgerMenu ? (
              <GrClose size={25} onClick={handleBurgerMenu} />
            ) : (
              <GiHamburgerMenu
                onClick={handleBurgerMenu}
                size={25}
                className="lg:hidden"
              />
            )}
            <Link to="/carrito">
              <HiOutlineShoppingCart size={25} className="ml-3 lg:hidden" />
            </Link>
            <img src="" alt="" />
          </div>
        </div>

        <div className="hidden lg:flex lg:items-center lg:justify-around lg:pb-2 pt-1 w-full mx-1">
          <button
            className="flex items-center rounded-md border border-transparent hover:border-black/20 px-2 gap-1"
            onClick={handleOpenDirection}
          >
            <HiOutlineLocationMarker size={25} />
            <div className="text-start">
              <p className="text-xs text-black/50">Enviar a...</p>
              <h3 className="text-sm">
                {savedAddress
                  ? `${savedAddress.state}, ${savedAddress.city}`
                  : "Dirección"}
              </h3>
            </div>
          </button>

          <div className="flex gap-4 text-sm">
            <button className="flex items-center gap-1">
              Categorias
              <MdKeyboardArrowDown />
            </button>
            <button>Ofertas</button>
            <button>Historial</button>
            <button>Supermercado</button>
            <button>Moda</button>
            <button>Vender</button>
            <button>Ayuda / PQR</button>
          </div>

          <div className="flex items-center text-sm gap-2.5">
            {user ? (
              <>
                <span>Hola, {user.displayName || user.email}</span>
                <button onClick={handleSignOut}>Salir</button>
              </>
            ) : (
              <>
                <Link to="/Register">Crea tu cuenta</Link>
                <Link to="/Login">Ingresar</Link>
              </>
            )}
            <button>Mis compras</button>
            <Link to="/carrito">
              <HiOutlineShoppingCart size={20} />
            </Link>
          </div>
        </div>

        <div
          className="flex items-center justify-between pb-1 mx-2 lg:hidden cursor-pointer"
          onClick={handleOpenDirection}
        >
          <div className="flex items-center gap-1">
            <HiOutlineLocationMarker />
            <p>Elegir ubicación</p>
          </div>
          <MdKeyboardArrowRight />
        </div>
      </div>

      {burgerMenu && (
        <div className="lg:hidden">
          <div className="bg-[#ffeb3b]">
            <div className="flex items-start justify-between">
              <div className="mx-5 border border-black">
                <BiUser className="w-[100px] h-[100px]" />
              </div>
              <div className="flex flex-col px-5">
                <h3 className="text-center text-xl font-semibold">
                  Bienvenido
                </h3>
                {user ? (
                  <h4 className="text-center text-lg font-medium">
                    {user.email}
                  </h4>
                ) : (
                  <h4 className="text-center text-lg font-medium">
                    Ingresa a tu cuenta para ver tus compras, favoritos, etc.
                  </h4>
                )}
              </div>
            </div>
            <div className="flex items-center py-2 mx-5">
              {user ? (
                <button
                  className="w-full mx-4 py-1 border bg-blue-600 text-white font-semibold rounded text-sm text-center"
                  onClick={handleSignOut}
                >
                  Salir
                </button>
              ) : (
                <>
                  <Link
                    className="w-full mx-4 py-1 border bg-blue-600 text-white font-semibold rounded text-sm text-center"
                    to="/Login"
                  >
                    Ingresa
                  </Link>
                  <Link
                    className="w-full mx-4 py-1 border border-blue-600 rounded text-blue-600 text-sm text-center bg-white"
                    to="/Register"
                  >
                    Crea tu cuenta
                  </Link>
                </>
              )}
            </div>
          </div>

          <div>
            <ul className="border border-b-[#e6e6e6] px-4">
              <li>
                <Link
                  className="flex items-center text-sm cursor-pointer gap-3.5 py-2 font-semibold"
                  to={user ? "/" : "/Register"}
                >
                  <GrHomeRounded size={22} />
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  className="flex items-center text-sm cursor-pointer gap-3.5 py-2 font-semibold"
                  to={user ? "/offers" : "/Register"}
                >
                  <MdOutlineLocalOffer size={22} />
                  Ofertas
                </Link>
              </li>
              <li>
                <Link
                  className="flex items-center text-sm cursor-pointer gap-3.5 py-2 font-semibold"
                  to={user ? "/history" : "/Register"}
                >
                  <AiOutlineClockCircle size={22} />
                  Historial
                </Link>
              </li>
              <li>
                <Link
                  className="flex items-center text-sm cursor-pointer gap-3.5 py-2 font-semibold"
                  to={user ? "/help" : "/Register"}
                >
                  <MdOutlineHeadsetMic size={22} />
                  Ayuda / PQR
                </Link>
              </li>
              <li>
                <Link
                  className="flex items-center text-sm cursor-pointer gap-3.5 py-2 font-semibold"
                  onClick={handleOpenDirection}
                >
                  <HiOutlineLocationMarker size={22} />
                  Elegir ubicación
                </Link>
              </li>
            </ul>

            <ul className="border border-b-[#e6e6e6] px-4">
              <li>
                <Link
                  className="flex items-center text-sm cursor-pointer gap-3.5 py-2 font-semibold"
                  to={user ? "/supermarket" : "/Register"}
                >
                  <BiShoppingBag size={22} />
                  Supermercado
                </Link>
              </li>
              <li>
                <Link
                  className="flex items-center text-sm cursor-pointer gap-3.5 py-2 font-semibold"
                  to={user ? "/fashion" : "/Register"}
                >
                  <IoShirtOutline size={22} />
                  Moda
                </Link>
              </li>
              <li>
                <Link
                  className="flex items-center text-sm cursor-pointer gap-3.5 py-2 font-semibold"
                  to={user ? "/official-stores" : "/Register"}
                >
                  <MdOutlineStorefront size={22} />
                  Tiendas oficiales
                </Link>
              </li>
              <li>
                <Link
                  className="flex items-center text-sm cursor-pointer gap-3.5 py-2 font-semibold"
                  to={user ? "/categories" : "/Register"}
                >
                  <AiOutlineUnorderedList size={22} />
                  Categorías
                </Link>
              </li>
            </ul>

            <ul className="border border-b-[#e6e6e6] px-4">
              <li>
                <Link
                  className="flex items-center text-sm cursor-pointer gap-3.5 py-2 font-semibold"
                  to={user ? "/summary" : "/Register"}
                >
                  <TiDocumentText size={22} />
                  Resumen
                </Link>
              </li>
              <li>
                <Link
                  className="flex items-center text-sm cursor-pointer gap-3.5 py-2 font-semibold"
                  to={user ? "/sell" : "/Register"}
                >
                  <GiReceiveMoney size={22} />
                  Vender
                </Link>
              </li>
            </ul>

            <ul className="border border-b-[#e6e6e6] px-4">
              <li>
                <Link
                  className="flex items-center text-sm cursor-pointer gap-3.5 py-2 font-semibold"
                  to="/app"
                >
                  <HiDownload size={22} />
                  ¡Compra y vende con la app!
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}

      <Direction
        isOpen={isDirectionOpen}
        onClose={handleCloseDirection}
        onSave={handleSaveAddress}
      />
    </>
  );
};

export default BarMenu;
