import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./routes/Home";
import Solucao from "./routes/Solucao";
import Sobre from "./routes/Sobre";
import Login from "./routes/Login";
import Cadastrar from "./routes/Cadastrar";
import ErrorPage from "./routes/Error";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-green-50 to-green-100 text-green-900">
      <Nav />
      <main className="flex-grow container mx-auto px-4 md:px-8 py-8 md:py-12">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/solucao" element={<Solucao />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastrar" element={<Cadastrar />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
