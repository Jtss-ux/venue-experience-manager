import { useState } from 'react'
import { MapPin, Navigation, Layers, Search, Crosshair } from 'lucide-react'

const NavigationPage = () => {
  const [floor, setFloor] = useState('1')
  const [destination, setDestination] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')

  const floors = [
    { id: '1', name: 'Ground Floor' },
    { id: '2', name: 'Level 1 - Seating' },
    { id: '3', name: 'Level 2 - Suites' },
  ]

  const amenities = [
    { id: 1, name: 'Restrooms', icon: '🚻', type: 'restroom', floor: '1', location: 'North & South Wings' },
    { id: 2, name: 'First Aid', icon: '🏥', type: 'medical', floor: '1', location: 'Near Gate A' },
    { id: 3, name: 'Food Court', icon: '🍔', type: 'food', floor: '1', location: 'East Wing' },
    { id: 4, name: 'Exit - Main', icon: '🚪', type: 'exit', floor: '1', location: 'West Gate' },
    { id: 5, name: 'Section A Seats', icon: '🎟️', type: 'seat', floor: '2', location: 'North Stand' },
    { id: 6, name: 'Section B Seats', icon: '🎟️', type: 'seat', floor: '2', location: 'South Stand' },
    { id: 7, name: 'VIP Lounge', icon: '⭐', type: 'vip', floor: '3', location: 'Center' },
    { id: 8, name: 'Parking', icon: '🚗', type: 'parking', floor: '1', location: 'Lower Level' },
  ]

  const filteredAmenities = amenities.filter(a => 
    a.name.toLowerCase().includes(searchQuery.toLowerCase()) && 
    a.floor === floor
  )

  const handleNavigate = (amenity) => {
    setDestination(amenity)
  }

  return (
    <div className="pb-20 pt-4 px-4">
      <h1 className="text-2xl font-bold text-white mb-4">Venue Navigation</h1>

      <div className="card mb-4">
        <div className="flex items-center gap-2 mb-3">
          <Search size={18} className="text-slate-400" />
          <input
            type="text"
            placeholder="Search for seats, amenities..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 bg-transparent text-white placeholder-slate-400 focus:outline-none"
          />
        </div>
      </div>

      <div className="flex gap-2 mb-4">
        {floors.map((f) => (
          <button
            key={f.id}
            onClick={() => setFloor(f.id)}
            className={`flex-1 py-2 px-3 rounded-lg text-sm font-medium transition-all ${
              floor === f.id 
                ? 'bg-primary text-white' 
                : 'bg-slate-800 text-slate-400'
            }`}
          >
            {f.name}
          </button>
        ))}
      </div>

      {destination && (
        <div className="card mb-4 bg-gradient-to-r from-secondary/20 to-accent/20 border-secondary/30">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Navigation className="text-accent" size={20} />
              <span className="text-white font-semibold">Navigating to</span>
            </div>
            <button onClick={() => setDestination(null)} className="text-slate-400">✕</button>
          </div>
          <div className="text-white font-bold text-lg mb-2">{destination.name}</div>
          <div className="text-slate-400 text-sm mb-3">{destination.location}</div>
          <div className="flex gap-4 text-sm">
            <div className="flex items-center gap-1 text-slate-300">
              <Crosshair size={14} />
              <span>~2 min walk</span>
            </div>
            <div className="flex items-center gap-1 text-slate-300">
              <span>Turn right at concourse</span>
            </div>
          </div>
        </div>
      )}

      <div className="space-y-3">
        {filteredAmenities.map((amenity) => (
          <div 
            key={amenity.id}
            className="card hover:border-secondary cursor-pointer"
            onClick={() => handleNavigate(amenity)}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-2xl">{amenity.icon}</span>
                <div>
                  <h3 className="text-white font-medium">{amenity.name}</h3>
                  <div className="text-sm text-slate-400">{amenity.location}</div>
                </div>
              </div>
              <Navigation className="text-secondary" size={20} />
            </div>
          </div>
        ))}
      </div>

      {filteredAmenities.length === 0 && (
        <div className="text-center py-8 text-slate-400">
          <MapPin size={48} className="mx-auto mb-3 opacity-50" />
          <p>No amenities found on this floor</p>
        </div>
      )}

      <div className="card mt-4">
        <h3 className="text-white font-semibold mb-3">Venue Map</h3>
        <div className="aspect-video bg-slate-800 rounded-lg flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 grid grid-cols-4 grid-rows-3 gap-1 p-2 opacity-30">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="bg-slate-700 rounded"></div>
            ))}
          </div>
          <div className="text-center z-10">
            <MapPin size={48} className="mx-auto text-secondary mb-2" />
            <p className="text-slate-400">Interactive map</p>
            <p className="text-xs text-slate-500">Tap amenities to navigate</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavigationPage