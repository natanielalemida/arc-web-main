import image from "../../../assets/Group 3.png";
import iconKronosApp from "../../../assets/iconkronosApp.png";
import iconKronosFood from "../../../assets/IconkronosFood.png";
import iconKronosVendas from "../../../assets/icnonKronosVendas.png";
import { Link } from "react-router-dom";

export default function AboutSolution() {
  return (
    <div id="solucoes" className="flex justify-center items-center mt-8 sm:mt-10 px-4">
      <div className="p-4 sm:p-6 lg:p-10 rounded-2xl w-full max-w-6xl">
        <h1 className="roboto text-[#009172] text-lg sm:text-xl md:text-2xl mb-4 text-center">
          SUPORTE SUPER RÁPIDO PARA SUA EMPRESA{" "}
          <span className="font-bold">NÃO PARAR!</span>
        </h1>

        <div className="bg-[#F3F2F2] p-4 sm:p-6 lg:p-10 rounded-2xl mb-8 sm:mb-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#009172] roboto text-center mb-4">
            NOSSAS SOLUÇÕES MOBILE
          </h1>

          <p className="text-center text-[#009172] text-sm sm:text-base md:text-lg max-w-3xl mx-auto">
            Nossos aplicativos oferecem{" "}
            <span className="font-bold">soluções completas e integradas</span>{" "}
            para o seu negócio, com versões tanto para dispositivos móveis
            quanto para desktop.
          </p>

          {/* Colunas */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 mt-6 sm:mt-8 items-stretch">
            {/* Card 1 */}
            <div className="p-2 sm:p-4 rounded-xl text-center lg:text-start flex flex-col justify-between">
              <div className="mb-4 sm:mb-6">
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
                  <img src={iconKronosApp} alt="Kronos App" className="w-8 h-8 sm:w-10 sm:h-10" />
                  <h2 className="text-[#009172] font-bold text-2xl sm:text-3xl roboto">
                    Kronos App
                  </h2>
                </div>
                <p className="text-[#009172] inter text-xs sm:text-sm md:text-base">
                  <span className="font-bold">
                    Acompanhe o desempenho financeiro da sua empresa com o
                    Kronos App.
                  </span>{" "}
                  Dashboards completos de fluxo de caixa, receitas, contas a
                  receber e a pagar.
                </p>
              </div>
              <div>
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-2 mt-6 sm:mt-10">
                  <img src={iconKronosVendas} alt="Kronos Vendas" className="w-8 h-8 sm:w-10 sm:h-10" />
                  <h2 className="text-[#009172] font-extrabold text-2xl sm:text-3xl roboto">
                    Kronos Vendas
                  </h2>
                </div>
                <p className="text-[#009172] inter text-xs sm:text-sm md:text-base">
                  <span className="font-bold">
                    Gerencie vendas e pedidos de forma eficiente.
                  </span>{" "}
                  Funciona offline e online, com suporte a desktop e mobile.
                </p>
              </div>
            </div>

            {/* Imagem e botão */}
            <div className="rounded-xl text-center flex flex-col justify-between items-center h-full p-2 sm:p-4 order-first lg:order-none">
              <img
                src={image}
                alt="soluções"
                className="w-full max-w-[200px] sm:max-w-xs mx-auto"
              />
              <Link
                to="/plus"
                className="font-light inter bg-[#009172] rounded-xl px-4 py-2 sm:px-6 sm:py-3 w-full sm:w-9/12 text-base sm:text-xl text-white shadow-md shadow-gray-500 cursor-pointer hover:drop-shadow-xl transform hover:scale-105 transition-transform duration-300 mt-4 sm:mt-6"
              >
                Saiba mais
              </Link>
            </div>

            {/* Card 2 */}
            <div className="p-2 sm:p-4 rounded-xl text-center lg:text-start flex flex-col justify-between">
              <div className="mb-4 sm:mb-6">
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
                  <img src={iconKronosFood} alt="Kronos Food" className="w-8 h-8 sm:w-10 sm:h-10" />
                  <h2 className="text-[#009172] font-extrabold text-2xl sm:text-3xl roboto">
                    Kronos Food
                  </h2>
                </div>
                <p className="text-[#009172] inter text-xs sm:text-sm md:text-base">
                  <span className="font-bold">
                    Gerenciamento fácil de mesas e comandas.
                  </span>{" "}
                  Envio direto ao servidor com sistema de caixa integrado.
                </p>
              </div>
              <div>
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-2 mt-6 sm:mt-10">
                  <h2 className="text-[#009172] font-extrabold text-2xl sm:text-3xl roboto">
                    Integração POS
                  </h2>
                </div>
                <p className="text-[#009172] inter text-xs sm:text-sm md:text-base">
                  <span className="font-bold">
                    Acesse via maquininha de cartão
                  </span>{" "}
                  e gerencie pedidos com agilidade.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}