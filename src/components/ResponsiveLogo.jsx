import React, { useEffect, useState } from "react";
import LogoMercadoFull from "../assets/LogoMercadoLibre.png";
import LogoMobile from "../assets/LogoMobile.png";

const ResponsiveLogo = () => {
  const [logoSrc, setLogoSrc] = useState(LogoMobile);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setLogoSrc(LogoMercadoFull);
      } else {
        setLogoSrc(LogoMobile);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return <img src={logoSrc} alt="Logo de Mercado Libre" className="h-[30px]" />;
};

export default ResponsiveLogo;
