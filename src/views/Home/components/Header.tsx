import ImagemAlternada from "../function/ImagemAlternada";
import TextoAlternado from "../function/TextoAlternado";

export default function Header() {
  return (
    <section id='home' className="relative px-6 py-16 md:px-12 lg:px-20 bg-[#05313E] overflow-hidden h-screen w-full">
      {/* Overlay escuro */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Centralização vertical */}
      <div className="relative z-20 h-full flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center w-full">
          {/* Texto */}
          <div className="text-white space-y-6 max-w-3xl mx-auto md:mx-0 text-center md:text-left">
            <p className="text-base md:text-lg font-medium text-[#98d2d3]">
              Soluções completas para gestão da sua empresa
            </p>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight roboto">
              TENHA O CONTROLE
              <br />
              <TextoAlternado />
              <br />
              NA PALMA DA MÃO!
            </h1>

            <p className="text-base sm:text-lg md:text-xl inter">
              Transforme a gestão do seu negócio com nossos{" "}
              <strong>aplicativos inovadores</strong>, que oferecem total
              controle de vendas, pedidos e fluxo de caixa. Funcionando tanto
              offline quanto online, nossos apps são ideais para acompanhar
              todos os processos, do atendimento ao cliente até a análise
              financeira.
            </p>

            <div className="flex justify-center md:justify-start">
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-medium transition-transform duration-300 w-full sm:w-auto inter transform hover:scale-105">
                <a
                  href="https://wa.me/559491820370?text=Ol%C3%A1!%20%20Gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20sistemas%20da%20ARC%20Solution.%20Poderiam%20me%20ajudar,%20por%20favor?"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-medium transition-transform duration-300 w-full sm:w-auto inter transform hover:scale-105"
                >
                  COMECE AGORA MESMO
                </a>
              </button>
            </div>
          </div>

          {/* Imagem */}
          <div className="flex justify-center w-full">
            <ImagemAlternada />
          </div>
        </div>
      </div>
    </section>
  );
}
