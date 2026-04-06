# Venue Experience Manager

A Progressive Web App (PWA) designed to improve the physical event experience at large sporting venues. Built with React, Vite, Tailwind CSS, and Firebase.

## 🏟️ Problem Statement

Design a solution that improves the physical event experience for attendees at large-scale sporting venues. The system addresses challenges such as:

- **Crowd Movement** - Real-time crowd density monitoring and predictive flow analysis
- **Waiting Times** - Smart digital queue system with wait time predictions
- **Real-time Coordination** - Push notifications for events, emergencies, and updates

## ✨ Features

### 1. Crowd Flow Management
- Real-time crowd density heatmap across venue zones
- Color-coded indicators (green/yellow/red) for congestion levels
- Predictive analytics for crowd movement
- Zone-specific alerts

### 2. Smart Queue System
- Digital queuing for restrooms, concessions, and merchandise
- Real-time wait time predictions
- Queue position tracking
- Smart recommendations for optimal queue timing

### 3. Venue Navigation
- Interactive indoor venue map
- Multi-floor navigation
- Quick search for amenities (restrooms, exits, first aid, food courts)
- Turn-by-turn directions to facilities

### 4. Concession & Services
- Digital menu with categories (food, drinks, merchandise)
- Dietary filters (vegan, gluten-free)
- Shopping cart functionality
- Estimated pickup time

### 5. Notifications Center
- Push notifications via Firebase Cloud Messaging
- Categorized alerts (event, queue, emergency)
- Real-time updates and safety information

### 6. User Profile
- Firebase Authentication
- Saved seats and favorites
- Order history
- Notification preferences

## 🛠️ Tech Stack

- **Frontend:** React 18 + Vite
- **Styling:** Tailwind CSS
- **State Management:** Zustand
- **Routing:** React Router v6
- **Backend:** Firebase (Auth, Firestore, Cloud Messaging)
- **PWA:** Vite PWA Plugin with Service Worker

## 📁 Project Structure

```
venue-experience-manager/
├── src/
│   ├── components/
│   │   └── Navbar.jsx
│   ├── pages/
│   │   ├── Landing.jsx
│   │   ├── CrowdFlow.jsx
│   │   ├── SmartQueue.jsx
│   │   ├── Navigation.jsx
│   │   ├── Concessions.jsx
│   │   ├── Notifications.jsx
│   │   └── Profile.jsx
│   ├── store/
│   │   └── index.js
│   ├── firebase/
│   │   └── index.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Jtss-ux/venue-experience-manager.git

# Navigate to project directory
cd venue-experience-manager

# Install dependencies
npm install

# Start development server
npm run dev
```

### Build for Production

```bash
npm run build
```

The build output will be in the `dist` folder.

## 🔧 Configuration

### Firebase Setup

1. Create a project at [firebase.google.com](https://firebase.google.com)
2. Enable Authentication (Email/Password)
3. Enable Firestore Database
4. Enable Cloud Messaging
5. Copy your config to `src/firebase/index.js`:

```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
}
```

## 📱 PWA Features

- Installable on mobile devices
- Works offline (basic functionality)
- Add to home screen
- Push notifications support

## 🎯 Evaluation Criteria

The project is evaluated on:
- **Code Quality** - Structure, readability, maintainability
- **Security** - Safe and responsible implementation
- **Efficiency** - Optimal use of resources
- **Testing** - Validation of functionality
- **Accessibility** - Inclusive and usable design
- **Google Services** - Meaningful integration of Firebase/GCP

## 📄 License

MIT License

## 👤 Author

Joseph Thomas Stalin
- GitHub: [@Jtss-ux](https://github.com/Jtss-ux)
- Email: josephst2007@gmail.com