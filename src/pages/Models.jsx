import React, { useState, useEffect } from 'react'

const Models = () => {
  const [models, setModels] = useState([])
  const [showAddModal, setShowAddModal] = useState(false)
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
        name: 'GPT-4 Custom',
        provider: 'OpenAI',
        status: 'active',
        lastUsed: '2024-01-20',
        requests: 1250,
        cost: 125.50
      },
      {
        id: 2,
        name: 'Claude-3 Sonnet',
        provider: 'Anthropic',
        status: 'active',
        lastUsed: '2024-01-19',
        requests: 890,
        cost: 89.30
      },
      {
        id: 3,
        name: 'Gemini Pro',
        provider: 'Google',
        status: 'inactive',
        lastUsed: '2024-01-15',
        requests: 450,
        cost: 32.20
      }
    ])
  }, [])

  const handleAddModel = (e) => {
    e.preventDefault()
    const id = models.length + 1
    setModels([...models, { ...newModel, id, requests: 0, cost: 0, lastUsed: new Date().toISOString().split('T')[0] }])
    setNewModel({ name: '', provider: '', apiKey: '', description: '', status: 'active' })
    setShowAddModal(false)
  }

  const toggleModelStatus = (id) => {
    setModels(models.map(model => 
      model.id === id 
        ? { ...model, status: model.status === 'active' ? 'inactive' : 'active' }
        : model
    ))
  }

  const ModelCard = ({ model }) => (
    <div className="bg-white overflow-hidden shadow rounded-lg">
      <div className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-2xl">🤖</span>
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-medium text-gray-900">{model.name}</h3>
              <p className="text-sm text-gray-500">{model.provider}</p>
            </div>
          </div>
          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
            model.status === 'active' 
              ? 'bg-green-100 text-green-800' 
              : 'bg-red-100 text-red-800'
          }`}>
            {model.status}
          </span>
        </div>
        
        <div className="mt-4 grid grid-cols-3 gap-4">
          <div>
            <p className="text-sm font-medium text-gray-500">Requests</p>
            <p className="text-lg font-semibold text-gray-900">{model.requests.toLocaleString()}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Cost</p>
            <p className="text-lg font-semibold text-gray-900">${model.cost.toFixed(2)}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Last Used</p>
            <p className="text-lg font-semibold text-gray-900">{model.lastUsed}</p>
          </div>
        </div>

        <div className="mt-6 flex justify-between">
          <button
            onClick={() => toggleModelStatus(model.id)}
            className={`px-4 py-2 text-sm font-medium rounded-md ${
              model.status === 'active'
                ? 'text-red-700 bg-red-100 hover:bg-red-200'
                : 'text-green-700 bg-green-100 hover:bg-green-200'
            }`}
          >
            {model.status === 'active' ? 'Deactivate' : 'Activate'}
          </button>
          <button className="px-4 py-2 text-sm font-medium text-blue-700 bg-blue-100 rounded-md hover:bg-blue-200">
            Configure
          </button>
        </div>
      </div>
    </div>
  )

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">AI Models</h1>
          <p className="mt-1 text-sm text-gray-600">
            Manage your AI models and configurations
          </p>
        </div>
        <button
          onClick={() => setShowAddModal(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium"
        >
          Add New Model
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3">
        {models.map((model) => (
          <ModelCard key={model.id} model={model} />
        ))}
      </div>

      {/* Add Model Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
          <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
            <div className="mt-3">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Add New AI Model</h3>
              <form onSubmit={handleAddModel}>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Model Name
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={newModel.name}
                    onChange={(e) => setNewModel({ ...newModel, name: e.target.value })}
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Provider
                  </label>
                  <select
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={newModel.provider}
                    onChange={(e) => setNewModel({ ...newModel, provider: e.target.value })}
                  >
                    <option value="">Select Provider</option>
                    <option value="OpenAI">OpenAI</option>
                    <option value="Anthropic">Anthropic</option>
                    <option value="Google">Google</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    API Key
                  </label>
                  <input
                    type="password"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={newModel.apiKey}
                    onChange={(e) => setNewModel({ ...newModel, apiKey: e.target.value })}
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Description (Optional)
                  </label>
                  <textarea
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows="3"
                    value={newModel.description}
                    onChange={(e) => setNewModel({ ...newModel, description: e.target.value })}
                  ></textarea>
                </div>
                <div className="flex justify-end space-x-3">
                  <button
                    type="button"
                    onClick={() => setShowAddModal(false)}
                    className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
                  >
                    Add Model
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Models