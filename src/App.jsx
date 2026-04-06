import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Navbar from './components/Navbar'
import Landing from './pages/Landing'
import CrowdFlow from './pages/CrowdFlow'
import SmartQueue from './pages/SmartQueue'
import Navigation from './pages/Navigation'
import Concessions from './pages/Concessions'
import Notifications from './pages/Notifications'
import Profile from './pages/Profile'

function App() {
  const [user, setUser] = useState(null)

  return (
    <Router>
      <div className="min-h-screen bg-dark">
        <Navbar user={user} />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/crowd-flow" element={<CrowdFlow />} />
          <Route path="/smart-queue" element={<SmartQueue />} />
          <Route path="/navigation" element={<Navigation />} />
          <Route path="/concessions" element={<Concessions />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/profile" element={<Profile user={user} setUser={setUser} />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App