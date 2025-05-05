import { Link, useLocation } from 'react-router-dom';
import { useStore } from '../../store';
import {
  Home,
  Search,
  Bell,
  User,
  BookOpen,
  LogOut,
} from 'lucide-react';

const Sidebar = () => {
  const location = useLocation();
  const { currentUser, logout } = useStore();

  if (!currentUser) return null;

  const isActive = (path: string) =>
    location.pathname === path
      ? 'bg-indigo-50 text-indigo-600'
      : 'text-gray-700 hover:bg-gray-100';

  return (
    <aside className="hidden md:flex flex-col fixed w-64 h-full bg-white border-r border-gray-200">
      {/* Logo grande */}
      <div className="py-6 px-4 border-b border-gray-200 flex justify-center">
        <Link to="/" className="flex items-center justify-center">
          <img
            src="/assets/logo.png"
            alt="Logo Unify"
            className="h-14 w-auto mx-auto"
          />
        </Link>
      </div>

      {/* Navegación principal */}
      <nav className="flex-1 overflow-y-auto py-4 px-3">
        <ul className="space-y-2">
          <li>
            <Link to="/" className={`flex items-center p-3 rounded-lg ${isActive('/')}`}>
              <Home className="h-5 w-5 mr-3" />
              <span className="font-medium">Inicio</span>
            </Link>
          </li>

          <li>
            <Link to="/explore" className={`flex items-center p-3 rounded-lg ${isActive('/explore')}`}>
              <Search className="h-5 w-5 mr-3" />
              <span className="font-medium">Explorar</span>
            </Link>
          </li>

          <li>
            <Link
              to="/notifications"
              className={`flex items-center p-3 rounded-lg ${isActive('/notifications')}`}
            >
              <Bell className="h-5 w-5 mr-3" />
              <span className="font-medium">Notificaciones</span>
            </Link>
          </li>

          <li>
            <Link
              to={`/profile/${currentUser.id}`}
              className={`flex items-center p-3 rounded-lg ${isActive(`/profile/${currentUser.id}`)}`}
            >
              <User className="h-5 w-5 mr-3" />
              <span className="font-medium">Perfil</span>
            </Link>
          </li>

          <li>
            <Link to="/manual" className={`flex items-center p-3 rounded-lg ${isActive('/manual')}`}>
              <BookOpen className="h-5 w-5 mr-3" />
              <span className="font-medium">Manual</span>
            </Link>
          </li>
        </ul>
      </nav>

      {/* Sección inferior */}
      <div className="p-4 border-t border-gray-200">
        <div
          className="flex items-center p-3 rounded-lg hover:bg-gray-100 cursor-pointer"
          onClick={() => logout()}
        >
          <LogOut className="h-5 w-5 mr-3 text-gray-700" />
          <span className="font-medium text-gray-700">Salir</span>
        </div>

        <div className="flex items-center mt-4 p-2">
          <img
            src={currentUser.avatar}
            alt={currentUser.name}
            className="h-10 w-10 rounded-full object-cover"
          />
          <div className="ml-3">
            <p className="font-medium text-gray-900">{currentUser.name}</p>
            <p className="text-sm text-gray-500">@{currentUser.username}</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
