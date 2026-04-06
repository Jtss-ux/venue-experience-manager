import { create } from 'zustand'

export const useStore = create((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  
  notifications: [],
  addNotification: (notification) => set((state) => ({ 
    notifications: [notification, ...state.notifications] 
  })),
  
  cart: [],
  addToCart: (item) => set((state) => {
    const existing = state.cart.find(c => c.id === item.id)
    if (existing) {
      return {
        cart: state.cart.map(c => c.id === item.id ? { ...c, quantity: c.quantity + 1 } : c)
      }
    }
    return { cart: [...state.cart, { ...item, quantity: 1 }] }
  }),
  removeFromCart: (itemId) => set((state) => {
    const existing = state.cart.find(c => c.id === itemId)
    if (existing && existing.quantity > 1) {
      return {
        cart: state.cart.map(c => c.id === itemId ? { ...c, quantity: c.quantity - 1 } : c)
      }
    }
    return { cart: state.cart.filter(c => c.id !== itemId) }
  }),
  clearCart: () => set({ cart: [] }),
  
  currentQueue: null,
  joinQueue: (service) => set({ currentQueue: service }),
  leaveQueue: () => set({ currentQueue: null }),
  
  currentFloor: '1',
  setFloor: (floor) => set({ currentFloor: floor }),
  
  crowdData: [],
  updateCrowdData: (data) => set({ crowdData: data }),
}))