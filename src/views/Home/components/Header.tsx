import ImagemAlternada from "../function/ImagemAlternada";
import TextoAlternado from "../function/TextoAlternado";

export default function Header() {
  return (
    <section id='home' className="relative px-4 sm:px-6 md:px-12 lg:px-20 bg-[#05313E] overflow-hidden min-h-screen w-full flex items-center">
      {/* Overlay escuro */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Centralização vertical */}
      <div className="relative z-20 w-full py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 w-full">
          {/* Texto */}
          <div className="text-white space-y-4 sm:space-y-6 max-w-3xl mx-auto lg:mx-0 text-center lg:text-left order-2 lg:order-1">
            <p className="text-sm sm:text-base md:text-lg font-medium text-[#98d2d3]">
              Soluções completas para gestão da sua empresa
            </p>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight roboto">
              TENHA O CONTROLE
              <br />
              <TextoAlternado />
              <br />
              NA PALMA DA MÃO!
            </h1>

            <p className="text-sm sm:text-base md:text-lg lg:text-xl inter">
              Transforme a gestão do seu negócio com nossos{" "}
              <strong>aplicativos inovadores</strong>, que oferecem total
              controle de vendas, pedidos e fluxo de caixa. Funcionando tanto
              offline quanto online, nossos apps são ideais para acompanhar
              todos os processos, do atendimento ao cliente até a análise
              financeira.
            </p>

            <div className="flex justify-center lg:justify-start pt-2">
              <a
                href="https://wa.me/559491820370?text=Ol%C3%A1!%20%20Gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20sistemas%20da%20ARC%20Solution.%20Poderiam%20me%20ajudar,%20por%20favor?"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg font-medium transition-transform duration-300 w-full sm:w-auto inter transform hover:scale-105 text-sm sm:text-base inline-block text-center"
              >
                COMECE AGORA MESMO
              </a>
            </div>
          </div>

          {/* Imagem */}
          <div className="flex justify-center w-full order-1 lg:order-2">
            <ImagemAlternada />
          </div>
        </div>
      </div>
    </section>
  );
}