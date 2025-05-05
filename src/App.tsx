import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useStore } from './store';

// Layouts
import MainLayout from './layouts/MainLayout';

// Pages
import Feed from './pages/Feed';
import Profile from './pages/Profile';
import Explore from './pages/Explore';
import Notifications from './pages/Notifications';
import UserManual from './pages/UserManual';
import Login from './pages/Login';
import NotFound from './pages/NotFound';

// Components
import Welcome from './components/Welcome';

function App() {
  const { initialized, initializeApp } = useStore();
  
  useEffect(() => {
    // Inicializar datos de demostración en la primera carga
    if (!initialized) {
      initializeApp();
    }
  }, [initialized, initializeApp]);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/welcome" element={<Welcome />} />
        
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Feed />} />
          <Route path="profile/:userId" element={<Profile />} />
          <Route path="explore" element={<Explore />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="manual" element={<UserManual />} />
        </Route>
        
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
    </Router>
  );
}

export default App;