import { Calendar, Users, MapPin, Clock, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const Landing = () => {
  const upcomingEvent = {
    name: 'Championship Final 2026',
    date: 'April 25, 2026',
    time: '7:00 PM',
    venue: 'National Sports Arena'
  }

  const quickActions = [
    { title: 'Crowd Flow', desc: 'Real-time density map', path: '/crowd-flow', color: 'from-green-500 to-emerald-600' },
    { title: 'Smart Queue', desc: 'Join digital queues', path: '/smart-queue', color: 'from-blue-500 to-cyan-600' },
    { title: 'Navigate', desc: 'Find your seat', path: '/navigation', color: 'from-purple-500 to-pink-600' },
    { title: 'Food Order', desc: 'Pre-order snacks', path: '/concessions', color: 'from-orange-500 to-red-600' },
  ]

  const stats = [
    { label: 'Venue Capacity', value: '50,000' },
    { label: 'Current Occupancy', value: '42,350' },
    { label: 'Avg Wait Time', value: '8 min' },
  ]

  return (
    <div className="pb-20 pt-4 px-4">
      <div className="card mb-4">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
            <Calendar className="text-white" size={24} />
          </div>
          <div>
            <h3 className="text-white font-semibold">{upcomingEvent.name}</h3>
            <p className="text-slate-400 text-sm">{upcomingEvent.venue}</p>
          </div>
        </div>
        <div className="flex gap-4 text-sm">
          <span className="flex items-center gap-1 text-slate-300">
            <Calendar size={14} /> {upcomingEvent.date}
          </span>
          <span className="flex items-center gap-1 text-slate-300">
            <Clock size={14} /> {upcomingEvent.time}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3 mb-4">
        {stats.map((stat, idx) => (
          <div key={idx} className="card text-center py-3">
            <div className="text-2xl font-bold text-secondary">{stat.value}</div>
            <div className="text-xs text-slate-400">{stat.label}</div>
          </div>
        ))}
      </div>

      <h2 className="text-xl font-bold text-white mb-3">Quick Actions</h2>
      <div className="grid grid-cols-2 gap-3">
        {quickActions.map((action, idx) => (
          <Link key={idx} to={action.path} className="card hover:border-secondary transition-all">
            <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${action.color} flex items-center justify-center mb-2`}>
              <ArrowRight className="text-white" size={20} />
            </div>
            <h3 className="text-white font-semibold">{action.title}</h3>
            <p className="text-slate-400 text-xs">{action.desc}</p>
          </Link>
        ))}
      </div>

      <div className="card mt-4 bg-gradient-to-r from-primary/20 to-secondary/20 border-primary/30">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-white font-semibold">Emergency Alert</h3>
            <p className="text-slate-400 text-sm">Tap to view safety info</p>
          </div>
          <div className="w-10 h-10 bg-red-500/20 rounded-full flex items-center justify-center">
            <Users className="text-red-400" size={20} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landing