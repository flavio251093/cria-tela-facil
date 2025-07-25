import { 
  FolderGit2, 
  Bug, 
  Bot, 
  GitBranch,
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
  const stats = [
    {
      title: "Repositórios Ativos",
      value: 12,
      change: "+2 este mês",
      icon: FolderGit2,
      variant: "default" as const
    },
    {
      title: "Issues Abertas", 
      value: 24,
      change: "-3 esta semana",
      icon: Bug,
      variant: "warning" as const
    },
    {
      title: "AI Queries",
      value: 156,
      change: "+45 hoje", 
      icon: Bot,
      variant: "primary" as const
    },
    {
      title: "Branches Ativas",
      value: 8,
      change: "Estável",
      icon: GitBranch,
      variant: "success" as const
    }
  ];

  const recentActivity = [
    {
      title: "Bug: Login não funciona em mobile",
      description: "web-app • há 2 horas",
      time: "há 2 horas",
      status: "open" as const,
      icon: Bug
    },
    {
      title: "AI gerou documentação para API",
      description: "backend-api • há 4 horas",
      time: "há 4 horas",
      status: "completed" as const,
      icon: FileText
    },
    {
      title: "Feature: Implementar dark mode",
      description: "web-app • há 6 horas",
      time: "há 6 horas",
      status: "in-progress" as const,
      icon: GitBranch
    }
  ];

  const quickActions = [
    {
      title: "Nova Issue",
      icon: Plus,
      variant: "success" as const
    },
    {
      title: "Consultar AI",
      icon: Bot,
      variant: "primary" as const
    },
    {
      title: "Sync Repos",
      icon: RefreshCw,
      variant: "info" as const
    },
    {
      title: "Analytics",
      icon: BarChart3,
      variant: "success" as const
    }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
          <p className="text-muted-foreground">Visão geral dos seus projetos e atividades</p>
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
        </div>
      </div>
    </div>
  );
};

export default Dashboard;