import { useEffect } from "react";

export default function AboutPage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0", "translate-y-6");
            entry.target.classList.add("opacity-100", "translate-y-0");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-gray-50 text-gray-700">
      {/* ================= HERO ================= */}
      <section className="relative bg-blue-950 text-white py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_1px_1px,_white_1px,_transparent_0)] bg-[size:40px_40px]" />

        <div className="relative max-w-5xl mx-auto text-center animate-on-scroll opacity-0 translate-y-6 transition duration-700">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Sobre Nós</h1>
          <p className="text-lg md:text-xl text-gray-200">
            Há mais de 15 anos protegendo o que é importante para você.
            Conheça nossa história, valores e compromisso com a excelência.
          </p>
        </div>
      </section>

      {/* ================= MISSÃO VISÃO VALORES ================= */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              icon: "🎯",
              title: "Missão",
              text: "Oferecer proteção completa e acessível para veículos, com atendimento humanizado e tecnologia de ponta.",
            },
            {
              icon: "👁️",
              title: "Visão",
              text: "Ser a seguradora mais confiável e inovadora do Brasil, reconhecida pela excelência em serviços.",
            },
            {
              icon: "💎",
              title: "Valores",
              text: "Integridade, compromisso com o cliente, inovação constante e responsabilidade social.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-lg p-8 text-center hover:scale-105 transition animate-on-scroll opacity-0 translate-y-6 duration-700"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h2 className="text-2xl font-bold text-slate-800 mb-3">
                {item.title}
              </h2>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

    {/* ================= NOSSOS VALORES ================= */}
<section className="bg-blue-950 0 py-20 px-6">
  <div className="max-w-6xl mx-auto text-center mb-14 animate-on-scroll opacity-0 translate-y-6 transition duration-700">
    <h2 className="text-4xl font-bold text-blue-300">
      Nossos Valores
    </h2>
  </div>

  <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
    {[
      {
        icon: "🤝",
        title: "Integridade",
        text: "Agimos com transparência, ética e honestidade em todas as nossas relações, construindo confiança duradoura.",
      },
      {
        icon: "🚀",
        title: "Inovação",
        text: "Buscamos constantemente novas formas de melhorar nossos serviços e a experiência de nossos clientes.",
      },
      {
        icon: "💬",
        title: "Compromisso com o Cliente",
        text: "Colocamos nossos clientes no centro de tudo, oferecendo suporte ágil, humano e eficiente em todos os momentos.",
      },
      {
        icon: "🌱",
        title: "Responsabilidade Social",
        text: "Atuamos com consciência social e ambiental, contribuindo para um futuro mais seguro e sustentável.",
      },
    ].map((item, i) => (
      <div
        key={i}
        className="bg-white rounded-3xl shadow-md p-10 border-l-4 border-blue-500 hover:shadow-xl transition animate-on-scroll opacity-0 translate-y-6 duration-700"
      >
        <div className="text-4xl mb-4">{item.icon}</div>
        <h3 className="text-2xl font-bold text-slate-800 mb-3">
          {item.title}
        </h3>
        <p>{item.text}</p>
      </div>
    ))}
  </div>
</section>

      {/* ================= TRAJETÓRIA ================= */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <div className="text-center mb-14 animate-on-scroll opacity-0 translate-y-6 transition duration-700">
          <h2 className="text-4xl font-bold text-slate-800">
            Nossa Trajetória
          </h2>
          <p className="mt-4 text-gray-600">
            Uma história construída com confiança, inovação e compromisso.
          </p>
        </div>

        <div className="space-y-10 border-l-4 border-blue-500 pl-8">
          {[
            {
              year: "2009 — Fundação",
              text: "Início das atividades com foco em proteção veicular acessível e atendimento humanizado.",
            },
            {
              year: "2015 — Expansão Regional",
              text: "Ampliação da atuação para novos estados e crescimento da base de clientes.",
            },
            {
              year: "2020 — Transformação Digital",
              text: "Implementação de tecnologias para facilitar atendimento, contratos e acionamento de serviços.",
            },
            {
              year: "Hoje — Referência em Confiança",
              text: "Mais de 15 anos protegendo veículos e garantindo tranquilidade para milhares de clientes.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="animate-on-scroll opacity-0 translate-y-6 transition duration-700"
            >
              <h3 className="font-bold text-xl text-slate-800">{item.year}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= RODAPÉ ================= */}
      
    </div>
  );
}
