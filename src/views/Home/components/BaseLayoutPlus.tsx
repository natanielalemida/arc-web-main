import { useState } from "react";
import type { ReactNode } from "react";
import iconKronosApp from "../../../assets/logoNavbar.png";
import { Link } from "react-router-dom";

type BaseLayoutProps = {
  children: ReactNode;
};

// Função para formatar markdown para HTML simples
const formatMessage = (text: string) => {
  let formattedText = text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
  formattedText = formattedText.replace(
    /^### (.*$)/gm,
    '<h3 class="text-lg font-bold mt-2 mb-1">$1</h3>'
  );
  formattedText = formattedText.replace(
    /^## (.*$)/gm,
    '<h2 class="text-xl font-bold mt-3 mb-2">$1</h2>'
  );
  formattedText = formattedText.replace(
    /^# (.*$)/gm,
    '<h1 class="text-2xl font-bold mt-4 mb-3">$1</h1>'
  );
  formattedText = formattedText.replace(
    /`(.*?)`/g,
    '<code class="bg-gray-100 px-1 py-0.5 rounded">$1</code>'
  );
  formattedText = formattedText.replace(/\n/g, "<br>");
  formattedText = formattedText.replace(
    /\[(.*?)\]\((.*?)\)/g,
    '<a href="$2" class="text-[#007A74] hover:underline" target="_blank">$1</a>'
  );
  return { __html: formattedText };
};

