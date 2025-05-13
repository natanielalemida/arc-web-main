import { Link } from "react-router-dom";
import BaseLayout from "../Home/components/BaseLayout";

export default function ArcAcademy() {
    const courses = [
      {
        id: 1,
        title: "Kronos App",
        description: "Aprenda a utilizar todas as funcionalidades do aplicativo Kronos para gestão empresarial completa.",
        icon: "📱",
        category: "Mobile"
      },
      {
        id: 2,
        title: "Kronos Food Mobile",
        description: "Domine o sistema de gestão para restaurantes e estabelecimentos alimentícios na versão mobile.",
        icon: "🍽️",
        category: "Mobile"
      },
      {
        id: 3,
        title: "Kronos Vendas Mobile",
        description: "Curso completo para equipes de vendas que utilizam a plataforma Kronos em dispositivos móveis.",
        icon: "💰",
        category: "Mobile"
      },
      {
        id: 4,
        title: "Kronos ERP",
        description: "Treinamento aprofundado no sistema de gestão empresarial integrado da ARC Solution.",
        icon: "🏢",
        category: "Desktop"
      },
      {
        id: 5,
        title: "Kronos Food PC",
        description: "Aprenda a gerir seu estabelecimento alimentício com a versão desktop do Kronos Food.",
        icon: "💻",
        category: "Desktop"
      },
      {
        id: 6,
        title: "Utilitários",
        description: "Conheça as ferramentas auxiliares e utilitários que complementam o ecossistema Kronos.",
        icon: "🛠️",
        category: "Ferramentas"
      }
    ];
  
    return (
        <BaseLayout>
      <section className="relative mt-10 px-6 py-16 md:px-12 lg:px-20 bg-[#05313E] min-h-screen w-full">
        <div className="relative z-20 max-w-7xl mx-auto">
          <div className="text-white space-y-6 text-center mb-16">
            <p className="text-xl sm:text-2xl font-medium text-[#98d2d3] roboto">
              ARC Academy
            </p>
  
            <h1 className="text-3xl sm:text-4xl md:text-[64px] font-bold leading-tight roboto">
              CONHECIMENTO PARA TRANSFORMAR SEU NEGÓCIO
            </h1>
  
            <p className="text-base sm:text-lg md:text-[24px] font-sans inter max-w-4xl mx-auto">
              <span className="font-bold">
                Cursos completos para dominar nossas soluções.
              </span>{" "}
              Capacite sua equipe com treinamentos especializados em cada produto da ARC Solution.
            </p>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <div key={course.id} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-[#98d2d3]/20 hover:border-[#98d2d3]/50 transition-all duration-300">
                <div className="text-4xl mb-4">{course.icon}</div>
                <span className="inline-block px-3 py-1 text-xs font-semibold text-[#98d2d3] bg-[#05313E] rounded-full mb-2">
                  {course.category}
                </span>
                <h3 className="text-2xl font-bold text-white mb-3">{course.title}</h3>
                <p className="text-[#98d2d3] mb-5">{course.description}</p>
                <Link to='/academy/details' className="px-6 py-2 bg-[#98d2d3] text-[#05313E] font-bold rounded-lg hover:bg-white transition-colors duration-300">
                  Saiba mais
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      </BaseLayout>
    );
  }