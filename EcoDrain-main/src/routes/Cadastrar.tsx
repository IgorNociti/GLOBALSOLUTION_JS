import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Cadastrar() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`Cadastrando ${nome} - ${email}`);
    setNome("");
    setEmail("");
    setSenha("");
    
  };

  const formContainerVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const inputVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 to-emerald-200 p-6 relative overflow-hidden">
      {/* Fundo animado */}
      <motion.div
        className="absolute inset-0 z-0 opacity-10"
        initial={{ scale: 0.5, rotate: 0 }}
        animate={{ scale: 1.2, rotate: 360 }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        style={{
          backgroundImage:
            "radial-gradient(circle, #a7f3d0 1px, transparent 1px)",
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
        variants={formContainerVariants}
        initial="hidden"
        animate="visible"
      >
        <h3 className="text-3xl md:text-4xl font-black text-center text-emerald-700 mb-8 tracking-tight">
          Cadastro EcoDrain
        </h3>

        <form onSubmit={handleSubmit} className="space-y-6">
          <motion.div variants={inputVariants}>
            <label htmlFor="nome" className="block text-emerald-900 font-semibold mb-1">
              Nome Completo
            </label>
            <input
              type="text"
              id="nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
              className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-emerald-300 transition-all"
              placeholder="Digite seu nome completo"
            />
          </motion.div>

          <motion.div variants={inputVariants}>
            <label htmlFor="email" className="block text-emerald-900 font-semibold mb-1">
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
            <label htmlFor="senha" className="block text-emerald-900 font-semibold mb-1">
              Senha
            </label>
            <input
              type="password"
              id="senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
              className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-emerald-300 transition-all"
              placeholder="Crie uma senha"
            />
          </motion.div>

          <motion.button
            type="submit"
            className="w-full py-3 bg-emerald-600 text-white font-bold rounded-xl hover:bg-emerald-700 transition-transform transform hover:-translate-y-1 hover:shadow-lg"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Criar Conta
          </motion.button>
        </form>

        <motion.p
          className="text-center text-gray-600 mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 0.6 } }}
        >
          Já tem uma conta?{" "}
          <a
            href="/login"
            className="text-emerald-600 hover:text-emerald-800 font-semibold transition-colors"
          >
            Faça Login
          </a>
        </motion.p>
      </motion.div>
    </section>
  );
}
