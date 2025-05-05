import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Home,
  Search,
  PlusSquare,
  Bell,
  User,
  LogOut,
  PlusCircle,
  X,
  Image
} from 'lucide-react';
import { useStore } from '../../store';

const MobileNavbar: React.FC = () => {
  const location = useLocation();
  const { currentUser, logout, createPost } = useStore();

  // Estado del modal y campos del formulario
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  if (!currentUser) return null;

  /** Devuelve la clase para resaltar el ícono activo */
  const isActive = (path: string) =>
    location.pathname === path ? 'text-indigo-600' : 'text-gray-500';

  /** Enviar la publicación y cerrar modal */
  const handleSubmit = () => {
    if (!content.trim()) return;
    createPost(content, imageUrl || undefined);
    setContent('');
    setImageUrl('');
    setIsOpen(false);
  };

  /** Selección aleatoria de imagen de demostración */
  const handleImageSelect = () => {
    const demoImages = [
      'https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2253643/pexels-photo-2253643.jpeg?auto=compress&cs=tinysrgb&w=800',
      // ... (tu lista completa)
    ];
    const randomImage =
      demoImages[Math.floor(Math.random() * demoImages.length)];
    setImageUrl(randomImage);
  };

  return (
    <>
      {/* --------- BOTÓN FLOTA Y MODAL ---------- */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed z-20 bottom-20 right-5 md:bottom-10 md:right-10 bg-indigo-600 text-white rounded-full p-3 shadow-lg hover:bg-indigo-700 transition-colors"
      >
        <PlusCircle className="h-6 w-6" />
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg w-full max-w-lg overflow-hidden shadow-xl">
            {/* Encabezado */}
            <div className="flex justify-between items-center border-b border-gray-200 p-4">
              <h2 className="text-xl font-semibold">Crear publicación</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            {/* Cuerpo */}
            <div className="p-4">
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="¿Qué estás pensando?"
                className="w-full h-32 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none"
              />
              {imageUrl && (
                <div className="mt-3 relative">
                  <img
                    src={imageUrl}
                    alt="Vista previa"
                    className="w-full h-40 object-cover rounded-lg"
                  />
                  <button
                    onClick={() => setImageUrl('')}
                    className="absolute top-2 right-2 bg-gray-800/70 text-white rounded-full p-1"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              )}
              <div className="flex mt-3">
                <button
                  onClick={handleImageSelect}
                  className="flex items-center text-gray-700 hover:text-indigo-600"
                >
                  <Image className="h-5 w-5 mr-1" />
                  <span>Agregar foto</span>
                </button>
              </div>
            </div>
            {/* Pie */}
            <div className="border-t border-gray-200 p-4 flex justify-end">
              <button
                onClick={handleSubmit}
                disabled={!content.trim()}
                className={`px-4 py-2 rounded-lg ${
                  content.trim()
                    ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                Publicar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* --------- NAVBAR MÓVIL ---------- */}
      <nav className="md:hidden fixed bottom-0 inset-x-0 z-20 border-t border-gray-200 bg-white/90 backdrop-blur">
        <ul className="flex justify-around items-center h-16 text-xs font-medium">
          {/* Inicio */}
          <li>
            <Link to="/" className={`flex flex-col items-center ${isActive('/')}`}>
              <Home className="h-6 w-6" />
              <span className="mt-0.5">Inicio</span>
            </Link>
          </li>

          {/* Explorar */}
          <li>
            <Link
              to="/explore"
              className={`flex flex-col items-center ${isActive('/explore')}`}
            >
              <Search className="h-6 w-6" />
              <span className="mt-0.5">Explorar</span>
            </Link>
          </li>

          {/* Publicar */}
          <li>
            <button
              onClick={() => setIsOpen(true)}
              className="flex flex-col items-center text-gray-500 hover:text-indigo-600"
            >
              <PlusSquare className="h-6 w-6" />
              <span className="mt-0.5">Publicar</span>
            </button>
          </li>

          {/* Notificaciones */}
          <li>
            <Link
              to="/notifications"
              className={`flex flex-col items-center ${isActive('/notifications')}`}
            >
              <Bell className="h-6 w-6" />
              <span className="mt-0.5">Notificaciones</span>
            </Link>
          </li>

          {/* Perfil */}
          <li>
            <Link
              to={`/profile/${currentUser.id}`}
              className={`flex flex-col items-center ${isActive(`/profile/${currentUser.id}`)}`}
            >
              <User className="h-6 w-6" />
              <span className="mt-0.5">Perfil</span>
            </Link>
          </li>

          {/* Salir */}
          <li>
            <button
              onClick={logout}
              className="flex flex-col items-center text-gray-600 hover:text-red-500 focus:outline-none"
            >
              <LogOut className="h-6 w-6" />
              <span className="mt-0.5">Salir</span>
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default MobileNavbar;
