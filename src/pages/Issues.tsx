import React, { useState, useEffect } from 'react'

const Issues = () => {
  const [issues, setIssues] = useState([])
  const [showCreateModal, setShowCreateModal] = useState(false)
  const [newIssue, setNewIssue] = useState({
    title: '',
    description: '',
    repository: '',
    priority: 'medium',
    assignee: ''
  })

  useEffect(() => {
    // Simulate loading issues
    setIssues([
      {
        id: 1,
        title: 'Model performance optimization needed',
        description: 'The GPT-4 model is responding slower than expected',
        repository: 'ai-chatbot',
        status: 'open',
        priority: 'high',
        assignee: 'demo-user',
        created: '2024-01-20',
        comments: 3
      },
      {
        id: 2,
        title: 'Add support for Claude-3 integration',
        description: 'Need to integrate Claude-3 Sonnet into the system',
        repository: 'ml-models',
        status: 'in-progress',
        priority: 'medium',
        assignee: 'demo-user',
        created: '2024-01-19',
        comments: 1
      },
      {
        id: 3,
        title: 'Data pipeline memory leak',
        description: 'Memory usage keeps increasing during batch processing',
        repository: 'data-processor',
        status: 'closed',
        priority: 'high',
        assignee: 'demo-user',
        created: '2024-01-18',
        comments: 5
      },
      {
        id: 4,
        title: 'Add unit tests for API endpoints',
        description: 'Need comprehensive testing for all API endpoints',
        repository: 'ai-chatbot',
        status: 'open',
        priority: 'low',
        assignee: null,
        created: '2024-01-17',
        comments: 0
      }
    ])
  }, [])

  const handleCreateIssue = (e) => {
    e.preventDefault()
    const id = issues.length + 1
    setIssues([...issues, { 
      ...newIssue, 
      id, 
      status: 'open',
      created: new Date().toISOString().split('T')[0],
      comments: 0,
      assignee: newIssue.assignee || null 
    }])
    setNewIssue({ title: '', description: '', repository: '', priority: 'medium', assignee: '' })
    setShowCreateModal(false)
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'open': return 'bg-red-100 text-red-800'
      case 'in-progress': return 'bg-yellow-100 text-yellow-800'
      case 'closed': return 'bg-green-100 text-green-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800'
      case 'medium': return 'bg-yellow-100 text-yellow-800'
      case 'low': return 'bg-green-100 text-green-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const IssueCard = ({ issue }) => (
    <div className="bg-white overflow-hidden shadow rounded-lg">
      <div className="p-6">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center space-x-2 mb-2">
              <h3 className="text-lg font-medium text-gray-900">{issue.title}</h3>
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(issue.status)}`}>
                {issue.status}
              </span>
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getPriorityColor(issue.priority)}`}>
                {issue.priority}
              </span>
            </div>
            <p className="text-sm text-gray-600 mb-3">{issue.description}</p>
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <span>📦 {issue.repository}</span>
              <span>👤 {issue.assignee || 'Unassigned'}</span>
              <span>📅 {issue.created}</span>
              <span>💬 {issue.comments} comments</span>
            </div>
          </div>
        </div>
        
        <div className="mt-4 flex justify-end space-x-2">
          <button className="px-3 py-1 text-sm font-medium text-blue-700 bg-blue-100 rounded hover:bg-blue-200">
            View Details
          </button>
          <button className="px-3 py-1 text-sm font-medium text-gray-700 bg-gray-100 rounded hover:bg-gray-200">
            Edit
          </button>
        </div>
      </div>
    </div>
  )

  const statusStats = issues.reduce((acc, issue) => {
    acc[issue.status] = (acc[issue.status] || 0) + 1
    return acc
  }, {})

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Issues & Tickets</h1>
          <p className="mt-1 text-sm text-gray-600">
            Track and manage your project issues
          </p>
        </div>
        <button
          onClick={() => setShowCreateModal(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium"
        >
          Create Issue
        </button>
      </div>

      {/* Issue Stats */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8">
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <span className="text-2xl">🎫</span>
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">Total Issues</dt>
                  <dd className="text-lg font-medium text-gray-900">{issues.length}</dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <span className="text-2xl">🔴</span>
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">Open</dt>
                  <dd className="text-lg font-medium text-gray-900">{statusStats.open || 0}</dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <span className="text-2xl">🟡</span>
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">In Progress</dt>
                  <dd className="text-lg font-medium text-gray-900">{statusStats['in-progress'] || 0}</dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <span className="text-2xl">✅</span>
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">Closed</dt>
                  <dd className="text-lg font-medium text-gray-900">{statusStats.closed || 0}</dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Issues List */}
      <div className="space-y-6">
        {issues.map((issue) => (
          <IssueCard key={issue.id} issue={issue} />
        ))}
      </div>

      {/* Create Issue Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
          <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
            <div className="mt-3">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Create New Issue</h3>
              <form onSubmit={handleCreateIssue}>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Title
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={newIssue.title}
                    onChange={(e) => setNewIssue({ ...newIssue, title: e.target.value })}
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Repository
                  </label>
                  <select
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={newIssue.repository}
                    onChange={(e) => setNewIssue({ ...newIssue, repository: e.target.value })}
                  >
                    <option value="">Select Repository</option>
                    <option value="ai-chatbot">ai-chatbot</option>
                    <option value="ml-models">ml-models</option>
                    <option value="data-processor">data-processor</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Priority
                  </label>
                  <select
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={newIssue.priority}
                    onChange={(e) => setNewIssue({ ...newIssue, priority: e.target.value })}
                  >
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Assignee (Optional)
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={newIssue.assignee}
                    onChange={(e) => setNewIssue({ ...newIssue, assignee: e.target.value })}
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Description
                  </label>
                  <textarea
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows="4"
                    value={newIssue.description}
                    onChange={(e) => setNewIssue({ ...newIssue, description: e.target.value })}
                  ></textarea>
                </div>
                <div className="flex justify-end space-x-3">
                  <button
                    type="button"
                    onClick={() => setShowCreateModal(false)}
                    className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
                  >
                    Create Issue
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

export default Issues