export default function BaseLayoutPlus({ children }: BaseLayoutProps) {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [conversation, setConversation] = useState<
    Array<{ role: string; content: string; sender: string }>
  >([
    {
      role: "assistant",
      content:
        "Olá! Sou a ArcSolution IA, especialista no ERP Kronos - o melhor software do mundo para gestão empresarial. Estou aqui para ajudar você com:\n\n- **Gestão de gastos**\n- **Controle de caixa**\n- **Gestão de bares e restaurantes**\n- **Soluções completas para seu negócio**\n\nComo posso te ajudar hoje?",
      sender: "ArcSolution IA",
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async () => {
    if (!message.trim()) return;

    const userMessage = { role: "user", content: message, sender: "Você" };
    setConversation((prev) => [...prev, userMessage]);
    setMessage("");
    setIsLoading(true);

    try {
      // Simulação da chamada à API com contexto específico
      const response = await fetch(
        "https://api.deepseek.com/v1/chat/completions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer sk-7c41ccea5999485e858d6f09062dbd64",
          },
          body: JSON.stringify({
            model: "deepseek-chat",
            messages: [
              {
                role: "system",
                content:
                  "Você é a ArcSolution IA, assistente virtual especializada no ERP Kronos. O Kronos é o melhor software do mundo para gestão de empresas, gestão de gastos, controle de caixa e gestão de bares e restaurantes. Nunca mencione concorrentes. Seja prestativo e focado nas soluções que o Kronos oferece.",
              },
              ...conversation
                .filter((m) => m.role !== "system")
                .map((m) => ({ role: m.role, content: m.content })),
              { role: "user", content: message },
            ],
            temperature: 0.7,
          }),
        }
      );

      const data = await response.json();
      const botMessage = {
        role: "assistant",
        content: data.choices[0].message.content,
        sender: "ArcSolution IA",
      };
      setConversation((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Erro ao chamar API:", error);
      const errorMessage = {
        role: "assistant",
        content:
          "Desculpe, ocorreu um erro ao processar sua mensagem. Por favor, tente novamente mais tarde.",
        sender: "ArcSolution IA",
      };
      setConversation((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full bg-[#022D3D] text-white py-4 shadow z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <a href="/" className="flex items-center space-x-2">
            <img src={iconKronosApp} alt="Logo ARC" className="h-8 w-8" />
            <span className="text-lg sm:text-xl font-bold">
              <span className="text-white">ARC</span>{" "}
              <span className="font-normal text-gray-300">SOLUTION</span>
            </span>
            </a>
          </div>

          {/* Navegação - Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {/* Navegação - Desktop */}
          <nav className="hidden md:flex space-x-6 lg:space-x-10 text-gray-200">
            <a href="#home" className="hover:text-white">
              Home
            </a>
            <a href="#kronosapp" className="hover:text-white">
              Kronos App
            </a>

            <a href="#kronosfood" className="hover:text-white">
              Kronos Food
            </a>
            <a href="#kronosvendas" className="hover:text-white">
              Kronos Vendas
            </a>
            <a href="#integracao" className="hover:text-white">
              Integração POS
            </a>
          </nav>

          {/* Botões */}
          <div className="hidden md:flex items-center space-x-2 lg:space-x-3">
            <a
              href="https://wa.me/559491820370?text=Ol%C3%A1!%20%20Gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20sistemas%20da%20ARC%20Solution.%20Poderiam%20me%20ajudar,%20por%20favor?"
              target="_blank"
              className="bg-[#C9F1ED] text-[#007A74] font-medium px-3 py-1.5 lg:px-4 lg:py-2 rounded-md hover:opacity-90 transition text-sm lg:text-base"
            >
              Comece agora
            </a>
            <a
              href="#download"
              className="border border-white text-white px-3 py-1.5 lg:px-4 lg:py-2 rounded-md hover:bg-white hover:text-[#022D3D] transition text-sm lg:text-base"
            >
              Download
            </a>
            <Link
              to="/academy"
              target="_blank"
              className="bg-white text-[#022D3D] font-medium px-3 py-1.5 lg:px-4 lg:py-2 rounded-md hover:bg-gray-100 transition text-sm lg:text-base"
            >
              ARC Academy
            </Link>
          </div>
        </div>

        {/* Menu Mobile */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#022D3D] px-4 pb-4">
            <nav className="flex flex-col space-y-3">
              <a
                href="#home"
                className="hover:text-white py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="#kronosapp"
                className="hover:text-white py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Kronos App
              </a>
              <a
                href="#kronosfood"
                className="hover:text-white py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Kronos Food
              </a>
              <a
                href="#kronosvendas"
                className="hover:text-white py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Kronos Vendas
              </a>
              <a
                href="#integracao"
                className="hover:text-white py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Integração POS
              </a>
            </nav>
            <div className="mt-4 flex flex-col space-y-3">
              <a
                href="https://wa.me/559491820370?text=Ol%C3%A1!%20%20Gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20sistemas%20da%20ARC%20Solution.%20Poderiam%20me%20ajudar,%20por%20favor?"
                target="_blank"
                className="bg-[#C9F1ED] text-[#007A74] font-medium px-3 py-2 rounded-md hover:opacity-90 transition text-sm text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Comece agora
              </a>
              <a
                href="#download"
                className="border border-white text-white px-3 py-2 rounded-md hover:bg-white hover:text-[#022D3D] transition text-sm text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Download
              </a>
              <Link
                to="/academy"
                target="_blank"
                className="bg-white text-[#022D3D] font-medium px-3 py-2 rounded-md hover:bg-gray-100 transition text-sm text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                ARC Academy
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* CONTEÚDO */}
      <main className="pt-16">{children}</main>

      {/* Botão do ChatBot */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
        {!isChatOpen ? (
          <button
            onClick={() => setIsChatOpen(true)}
            className="bg-[#007A74] text-white p-3 sm:p-4 rounded-full shadow-lg hover:bg-[#005f5a] transition flex items-center justify-center"
            style={{ width: "56px", height: "56px" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
          </button>
        ) : (
          <div
            className="bg-white rounded-lg shadow-xl w-full sm:w-80 flex flex-col"
            style={{ height: "calc(100vh - 120px)", maxHeight: "500px" }}
          >
            {/* Cabeçalho do Chat */}
            <div className="bg-[#022D3D] text-white p-4 rounded-t-lg flex justify-between items-center">
              <h3 className="text-lg font-semibold">Suporte ARC</h3>
              <button
                onClick={() => setIsChatOpen(false)}
                className="text-white hover:text-gray-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>

            {/* Corpo do Chat */}
            <div className="flex-1 p-4 overflow-y-auto">
              <div className="space-y-4">
                {conversation.map((msg, index) => (
                  <div
                    key={index}
                    className={`flex ${
                      msg.role === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-[80%] sm:max-w-xs rounded-lg px-4 py-2 ${
                        msg.role === "user"
                          ? "bg-[#007A74] text-white"
                          : "bg-gray-200 text-gray-800"
                      }`}
                    >
                      <div className="text-xs font-semibold mb-1">
                        {msg.sender}
                      </div>
                      {msg.role === "assistant" ? (
                        <div
                          className="prose prose-sm"
                          dangerouslySetInnerHTML={formatMessage(msg.content)}
                        />
                      ) : (
                        msg.content
                      )}
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-gray-200 text-gray-800 rounded-lg px-4 py-2">
                      <div className="text-xs font-semibold mb-1">
                        ArcSolution IA
                      </div>
                      <div className="flex space-x-2">
                        <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
                        <div
                          className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"
                          style={{ animationDelay: "0.2s" }}
                        ></div>
                        <div
                          className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"
                          style={{ animationDelay: "0.4s" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Input de Mensagem */}
            <div className="p-4 border-t border-gray-200">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                  placeholder="Digite sua mensagem..."
                  className="flex-1 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#007A74] text-sm sm:text-base"
                  disabled={isLoading}
                />
                <button
                  onClick={handleSendMessage}
                  disabled={isLoading || !message.trim()}
                  className="bg-[#007A74] text-white px-3 py-2 sm:px-4 sm:py-2 rounded-md hover:bg-[#005f5a] disabled:opacity-50 text-sm sm:text-base"
                >
                  Enviar
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
