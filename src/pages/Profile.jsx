import { useState } from 'react'
import { User, Mail, LogOut, Settings, Heart, Clock, Bell, ChevronRight } from 'lucide-react'

const Profile = ({ user, setUser }) => {
  const [showLogin, setShowLogin] = useState(false)
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')

  const handleLogin = (e) => {
    e.preventDefault()
    setUser({ name, email })
    setShowLogin(false)
  }

  const handleLogout = () => {
    setUser(null)
  }

  const stats = [
    { label: 'Events Attended', value: '12' },
    { label: 'Orders Placed', value: '28' },
    { label: 'Loyalty Points', value: '1,450' },
  ]

  const savedItems = [
    { id: 1, name: 'Section A - Row 5', type: 'seat', icon: '🎟️' },
    { id: 2, name: 'Hot Dog Stand', type: 'favorite', icon: '🍔' },
    { id: 3, name: 'Section B - Row 12', type: 'seat', icon: '🎟️' },
  ]

  const settings = [
    { icon: Bell, label: 'Notification Preferences', value: '3 active' },
    { icon: Settings, label: 'App Settings', value: '' },
    { icon: Heart, label: 'Privacy & Data', value: '' },
  ]

  if (!user) {
    return (
      <div className="pb-20 pt-4 px-4">
        <h1 className="text-2xl font-bold text-white mb-8">Profile</h1>
        
        <div className="card py-12 text-center">
          <div className="w-20 h-20 bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-4">
            <User size={40} className="text-slate-400" />
          </div>
          <h2 className="text-xl font-semibold text-white mb-2">Sign In</h2>
          <p className="text-slate-400 mb-6">Sign in to access your profile, saved seats, and order history</p>
          <button 
            onClick={() => setShowLogin(true)}
            className="btn-primary"
          >
            Sign In
          </button>
        </div>

        {showLogin && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-darker w-full max-w-md rounded-2xl p-6">
              <h2 className="text-xl font-bold text-white mb-4">Sign In</h2>
              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label className="text-slate-400 text-sm mb-1 block">Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="input w-full"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label className="text-slate-400 text-sm mb-1 block">Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="input w-full"
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <button type="submit" className="w-full btn-primary">
                  Continue
                </button>
              </form>
              <button 
                onClick={() => setShowLogin(false)}
                className="w-full mt-3 py-2 text-slate-400"
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="pb-20 pt-4 px-4">
      <h1 className="text-2xl font-bold text-white mb-4">Profile</h1>

      <div className="card mb-4">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
            <User size={32} className="text-white" />
          </div>
          <div className="flex-1">
            <h2 className="text-xl font-bold text-white">{user.name}</h2>
            <div className="flex items-center gap-2 text-slate-400">
              <Mail size={14} />
              <span className="text-sm">{user.email}</span>
            </div>
          </div>
          <button onClick={handleLogout} className="p-2 bg-slate-700 rounded-lg">
            <LogOut size={20} className="text-slate-400" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3 mb-4">
        {stats.map((stat, idx) => (
          <div key={idx} className="card text-center py-3">
            <div className="text-xl font-bold text-secondary">{stat.value}</div>
            <div className="text-xs text-slate-400">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="card mb-4">
        <h3 className="text-white font-semibold mb-3">Saved Items</h3>
        {savedItems.map((item) => (
          <div key={item.id} className="flex items-center justify-between py-2 border-b border-slate-700 last:border-0">
            <div className="flex items-center gap-3">
              <span className="text-xl">{item.icon}</span>
              <span className="text-slate-300">{item.name}</span>
            </div>
            <ChevronRight size={18} className="text-slate-500" />
          </div>
        ))}
      </div>

      <div className="card">
        <h3 className="text-white font-semibold mb-3">Settings</h3>
        {settings.map((setting, idx) => {
          const Icon = setting.icon
          return (
            <div key={idx} className="flex items-center justify-between py-3 border-b border-slate-700 last:border-0 cursor-pointer hover:text-secondary">
              <div className="flex items-center gap-3">
                <Icon size={18} className="text-slate-400" />
                <span className="text-slate-300">{setting.label}</span>
              </div>
              <div className="flex items-center gap-2">
                {setting.value && <span className="text-slate-500 text-sm">{setting.value}</span>}
                <ChevronRight size={18} className="text-slate-500" />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Profile