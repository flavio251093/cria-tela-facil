# IA.LUA - Sistema de Gerenciamento de IA

Um sistema moderno e responsivo para gerenciamento de modelos de Inteligência Artificial, desenvolvido com React, Vite e Tailwind CSS.

## 🚀 Características Principais

### ✨ Design Modernizado
- **Interface Visual Renovada**: Layout completamente redesenhado com gradientes modernos e componentes elegantes
- **Sidebar Responsiva**: Menu lateral com design glassmorphism e animações suaves
- **Cards Interativos**: Componentes com efeitos hover, shadows e transformações 3D
- **Paleta de Cores**: Gradientes azul-roxo e esquema de cores profissional
- **Tipografia Melhorada**: Fonte Inter para melhor legibilidade

### 📱 Responsividade
- **Mobile First**: Design otimizado para dispositivos móveis
- **Menu Hambúrguer**: Navegação mobile intuitiva
- **Grid Responsivo**: Layouts que se adaptam a diferentes tamanhos de tela
- **Touch Friendly**: Botões e elementos otimizados para touch

### 🎨 Componentes Principais

#### Dashboard
- Cards de estatísticas com métricas em tempo real
- Atividade recente com timeline visual
- Status do sistema com indicadores coloridos
- Ações rápidas com botões interativos
- Gráficos placeholder para futuras implementações

#### Sistema de Autenticação
- Login/Registro com design moderno
- Integração com GitHub
- Validação de formulários
- Estados de loading com animações

#### Gerenciamento de Modelos
- Cards visuais para cada modelo de IA
- Informações detalhadas (requisições, custos, status)
- Modal para adicionar novos modelos  
- Filtros por provedor e status
- Estatísticas consolidadas

### 🛠 Tecnologias Utilizadas

- **Frontend**: React 19 + Vite
- **Styling**: Tailwind CSS 4.x
- **Routing**: React Router DOM 7.x
- **Authentication**: Supabase
- **Icons**: Emojis nativos para melhor compatibilidade
- **Fonts**: Google Fonts (Inter)

### 🎯 Melhorias Implementadas

1. **Layout Principal**
   - Sidebar com design glassmorphism
   - Header sticky com status do sistema
   - Navegação com descrições e ícones
   - Avatar do usuário personalizado

2. **Dashboard**
   - Cards de estatísticas com trends
   - Grid responsivo 4 colunas
   - Seção de atividade recente
   - Status dos serviços em tempo real
   - Ações rápidas com hover effects

3. **Login/Registro**
   - Formulário com design card
   - Logo centralizado
   - Campos com focus states melhorados
   - Botão de GitHub com ícone
   - Mensagens de erro visuais

4. **Página de Modelos**
   - Cards de modelo com informações detalhadas
   - Modal de adicionar modelo
   - Grid responsivo
   - Estatísticas por provedor
   - Capacidades taggeadas

5. **Melhorias Globais**
   - CSS customizado com animações
   - Scrollbar personalizada
   - Estados de hover em todos os elementos
   - Transições suaves
   - Focus states para acessibilidade

## 🚀 Instalação e Uso

```bash
# Clone o repositório
git clone https://github.com/flavio251093/IA.LUA.git

# Entre no diretório
cd IA.LUA

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

## 📱 Páginas Disponíveis

- **Dashboard** (`/`) - Visão geral do sistema
- **Modelos** (`/models`) - Gerenciamento de modelos de IA
- **GitHub** (`/github`) - Integração com repositórios
- **Issues** (`/issues`) - Gerenciamento de problemas
- **Configurações** (`/settings`) - Configurações do sistema

## 🎨 Customização

O projeto utiliza Tailwind CSS com variáveis CSS customizadas:

```css
:root {
  --primary-blue: #2563eb;
  --primary-purple: #7c3aed;
  --accent-gradient: linear-gradient(135deg, var(--primary-blue), var(--primary-purple));
}
```

## 📞 Suporte

Para dúvidas ou suporte, entre em contato através dos issues do GitHub.

---

**Desenvolvido com ❤️ por Flavio**+ Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
