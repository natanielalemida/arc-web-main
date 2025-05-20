import KronosAppImage from "../../../assets/kronosApp.png";
import GooglePlay from "../../../assets/google-play.png";
import AppStore from "../../../assets/app-store.png";
import iconKronosApp from "../../../assets/bigIcon/iconKronosAppBig.png";

export default function KronosApp() {
  return (
    <section className="relative overflow-hidden py-8 sm:py-12 px-4 sm:px-6 md:px-12 lg:px-16">
      <div className="relative z-20 grid grid-cols-1 md:grid-cols-2 items-center gap-6 md:gap-8">
        {/* Imagem do aplicativo à esquerda */}
        <div className="flex justify-center order-2 md:order-1">
          <img
            src={KronosAppImage}
            alt="Aplicativo Kronos"
            className="max-w-[280px] sm:max-w-xs md:max-w-sm lg:max-w-md"
          />
        </div>

        {/* Texto à direita */}
        <div className="text-[#009172] text-center md:text-left space-y-4 sm:space-y-6 order-1 md:order-2">
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
            <img 
              src={iconKronosApp} 
              alt="Ícone Kronos" 
              className="w-16 sm:w-20 md:w-24" 
            />
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight roboto">
              Kronos App
            </h1>
          </div>

          <h2 className="inter font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl">
            SUA GESTÃO FINANCEIRA <br className="hidden sm:block" /> NA PALMA DA MÃO
          </h2>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl font-sans inter">
            Controle total do seu negócio, de forma simples e visual. <br className="hidden xs:block" />
            <span className="font-semibold">
              Com o Kronos App, você acompanha todas as finanças <br className="hidden md:block" /> da sua empresa em tempo real, onde estiver.
            </span>
          </p>

          <div className="space-y-3 sm:space-y-4">
            <div>
              <h3 className="font-semibold text-base sm:text-lg md:text-xl">Funcionalidades</h3>
              <ul className="text-sm sm:text-base md:text-lg lg:text-xl space-y-1 sm:space-y-2 list-disc list-inside inter ml-4 sm:ml-5">
                <li>Fluxo de caixa completo e intuitivo</li>
                <li>Gráficos e dashboards inteligentes</li>
                <li>Gestão de receitas, despesas e categorias</li>
                <li key="offline-support">Funciona mesmo sem internet</li>
                <li>Emissão de relatórios</li>
                <li>Relatórios fáceis de entender</li>
                <li>Acesso multiusuário para sócios e colaboradores</li>
              </ul>
            </div>

            <p className="font-semibold text-base sm:text-lg md:text-xl inter">
              Ideal para quem quer tomar decisões rápidas e <br className="hidden sm:block" />
              estratégicas com base em dados reais.
            </p>
          </div>

          {/* Botões de download */}
          <div className="flex flex-wrap justify-center md:justify-start gap-3 sm:gap-4 pt-2">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img
                src={GooglePlay}
                alt="Disponível no Google Play"
                className="h-10 sm:h-12 md:h-14 rounded-md shadow-md hover:scale-105 transition-transform"
              />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img
                src={AppStore}
                alt="Disponível na App Store"
                className="h-10 sm:h-12 md:h-14 rounded-md shadow-md hover:scale-105 transition-transform"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}