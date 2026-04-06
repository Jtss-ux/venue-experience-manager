import { useState } from 'react'
import { Clock, Users, Ticket, ArrowLeft, CheckCircle } from 'lucide-react'

const SmartQueue = () => {
  const [selectedService, setSelectedService] = useState(null)
  const [inQueue, setInQueue] = useState(null)

  const services = [
    { id: 1, name: 'Restroom - North', type: 'restroom', waitTime: 5, inLine: 8, location: 'Near Gate A' },
    { id: 2, name: 'Restroom - South', type: 'restroom', waitTime: 12, inLine: 22, location: 'Near Gate C' },
    { id: 3, name: 'Hot Dog Stand', type: 'food', waitTime: 8, inLine: 15, location: 'Food Court A' },
    { id: 4, name: 'Beer Counter', type: 'drinks', waitTime: 15, inLine: 28, location: 'Section B' },
    { id: 5, name: 'Merch Store', type: 'shopping', waitTime: 10, inLine: 18, location: 'Main Concourse' },
    { id: 6, name: 'First Aid', type: 'medical', waitTime: 3, inLine: 2, location: 'Section A' },
    { id: 7, name: 'Pizza Place', type: 'food', waitTime: 18, inLine: 35, location: 'Food Court B' },
    { id: 8, name: 'Ice Cream', type: 'food', waitTime: 6, inLine: 10, location: 'Near Section C' },
  ]

  const getTypeIcon = (type) => {
    const icons = {
      restroom: '🚻',
      food: '🍔',
      drinks: '🍺',
      shopping: '🛍️',
      medical: '🏥'
    }
    return icons[type] || '📍'
  }

  const handleJoinQueue = (service) => {
    setInQueue(service)
  }

  const handleLeaveQueue = () => {
    setInQueue(null)
  }

  if (inQueue) {
    return (
      <div className="pb-20 pt-4 px-4">
        <div className="card text-center py-8">
          <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <Ticket className="text-accent" size={32} />
          </div>
          <h2 className="text-xl font-bold text-white mb-2">You're in Queue!</h2>
          <p className="text-slate-400 mb-6">{inQueue.name}</p>
          
          <div className="bg-darker rounded-xl p-4 mb-6">
            <div className="text-4xl font-bold text-secondary mb-2">#{Math.floor(Math.random() * 50) + 1}</div>
            <div className="text-slate-400">Your Position</div>
          </div>
          
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="card">
              <div className="text-slate-400 text-sm">People Ahead</div>
              <div className="text-xl font-bold text-white">{inQueue.inLine - 1}</div>
            </div>
            <div className="card">
              <div className="text-slate-400 text-sm">Est. Wait</div>
              <div className="text-xl font-bold text-white">{inQueue.waitTime} min</div>
            </div>
          </div>
          
          <button 
            onClick={handleLeaveQueue}
            className="w-full py-3 bg-red-500/20 text-red-400 rounded-lg border border-red-500/30"
          >
            Leave Queue
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="pb-20 pt-4 px-4">
      <h1 className="text-2xl font-bold text-white mb-4">Smart Queue</h1>
      
      <div className="card mb-4 bg-gradient-to-r from-secondary/10 to-accent/10 border-secondary/30">
        <div className="flex items-center gap-3">
          <Clock className="text-secondary" size={24} />
          <div>
            <div className="text-white font-semibold">Average Wait: 9 min</div>
            <div className="text-slate-400 text-sm">Based on current venue activity</div>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        {services.map((service) => (
          <div 
            key={service.id}
            onClick={() => setSelectedService(service)}
            className="card hover:border-secondary cursor-pointer"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-2xl">{getTypeIcon(service.type)}</span>
                <div>
                  <h3 className="text-white font-medium">{service.name}</h3>
                  <div className="flex items-center gap-2 text-sm text-slate-400">
                    <Users size={14} />
                    <span>{service.inLine} in line</span>
                    <span>•</span>
                    <span>{service.location}</span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className={`text-xl font-bold ${service.waitTime > 10 ? 'text-yellow-400' : 'text-accent'}`}>
                  {service.waitTime}m
                </div>
                <div className="text-xs text-slate-400">wait</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedService && (
        <div className="fixed inset-0 bg-black/50 flex items-end z-50" onClick={() => setSelectedService(null)}>
          <div className="bg-darker w-full rounded-t-2xl p-6" onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-white">{selectedService.name}</h3>
              <button onClick={() => setSelectedService(null)} className="text-slate-400">✕</button>
            </div>
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="card text-center">
                <div className="text-2xl font-bold text-white">{selectedService.waitTime}m</div>
                <div className="text-xs text-slate-400">Wait Time</div>
              </div>
              <div className="card text-center">
                <div className="text-2xl font-bold text-white">{selectedService.inLine}</div>
                <div className="text-xs text-slate-400">In Line</div>
              </div>
              <div className="card text-center">
                <div className="text-2xl font-bold text-accent">{Math.ceil(selectedService.waitTime / 2)}m</div>
                <div className="text-xs text-slate-400">Smart Suggest</div>
              </div>
            </div>
            <button 
              onClick={() => handleJoinQueue(selectedService)}
              className="w-full btn-primary"
            >
              Join Queue
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default SmartQueue