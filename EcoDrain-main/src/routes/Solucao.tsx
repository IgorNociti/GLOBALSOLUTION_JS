import React from "react";
import { motion } from "framer-motion";

import Image1 from "../assets/Image1.png";
import Image2 from "../assets/Image2.png";
import Image3 from "../assets/Image3.png";
import Image4 from "../assets/Image4.png";

interface SolutionCardProps {
  title: string;
  description: string[];
  imageSrc: string;
  imageAlt: string;
  index: number;
}

const SolutionCard: React.FC<SolutionCardProps> = ({
  title,
  description,
  imageSrc,
  imageAlt,
  index,
}) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut", delay: index * 0.15 },
    },
  };

  // Alternar rotação e alinhamento da imagem para variar o visual
  const rotation = index % 2 === 0 ? "-3deg" : "3deg";
  const imgTranslateX = index % 2 === 0 ? "-30px" : "30px";
  const textBg = index % 2 === 0 ? "bg-green-600/80" : "bg-green-700/85";

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={cardVariants}
      className={`relative flex flex-col md:flex-row items-center max-w-5xl mx-auto mb-20`}
      style={{ perspective: 800 }}
    >
      {/* Imagem sobreposta */}
      <div
        className="flex-shrink-0 rounded-3xl shadow-2xl overflow-hidden"
        style={{
          transform: `rotate(${rotation}) translateX(${imgTranslateX})`,
          boxShadow:
            "0 20px 30px rgba(0, 128, 0, 0.3), 0 10px 20px rgba(0, 128, 0, 0.2)",
          width: "350px",
          height: "240px",
          zIndex: 10,
        }}
      >
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-full object-cover"
          draggable={false}
        />
      </div>

      {/* Texto com fundo translúcido e padding */}
      <div
        className={`flex-1 mt-10 md:mt-0 rounded-3xl p-8 md:p-12 text-white shadow-lg ${textBg} backdrop-blur-md`}
        style={{ zIndex: 5 }}
      >
        <h3 className="text-3xl font-extrabold mb-6">{title}</h3>
        {description.map((para, i) => (
          <p key={i} className="mb-4 leading-relaxed text-lg">
            {para}
          </p>
        ))}
      </div>
    </motion.div>
  );
};

export default function Solucao() {
  const titleVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 12, delay: 0.2 },
    },
  };

  return (
    <div className="bg-gradient-to-br from-green-50 via-green-100 to-green-50 min-h-screen py-16 px-4 md:px-8">
      <section className="py-16 md:py-24 flex items-center justify-center relative overflow-hidden">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={titleVariants}
          className="text-center p-8 z-10 max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold text-green-900 mb-6 leading-tight drop-shadow-md">
            EcoDrain: Bueiros Inteligentes, Cidades Mais Seguras.
          </h1>
          <p className="text-xl md:text-2xl text-green-800 max-w-3xl mx-auto">
            Detectando riscos em tempo real e protegendo vidas com tecnologia urbana inteligente.
          </p>
        </motion.div>
        <div className="absolute inset-0 bg-pattern-dots opacity-10 pointer-events-none"></div>
      </section>

      <div className="space-y-28 md:space-y-32">
        <SolutionCard
          index={0}
          title="Sensoriamento em Tempo Real: Monitorando o Nível da Água"
          description={[
            "Sensores instalados diretamente nas tampas dos bueiros medem continuamente o nível da água, detectando rapidamente qualquer sinal de acúmulo anormal ou risco iminente de alagamento.",
            "Esses dados são enviados em tempo real para um painel central e integrados com mapas urbanos para visualização e resposta imediata.",
          ]}
          imageSrc={Image3}
          imageAlt="Sensor inteligente no bueiro"
        />

        <SolutionCard
          index={1}
          title="Alertas Imediatos para População e Autoridades"
          description={[
            "Quando detectado um risco de transbordamento, o EcoDrain dispara alertas automáticos diretamente para celulares de moradores da região afetada.",
            "A comunicação é precisa, rápida e geolocalizada, garantindo que as pessoas possam evitar a área e se proteger, enquanto as equipes públicas são acionadas para intervenção.",
          ]}
          imageSrc={Image2}
          imageAlt="Notificação de risco no celular"
        />

        <SolutionCard
          index={2}
          title="Mapas Interativos e Análise Preditiva"
          description={[
            "Autoridades municipais têm acesso a um painel de monitoramento com mapas interativos que indicam o status de cada bueiro em tempo real.",
            "Com base em dados históricos e inteligência artificial, é possível prever pontos críticos e agir preventivamente para evitar desastres.",
          ]}
          imageSrc={Image1}
          imageAlt="Mapa urbano com monitoramento dos bueiros"
        />

        <SolutionCard
          index={3}
          title="Tecnologia para Comunidades Resilientes"
          description={[
            "O EcoDrain não é apenas tecnologia — é um movimento. Envolvemos comunidades com programas educativos para que compreendam o sistema e saibam como agir em situações de risco.",
            "Uma cidade informada é uma cidade mais segura. Estamos construindo, juntos, uma nova forma de viver com a chuva.",
          ]}
          imageSrc={Image4}
          imageAlt="Pessoas aprendendo sobre o EcoDrain"
        />
      </div>

      <section className="py-16 md:py-24 flex items-center justify-center bg-gradient-to-br from-green-200 to-green-400 relative overflow-hidden mt-20 rounded-3xl shadow-xl mx-6 md:mx-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-center p-8 z-10 max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight drop-shadow-lg">
            Uma Solução Inteligente para um Problema Real.
          </h2>
          <p className="text-lg md:text-xl text-green-100 max-w-2xl mx-auto mb-8">
            Traga o EcoDrain para sua cidade e transforme dados em proteção.
          </p>
          <a
            href="/mapas-indisponiveis"
            className="inline-block bg-white hover:bg-green-100 text-green-700 font-bold py-4 px-12 rounded-full text-xl shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out"
          >
            Ver mapas disponíveis
          </a>
        </motion.div>
      </section>
    </div>
  );
}
