import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

export default function Sobre() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.15 });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.15 });
  const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.15 });
  const [ref4, inView4] = useInView({ triggerOnce: true, threshold: 0.15 });

  const IconWater = () => (
    <svg
      className="text-emerald-600 mb-5"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      width="48"
      height="48"
    >
      <path d="M12 2C12 2 7 9 7 13a5 5 0 0010 0c0-4-5-11-5-11z" />
    </svg>
  );

  const IconShield = () => (
    <svg
      className="text-emerald-600 mb-5"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      width="48"
      height="48"
    >
      <path d="M12 2L4 5v6c0 5 4 9 8 9s8-4 8-9V5l-8-3z" />
    </svg>
  );

  const IconLightbulb = () => (
    <svg
      className="text-emerald-600 mb-5"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      width="48"
      height="48"
    >
      <path d="M9 21h6v-1H9v1zm3-19a7 7 0 00-7 7c0 3.75 4 6.5 4 6.5s4-2.75 4-6.5a7 7 0 00-1-6.5z" />
    </svg>
  );

  return (
    <section className="bg-gradient-to-br from-green-100 via-emerald-100 to-green-50 py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-0">
        <motion.div
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h2 className="text-5xl md:text-6xl font-extrabold text-center text-emerald-700 mb-16 tracking-tight leading-tight">
            Sobre o <span className="text-green-700">EcoDrain</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 border border-emerald-200 rounded-3xl bg-white p-8 shadow-xl">
          <motion.div
            ref={ref1}
            initial="hidden"
            animate={inView1 ? "visible" : "hidden"}
            variants={sectionVariants}
            className="flex flex-col items-center text-center px-4 md:px-6 py-6 hover:bg-emerald-50 hover:shadow-md rounded-2xl transition-all duration-300 ease-in-out"
          >
            <IconWater />
            <h3 className="text-2xl font-semibold text-emerald-800 mb-4">Quem Somos</h3>
            <p className="text-gray-700 text-base leading-relaxed">
              O EcoDrain transforma bueiros em aliados da cidade. Com sensores inteligentes, criamos um sistema que antecipa enchentes e protege vidas com informação, tecnologia e responsabilidade social.
            </p>
          </motion.div>

          <motion.div
            ref={ref2}
            initial="hidden"
            animate={inView2 ? "visible" : "hidden"}
            variants={sectionVariants}
            className="flex flex-col items-center text-center px-4 md:px-6 py-6 hover:bg-emerald-50 hover:shadow-md rounded-2xl transition-all duration-300 ease-in-out"
          >
            <IconShield />
            <h3 className="text-2xl font-semibold text-emerald-800 mb-4">Tecnologia e Prevenção</h3>
            <p className="text-gray-700 text-base leading-relaxed">
              Nossos sensores detectam em tempo real o acúmulo de água nos bueiros e notificam instantaneamente usuários e órgãos públicos. Isso permite uma resposta rápida e evita danos maiores à população.
            </p>
          </motion.div>

          <motion.div
            ref={ref3}
            initial="hidden"
            animate={inView3 ? "visible" : "hidden"}
            variants={sectionVariants}
            className="flex flex-col items-center text-center px-4 md:px-6 py-6 hover:bg-emerald-50 hover:shadow-md rounded-2xl transition-all duration-300 ease-in-out"
          >
            <IconLightbulb />
            <h3 className="text-2xl font-semibold text-emerald-800 mb-5">Nossa Missão</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2 text-base leading-relaxed text-left">
              <li><strong>Evitar tragédias:</strong> Alerta imediato em áreas de risco.</li>
              <li><strong>Guiar decisões:</strong> Dados em tempo real para ação rápida.</li>
              <li><strong>Conscientizar:</strong> Envolver a comunidade na solução.</li>
            </ul>
            <p className="mt-4 text-gray-700">
              Queremos cidades mais preparadas, inteligentes e seguras contra enchentes.
            </p>
          </motion.div>
        </div>

        <motion.div
          ref={ref4}
          initial="hidden"
          animate={inView4 ? "visible" : "hidden"}
          variants={sectionVariants}
          className="text-center mt-20"
        >
          <a
            href="/solucao"
            className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-3 px-10 rounded-full shadow-xl transition-transform duration-300 ease-in-out hover:scale-105 text-lg"
          >
            Conheça Nossa Solução
          </a>
        </motion.div>
      </div>
    </section>
  );
}
