
import { useStore } from '../store';
import PostItem from '../components/posts/PostItem';
import logo from '../../public/assets/logo_sin_fondo.png';
import { Post, User } from '../types';

/**
 * Página principal de inicio (feed)
 * Muestra publicaciones propias y de usuarios seguidos.
 */
const Feed: React.FC = () => {
  const { posts, users, currentUser } = useStore();

  // Filtrar posts: propios + de seguidos
  const feedPosts: Post[] = posts.filter(
    (post) => post.userId === currentUser?.id || currentUser?.following.includes(post.userId)
  );

  // Ordenar por fecha (más reciente primero)
  const sortedPosts: Post[] = [...feedPosts].sort(
    (a: Post, b: Post) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );

  return (
    <div className="relative">
      {/* Logo en móvil */}
      <img
        src={logo}
        alt="Unify"
        className="block md:hidden absolute right-0 h-9 w-auto"
      />

      <h1 className="text-2xl font-bold text-gray-900 mb-6">Inicio</h1>

      {sortedPosts.length === 0 ? (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 text-center">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">Tu feed está vacío</h2>
          <p className="text-gray-500">
            Sigue a más usuarios o crea publicaciones para ver contenido aquí.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {sortedPosts.map((post: Post) => {
            const author: User | undefined = users.find((user) => user.id === post.userId);
            if (!author) return null;

            return <PostItem key={post.id} post={post} author={author} />;
          })}
        </div>
      )}
    </div>
  );
};

export default Feed;

