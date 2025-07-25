import React, { useState, useEffect } from 'react'
import { 
  Bot, 
  Plus, 
  Eye, 
  Settings,
  Activity,
  DollarSign,
  Calendar,
  Zap,
  Brain,
  CheckCircle,
  AlertCircle,
  Pause,
  Edit3,
  Trash2,
  MoreHorizontal
} from "lucide-react";
import { Button } from "../components/ui/button";
import { StatsCard } from "../components/StatsCard";

const Models = () => {
  const [models, setModels] = useState([])
  const [showAddModal, setShowAddModal] = useState(false)
  const [selectedModel, setSelectedModel] = useState(null)
  const [newModel, setNewModel] = useState({
    name: '',
    provider: '',
    apiKey: '',
    description: '',
    status: 'active'
  })

  useEffect(() => {
    // Simulate loading models
    setModels([
      {
        id: 1,
        name: 'GPT-4 Turbo',
        provider: 'OpenAI',
        status: 'active',
        lastUsed: '2024-01-20',
        requests: 1250,
        cost: 125.50,
        description: 'Modelo avançado para tarefas complexas de conversação e análise.',
        capabilities: ['Texto', 'Código', 'Análise'],
        icon: Bot,
        color: 'from-blue-500 to-purple-600'
      },
      {
        id: 2,
        name: 'Claude-3 Sonnet',
        provider: 'Anthropic',
        status: 'active',
        lastUsed: '2024-01-19',
        requests: 890,
        cost: 89.30,
        description: 'IA conversacional com foco em segurança e precisão.',
        capabilities: ['Conversação', 'Redação', 'Análise'],
        icon: Brain,
        color: 'from-orange-500 to-red-500'
      },
      {
        id: 3,
        name: 'Gemini Pro',
        provider: 'Google',
        status: 'maintenance',
        lastUsed: '2024-01-15',
        requests: 450,
        cost: 32.20,
        description: 'Modelo multimodal com capacidades visuais avançadas.',
        capabilities: ['Multimodal', 'Visão', 'Texto'],
        icon: Zap,
        color: 'from-green-500 to-blue-500'
      }
    ])
  }, [])

  const modelStats = [
    {
      title: "Total de Modelos",
      value: models.length,
      change: "+1 este mês",
      icon: Bot,
      variant: "primary" as const
    },
    {
      title: "Modelos Ativos",
      value: models.filter(m => m.status === 'active').length,
      change: "100% funcionais",
      icon: CheckCircle,
      variant: "success" as const
    },
    {
      title: "Requests este mês",
      value: models.reduce((sum, m) => sum + m.requests, 0),
      change: "+23%",
      icon: Activity,
      variant: "default" as const
    },
    {
      title: "Custo Total",
      value: `$${models.reduce((sum, m) => sum + m.cost, 0).toFixed(2)}`,
      change: "+8.5%",
      icon: DollarSign,
      variant: "warning" as const
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'active':
        return 'text-success bg-success/10'
      case 'maintenance':
        return 'text-warning bg-warning/10'
      case 'inactive':
        return 'text-muted-foreground bg-muted'
      default:
        return 'text-muted-foreground bg-muted'
    }
  }

  const getStatusIcon = (status) => {
    switch (status) {
      case 'active':
        return <CheckCircle className="h-4 w-4" />
      case 'maintenance':
        return <AlertCircle className="h-4 w-4" />
      case 'inactive':
        return <Pause className="h-4 w-4" />
      default:
        return <Pause className="h-4 w-4" />
    }
  }

  const ModelCard = ({ model }) => (
    <div className="bg-card border rounded-xl p-6 hover:shadow-lg transition-all duration-300">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className={`p-3 rounded-lg bg-gradient-to-r ${model.color}`}>
            <model.icon className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground">{model.name}</h3>
            <p className="text-sm text-muted-foreground">{model.provider}</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <div className={`px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1 ${getStatusColor(model.status)}`}>
            {getStatusIcon(model.status)}
            {model.status}
          </div>
          <Button variant="ghost" size="sm">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <p className="text-sm text-muted-foreground mb-4">{model.description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {model.capabilities.map((capability, index) => (
          <span 
            key={index}
            className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-md"
          >
            {capability}
          </span>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-4 mb-4">
        <div className="text-center">
          <div className="text-sm font-semibold text-foreground">{model.requests}</div>
          <div className="text-xs text-muted-foreground">Requests</div>
        </div>
        <div className="text-center">
          <div className="text-sm font-semibold text-foreground">${model.cost}</div>
          <div className="text-xs text-muted-foreground">Custo</div>
        </div>
        <div className="text-center">
          <div className="text-sm font-semibold text-foreground">{model.lastUsed}</div>
          <div className="text-xs text-muted-foreground">Último uso</div>
        </div>
      </div>

      <div className="flex gap-2">
        <Button variant="outline" size="sm" className="flex-1">
          <Eye className="h-4 w-4 mr-2" />
          Ver Detalhes
        </Button>
        <Button variant="outline" size="sm">
          <Settings className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="sm">
          <Edit3 className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Modelos de IA</h1>
          <p className="text-muted-foreground">Gerencie seus modelos de inteligência artificial</p>
        </div>
        <Button className="bg-gradient-primary hover:opacity-90 text-primary-foreground">
          <Plus className="h-4 w-4 mr-2" />
          Adicionar Modelo
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {modelStats.map((stat, index) => (
          <StatsCard
            key={index}
            title={stat.title}
            value={stat.value}
            change={stat.change}
            icon={stat.icon}
            variant={stat.variant}
          />
        ))}
      </div>

      {/* Filters */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Button variant="outline" size="sm">
            Todos
          </Button>
          <Button variant="ghost" size="sm">
            Ativos
          </Button>
          <Button variant="ghost" size="sm">
            Manutenção
          </Button>
          <Button variant="ghost" size="sm">
            Inativos
          </Button>
        </div>
        <div className="text-sm text-muted-foreground">
          {models.length} modelos encontrados
        </div>
      </div>

      {/* Models Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {models.map((model) => (
          <ModelCard key={model.id} model={model} />
        ))}
      </div>

      {/* Usage Analytics */}
      <div className="bg-card border rounded-xl p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">Analytics de Uso</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary mb-2">2,590</div>
            <div className="text-sm text-muted-foreground">Total de Requests</div>
            <div className="text-xs text-success mt-1">+12% este mês</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-warning mb-2">$247</div>
            <div className="text-sm text-muted-foreground">Custo Total</div>
            <div className="text-xs text-warning mt-1">+8% este mês</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-success mb-2">98.5%</div>
            <div className="text-sm text-muted-foreground">Uptime</div>
            <div className="text-xs text-success mt-1">+0.2% esta semana</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Models
