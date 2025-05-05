import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Compass, Zap } from 'lucide-react';
import { useStore } from '../store';
import PostItem from '../components/posts/PostItem';
import logo from '../../public/assets/logo_sin_fondo.png'; // Logo de la aplicación

/**
 * Pantalla Explorar: muestra posts en tendencia, contenido aleatorio
 * y usuarios sugeridos. Incluye buscador por nombre o usuario.
 */
const Explore: React.FC = () => {
  const { posts, users, currentUser, followUser } = useStore();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState<'trending' | 'discover' | 'suggested'>('trending');

  /* --------------------------- Construcción de listas --------------------------- */
  // Posts que no son del usuario actual
  const otherPosts = posts.filter((p) => p.userId !== currentUser?.id);

  // Tendencia = mayor engagement (likes + comentarios)
  const trendingPosts = [...otherPosts]
    .sort((a, b) => (b.likes.length + b.comments.length) - (a.likes.length + a.comments.length))
    .slice(0, 5);

  // Descubrir = aleatorio sin los de tendencia
  const trendingIds = trendingPosts.map((p) => p.id);
  const discoverPosts = otherPosts
    .filter((p) => !trendingIds.includes(p.id))
    .sort(() => Math.random() - 0.5)
    .slice(0, 5);

  // Usuarios sugeridos (que aún no sigo)
  const followingIds = currentUser?.following || [];
  const suggestedUsers = users
    .filter((u) => u.id !== currentUser?.id && !followingIds.includes(u.id))
    .slice(0, 5);

  /* ------------------------------ Búsqueda ------------------------------ */
  // Filtrar usuarios por nombre o username
  const filteredUsers = searchQuery.trim()
    ? users.filter(
        (u) =>
          u.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
          u.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  return (
    <div className="relative">
      {/* Logo en móvil */}
      <img
        src={logo}
        alt="Unify"
        className="block md:hidden absolute right-0 h-9 w-auto"
      />

      {/* Título de la pantalla */}
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Explorar</h1>

      {/* Barra de búsqueda */}
      <div className="relative mb-6">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Buscar usuarios..."
          className="pl-10 pr-4 py-3 w-full bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
        />
      </div>

      {/* Resultados de búsqueda */}
      {searchQuery.trim() !== '' && (
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-3">Resultados</h2>

          {filteredUsers.length === 0 ? (
            <div className="bg-white rounded-lg p-4 text-center">
              <p className="text-gray-500">
                No se encontraron usuarios que coincidan con "{searchQuery}"
              </p>
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 divide-y divide-gray-200">
              {filteredUsers.map((user) => (
                <Link
                  key={user.id}
                  to={`/profile/${user.id}`}
                  className="flex items-center p-4 hover:bg-gray-50"
                >
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div className="ml-3">
                    <h3 className="font-medium text-gray-900">{user.name}</h3>
                    <p className="text-sm text-gray-500">@{user.username}</p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Pestañas de navegación (cuando no hay búsqueda) */}
      {searchQuery.trim() === '' && (
        <>
          <div className="flex space-x-2 mb-6">
            <button
              onClick={() => setActiveTab('trending')}
              className={`flex items-center px-4 py-2 rounded-full ${
                activeTab === 'trending'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Zap className="h-4 w-4 mr-1" />
              <span>Tendencia</span>
            </button>

            <button
              onClick={() => setActiveTab('discover')}
              className={`flex items-center px-4 py-2 rounded-full ${
                activeTab === 'discover'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Compass className="h-4 w-4 mr-1" />
              <span>Descubrir</span>
            </button>

            <button
              onClick={() => setActiveTab('suggested')}
              className={`flex items-center px-4 py-2 rounded-full ${
                activeTab === 'suggested'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Search className="h-4 w-4 mr-1" />
              <span>Sugeridos</span>
            </button>
          </div>

          {/* Contenido según la pestaña activa */}
          {activeTab === 'trending' && (
            <div className="space-y-4">
              <h2 className="text-lg font-semibold text-gray-800 mb-3">
                Publicaciones en tendencia
              </h2>
              {trendingPosts.map((post) => {
                const author = users.find((u) => u.id === post.userId);
                if (!author) return null;
                return (
                  <PostItem key={post.id} post={post} author={author} />
                );
              })}
            </div>
          )}

          {activeTab === 'discover' && (
            <div className="space-y-4">
              <h2 className="text-lg font-semibold text-gray-800 mb-3">
                Descubre contenido nuevo
              </h2>
              {discoverPosts.map((post) => {
                const author = users.find((u) => u.id === post.userId);
                if (!author) return null;
                return (
                  <PostItem key={post.id} post={post} author={author} />
                );
              })}
            </div>
          )}

          {activeTab === 'suggested' && (
            <div>
              <h2 className="text-lg font-semibold text-gray-800 mb-3">
                Usuarios sugeridos
              </h2>
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 divide-y divide-gray-200">
                {suggestedUsers.map((user) => (
                  <div key={user.id} className="p-4">
                    <div className="flex items-center">
                      <Link to={`/profile/${user.id}`}>
                        <img
                          src={user.avatar}
                          alt={user.name}
                          className="h-12 w-12 rounded-full object-cover"
                        />
                      </Link>
                      <div className="ml-3 flex-1">
                        <Link
                          to={`/profile/${user.id}`}
                          className="font-medium text-gray-900 hover:underline"
                        >
                          {user.name}
                        </Link>
                        <p className="text-sm text-gray-500">
                          @{user.username}
                        </p>
                      </div>
                      <button
                        onClick={() => currentUser && followUser(user.id)}
                        className="px-4 py-1 bg-indigo-600 text-white rounded-full text-sm font-medium hover:bg-indigo-700"
                      >
                        Seguir
                      </button>
                    </div>
                    <p className="text-gray-700 text-sm mt-2">
                      {user.bio}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Explore;
