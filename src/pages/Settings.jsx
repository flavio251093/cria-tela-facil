import React, { useState } from 'react'

const Settings = () => {
  const [settings, setSettings] = useState({
    profile: {
      name: 'Demo User',
      email: 'demo@example.com',
      timezone: 'UTC-05:00',
      language: 'en'
    },
    github: {
      token: '',
      defaultRepo: '',
      autoSync: true
    },
    supabase: {
      projectUrl: '',
      anonKey: '',
      serviceKey: ''
    },
    notifications: {
      email: true,
      push: false,
      issueUpdates: true,
      modelAlerts: true
    }
  })

  const handleSave = (section) => {
    // Simulate saving
    console.log(`Saving ${section} settings:`, settings[section])
    alert(`${section} settings saved successfully!`)
  }

  const SettingSection = ({ title, children }) => (
    <div className="bg-white shadow rounded-lg mb-6">
      <div className="px-4 py-5 sm:p-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">{title}</h3>
        {children}
      </div>
    </div>
  )

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
        <p className="mt-1 text-sm text-gray-600">
          Configure your account and application preferences
        </p>
      </div>

      {/* Profile Settings */}
      <SettingSection title="Profile Settings">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Name
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={settings.profile.name}
              onChange={(e) => setSettings({
                ...settings,
                profile: { ...settings.profile, name: e.target.value }
              })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={settings.profile.email}
              onChange={(e) => setSettings({
                ...settings,
                profile: { ...settings.profile, email: e.target.value }
              })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Timezone
            </label>
            <select
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={settings.profile.timezone}
              onChange={(e) => setSettings({
                ...settings,
                profile: { ...settings.profile, timezone: e.target.value }
              })}
            >
              <option value="UTC-12:00">UTC-12:00</option>
              <option value="UTC-08:00">UTC-08:00 (PST)</option>
              <option value="UTC-05:00">UTC-05:00 (EST)</option>
              <option value="UTC+00:00">UTC+00:00 (GMT)</option>
              <option value="UTC+01:00">UTC+01:00 (CET)</option>
              <option value="UTC+09:00">UTC+09:00 (JST)</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Language
            </label>
            <select
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={settings.profile.language}
              onChange={(e) => setSettings({
                ...settings,
                profile: { ...settings.profile, language: e.target.value }
              })}
            >
              <option value="en">English</option>
              <option value="pt">Português</option>
              <option value="es">Español</option>
              <option value="fr">Français</option>
            </select>
          </div>
        </div>
        <div className="mt-6">
          <button
            onClick={() => handleSave('profile')}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium"
          >
            Save Profile
          </button>
        </div>
      </SettingSection>

      {/* GitHub Integration */}
      <SettingSection title="GitHub Integration">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Personal Access Token
            </label>
            <input
              type="password"
              placeholder="ghp_xxxxxxxxxxxxxxxxxxxx"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={settings.github.token}
              onChange={(e) => setSettings({
                ...settings,
                github: { ...settings.github, token: e.target.value }
              })}
            />
            <p className="mt-1 text-sm text-gray-500">
              <a href="https://github.com/settings/tokens" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                Generate a personal access token
              </a> with repo and issues permissions.
            </p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Default Repository
            </label>
            <input
              type="text"
              placeholder="username/repository"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={settings.github.defaultRepo}
              onChange={(e) => setSettings({
                ...settings,
                github: { ...settings.github, defaultRepo: e.target.value }
              })}
            />
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="autoSync"
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              checked={settings.github.autoSync}
              onChange={(e) => setSettings({
                ...settings,
                github: { ...settings.github, autoSync: e.target.checked }
              })}
            />
            <label htmlFor="autoSync" className="ml-2 block text-sm text-gray-900">
              Auto-sync repositories and issues
            </label>
          </div>
        </div>
        <div className="mt-6">
          <button
            onClick={() => handleSave('github')}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium"
          >
            Save GitHub Settings
          </button>
        </div>
      </SettingSection>

      {/* Supabase Configuration */}
      <SettingSection title="Supabase Configuration">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Project URL
            </label>
            <input
              type="url"
              placeholder="https://your-project.supabase.co"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={settings.supabase.projectUrl}
              onChange={(e) => setSettings({
                ...settings,
                supabase: { ...settings.supabase, projectUrl: e.target.value }
              })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Anonymous Key
            </label>
            <input
              type="password"
              placeholder="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={settings.supabase.anonKey}
              onChange={(e) => setSettings({
                ...settings,
                supabase: { ...settings.supabase, anonKey: e.target.value }
              })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Service Role Key (Optional)
            </label>
            <input
              type="password"
              placeholder="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={settings.supabase.serviceKey}
              onChange={(e) => setSettings({
                ...settings,
                supabase: { ...settings.supabase, serviceKey: e.target.value }
              })}
            />
            <p className="mt-1 text-sm text-gray-500">
              Only needed for advanced operations. Keep this secure!
            </p>
          </div>
        </div>
        <div className="mt-6">
          <button
            onClick={() => handleSave('supabase')}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium"
          >
            Save Supabase Settings
          </button>
        </div>
      </SettingSection>

      {/* Notifications */}
      <SettingSection title="Notification Preferences">
        <div className="space-y-4">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="emailNotif"
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              checked={settings.notifications.email}
              onChange={(e) => setSettings({
                ...settings,
                notifications: { ...settings.notifications, email: e.target.checked }
              })}
            />
            <label htmlFor="emailNotif" className="ml-2 block text-sm text-gray-900">
              Email notifications
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="pushNotif"
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              checked={settings.notifications.push}
              onChange={(e) => setSettings({
                ...settings,
                notifications: { ...settings.notifications, push: e.target.checked }
              })}
            />
            <label htmlFor="pushNotif" className="ml-2 block text-sm text-gray-900">
              Push notifications
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="issueUpdates"
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              checked={settings.notifications.issueUpdates}
              onChange={(e) => setSettings({
                ...settings,
                notifications: { ...settings.notifications, issueUpdates: e.target.checked }
              })}
            />
            <label htmlFor="issueUpdates" className="ml-2 block text-sm text-gray-900">
              Issue status updates
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="modelAlerts"
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              checked={settings.notifications.modelAlerts}
              onChange={(e) => setSettings({
                ...settings,
                notifications: { ...settings.notifications, modelAlerts: e.target.checked }
              })}
            />
            <label htmlFor="modelAlerts" className="ml-2 block text-sm text-gray-900">
              AI model alerts and performance notifications
            </label>
          </div>
        </div>
        <div className="mt-6">
          <button
            onClick={() => handleSave('notifications')}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium"
          >
            Save Notification Settings
          </button>
        </div>
      </SettingSection>
    </div>
  )
}

export default Settings