import { useState } from 'react'
import { AlertTriangle, TrendingUp, Clock, RefreshCw } from 'lucide-react'

const CrowdFlow = () => {
  const [selectedZone, setSelectedZone] = useState(null)
  const [refreshing, setRefreshing] = useState(false)

  const zones = [
    { id: 'entrance', name: 'Main Entrance', density: 85, status: 'high', color: '#ef4444' },
    { id: 'north-concourse', name: 'North Concourse', density: 45, status: 'low', color: '#22c55e' },
    { id: 'south-concourse', name: 'South Concourse', density: 62, status: 'medium', color: '#eab308' },
    { id: 'section-a', name: 'Section A (Seating)', density: 78, status: 'high', color: '#f97316' },
    { id: 'section-b', name: 'Section B (Seating)', density: 35, status: 'low', color: '#22c55e' },
    { id: 'food-court', name: 'Food Court', density: 55, status: 'medium', color: '#eab308' },
    { id: 'restrooms-north', name: 'Restrooms North', density: 40, status: 'low', color: '#22c55e' },
    { id: 'restrooms-south', name: 'Restrooms South', density: 72, status: 'high', color: '#f97316' },
    { id: 'exit-gate', name: 'Exit Gate', density: 25, status: 'low', color: '#22c55e' },
  ]

  const handleRefresh = () => {
    setRefreshing(true)
    setTimeout(() => setRefreshing(false), 1500)
  }

  const getDensityLabel = (density) => {
    if (density >= 70) return { label: 'High', color: 'text-red-400' }
    if (density >= 40) return { label: 'Medium', color: 'text-yellow-400' }
    return { label: 'Low', color: 'text-green-400' }
  }

  return (
    <div className="pb-20 pt-4 px-4">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold text-white">Crowd Flow</h1>
        <button 
          onClick={handleRefresh}
          className={`p-2 rounded-lg bg-slate-800 ${refreshing ? 'animate-spin' : ''}`}
        >
          <RefreshCw size={20} className="text-secondary" />
        </button>
      </div>

      <div className="card mb-4">
        <div className="flex items-center gap-2 mb-3">
          <TrendingUp className="text-accent" size={20} />
          <span className="text-white font-semibold">Real-time Heatmap</span>
        </div>
        <div className="text-sm text-slate-400">Last updated: Just now</div>
      </div>

      <div className="grid grid-cols-3 gap-2 mb-4">
        <div className="card text-center py-3">
          <div className="text-xl font-bold text-red-400">3</div>
          <div className="text-xs text-slate-400">High Density</div>
        </div>
        <div className="card text-center py-3">
          <div className="text-xl font-bold text-yellow-400">3</div>
          <div className="text-xs text-slate-400">Medium</div>
        </div>
        <div className="card text-center py-3">
          <div className="text-xl font-bold text-green-400">3</div>
          <div className="text-xs text-slate-400">Low</div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {zones.map((zone) => {
          const densityInfo = getDensityLabel(zone.density)
          return (
            <div 
              key={zone.id}
              onClick={() => setSelectedZone(zone)}
              className="card hover:border-secondary cursor-pointer transition-all"
              style={{ borderLeft: `4px solid ${zone.color}` }}
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-white font-medium">{zone.name}</h3>
                <span className={`text-xs ${densityInfo.color}`}>{densityInfo.label}</span>
              </div>
              <div className="w-full bg-slate-700 rounded-full h-2 mb-2">
                <div 
                  className="h-2 rounded-full transition-all" 
                  style={{ width: `${zone.density}%`, backgroundColor: zone.color }}
                />
              </div>
              <div className="text-sm text-slate-400">{zone.density}% capacity</div>
            </div>
          )
        })}
      </div>

      {selectedZone && (
        <div className="fixed inset-0 bg-black/50 flex items-end z-50" onClick={() => setSelectedZone(null)}>
          <div className="bg-darker w-full rounded-t-2xl p-6" onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-white">{selectedZone.name}</h3>
              <button onClick={() => setSelectedZone(null)} className="text-slate-400">✕</button>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="card">
                <div className="text-slate-400 text-sm">Current Density</div>
                <div className="text-2xl font-bold" style={{ color: selectedZone.color }}>{selectedZone.density}%</div>
              </div>
              <div className="card">
                <div className="text-slate-400 text-sm">Predicted (30min)</div>
                <div className="text-2xl font-bold text-yellow-400">{Math.min(100, selectedZone.density + 15)}%</div>
              </div>
            </div>
            <div className="flex items-center gap-2 text-slate-400 text-sm">
              <AlertTriangle size={16} />
              <span>Consider avoiding this area if possible</span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default CrowdFlow