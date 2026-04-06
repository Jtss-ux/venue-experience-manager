import { useState } from 'react'
import { Bell, Settings, AlertTriangle, Clock, CheckCircle, Info } from 'lucide-react'

const Notifications = () => {
  const [filter, setFilter] = useState('all')
  
  const notifications = [
    { 
      id: 1, 
      type: 'event', 
      title: 'Match Starting Soon', 
      desc: 'The game begins in 15 minutes. Get to your seats!',
      time: '5 min ago',
      read: false,
      icon: '⚽'
    },
    { 
      id: 2, 
      type: 'queue', 
      title: 'Your Turn!', 
      desc: 'Hot Dog Stand is ready for your order (#47)',
      time: '2 min ago',
      read: false,
      icon: '🍔'
    },
    { 
      id: 3, 
      type: 'alert', 
      title: 'Crowd Alert', 
      desc: 'North Concourse is busy. Consider alternate route.',
      time: '10 min ago',
      read: true,
      icon: '👥'
    },
    { 
      id: 4, 
      type: 'food', 
      title: 'Order Ready', 
      desc: 'Your order #234 is ready for pickup at Counter 3',
      time: '5 min ago',
      read: false,
      icon: '✅'
    },
    { 
      id: 5, 
      type: 'event', 
      title: 'Halftime Show', 
      desc: 'Special performance at 7:45 PM near Center Field',
      time: '30 min ago',
      read: true,
      icon: '🎵'
    },
    { 
      id: 6, 
      type: 'alert', 
      title: 'Emergency Exit', 
      desc: 'Exit Gate C is now open for faster departure',
      time: '1 hr ago',
      read: true,
      icon: '🚪'
    },
    { 
      id: 7, 
      type: 'promo', 
      title: 'Special Offer!', 
      desc: '20% off on all drinks at Beer Counter until 8 PM',
      time: '45 min ago',
      read: true,
      icon: '🎁'
    },
  ]

  const filtered = filter === 'all' ? notifications : notifications.filter(n => n.type === filter)

  const getIcon = (type) => {
    const icons = {
      event: '⚽',
      queue: '⏰',
      alert: '⚠️',
      food: '🍔',
      promo: '🎁'
    }
    return icons[type] || '📢'
  }

  const getTypeColor = (type) => {
    const colors = {
      event: 'bg-blue-500/20 text-blue-400',
      queue: 'bg-accent/20 text-accent',
      alert: 'bg-red-500/20 text-red-400',
      food: 'bg-orange-500/20 text-orange-400',
      promo: 'bg-purple-500/20 text-purple-400'
    }
    return colors[type] || 'bg-slate-500/20 text-slate-400'
  }

  const unreadCount = notifications.filter(n => !n.read).length

  return (
    <div className="pb-20 pt-4 px-4">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold text-white">Notifications</h1>
        <button className="p-2 bg-slate-800 rounded-lg">
          <Settings size={20} className="text-slate-400" />
        </button>
      </div>

      <div className="flex gap-2 mb-4 overflow-x-auto pb-2">
        <button
          onClick={() => setFilter('all')}
          className={`px-4 py-2 rounded-lg whitespace-nowrap transition-all ${
            filter === 'all' ? 'bg-primary text-white' : 'bg-slate-800 text-slate-400'
          }`}
        >
          All {notifications.length}
        </button>
        <button
          onClick={() => setFilter('event')}
          className={`px-4 py-2 rounded-lg whitespace-nowrap transition-all ${
            filter === 'event' ? 'bg-primary text-white' : 'bg-slate-800 text-slate-400'
          }`}
        >
          Events
        </button>
        <button
          onClick={() => setFilter('queue')}
          className={`px-4 py-2 rounded-lg whitespace-nowrap transition-all ${
            filter === 'queue' ? 'bg-primary text-white' : 'bg-slate-800 text-slate-400'
          }`}
        >
          Queue
        </button>
        <button
          onClick={() => setFilter('alert')}
          className={`px-4 py-2 rounded-lg whitespace-nowrap transition-all ${
            filter === 'alert' ? 'bg-primary text-white' : 'bg-slate-800 text-slate-400'
          }`}
        >
          Alerts
        </button>
      </div>

      {unreadCount > 0 && (
        <div className="card mb-4 bg-gradient-to-r from-secondary/10 to-accent/10 border-secondary/30">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-secondary/20 rounded-full flex items-center justify-center">
              <Bell className="text-secondary" size={20} />
            </div>
            <div>
              <div className="text-white font-semibold">{unreadCount} unread</div>
              <div className="text-slate-400 text-sm">Tap to mark all as read</div>
            </div>
          </div>
        </div>
      )}

      <div className="space-y-3">
        {filtered.map((notification) => (
          <div 
            key={notification.id}
            className={`card hover:border-secondary cursor-pointer ${!notification.read ? 'border-l-4 border-l-secondary' : ''}`}
          >
            <div className="flex items-start gap-3">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-xl ${getTypeColor(notification.type)}`}>
                {notification.icon}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-white font-medium">{notification.title}</h3>
                  {!notification.read && (
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  )}
                </div>
                <p className="text-slate-400 text-sm mb-2">{notification.desc}</p>
                <div className="flex items-center gap-1 text-xs text-slate-500">
                  <Clock size={12} />
                  <span>{notification.time}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-12">
          <Bell size={48} className="mx-auto text-slate-600 mb-3" />
          <p className="text-slate-400">No notifications</p>
        </div>
      )}
    </div>
  )
}

export default Notifications