import KronosFoodImage from "../../../assets/kronosFood.png";
import iconKronosFood from "../../../assets/bigIcon/IconkronosFoodBig.png";
import GooglePlayDark from "../../../assets/playstoreDark.png";
import AppStoreDark from "../../../assets/apple-store-dark.png";
import { motion } from "framer-motion";

export default function KronosFood() {
  return (
    <section className="relative overflow-hidden bg-[#05313E] py-8 sm:py-12 px-4 sm:px-6 md:px-12 lg:px-16">
      <div className="relative grid grid-cols-1 md:grid-cols-2 items-center gap-6 md:gap-8">
        {/* Texto à esquerda */}
        <div className="text-[#CCE9E7] space-y-4 sm:space-y-6 text-center md:text-left md:ml-8 lg:ml-12 xl:ml-20 order-2 md:order-1">
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3 sm:gap-4">
            <img 
              src={iconKronosFood} 
              alt="Ícone Kronos Food" 
              className="w-16 sm:w-20 md:w-24" 
            />
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight roboto">
              Kronos Food
            </h1>
          </div>
          
          <h2 className="inter font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-snug">
            A SOLUÇÃO COMPLETA PARA BARES E RESTAURANTES
          </h2>
          
          <p className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold inter">
            Comande, controle e cresça com o app
            <br className="hidden xs:block" /> desenvolvido especialmente para o ramo alimentício.
          </p>

          <div className="space-y-3 sm:space-y-4">
            <h3 className="font-semibold text-lg sm:text-xl md:text-2xl inter">Funcionalidades</h3>
            <ul className="text-sm sm:text-base md:text-lg lg:text-xl space-y-1 sm:space-y-2 list-disc list-inside inter ml-4 sm:ml-5">
              <li>Criação e acompanhamento de comandas</li>
              <li>Lançamento de pedidos por mesa ou balcão</li>
              <li>Organização de produtos e cardápios</li>
              <li>Integração com o financeiro no Kronos App</li>
              <li>Gestão ágil para entregas e atendimento presencial</li>
            </ul>
            <p className="mt-3 sm:mt-5 text-sm sm:text-base md:text-lg lg:text-xl">
              Seja você dono de um food truck, lanchonete ou restaurante,{" "}
              <span className="font-semibold">
                o Kronos Food entrega velocidade no atendimento e controle total
                da operação.
              </span>
            </p>
          </div>

          {/* Botões de download */}
          <div className="flex flex-wrap justify-center md:justify-start gap-3 sm:gap-4 pt-2">
            <a href="https://play.google.com/store/apps/details?id=com.kronos_food" target="_blank">
              <motion.img
                src={GooglePlayDark}
                alt="Disponível no Google Play"
                className="h-10 sm:h-12 md:h-14 rounded-md shadow-md"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              />
            </a>
            <a href="https://apps.apple.com/br/app/kronos-food/id6736922037?l=en-GB" target="_blank">
              <motion.img
                src={AppStoreDark}
                alt="Disponível na App Store"
                className="h-10 sm:h-12 md:h-14 rounded-md shadow-md"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              />
            </a>
          </div>
        </div>

        {/* Imagem à direita */}
        <div className="flex justify-center order-1 md:order-2">
          <motion.img
            src={KronosFoodImage}
            alt="Aplicativo Kronos Food"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg object-cover"
            animate={{ y: [0, -15, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </div>
    </section>
  );
}