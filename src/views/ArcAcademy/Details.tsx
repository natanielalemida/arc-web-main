import BaseLayout from "../Home/components/BaseLayout";

export default function CourseDetails() {
    // Dados do curso (simulando dados que viriam de uma API)
    const course = {
      id: 1,
      title: "Kronos App - Gestão Completa",
      description: "Domine todas as funcionalidades do aplicativo Kronos para gestão empresarial completa no seu dispositivo móvel.",
      category: "Mobile",
      duration: "12 horas",
      level: "Iniciante a Intermediário",
      instructor: "Carlos Silva",
      rating: 4.8,
      students: 1245,
      youtubeId: "dQw4w9WgXcQ", // ID de exemplo - substitua pelo ID real do vídeo
      modules: [
        {
          id: 1,
          title: "Introdução ao Kronos App",
          duration: "45 min",
          lessons: [
            "Visão geral do sistema",
            "Configurações iniciais",
            "Personalização do dashboard"
          ]
        },
        {
          id: 2,
          title: "Gestão de Clientes",
          duration: "1h 20min",
          lessons: [
            "Cadastro de clientes",
            "Segmentação",
            "Histórico de interações"
          ]
        },
        {
          id: 3,
          title: "Controle Financeiro",
          duration: "2h 15min",
          lessons: [
            "Lançamento de receitas e despesas",
            "Relatórios financeiros",
            "Integração com bancos"
          ]
        }
      ],
      requirements: [
        "Dispositivo móvel com Android 8+ ou iOS 12+",
        "Conta ativa no Kronos App",
        "Noções básicas de gestão empresarial"
      ]
    };
  
    return (
        <BaseLayout>
      <section className="relative px-6 py-16 md:px-12 lg:px-20 bg-[#05313E] min-h-screen w-full">
        <div className="relative z-20 max-w-7xl mx-auto">
          {/* Cabeçalho */}
          <div className="mb-12">
            <nav className="flex items-center text-sm text-[#98d2d3] mb-6">
              <a href="/academy" className="hover:text-white">ARC Academy</a>
              <span className="mx-2">/</span>
              <a href={`/academy`} className="hover:text-white">{course.category}</a>
              <span className="mx-2">/</span>
              <span className="text-white">{course.title}</span>
            </nav>
            
            <div className="flex flex-col md:flex-row justify-between items-start gap-8">
              <div>
                <span className="inline-block px-3 py-1 text-xs font-semibold text-[#98d2d3] bg-[#05313E] rounded-full mb-4">
                  {course.category}
                </span>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">{course.title}</h1>
                
                <div className="flex flex-wrap items-center gap-4 text-[#98d2d3] mb-6">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-1 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span>{course.rating} ({course.students} alunos)</span>
                  </div>
                  <div>•</div>
                  <div>Duração: {course.duration}</div>
                  <div>•</div>
                  <div>Nível: {course.level}</div>
                  <div>•</div>
                  <div>Instrutor: {course.instructor}</div>
                </div>
              </div>
              
              <button className="px-8 py-3 bg-[#98d2d3] text-[#05313E] font-bold rounded-lg hover:bg-white transition-colors duration-300 text-lg">
                Inscreva-se agora
              </button>
            </div>
          </div>
  
          {/* Conteúdo principal */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Player de vídeo e descrição */}
            <div className="lg:col-span-2 space-y-8">
            <div className="w-full max-w-full aspect-video bg-black rounded-xl overflow-hidden">
  <iframe
    className="w-full h-full"
    src={`https://www.youtube.com/embed/${course.youtubeId}`}
    title="YouTube video player"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></iframe>
</div>

              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-[#98d2d3]/20">
                <h2 className="text-2xl font-bold text-white mb-4">Sobre este curso</h2>
                <p className="text-[#98d2d3] mb-6">{course.description}</p>
                
                <h3 className="text-xl font-bold text-white mb-3">O que você vai aprender</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-[#98d2d3] mb-6">
                  {course.modules.flatMap(module => module.lessons).slice(0, 8).map((lesson, index) => (
                    <li key={index} className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-[#98d2d3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      {lesson}
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Módulos do curso */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-[#98d2d3]/20">
                <h2 className="text-2xl font-bold text-white mb-6">Conteúdo do curso</h2>
                
                <div className="space-y-4">
                  {course.modules.map((module) => (
                    <div key={module.id} className="border-b border-[#98d2d3]/20 pb-4 last:border-0">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="text-xl font-semibold text-white">{module.title}</h3>
                        <span className="text-sm text-[#98d2d3]">{module.duration}</span>
                      </div>
                      
                      <ul className="space-y-2 pl-4">
                        {module.lessons.map((lesson, index) => (
                          <li key={index} className="flex items-center text-[#98d2d3]">
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                            </svg>
                            {lesson}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="space-y-6">
              
              {/* Requisitos */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-[#98d2d3]/20">
                <h3 className="text-xl font-bold text-white mb-4">Requisitos</h3>
                <ul className="space-y-2 text-[#98d2d3]">
                  {course.requirements.map((req, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-4 h-4 mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      {req}
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Instrutor */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-[#98d2d3]/20">
                <h3 className="text-xl font-bold text-white mb-4">Instrutor</h3>
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-[#98d2d3] flex items-center justify-center text-2xl font-bold text-[#05313E] mr-4">
                    {course.instructor.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">{course.instructor}</h4>
                    <p className="text-sm text-[#98d2d3]">Especialista em Kronos</p>
                  </div>
                </div>
                <p className="text-[#98d2d3]">Com mais de 10 anos de experiência em gestão empresarial e 5 anos trabalhando diretamente com o desenvolvimento do Kronos, Carlos traz uma visão prática e estratégica para o uso da plataforma.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      </BaseLayout>
    );
  }