import React from 'react';
import { BarChart3, TrendingUp, Activity, DollarSign } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { StatsCard } from '@/components/StatsCard';

const Analytics = () => {
  const analyticsData = [
    {
      title: "Requisições Totais",
      value: "24,586",
      change: "+12.5%",
      changeType: "positive" as const,
      icon: Activity
    },
    {
      title: "Custo Total",
      value: "R$ 1,247.50",
      change: "+8.2%",
      changeType: "positive" as const,
      icon: DollarSign
    },
    {
      title: "Eficiência IA",
      value: "94.2%",
      change: "+2.1%",
      changeType: "positive" as const,
      icon: TrendingUp
    },
    {
      title: "Modelos Ativos",
      value: "12",
      change: "+3",
      changeType: "positive" as const,
      icon: BarChart3
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
          <BarChart3 className="h-6 w-6 text-primary-foreground" />
        </div>
        <div>
          <h1 className="text-2xl font-bold">Análises</h1>
          <p className="text-muted-foreground">Relatórios e métricas do sistema IA</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {analyticsData.map((stat, index) => (
          <StatsCard
            key={index}
            title={stat.title}
            value={stat.value}
            change={stat.change}
            changeType={stat.changeType}
            icon={stat.icon}
          />
        ))}
      </div>

      <Card className="p-6">
        <h2 className="text-lg font-semibold mb-4">Gráficos de Uso</h2>
        <div className="h-64 flex items-center justify-center text-muted-foreground">
          <div className="text-center">
            <BarChart3 className="h-12 w-12 mx-auto mb-2" />
            <p>Gráficos detalhados em desenvolvimento</p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Analytics;