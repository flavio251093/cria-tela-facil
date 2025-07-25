import React, { useState, useEffect } from 'react'

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalModels: 0,
    activeProjects: 0,
    openIssues: 0,
    monthlySpend: 0,
  })

  useEffect(() => {
    // Simulate loading stats
    setStats({
      totalModels: 5,
      activeProjects: 12,
      openIssues: 23,
      monthlySpend: 450.00,
    })
  }, [])

  const StatCard = ({ title, value, icon, color = 'blue' }) => (
    <div className={`bg-white overflow-hidden shadow rounded-lg border-l-4 border-${color}-500`}>
      <div className="p-5">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <span className="text-2xl">{icon}</span>
          </div>
          <div className="ml-5 w-0 flex-1">
            <dl>
              <dt className="text-sm font-medium text-gray-500 truncate">{title}</dt>
              <dd className="text-lg font-medium text-gray-900">{value}</dd>
            </dl>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="mt-1 text-sm text-gray-600">
          Welcome to your AI Model Management System
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8">
        <StatCard
          title="Total AI Models"
          value={stats.totalModels}
          icon="🤖"
          color="blue"
        />
        <StatCard
          title="Active Projects"
          value={stats.activeProjects}
          icon="📦"
          color="green"
        />
        <StatCard
          title="Open Issues"
          value={stats.openIssues}
          icon="🎫"
          color="yellow"
        />
        <StatCard
          title="Monthly Spend"
          value={`$${stats.monthlySpend.toFixed(2)}`}
          icon="💰"
          color="red"
        />
      </div>

      {/* Quick Actions */}
      <div className="bg-white shadow rounded-lg mb-8">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
            Quick Actions
          </h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <button className="bg-blue-50 p-4 rounded-lg border border-blue-200 hover:bg-blue-100 transition-colors">
              <div className="text-blue-600 text-2xl mb-2">➕</div>
              <div className="text-sm font-medium text-blue-900">Add New Model</div>
            </button>
            <button className="bg-green-50 p-4 rounded-lg border border-green-200 hover:bg-green-100 transition-colors">
              <div className="text-green-600 text-2xl mb-2">📊</div>
              <div className="text-sm font-medium text-green-900">View Analytics</div>
            </button>
            <button className="bg-purple-50 p-4 rounded-lg border border-purple-200 hover:bg-purple-100 transition-colors">
              <div className="text-purple-600 text-2xl mb-2">🔧</div>
              <div className="text-sm font-medium text-purple-900">Configure APIs</div>
            </button>
            <button className="bg-orange-50 p-4 rounded-lg border border-orange-200 hover:bg-orange-100 transition-colors">
              <div className="text-orange-600 text-2xl mb-2">📋</div>
              <div className="text-sm font-medium text-orange-900">Create Issue</div>
            </button>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white shadow rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
            Recent Activity
          </h3>
          <div className="flow-root">
            <ul className="-my-5 divide-y divide-gray-200">
              <li className="py-4">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <span className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                      🤖
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">
                      New AI model "GPT-4 Custom" added
                    </p>
                    <p className="text-sm text-gray-500">2 hours ago</p>
                  </div>
                </div>
              </li>
              <li className="py-4">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <span className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
                      ✅
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">
                      Issue #123 resolved in project "AI Chat Bot"
                    </p>
                    <p className="text-sm text-gray-500">4 hours ago</p>
                  </div>
                </div>
              </li>
              <li className="py-4">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <span className="h-8 w-8 rounded-full bg-yellow-100 flex items-center justify-center">
                      🎫
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">
                      New issue created: "Model performance optimization"
                    </p>
                    <p className="text-sm text-gray-500">6 hours ago</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard