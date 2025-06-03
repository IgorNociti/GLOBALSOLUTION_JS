import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`Logando com ${email}`);
    setEmail("");
    setPassword("");
  };

  const formVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const inputVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  const titleVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 via-green-100 to-emerald-200 p-6 relative overflow-hidden">
      {/* Fundo animado */}
      <motion.div
        className="absolute inset-0 z-0 opacity-10"
        initial={{ scale: 0.7, rotate: 0 }}
        animate={{ scale: 1.2, rotate: 360 }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        style={{
          backgroundImage: "radial-gradient(circle, #a7f3d0 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <motion.div
        className="absolute -bottom-10 -left-10 w-80 h-80 bg-green-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"
        animate={{ x: [0, 80, -40, 0], y: [0, -50, 30, 0] }}
        transition={{ duration: 30, repeat: Infinity }}
      />
      <motion.div
        className="absolute -top-10 -right-10 w-80 h-80 bg-emerald-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"
        animate={{ x: [0, -100, 50, 0], y: [0, 50, -30, 0] }}
        transition={{ duration: 32, repeat: Infinity }}
      />

      {/* Formulário */}
      <motion.div
        className="w-full max-w-md bg-white p-8 md:p-10 shadow-2xl rounded-3xl z-10 border border-emerald-100 backdrop-blur-lg bg-opacity-90"
        variants={formVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Título */}
        <motion.h3
          className="text-3xl md:text-4xl font-black text-center text-emerald-700 mb-8 tracking-tight"
          variants={titleVariants}
          initial="hidden"
          animate="visible"
        >
          {"Bem-vindo de Volta!".split("").map((char, i) => (
            <motion.span key={i} variants={letterVariants}>
              {char}
            </motion.span>
          ))}
        </motion.h3>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <motion.div variants={inputVariants}>
            <label
              htmlFor="email"
              className="block text-emerald-900 font-semibold mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-emerald-300 transition-all"
              placeholder="Digite seu email"
            />
          </motion.div>

          <motion.div variants={inputVariants}>
            <label
              htmlFor="password"
              className="block text-emerald-900 font-semibold mb-1"
            >
              Senha
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-emerald-300 transition-all"
              placeholder="Digite sua senha"
            />
          </motion.div>

          <motion.button
            type="submit"
            className="w-full py-3 bg-emerald-600 text-white font-bold rounded-xl hover:bg-emerald-700 transition-transform transform hover:-translate-y-1 hover:shadow-lg"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Entrar
          </motion.button>
        </form>

        {/* Link */}
        <motion.p
          className="text-center text-gray-600 mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 0.6 } }}
        >
          Não tem uma conta?{" "}
          <a
            href="/cadastrar"
            className="text-emerald-600 hover:text-emerald-800 font-semibold transition-colors"
          >
            Cadastre-se
          </a>
        </motion.p>
      </motion.div>
    </section>
  );
}
