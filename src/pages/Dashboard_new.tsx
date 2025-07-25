import React, { useState, useEffect } from 'react'
import { 
  Bot, 
  Bug, 
  Github,
  Settings,
  FileText,
  MessageSquare,
  RefreshCw,
  BarChart3,
  Plus,
  Eye
} from "lucide-react";
import { StatsCard } from "../components/StatsCard";
import { ActivityItem } from "../components/ActivityItem";
import { QuickAction } from "../components/QuickAction";
import { Button } from "../components/ui/button";

const Dashboard = () => {
  const [stats, setStats] = useState([])
  const [recentActivity, setRecentActivity] = useState([])

  useEffect(() => {
    // Simulate loading stats
    setStats([
      {
        title: "Total de Modelos",
        value: 5,
        change: "+2 este mês",
        icon: Bot,
        variant: "primary"
      },
      {
        title: "Issues Abertas", 
        value: 24,
        change: "-3 esta semana",
        icon: Bug,
        variant: "default"
      },
      {
        title: "Projetos Ativos",
        value: 12,
        change: "+15%",
        icon: Github,
        variant: "success"
      },
      {
        title: "Gasto Mensal",
        value: "$450",
        change: "+12%",
        icon: Settings,
        variant: "warning"
      }
    ])

    setRecentActivity([
      {
        title: "Novo modelo GPT-4 adicionado",
        description: "AI Models • há 2 horas",
        time: "há 2 horas",
        status: "completed",
        icon: Bot
      },
      {
        title: "Issue #45 foi resolvida",
        description: "GitHub Issues • há 4 horas",
        time: "há 4 horas",
        status: "completed",
        icon: Bug
      },
      {
        title: "Deploy realizado com sucesso",
        description: "Sistema • há 6 horas",
        time: "há 6 horas",
        status: "in-progress",
        icon: RefreshCw
      }
    ])
  }, [])

  const quickActions = [
    {
      title: "Novo Modelo",
      icon: Plus,
      variant: "success"
    },
    {
      title: "Consultar AI",
      icon: Bot,
      variant: "primary"
    },
    {
      title: "Sync Repos",
      icon: RefreshCw,
      variant: "info"
    },
    {
      title: "Analytics",
      icon: BarChart3,
      variant: "success"
    }
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
          <p className="text-muted-foreground">Visão geral dos seus projetos e atividades de IA</p>
        </div>
        <Button className="bg-gradient-primary hover:opacity-90 text-primary-foreground">
          <Bot className="h-4 w-4 mr-2" />
          Ask AI
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
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

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Activity */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-foreground">Atividade Recente</h2>
            <Button variant="outline" size="sm">
              <Eye className="h-4 w-4 mr-2" />
              Ver tudo
            </Button>
          </div>
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <ActivityItem
                key={index}
                title={activity.title}
                description={activity.description}
                time={activity.time}
                status={activity.status}
                icon={activity.icon}
              />
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="space-y-6">
          <h2 className="text-xl font-semibold text-foreground">Ações Rápidas</h2>
          <div className="grid grid-cols-2 gap-4">
            {quickActions.map((action, index) => (
              <QuickAction
                key={index}
                title={action.title}
                icon={action.icon}
                variant={action.variant}
              />
            ))}
          </div>

          {/* System Status */}
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-foreground mb-4">Status do Sistema</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-card rounded-lg border">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-success rounded-full"></div>
                  <span className="text-sm text-foreground">API Principal</span>
                </div>
                <span className="text-xs text-success font-medium">Online</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-card rounded-lg border">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-success rounded-full"></div>
                  <span className="text-sm text-foreground">Base de Dados</span>
                </div>
                <span className="text-xs text-success font-medium">Online</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-card rounded-lg border">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-warning rounded-full"></div>
                  <span className="text-sm text-foreground">Cache Redis</span>
                </div>
                <span className="text-xs text-warning font-medium">Maintenance</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
