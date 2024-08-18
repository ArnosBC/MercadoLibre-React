import React from "react";
import Envio from "../assets/envio.png";
import IndustriaComercio from "../assets/IndustriComercio.png";
import Pago from "../assets/pago.png";
import Pare from "../assets/pare.png";
import Seguridad from "../assets/seguriadad.png";

const FooterPages = () => {
  return (
    <div>
      <section class="mt-12">
        <div class="info flex justify-around">
          <div class="w-[310px] flex flex-col items-center text-center">
            <img src={Pago} alt="" />
            <h2 class="mt-5 mb-1.5 text-xl">Paga con tarjeta o en efectivo</h2>
            <p class="text-[#737373] text-[15px] leading-normal mb-2.5">
              Con Mercado Pago, paga en cuotas y aprovecha la comodidad de
              financiación que te da tu banco, o hazlo con efectivo en puntos de
              pago. ¡Y siempre es seguro!
            </p>
            <a class="text-sm text-[#3483fa]" href="#">
              Cómo pagar con Mercado Pago
            </a>
          </div>
          <div class="w-[310px] flex flex-col items-center text-center">
            <img src={Envio} alt="" />
            <h2 class="mt-5 mb-1.5 text-xl">Envío gratis desde $ 60.000</h2>
            <p class="text-[#737373] text-[15px] leading-normal">
              Con solo estar registrado en Mercado Libre, tienes envíos gratis
              en miles de productos seleccionados.
            </p>
          </div>
          <div class="w-[310px] flex flex-col items-center text-center">
            <img src={Seguridad} alt="" />
            <h2 class="mt-5 mb-1.5 text-xl">Seguridad, de principio a fin</h2>
            <p class="text-[#737373] text-[15px] leading-normal mb-2.5">
              ¿No te gusta? ¡Devuélvelo! En Mercado Libre, no hay nada que no
              puedas hacer, porque estás siempre protegido.
            </p>
            <a class="text-sm text-[#3483fa]" href="#">
              Cómo te protegemos
            </a>
          </div>
        </div>

        <div class="nav mt-14">
          <div class="flex flex-col justify-center">
            <button class="text-[#666]">Mas informacion</button>
            <div class="flex justify-around px-20 py-10 bg-[#f7f7f7] border-y">
              <div>
                <h3 class="mb-3.5 text-sm font-semibold">Acerca de</h3>
                <ul>
                  <li>
                    <a class="text-[#999] text-sm" href="#">
                      Mercado Libre
                    </a>
                  </li>
                  <li>
                    <a class="text-[#999] text-sm" href="#">
                      Investor relations
                    </a>
                  </li>
                  <li>
                    <a class="text-[#999] text-sm" href="#">
                      Tendencias
                    </a>
                  </li>
                  <li>
                    <a class="text-[#999] text-sm" href="#">
                      Sustentabilidad
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 class="mb-3.5 text-sm font-semibold">Otros sitios</h3>
                <ul>
                  <li>
                    <a class="text-[#999] text-sm" href="#">
                      Developers
                    </a>
                  </li>
                  <li>
                    <a class="text-[#999] text-sm" href="#">
                      Mercado Pago
                    </a>
                  </li>
                  <li>
                    <a class="text-[#999] text-sm" href="#">
                      Envíos
                    </a>
                  </li>
                  <li>
                    <a class="text-[#999] text-sm" href="#">
                      Mercado Shops
                    </a>
                  </li>
                  <li>
                    <a class="text-[#999] text-sm" href="#">
                      Mercado Ads
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 class="mb-3.5 text-sm font-semibold">Ayuda / PQR</h3>
                <ul>
                  <li>
                    <a class="text-[#999] text-sm" href="#">
                      Comprar
                    </a>
                  </li>
                  <li>
                    <a class="text-[#999] text-sm" href="#">
                      Vender
                    </a>
                  </li>
                  <li>
                    <a class="text-[#999] text-sm" href="#">
                      Resolución de problemas
                    </a>
                  </li>
                  <li>
                    <a class="text-[#999] text-sm" href="#">
                      Centro de seguridad
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 class="mb-3.5 text-sm font-semibold">Redes sociales</h3>
                <ul>
                  <li>
                    <a class="text-[#999] text-sm" href="#">
                      X
                    </a>
                  </li>
                  <li>
                    <a class="text-[#999] text-sm" href="#">
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a class="text-[#999] text-sm" href="#">
                      YouTube
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 class="mb-3.5 text-sm font-semibold">Mi cuenta</h3>
                <ul>
                  <li>
                    <a class="text-[#999] text-sm" href="#">
                      Ingresa
                    </a>
                  </li>
                  <li>
                    <a class="text-[#999] text-sm" href="#">
                      Vender
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 class="mb-3.5 text-sm font-semibold">Mercado Puntos</h3>
                <ul>
                  <li>
                    <a class="text-[#999] text-sm" href="#">
                      Nivel 6
                    </a>
                  </li>
                  <li>
                    <a class="text-[#999] text-sm" href="#">
                      Disney+
                    </a>
                  </li>
                  <li>
                    <a class="text-[#999] text-sm" href="#">
                      Max
                    </a>
                  </li>
                  <li>
                    <a class="text-[#999] text-sm" href="#">
                      Paramount+
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="legalidad px-14">
          <div class="border-b py-4">
            <ul class="flex gap-6 mb-2">
              <li>
                <a class="text-[13px]" href="#">
                  Trabaja con nosotros
                </a>
              </li>
              <li>
                <a class="text-[13px]" href="#">
                  Términos y condiciones
                </a>
              </li>
              <li>
                <a class="text-[13px]" href="#">
                  Promociones
                </a>
              </li>
              <li>
                <a class="text-[13px]" href="#">
                  Cómo cuidamos tu privacidad
                </a>
              </li>
              <li>
                <a class="text-[13px]" href="#">
                  Accesibilidad
                </a>
              </li>
              <li>
                <a class="text-[13px]" href="#">
                  Ayuda / PQR
                </a>
              </li>
              <li>
                <a class="text-[13px]" href="#">
                  Descuentazos
                </a>
              </li>
              <li>
                <a class="text-[13px]" href="#">
                  www.sic.gov.co
                </a>
              </li>
            </ul>
            <p class="text-[#999] text-xs">
              Copyright © 1999-2024 MercadoLibre Colombia LTDA.
            </p>
            <p class="text-[#999] text-xs mt-1">
              Carrera 17 Numero 93 - 09 Piso 3, Bogotá D.C., Colombia
            </p>
          </div>
          <div class="flex gap-6 py-4">
            <a href="#">
              <img src={IndustriaComercio} alt="" />
            </a>
            <a href="#">
              <img src={Pare} alt="" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FooterPages;
