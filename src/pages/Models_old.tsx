import React, { useState, useEffect } from 'react'

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
        icon: '🤖'
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
        icon: '🧠'
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
        capabilities: ['Texto', 'Imagem', 'Multimodal'],
        icon: '💎'
      },
      {
        id: 4,
        name: 'DALL-E 3',
        provider: 'OpenAI',
        status: 'active',
        lastUsed: '2024-01-18',
        requests: 234,
        cost: 67.80,
        description: 'Geração de imagens de alta qualidade a partir de texto.',
        capabilities: ['Geração de Imagem', 'Arte'],
        icon: '🎨'
      }
    ])
  }, [])

  const handleAddModel = (e) => {
    e.preventDefault()
    const id = models.length + 1
    setModels([...models, { 
      ...newModel, 
      id, 
      requests: 0, 
      cost: 0, 
      lastUsed: new Date().toISOString().split('T')[0],
      capabilities: ['Personalizado'],
      icon: '⚡'
    }])
    setNewModel({
      name: '',
      provider: '',
      apiKey: '',
      description: '',
      status: 'active'
    })
    setShowAddModal(false)
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800'
      case 'inactive': return 'bg-gray-100 text-gray-800'
      case 'maintenance': return 'bg-yellow-100 text-yellow-800'
      case 'error': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getProviderColor = (provider) => {
    switch (provider) {
      case 'OpenAI': return 'from-green-500 to-emerald-500'
      case 'Anthropic': return 'from-orange-500 to-red-500'
      case 'Google': return 'from-blue-500 to-cyan-500'
      default: return 'from-purple-500 to-pink-500'
    }
  }

  const ModelCard = ({ model }) => (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center">
            <div className={`w-12 h-12 bg-gradient-to-r ${getProviderColor(model.provider)} rounded-xl flex items-center justify-center text-white font-bold text-lg mr-4`}>
              {model.icon}
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">{model.name}</h3>
              <p className="text-sm text-gray-600">{model.provider}</p>
            </div>
          </div>
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(model.status)}`}>
            {model.status === 'active' ? 'Ativo' : 
             model.status === 'maintenance' ? 'Manutenção' : 
             model.status === 'inactive' ? 'Inativo' : 'Erro'}
          </span>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{model.description}</p>

        {/* Capabilities */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {model.capabilities.map((capability, index) => (
              <span 
                key={index}
                className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-lg font-medium"
              >
                {capability}
              </span>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-4 pt-4 border-t border-gray-100">
          <div className="text-center">
            <p className="text-2xl font-bold text-gray-900">{model.requests.toLocaleString()}</p>
            <p className="text-xs text-gray-500">Requisições</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-green-600">${model.cost.toFixed(2)}</p>
            <p className="text-xs text-gray-500">Custo</p>
          </div>
          <div className="text-center">
            <p className="text-sm font-semibold text-gray-900">{model.lastUsed}</p>
            <p className="text-xs text-gray-500">Último uso</p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-2">
          <button 
            onClick={() => setSelectedModel(model)}
            className="flex-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 rounded-xl font-medium hover:from-blue-600 hover:to-purple-600 transition-all duration-200 transform hover:scale-105"
          >
            Ver Detalhes
          </button>
          <button className="px-4 py-2 bg-gray-100 text-gray-600 rounded-xl hover:bg-gray-200 transition-colors">
            ⚙️
          </button>
        </div>
      </div>
    </div>
  )

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Modelos de IA</h1>
          <p className="text-gray-600 mt-2">Gerencie seus modelos e APIs de inteligência artificial</p>
        </div>
        <button
          onClick={() => setShowAddModal(true)}
          className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 shadow-lg"
        >
          <span className="mr-2">+</span>
          Adicionar Modelo
        </button>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100 text-sm">Total de Modelos</p>
              <p className="text-3xl font-bold">{models.length}</p>
            </div>
            <div className="text-3xl opacity-80">🤖</div>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-green-100 text-sm">Modelos Ativos</p>
              <p className="text-3xl font-bold">{models.filter(m => m.status === 'active').length}</p>
            </div>
            <div className="text-3xl opacity-80">✅</div>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-purple-100 text-sm">Requisições Hoje</p>
              <p className="text-3xl font-bold">{models.reduce((sum, m) => sum + m.requests, 0).toLocaleString()}</p>
            </div>
            <div className="text-3xl opacity-80">📊</div>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-orange-100 text-sm">Custo Total</p>
              <p className="text-3xl font-bold">${models.reduce((sum, m) => sum + m.cost, 0).toFixed(2)}</p>
            </div>
            <div className="text-3xl opacity-80">💰</div>
          </div>
        </div>
      </div>

      {/* Models Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {models.map((model) => (
          <ModelCard key={model.id} model={model} />
        ))}
      </div>

      {/* Add Model Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full max-h-[90vh] overflow-y-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Adicionar Novo Modelo</h2>
            
            <form onSubmit={handleAddModel} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Nome do Modelo</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={newModel.name}
                  onChange={(e) => setNewModel({...newModel, name: e.target.value})}
                  placeholder="Ex: GPT-4 Custom"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Provedor</label>
                <select
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={newModel.provider}
                  onChange={(e) => setNewModel({...newModel, provider: e.target.value})}
                >
                  <option value="">Selecionar Provedor</option>
                  <option value="OpenAI">OpenAI</option>
                  <option value="Anthropic">Anthropic</option>
                  <option value="Google">Google</option>
                  <option value="Outros">Outros</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Chave da API</label>
                <input
                  type="password"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={newModel.apiKey}
                  onChange={(e) => setNewModel({...newModel, apiKey: e.target.value})}
                  placeholder="sk-..."
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Descrição</label>
                <textarea
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  rows="3"
                  value={newModel.description}
                  onChange={(e) => setNewModel({...newModel, description: e.target.value})}
                  placeholder="Descreva as capacidades do modelo..."
                />
              </div>
              
              <div className="flex gap-4 pt-4">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="flex-1 px-4 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
                >
                  Adicionar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Model Details Modal */}
      {selectedModel && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <div className={`w-16 h-16 bg-gradient-to-r ${getProviderColor(selectedModel.provider)} rounded-xl flex items-center justify-center text-white font-bold text-2xl mr-4`}>
                  {selectedModel.icon}
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">{selectedModel.name}</h2>
                  <p className="text-gray-600">{selectedModel.provider}</p>
                </div>
              </div>
              <button
                onClick={() => setSelectedModel(null)}
                className="text-gray-400 hover:text-gray-600 text-2xl"
              >
                ✕
              </button>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Descrição</h3>
                <p className="text-gray-600">{selectedModel.description}</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Capacidades</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedModel.capabilities.map((capability, index) => (
                    <span 
                      key={index}
                      className="px-3 py-2 bg-blue-50 text-blue-700 text-sm rounded-lg font-medium"
                    >
                      {capability}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-xl p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Estatísticas</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Requisições:</span>
                      <span className="font-semibold">{selectedModel.requests.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Custo:</span>
                      <span className="font-semibold text-green-600">${selectedModel.cost.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Último uso:</span>
                      <span className="font-semibold">{selectedModel.lastUsed}</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-xl p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Status</h4>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(selectedModel.status)}`}>
                    {selectedModel.status === 'active' ? 'Ativo' : 
                     selectedModel.status === 'maintenance' ? 'Manutenção' : 
                     selectedModel.status === 'inactive' ? 'Inativo' : 'Erro'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Models