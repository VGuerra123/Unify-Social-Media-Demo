import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import {
  CalendarDays,
  MapPin,
  Link as LinkIcon,
  CheckCircle,
} from 'lucide-react';
import { useStore } from '../store';
import PostItem from '../components/posts/PostItem';

const COVER_URL =
  'https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg?auto=compress&cs=tinysrgb&w=1600';

/**
 * Perfil de usuario – ordena publicaciones de más reciente a más antigua.
 */
const Profile: React.FC = () => {
  /* -------------------------------------------------------------------------- */
  /*  Datos & helpers                                                           */
  /* -------------------------------------------------------------------------- */
  const { userId } = useParams<{ userId: string }>();
  const { users, posts, currentUser, followUser, unfollowUser } = useStore();

  if (!userId) return <p className="text-center py-8">Usuario no encontrado</p>;
  const profileUser = users.find((u) => u.id === userId);
  if (!profileUser) return <p className="text-center py-8">Usuario no encontrado</p>;

  // Parallax portada
  const coverRef = useRef<HTMLImageElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      const y = window.pageYOffset;
      coverRef.current && (coverRef.current.style.transform = `translateY(${y * 0.2}px)`);
      setIsScrolled(y > 150);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Helper para ordenar
  const sortDesc = (a: { createdAt: string }, b: { createdAt: string }) =>
    new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();

  // Tabs & posts
  const [activeTab, setActiveTab] = useState<'posts' | 'media' | 'likes'>('posts');
  const userPosts = posts.filter((p) => p.userId === userId).sort(sortDesc);
  const mediaPosts = userPosts.filter((p) => !!p.imageUrl).sort(sortDesc);
  const likedPosts = posts.filter((p) => p.likes.includes(userId)).sort(sortDesc);

  // Quick time formatter
  const formatDate = (iso: string) => {
    const diff = Date.now() - new Date(iso).getTime();
    const m = Math.floor(diff / 60000);
    if (m < 60) return `${m}m`;
    const h = Math.floor(m / 60);
    if (h < 24) return `${h}h`;
    const d = Math.floor(h / 24);
    return `${d}d`;
  };

  const online = profileUser.id === currentUser?.id;
  const lastActive = profileUser.lastActiveAt ?? profileUser.joinedAt;

  // Follow / Unfollow
  const isFollowing = currentUser?.following.includes(userId) ?? false;
  const toggleFollow = () => (isFollowing ? unfollowUser(userId) : followUser(userId));

  /* -------------------------------------------------------------------------- */
  /*  UI                                                                        */
  /* -------------------------------------------------------------------------- */
  return (
    <div className="max-w-xl mx-auto px-4 pb-12">
      {/* Header */}
      <header className="relative">
        <img
          ref={coverRef}
          src={COVER_URL}
          alt="Portada"
          className="w-full h-60 object-cover rounded-b-3xl transition-transform will-change-transform select-none"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/50 rounded-b-3xl" />
        <div className="absolute -bottom-14 left-6">
          <img
            src={profileUser.avatar}
            alt={profileUser.name}
            className="h-32 w-32 rounded-full ring-4 ring-white object-cover shadow-xl"
          />
        </div>
        {currentUser?.id !== profileUser.id && (
          <button
            onClick={toggleFollow}
            className={`absolute bottom-4 right-6 px-6 py-2.5 rounded-full font-semibold shadow-lg backdrop-blur-sm transition focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
  isFollowing ? 'bg-white text-gray-800 border border-gray-300 hover:bg-gray-100' : 'bg-indigo-600 text-white hover:bg-indigo-700'
}`}
          >
            {isFollowing ? 'Siguiendo' : 'Seguir'}
          </button>
        )}
      </header>

      {/* Información */}
      <section className="mt-20 space-y-2">
        <div className="flex items-center gap-2">
          <h1 className="text-3xl font-bold text-gray-900 leading-tight">{profileUser.name}</h1>
          <CheckCircle className="h-5 w-5 text-indigo-500" />
        </div>
        <div className="flex flex-wrap items-center gap-2 text-gray-600 text-sm">
          <span>@{profileUser.username}</span>
          <span className="hidden sm:inline">·</span>
          {online ? (
            <span className="flex items-center">
              <span className="h-2 w-2 bg-green-400 rounded-full animate-ping mr-1" />En línea
            </span>
          ) : (
            <span>Activo hace {formatDate(lastActive)}</span>
          )}
        </div>
        {profileUser.bio && (
          <p className="mt-2 text-gray-700 leading-relaxed whitespace-pre-wrap">{profileUser.bio}</p>
        )}
        <div className="flex flex-wrap items-center gap-4 text-gray-600 text-sm pt-2">
          <span className="flex items-center gap-1">
            <CalendarDays className="h-4 w-4" />
            <span>Se unió hace {formatDate(profileUser.joinedAt)}</span>
          </span>
          <span className="flex items-center gap-1">
            <MapPin className="h-4 w-4" />
            <span>{profileUser.location ?? 'Santiago de Chile'}</span>
          </span>
          {profileUser.website && (
            <a
              href={profileUser.website}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 text-indigo-600 hover:underline"
            >
              <LinkIcon className="h-4 w-4" />
              <span>{new URL(profileUser.website).hostname}</span>
            </a>
          )}
        </div>
        <div className="grid grid-cols-2 gap-4 pt-6">
          {[{ label: 'Siguiendo', value: profileUser.following.length }, { label: 'Seguidores', value: profileUser.followers.length }].map((stat) => (
            <div key={stat.label} className="bg-white py-5 rounded-xl shadow hover:shadow-md transition text-center">
              <div className="text-xl font-semibold text-gray-900 leading-none">{stat.value}</div>
              <div className="text-gray-500 text-sm tracking-wide mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Tabs */}
      <nav className={`mt-10 sticky top-0 bg-white bg-opacity-95 backdrop-blur-sm z-10 border-b transition-shadow ${isScrolled ? 'shadow-sm' : ''}`}>
        <ul className="flex justify-around text-sm font-medium text-gray-600">
          {(['posts', 'media', 'likes'] as const).map((tab) => (
            <li key={tab} className="w-full text-center">
              <button
                onClick={() => setActiveTab(tab)}
                className={`relative w-full pb-3 pt-2 transition-colors ${activeTab === tab ? 'text-indigo-600 after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-0.5 after:h-0.5 after:w-10 after:bg-indigo-600 after:rounded-full' : 'hover:text-gray-900'}`}
              >
                {tab === 'posts' ? 'Publicaciones' : tab === 'media' ? 'Multimedia' : 'Me gusta'}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Contenido */}
      <div className="mt-8 space-y-6">
        {(activeTab === 'posts' ? userPosts : activeTab === 'media' ? mediaPosts : likedPosts).length ? (
          (activeTab === 'likes' ? likedPosts : activeTab === 'posts' ? userPosts : mediaPosts).map((post) => (
            <div key={post.id} className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden">
              <PostItem post={post} author={activeTab === 'likes' ? users.find((u) => u.id === post.userId)! : profileUser} />
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 py-10">Aún no hay contenido</p>
        )}
      </div>
    </div>
  );
};

export default Profile;
