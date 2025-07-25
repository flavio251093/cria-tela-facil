# IA.LUA System - AI Model Management Platform

A comprehensive React-based platform for managing AI models, GitHub integrations, and project workflows.

## 🚀 Features

### Core Functionality
- **AI Model Management**: Add, configure, and manage multiple AI models from different providers
- **GitHub Integration**: Connect repositories, manage issues, and track project metrics
- **Dashboard Analytics**: Real-time statistics and spending tracking
- **Issue Management**: Complete ticket lifecycle management with priorities and assignments
- **Authentication**: Secure Supabase-based authentication with GitHub OAuth support

### Technical Stack
- **Frontend**: React 19 + Vite
- **Backend**: Supabase (Authentication & Database)
- **APIs**: GitHub API via Octokit
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM

## 🛠 Setup & Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/flavio251093/IA.LUA.git
   cd IA.LUA
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` with your credentials:
   ```env
   VITE_SUPABASE_URL=your-supabase-project-url
   VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
   VITE_GITHUB_CLIENT_ID=your-github-oauth-app-client-id
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

## 📱 Application Structure

```
src/
├── components/          # Reusable UI components
│   └── Layout.jsx      # Main application layout
├── contexts/           # React contexts
│   └── AuthContext.jsx # Authentication context
├── hooks/              # Custom React hooks
│   └── useAuth.js      # Authentication hook
├── pages/              # Application pages
│   ├── Dashboard.jsx   # Main dashboard
│   ├── Models.jsx      # AI model management
│   ├── GitHub.jsx      # GitHub integration
│   ├── Issues.jsx      # Issue management
│   ├── Login.jsx       # Authentication
│   └── Settings.jsx    # Application settings
├── services/           # External service integrations
│   ├── supabase.js     # Supabase client
│   └── github.js       # GitHub API client
└── utils/              # Utility functions
```

## 🔧 Configuration

### Supabase Setup
1. Create a new Supabase project
2. Enable GitHub OAuth in Authentication settings
3. Copy your project URL and anon key to `.env`

### GitHub OAuth Setup
1. Create a GitHub OAuth App in your GitHub settings
2. Set the callback URL to your domain + `/auth/callback`
3. Copy the Client ID to `.env`

## 🎯 Usage

### Demo Mode
The application includes a demo mode that works without external credentials:
- Uses placeholder data for all features
- Allows testing of all functionality
- Perfect for development and demonstration

### Production Mode
With proper credentials configured:
- Full Supabase authentication
- Real GitHub API integration
- Persistent data storage

## 📊 Features Overview

### Dashboard
- AI model statistics
- Project metrics
- Recent activity feed
- Quick action buttons

### AI Models
- Multi-provider support (OpenAI, Anthropic, Google)
- Usage and cost tracking
- Status management
- Configuration interface

### GitHub Integration
- Repository management
- Issue creation and tracking
- Statistics and metrics
- Synchronization features

### Issue Management
- Priority and status tracking
- Assignment management
- Comment system
- Filtering and search

### Settings
- Profile configuration
- Service integrations
- Notification preferences
- Security settings

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel --prod
```

### Netlify
```bash
npm run build
# Upload dist/ folder to Netlify
```

### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "preview"]
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support and questions:
- Create an issue on GitHub
- Check the documentation
- Review the demo mode for examples

---

Built with ❤️ for the AI development community