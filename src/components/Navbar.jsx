import { Link, useLocation } from 'react-router-dom'
import { Home, Users, Clock, MapPin, ShoppingCart, Bell, User } from 'lucide-react'

const Navbar = ({ user }) => {
  const location = useLocation()
  
  const navItems = [
    { path: '/', icon: Home, label: 'Home' },
    { path: '/crowd-flow', icon: Users, label: 'Crowd' },
    { path: '/smart-queue', icon: Clock, label: 'Queue' },
    { path: '/navigation', icon: MapPin, label: 'Navigate' },
    { path: '/concessions', icon: ShoppingCart, label: 'Food' },
    { path: '/notifications', icon: Bell, label: 'Alerts' },
    { path: '/profile', icon: User, label: 'Profile' },
  ]

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-darker border-t border-slate-700 z-50">
      <div className="flex justify-around items-center h-16 px-2">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = location.pathname === item.path
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex flex-col items-center justify-center p-2 rounded-lg transition-all ${
                isActive 
                  ? 'text-secondary bg-slate-800' 
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Icon size={20} />
              <span className="text-xs mt-1">{item.label}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}

export default Navbar