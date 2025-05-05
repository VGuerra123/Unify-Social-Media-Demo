import { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useStore } from '../store';

import Sidebar from '../components/navigation/Sidebar';
import MobileNavbar from '../components/navigation/MobileNavbar';
import CreatePostButton from '../components/posts/CreatePostButton';

/**
 * Diseño principal de la app:
 * ├─ Sidebar (solo escritorio)
 * ├─ Contenido (Outlet)
 * └─ Barra inferior + botón flotante (móvil)
 */
const MainLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { currentUser, setCurrentPage } = useStore();

  // Sin sesión → redirigir a /login
  useEffect(() => {
    if (!currentUser) {
      navigate('/login');
      return;
    }

    // Actualizar el nombre de la página actual en el store
    const path = location.pathname.split('/')[1] || 'feed';
    setCurrentPage(path);
  }, [location, currentUser, navigate, setCurrentPage]);

  // Evita parpadear mientras redirige
  if (!currentUser) return null;

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar (escritorio: ≥ md) */}
      <Sidebar />

      {/* Contenido principal */}
      <main className="flex-1 w-full ml-0 md:ml-64 pb-20 md:pb-0">
        <div className="max-w-4xl mx-auto px-4 py-6">
          {/* Rutas hijas */}
          <Outlet />
        </div>
      </main>

      {/* Botón flotante para crear publicación */}
      <CreatePostButton />

      {/* Navegación inferior (móvil) */}
      <MobileNavbar />
    </div>
  );
};

export default MainLayout;
