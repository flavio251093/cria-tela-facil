import React, { useState, useEffect } from 'react'

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalModels: 0,
    activeProjects: 0,
    openIssues: 0,
    monthlySpend: 0,
  })

  const [recentActivity, setRecentActivity] = useState([])

  useEffect(() => {
    setStats({
      totalModels: 5,
      activeProjects: 12,
      openIssues: 23,
      monthlySpend: 450.00,
    })

    setRecentActivity([
      { id: 1, action: 'Novo modelo GPT-4 adicionado', time: '2 min atrás', type: 'model' },
      { id: 2, action: 'Issue #45 foi resolvida', time: '15 min atrás', type: 'issue' },
      { id: 3, action: 'Deploy realizado com sucesso', time: '1 hora atrás', type: 'deploy' },
      { id: 4, action: 'Backup automático concluído', time: '2 horas atrás', type: 'system' },
    ])
  }, [])

  const StatCard = ({ title, value, icon, color = 'blue', trend, trendValue }) => (
    <div className="bg-white overflow-hidden shadow-lg rounded-2xl border-l-4 border-blue-500 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="flex-shrink-0 p-3 bg-blue-100 rounded-xl">
              <span className="text-3xl">{icon}</span>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">{title}</p>
              <p className="text-2xl font-bold text-gray-900">{value}</p>
              {trend && (
                <div className="flex items-center mt-1 text-sm text-green-600">
                  <span className="mr-1">↗️</span>
                  <span>{trendValue}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
            <p className="text-blue-100 text-lg">
              Bem-vindo ao Sistema de Gerenciamento IA.LUA
            </p>
          </div>
          <div className="hidden md:block">
            <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center">
              <span className="text-4xl">��</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total de Modelos"
          value={stats.totalModels}
          icon="🤖"
          trend="up"
          trendValue="+2 este mês"
        />
        <StatCard
          title="Projetos Ativos"
          value={stats.activeProjects}
          icon="📊"
          trend="up"
          trendValue="+15%"
        />
        <StatCard
          title="Issues Abertas"
          value={stats.openIssues}
          icon="🎫"
          trend="down"
          trendValue="-8 esta semana"
        />
        <StatCard
          title="Gasto Mensal"
          value={`$${stats.monthlySpend.toFixed(2)}`}
          icon="💰"
          trend="up"
          trendValue="+12%"
        />
      </div>

      <div className="bg-white shadow-lg rounded-2xl p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-6">
          Ações Rápidas
        </h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <button className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200 hover:from-blue-100 hover:to-blue-200 transition-all duration-200 transform hover:scale-105">
            <div className="text-blue-600 text-3xl mb-3">➕</div>
            <div className="text-sm font-bold text-blue-900">Adicionar Modelo</div>
            <div className="text-xs text-blue-700 mt-1">Novo modelo de IA</div>
          </button>
          <button className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-xl border border-green-200 hover:from-green-100 hover:to-green-200 transition-all duration-200 transform hover:scale-105">
            <div className="text-green-600 text-3xl mb-3">📊</div>
            <div className="text-sm font-bold text-green-900">Ver Analytics</div>
            <div className="text-xs text-green-700 mt-1">Relatórios e métricas</div>
          </button>
          <button className="bg-gradient-to-r from-purple-50 to-purple-100 p-6 rounded-xl border border-purple-200 hover:from-purple-100 hover:to-purple-200 transition-all duration-200 transform hover:scale-105">
            <div className="text-purple-600 text-3xl mb-3">🔧</div>
            <div className="text-sm font-bold text-purple-900">Configurar APIs</div>
            <div className="text-xs text-purple-700 mt-1">Gerenciar integrações</div>
          </button>
          <button className="bg-gradient-to-r from-orange-50 to-orange-100 p-6 rounded-xl border border-orange-200 hover:from-orange-100 hover:to-orange-200 transition-all duration-200 transform hover:scale-105">
            <div className="text-orange-600 text-3xl mb-3">📋</div>
            <div className="text-sm font-bold text-orange-900">Criar Issue</div>
            <div className="text-xs text-orange-700 mt-1">Nova solicitação</div>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
