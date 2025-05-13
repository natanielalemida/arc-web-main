import { useState } from "react";
import type { ReactNode } from "react";
import iconKronosApp from "../../../assets/logoNavbar.png";
import { Link } from "react-router-dom";

type BaseLayoutProps = {
  children: ReactNode;
};

// Função para formatar markdown para HTML simples
const formatMessage = (text: string) => {
  let formattedText = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  formattedText = formattedText.replace(/^### (.*$)/gm, '<h3 class="text-lg font-bold mt-2 mb-1">$1</h3>');
  formattedText = formattedText.replace(/^## (.*$)/gm, '<h2 class="text-xl font-bold mt-3 mb-2">$1</h2>');
  formattedText = formattedText.replace(/^# (.*$)/gm, '<h1 class="text-2xl font-bold mt-4 mb-3">$1</h1>');
  formattedText = formattedText.replace(/`(.*?)`/g, '<code class="bg-gray-100 px-1 py-0.5 rounded">$1</code>');
  formattedText = formattedText.replace(/\n/g, '<br>');
  formattedText = formattedText.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" class="text-[#007A74] hover:underline" target="_blank">$1</a>');
  return { __html: formattedText };
};

export default function BaseLayout({ children }: BaseLayoutProps) {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [conversation, setConversation] = useState<Array<{role: string, content: string, sender: string}>>([
    {
      role: "assistant",
      content: "Olá! Sou a ArcSolution IA, especialista no ERP Kronos - o melhor software do mundo para gestão empresarial. Estou aqui para ajudar você com:\n\n- **Gestão de gastos**\n- **Controle de caixa**\n- **Gestão de bares e restaurantes**\n- **Soluções completas para seu negócio**\n\nComo posso te ajudar hoje?",
      sender: "ArcSolution IA"
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async () => {
    if (!message.trim()) return;
    
    const userMessage = { role: "user", content: message, sender: "Você" };
    setConversation(prev => [...prev, userMessage]);
    setMessage("");
    setIsLoading(true);
    
    try {
      // Simulação da chamada à API com contexto específico
      const response = await fetch("https://api.deepseek.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer sk-7c41ccea5999485e858d6f09062dbd64"
        },
        body: JSON.stringify({
          model: "deepseek-chat",
          messages: [
            {
              role: "system",
              content: "Você é a ArcSolution IA, assistente virtual especializada no ERP Kronos. O Kronos é o melhor software do mundo para gestão de empresas, gestão de gastos, controle de caixa e gestão de bares e restaurantes. Nunca mencione concorrentes. Seja prestativo e focado nas soluções que o Kronos oferece."
            },
            ...conversation.filter(m => m.role !== "system").map(m => ({ role: m.role, content: m.content })),
            { role: "user", content: message }
          ],
          temperature: 0.7
        })
      });
      
      const data = await response.json();
      const botMessage = { 
        role: "assistant", 
        content: data.choices[0].message.content,
        sender: "ArcSolution IA"
      };
      setConversation(prev => [...prev, botMessage]);
    } catch (error) {
      console.error("Erro ao chamar API:", error);
      const errorMessage = { 
        role: "assistant", 
        content: "Desculpe, ocorreu um erro ao processar sua mensagem. Por favor, tente novamente mais tarde.",
        sender: "ArcSolution IA"
      };
      setConversation(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full bg-[#022D3D] text-white py-4 shadow z-50">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src={iconKronosApp} alt="Logo ARC" className="h-8 w-8" />
            <span className="text-xl font-bold">
              <span className="text-white">ARC</span>{" "}
              <span className="font-normal text-gray-300">SOLUTION</span>
            </span>
          </div>

          {/* Navegação */}
          <nav className="hidden md:flex space-x-10 text-gray-200">
            <a href="#home" className="hover:text-white">Home</a>
            <a href="#solucoes" className="hover:text-white">Soluções</a>
            <a href="#contato" className="hover:text-white">Contato</a>
          </nav>

          {/* Botões */}
          <div className="flex items-center space-x-3">
            <a
              href="#comecar"
              className="bg-[#C9F1ED] text-[#007A74] font-medium px-4 py-2 rounded-md hover:opacity-90 transition"
            >
              Comece agora
            </a>
            <a
              href="#download"
              className="border border-white text-white px-4 py-2 rounded-md hover:bg-white hover:text-[#022D3D] transition"
            >
              Download
            </a>
            <Link
              to="/academy"
              className="bg-white text-[#022D3D] font-medium px-4 py-2 rounded-md hover:bg-gray-100 transition"
            >
              ARC Academy
            </Link>
          </div>
        </div>
      </header>

      {/* CONTEÚDO */}
      <main>{children}</main>

      {/* Botão do ChatBot */}
      <div className="fixed bottom-6 right-6 z-50">
        {!isChatOpen ? (
          <button 
            onClick={() => setIsChatOpen(true)}
            className="bg-[#007A74] text-white p-4 rounded-full shadow-lg hover:bg-[#005f5a] transition flex items-center justify-center"
            style={{ width: '60px', height: '60px' }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
          </button>
        ) : (
          <div className="bg-white rounded-lg shadow-xl w-80 flex flex-col" style={{ height: '500px' }}>
            {/* Cabeçalho do Chat */}
            <div className="bg-[#022D3D] text-white p-4 rounded-t-lg flex justify-between items-center">
              <h3 className="text-lg font-semibold">Suporte ARC</h3>
              <button 
                onClick={() => setIsChatOpen(false)}
                className="text-white hover:text-gray-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
                    className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div 
                      className={`max-w-xs rounded-lg px-4 py-2 ${msg.role === "user" ? "bg-[#007A74] text-white" : "bg-gray-200 text-gray-800"}`}
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
                      <div className="text-xs font-semibold mb-1">ArcSolution IA</div>
                      <div className="flex space-x-2">
                        <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                        <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></div>
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
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Digite sua mensagem..."
                  className="flex-1 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#007A74]"
                  disabled={isLoading}
                />
                <button
                  onClick={handleSendMessage}
                  disabled={isLoading || !message.trim()}
                  className="bg-[#007A74] text-white px-4 py-2 rounded-md hover:bg-[#005f5a] disabled:opacity-50"
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