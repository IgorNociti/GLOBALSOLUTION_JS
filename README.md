🌧️ EcoDrain - Monitoramento Inteligente de Bueiros 🌿  
**License:** MIT | **Stack:** TypeScript · React · TailwindCSS · Framer Motion

---

### 🎯 Sobre o Projeto

O **EcoDrain** é uma aplicação web desenvolvida para monitorar bueiros urbanos e atuar de forma preventiva contra enchentes. Com foco em sustentabilidade e segurança urbana, oferece uma visualização clara dos riscos e facilita a tomada de decisão para evitar desastres.

> Imagine saber em tempo real onde estão os pontos de entupimento e risco antes da cidade alagar. Isso é o **EcoDrain**!

---

### ✨ Funcionalidades

✅ Simulação de sensores: gera dados de nível de água e entupimento automaticamente  
✅ Avaliação de risco: classifica situações por gravidade (baixo, médio, alto)  
✅ Mapa Interativo: visualização geográfica de pontos monitorados  
✅ Design Moderno: com animações suaves e responsividade  
🚧 Login e autenticação (em breve)  
📊 Painel administrativo (em breve)

---

### 🗂️ Estrutura de Pastas (Sugerida)

ecodrain/
├── public/ # Arquivos estáticos (ícones, favicon, etc)
├── src/
│ ├── assets/ # Imagens, ícones, logos
│ ├── components/ # Componentes reutilizáveis (Nav, Footer, etc)
│ ├── routes/ # Páginas principais (Home, Login, Sobre, etc)
│ ├── layouts/ # (planejado) Layouts globais
│ ├── services/ # (planejado) Comunicação com API/simuladores
│ ├── store/ # (planejado) Estado global (Zustand ou Context)
│ ├── hooks/ # (planejado) Hooks customizados
│ ├── utils/ # (planejado) Funções utilitárias
│ ├── types/ # (planejado) Tipagens TypeScript
│ ├── styles/ # (planejado) Estilos globais
│ ├── App.tsx # Componente principal
│ ├── main.tsx # Entrada da aplicação React
│ └── index.css # Estilos base do Tailwind
├── .env # Variáveis de ambiente
├── tailwind.config.ts # Configuração do Tailwind CSS
├── tsconfig.json # Configuração do TypeScript
├── vite.config.ts # Configuração do Vite
└── README.md # Este arquivo

yaml
Copiar
Editar

---

### 🚀 Tecnologias Utilizadas

- ⚛️ **React.js** – Biblioteca para interfaces modernas  
- 💅 **Tailwind CSS** – Estilização com utilitários  
- ⚡ **Vite** – Dev server e build super rápido  
- 💨 **Framer Motion** – Animações suaves e responsivas  
- 🟨 **TypeScript** – Tipagem segura para evitar erros  
- 🧭 **React Router** – Navegação SPA entre páginas  
- 🌐 **Axios (planejado)** – Comunicação com APIs

---

### 🎨 Design

A identidade visual do **EcoDrain** mistura tons de verde, azul e cinza, transmitindo natureza, tecnologia e prevenção. Utilizamos animações suaves e um layout limpo para facilitar a navegação e a compreensão do conteúdo.

---

### ⚙️ Como Rodar o Projeto

#### ✅ Pré-requisitos:
- Node.js instalado
- Gerenciador de pacotes: `npm` ou `yarn`

#### 🛠 Instalação:

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/ecodrain.git
cd ecodrain

# Instale as dependências
npm install
# ou
yarn install
▶️ Rodando:
bash
Copiar
Editar
npm run dev
# ou
yarn dev
🧪 Testes (em breve)
Jest + Testing Library para testes de componentes

Cypress para testes de navegação

