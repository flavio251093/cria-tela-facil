import React, { useState, useEffect } from 'react'

const GitHub = () => {
  const [repositories, setRepositories] = useState([])
  const [isConnected, setIsConnected] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    // Simulate loading repositories
    setRepositories([
      {
        id: 1,
        name: 'ai-chatbot',
        owner: 'demo-user',
        description: 'AI-powered chatbot for customer service',
        stars: 42,
        forks: 12,
        issues: 5,
        updated: '2024-01-20'
      },
      {
        id: 2,
        name: 'ml-models',
        owner: 'demo-user',
        description: 'Collection of machine learning models',
        stars: 28,
        forks: 8,
        issues: 3,
        updated: '2024-01-19'
      },
      {
        id: 3,
        name: 'data-processor',
        owner: 'demo-user',
        description: 'Data processing pipeline for AI training',
        stars: 15,
        forks: 4,
        issues: 2,
        updated: '2024-01-18'
      }
    ])
    setIsConnected(true)
  }, [])

  const handleConnect = async () => {
    setLoading(true)
    // Simulate connection
    setTimeout(() => {
      setIsConnected(true)
      setLoading(false)
    }, 1500)
  }

  const RepositoryCard = ({ repo }) => (
    <div className="bg-white overflow-hidden shadow rounded-lg">
      <div className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-2xl">📦</span>
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-medium text-gray-900">{repo.name}</h3>
              <p className="text-sm text-gray-500">{repo.owner}</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 text-sm text-gray-500">
            <span>⭐ {repo.stars}</span>
            <span>🍴 {repo.forks}</span>
            <span>🎫 {repo.issues}</span>
          </div>
        </div>
        
        <p className="mt-4 text-sm text-gray-600">{repo.description}</p>
        
        <div className="mt-4 flex justify-between items-center">
          <span className="text-sm text-gray-500">Updated {repo.updated}</span>
          <div className="flex space-x-2">
            <button className="px-3 py-1 text-sm font-medium text-blue-700 bg-blue-100 rounded hover:bg-blue-200">
              View Issues
            </button>
            <button className="px-3 py-1 text-sm font-medium text-green-700 bg-green-100 rounded hover:bg-green-200">
              Create Issue
            </button>
          </div>
        </div>
      </div>
    </div>
  )

  if (!isConnected) {
    return (
      <div>
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">GitHub Integration</h1>
          <p className="mt-1 text-sm text-gray-600">
            Connect your GitHub account to manage repositories and issues
          </p>
        </div>

        <div className="bg-white shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6 text-center">
            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 mb-4">
              <span className="text-2xl">📦</span>
            </div>
            <h3 className="text-lg leading-6 font-medium text-gray-900 mb-2">
              Connect to GitHub
            </h3>
            <p className="text-sm text-gray-500 mb-6">
              Connect your GitHub account to start managing your repositories and issues directly from the IA.LUA system.
            </p>
            <button
              onClick={handleConnect}
              disabled={loading}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md text-sm font-medium disabled:opacity-50"
            >
              {loading ? 'Connecting...' : 'Connect GitHub Account'}
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">GitHub Integration</h1>
          <p className="mt-1 text-sm text-gray-600">
            Manage your repositories and issues
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
            ✅ Connected
          </span>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium">
            Sync Repositories
          </button>
        </div>
      </div>

      {/* Repository Stats */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8">
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <span className="text-2xl">📦</span>
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">Repositories</dt>
                  <dd className="text-lg font-medium text-gray-900">{repositories.length}</dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <span className="text-2xl">⭐</span>
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">Total Stars</dt>
                  <dd className="text-lg font-medium text-gray-900">
                    {repositories.reduce((sum, repo) => sum + repo.stars, 0)}
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <span className="text-2xl">🍴</span>
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">Total Forks</dt>
                  <dd className="text-lg font-medium text-gray-900">
                    {repositories.reduce((sum, repo) => sum + repo.forks, 0)}
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <span className="text-2xl">🎫</span>
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">Open Issues</dt>
                  <dd className="text-lg font-medium text-gray-900">
                    {repositories.reduce((sum, repo) => sum + repo.issues, 0)}
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Repositories */}
      <div className="bg-white shadow rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
            Your Repositories
          </h3>
          <div className="grid grid-cols-1 gap-6">
            {repositories.map((repo) => (
              <RepositoryCard key={repo.id} repo={repo} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default GitHub