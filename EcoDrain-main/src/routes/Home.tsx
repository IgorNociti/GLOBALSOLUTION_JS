import { Link } from "react-router-dom";
import { Eye, BellRing, MapPin, Brain } from "lucide-react";
import { motion } from "framer-motion";

export default function BlocosAlternados() {
  const blocos = [
    {
      title: "Visualize o status de bueiros críticos em tempo real",
      Icon: Eye,
      color: "text-emerald-600",
      bg: "bg-emerald-100",
    },
    {
      
      title: "Receba alertas com base em dados históricos e condições climáticas",
      Icon: BellRing,
      color: "text-red-500",
      bg: "bg-red-100",
    },
    {
      title: "Consulte mapas interativos com zonas de risco atualizadas",
      Icon: MapPin,
      color: "text-sky-600",
      bg: "bg-sky-100",
    },
    {
      title: "IA analisa padrões para prever enchentes e prevenir desastres",
      Icon: Brain,
      color: "text-yellow-500",
      bg: "bg-yellow-100",
    },
  ];

  return (
    <section className="bg-gradient-to-br from-white via-emerald-50 to-emerald-100 py-20 px-6 overflow-x-hidden">
      <div className="max-w-6xl mx-auto space-y-24">
        {blocos.map(({ title, Icon, color, bg }, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className={`flex flex-col md:flex-row ${
              idx % 2 === 1 ? "md:flex-row-reverse" : ""
            } items-center gap-10`}
          >
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-extrabold text-emerald-800 leading-snug">
                {title}
              </h2>
            </div>
            <div
              className={`${bg} rounded-3xl h-60 md:w-1/2 w-full flex justify-center items-center shadow-lg`}
            >
              <Icon className={`h-24 w-24 ${color}`} />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Chamada para ação */}
      <div className="text-center mt-24">
        <Link
          to="/cadastrar"
          className="inline-block bg-emerald-600 text-white px-10 py-4 rounded-full text-lg font-bold shadow-md hover:bg-emerald-700 hover:scale-105 transition-transform"
        >
          Cadastre-se Agora
        </Link>
      </div>
    </section>
  );
}
