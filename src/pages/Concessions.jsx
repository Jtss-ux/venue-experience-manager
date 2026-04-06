import { useState } from 'react'
import { ShoppingCart, Coffee, Beer, Utensils, Clock, Plus, Minus, Filter, Search } from 'lucide-react'

const Concessions = () => {
  const [category, setCategory] = useState('all')
  const [cart, setCart] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const [dietaryFilter, setDietaryFilter] = useState(null)

  const categories = [
    { id: 'all', name: 'All', icon: Utensils },
    { id: 'food', name: 'Food', icon: Utensils },
    { id: 'drinks', name: 'Drinks', icon: Coffee },
    { id: 'alcohol', name: 'Alcohol', icon: Beer },
    { id: 'merch', name: 'Merch', icon: ShoppingCart },
  ]

  const menuItems = [
    { id: 1, name: 'Classic Hot Dog', price: 350, category: 'food', dietary: ['gluten'], image: '🌭', description: 'Beef sausage with mustard', estimatedTime: 5 },
    { id: 2, name: 'Loaded Nachos', price: 425, category: 'food', dietary: ['gluten', 'dairy'], image: '🧀', description: 'Cheese, jalapeños, salsa', estimatedTime: 8 },
    { id: 3, name: 'Pizza Slice', price: 250, category: 'food', dietary: ['gluten', 'dairy'], image: '🍕', description: 'Pepperoni or cheese', estimatedTime: 6 },
    { id: 4, name: 'French Fries', price: 200, category: 'food', dietary: ['vegan'], image: '🍟', description: 'Crispy salted fries', estimatedTime: 4 },
    { id: 5, name: 'Chicken Wings (6pc)', price: 550, category: 'food', dietary: ['gluten'], image: '🍗', description: 'Buffalo or BBQ sauce', estimatedTime: 10 },
    { id: 6, name: 'Veggie Burger', price: 400, category: 'food', dietary: ['vegan'], image: '🍔', description: 'Plant-based patty', estimatedTime: 7 },
    { id: 7, name: 'Soft Drink', price: 120, category: 'drinks', dietary: ['vegan'], image: '🥤', description: 'Coca Cola, Sprite, Fanta', estimatedTime: 2 },
    { id: 8, name: 'Fresh Lemonade', price: 150, category: 'drinks', dietary: ['vegan'], image: '🍋', description: 'Freshly squeezed', estimatedTime: 3 },
    { id: 9, name: 'Water Bottle', price: 80, category: 'drinks', dietary: ['vegan'], image: '💧', description: '500ml mineral water', estimatedTime: 1 },
    { id: 10, name: 'Coffee', price: 180, category: 'drinks', dietary: ['vegan'], image: '☕', description: 'Hot or iced coffee', estimatedTime: 3 },
    { id: 11, name: 'Beer (330ml)', price: 350, category: 'alcohol', dietary: ['gluten'], image: '🍺', description: 'Kingfisher or Tuborg', estimatedTime: 2 },
    { id: 12, name: 'Whisky Shot', price: 500, category: 'alcohol', dietary: ['vegan'], image: '🥃', description: 'Premium whisky', estimatedTime: 2 },
  ]

  const filteredItems = menuItems.filter(item => {
    const matchesCategory = category === 'all' || item.category === category
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesDietary = !dietaryFilter || item.dietary.includes(dietaryFilter)
    return matchesCategory && matchesSearch && matchesDietary
  })

  const addToCart = (item) => {
    const existing = cart.find(c => c.id === item.id)
    if (existing) {
      setCart(cart.map(c => c.id === item.id ? { ...c, quantity: c.quantity + 1 } : c))
    } else {
      setCart([...cart, { ...item, quantity: 1 }])
    }
  }

  const removeFromCart = (itemId) => {
    const existing = cart.find(c => c.id === itemId)
    if (existing && existing.quantity > 1) {
      setCart(cart.map(c => c.id === itemId ? { ...c, quantity: c.quantity - 1 } : c))
    } else {
      setCart(cart.filter(c => c.id !== itemId))
    }
  }

  const cartTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)

  return (
    <div className="pb-20 pt-4 px-4">
      <h1 className="text-2xl font-bold text-white mb-4">Concessions</h1>

      <div className="card mb-4">
        <div className="flex items-center gap-2 mb-3">
          <Search size={18} className="text-slate-400" />
          <input
            type="text"
            placeholder="Search menu..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 bg-transparent text-white placeholder-slate-400 focus:outline-none"
          />
        </div>
        <div className="flex gap-2">
          <button 
            onClick={() => setDietaryFilter(null)}
            className={`text-xs px-2 py-1 rounded ${!dietaryFilter ? 'bg-secondary text-white' : 'bg-slate-700 text-slate-400'}`}
          >
            All
          </button>
          <button 
            onClick={() => setDietaryFilter('vegan')}
            className={`text-xs px-2 py-1 rounded ${dietaryFilter === 'vegan' ? 'bg-accent text-white' : 'bg-slate-700 text-slate-400'}`}
          >
            🌱 Vegan
          </button>
          <button 
            onClick={() => setDietaryFilter('gluten-free')}
            className={`text-xs px-2 py-1 rounded ${dietaryFilter === 'gluten-free' ? 'bg-accent text-white' : 'bg-slate-700 text-slate-400'}`}
          >
            🌾 Gluten-Free
          </button>
        </div>
      </div>

      <div className="flex gap-2 mb-4 overflow-x-auto pb-2">
        {categories.map((cat) => {
          const Icon = cat.icon
          return (
            <button
              key={cat.id}
              onClick={() => setCategory(cat.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap transition-all ${
                category === cat.id 
                  ? 'bg-primary text-white' 
                  : 'bg-slate-800 text-slate-400'
              }`}
            >
              <Icon size={16} />
              {cat.name}
            </button>
          )
        })}
      </div>

      <div className="grid grid-cols-2 gap-3 mb-4">
        {filteredItems.map((item) => (
          <div key={item.id} className="card">
            <div className="text-3xl mb-2">{item.image}</div>
            <h3 className="text-white font-medium text-sm mb-1">{item.name}</h3>
            <p className="text-slate-400 text-xs mb-2">{item.description}</p>
            <div className="flex items-center justify-between">
              <span className="text-secondary font-bold">₹{item.price}</span>
              <button
                onClick={() => addToCart(item)}
                className="bg-primary p-2 rounded-lg"
              >
                <Plus size={16} className="text-white" />
              </button>
            </div>
            <div className="flex items-center gap-1 text-xs text-slate-500 mt-2">
              <Clock size={12} />
              <span>~{item.estimatedTime} min</span>
            </div>
          </div>
        ))}
      </div>

      {cart.length > 0 && (
        <div className="fixed bottom-16 left-0 right-0 bg-darker border-t border-slate-700 p-4 z-40">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <ShoppingCart className="text-secondary" size={20} />
              <span className="text-white font-semibold">{cart.reduce((s, i) => s + i.quantity, 0)} items</span>
            </div>
            <span className="text-secondary font-bold">₹{cartTotal}</span>
          </div>
          <button className="w-full btn-primary">
            Checkout - Est. {Math.max(...cart.map(i => i.estimatedTime))} min
          </button>
        </div>
      )}
    </div>
  )
}

export default Concessions