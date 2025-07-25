import React, { useState } from 'react'
import { useAuth } from '../hooks/useAuth'
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Separator } from "../components/ui/separator"
import { 
  Bot, 
  Github, 
  Mail, 
  Lock, 
  Eye, 
  EyeOff, 
  Loader2,
  ArrowRight,
  Sparkles
} from "lucide-react"

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLogin, setIsLogin] = useState(true)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const { signIn, signUp, signInWithGitHub } = useAuth()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const { error } = isLogin 
        ? await signIn(email, password)
        : await signUp(email, password)
      
      if (error) {
        setError(error.message)
      }
    } catch (err) {
      console.error('Login error:', err)
      setError('An unexpected error occurred')
    } finally {
      setLoading(false)
    }
  }

  const handleGitHubSignIn = async () => {
    setLoading(true)
    setError('')
    
    try {
      const { error } = await signInWithGitHub()
      if (error) {
        setError(error.message)
      }
    } catch (err) {
      console.error('GitHub login error:', err)
      setError('An unexpected error occurred')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        
        {/* Left Side - Branding */}
        <div className="hidden lg:flex flex-col justify-center space-y-8 p-8">
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                <Bot className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-foreground">IA.LUA</h1>
                <p className="text-muted-foreground">Intelligent Assistant</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-foreground leading-tight">
                Simplifique seu workflow com{' '}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Inteligência Artificial
                </span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Gerencie modelos de IA, automatize tarefas e integre com GitHub para 
                uma experiência de desenvolvimento mais eficiente.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-success/20 rounded-full flex items-center justify-center">
                  <Sparkles className="h-4 w-4 text-success" />
                </div>
                <span className="text-foreground">Múltiplos provedores de IA</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                  <Github className="h-4 w-4 text-primary" />
                </div>
                <span className="text-foreground">Integração completa com GitHub</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-warning/20 rounded-full flex items-center justify-center">
                  <Bot className="h-4 w-4 text-warning" />
                </div>
                <span className="text-foreground">Dashboard analítico avançado</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="flex flex-col justify-center p-8">
          <div className="w-full max-w-md mx-auto space-y-8">
            
            {/* Mobile Header */}
            <div className="lg:hidden text-center space-y-4">
              <div className="flex justify-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center">
                  <Bot className="h-8 w-8 text-white" />
                </div>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-foreground">IA.LUA</h1>
                <p className="text-muted-foreground">Entre na sua conta</p>
              </div>
            </div>

            {/* Form Header */}
            <div className="space-y-2 text-center lg:text-left">
              <h2 className="text-2xl font-bold text-foreground">
                {isLogin ? 'Bem-vindo de volta' : 'Criar conta'}
              </h2>
              <p className="text-muted-foreground">
                {isLogin 
                  ? 'Entre com suas credenciais para continuar' 
                  : 'Crie sua conta para começar a usar a plataforma'
                }
              </p>
            </div>

            {/* GitHub Login */}
            <Button
              onClick={handleGitHubSignIn}
              disabled={loading}
              variant="outline"
              className="w-full h-12 text-foreground border hover:bg-accent"
            >
              {loading ? (
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
              ) : (
                <Github className="h-4 w-4 mr-2" />
              )}
              Continuar com GitHub
            </Button>

            {/* Divider */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <Separator className="w-full" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  ou continue com email
                </span>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-lg">
                  <p className="text-destructive text-sm">{error}</p>
                </div>
              )}

              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="email"
                      placeholder="seu@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="pl-10 h-12"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Senha
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      className="pl-10 pr-10 h-12"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {isLogin && (
                <div className="flex items-center justify-between">
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded" />
                    <span className="text-sm text-muted-foreground">Lembrar de mim</span>
                  </label>
                  <button
                    type="button"
                    className="text-sm text-primary hover:underline"
                  >
                    Esqueceu a senha?
                  </button>
                </div>
              )}

              <Button
                type="submit"
                disabled={loading}
                className="w-full h-12 bg-gradient-primary hover:opacity-90 text-primary-foreground"
              >
                {loading ? (
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                ) : (
                  <ArrowRight className="h-4 w-4 mr-2" />
                )}
                {isLogin ? 'Entrar' : 'Criar conta'}
              </Button>
            </form>

            {/* Switch Form */}
            <div className="text-center">
              <button
                onClick={() => {
                  setIsLogin(!isLogin)
                  setError('')
                }}
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                {isLogin ? (
                  <>
                    Não tem uma conta?{' '}
                    <span className="text-primary font-medium">Criar conta</span>
                  </>
                ) : (
                  <>
                    Já tem uma conta?{' '}
                    <span className="text-primary font-medium">Fazer login</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
