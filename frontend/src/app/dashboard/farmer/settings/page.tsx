'use client';
import { useState } from 'react';

export default function SettingsPage() {
  const [settings, setSettings] = useState({
    notifications: true,
    emailUpdates: true,
    smsAlerts: false,
    language: 'en',
    currency: 'PHP',
    timezone: 'Asia/Manila',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement settings update
    console.log('Settings updated:', settings);
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-gray-900">Settings</h1>

      <div className="bg-white shadow rounded-lg">
        <div className="p-6 space-y-6">
          <form onSubmit={handleSubmit}>
            <div className="space-y-6">
              <div>
                <h2 className="text-lg font-medium text-gray-900">Notifications</h2>
                <div className="mt-4 space-y-4">
                  <div className="flex items-center">
                    <input
                      id="notifications"
                      type="checkbox"
                      checked={settings.notifications}
                      onChange={(e) => setSettings({...settings, notifications: e.target.checked})}
                      className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-500"
                    />
                    <label htmlFor="notifications" className="ml-3 text-sm text-gray-700">
                      Enable notifications
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="emailUpdates"
                      type="checkbox"
                      checked={settings.emailUpdates}
                      onChange={(e) => setSettings({...settings, emailUpdates: e.target.checked})}
                      className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-500"
                    />
                    <label htmlFor="emailUpdates" className="ml-3 text-sm text-gray-700">
                      Receive email updates
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="smsAlerts"
                      type="checkbox"
                      checked={settings.smsAlerts}
                      onChange={(e) => setSettings({...settings, smsAlerts: e.target.checked})}
                      className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-500"
                    />
                    <label htmlFor="smsAlerts" className="ml-3 text-sm text-gray-700">
                      Receive SMS alerts
                    </label>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-lg font-medium text-gray-900">Preferences</h2>
                <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
                  <div>
                    <label htmlFor="language" className="block text-sm font-medium text-gray-700">
                      Language
                    </label>
                    <select
                      id="language"
                      value={settings.language}
                      onChange={(e) => setSettings({...settings, language: e.target.value})}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                    >
                      <option value="en">English</option>
                      <option value="tl">Tagalog</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="timezone" className="block text-sm font-medium text-gray-700">
                      Timezone
                    </label>
                    <select
                      id="timezone"
                      value={settings.timezone}
                      onChange={(e) => setSettings({...settings, timezone: e.target.value})}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                    >
                      <option value="Asia/Manila">Manila (GMT+8)</option>
                      <option value="Asia/Singapore">Singapore (GMT+8)</option>
                      <option value="UTC">UTC</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <button
                type="submit"
                className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
} 