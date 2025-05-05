import { Link } from 'react-router-dom';
import { Heart, MessageCircle, UserPlus, Clock } from 'lucide-react';
import { useStore } from '../store';
import { Notification } from '../types';
import logo from '../../public/assets/logo_sin_fondo.png'; // Logo de la aplicación

const Notifications: React.FC = () => {
  const { notifications, users, currentUser } = useStore();

  // Filtrar notificaciones para el usuario actual
  const userNotifications = notifications.filter(
    n => n.toUserId === currentUser?.id
  );

  // Ordenar por fecha (las más recientes primero)
  const sortedNotifications = [...userNotifications].sort(
    (a, b) =>
      new Date(b.createdAt).getTime() -
      new Date(a.createdAt).getTime()
  );

  // Formatear fecha relativa
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffHours = Math.floor(
      (now.getTime() - date.getTime()) / (1000 * 60 * 60)
    );

    if (diffHours < 1) {
      const diffMinutes = Math.floor(
        (now.getTime() - date.getTime()) / (1000 * 60)
      );
      return `${diffMinutes} min`;
    } else if (diffHours < 24) {
      return `${diffHours} h`;
    } else {
      const diffDays = Math.floor(diffHours / 24);
      return `${diffDays} día${diffDays > 1 ? 's' : ''}`;
    }
  };

  // Obtener icono y texto según el tipo de notificación
  const getNotificationContent = (notification: Notification) => {
    const fromUser = users.find(u => u.id === notification.fromUserId);
    if (!fromUser) return { icon: null, text: '' };

    switch (notification.type) {
      case 'like':
        return {
          icon: <Heart className="h-5 w-5 text-red-500" />,
          text: (
            <>
              <span className="font-medium">{fromUser.name}</span> le dio me gusta a tu publicación
            </>
          )
        };
      case 'comment':
        return {
          icon: <MessageCircle className="h-5 w-5 text-blue-500" />,
          text: (
            <>
              <span className="font-medium">{fromUser.name}</span> comentó tu publicación
            </>
          )
        };
      case 'follow':
        return {
          icon: <UserPlus className="h-5 w-5 text-green-500" />,
          text: (
            <>
              <span className="font-medium">{fromUser.name}</span> te siguió
            </>
          )
        };
      default:
        return { icon: null, text: '' };
    }
  };

  return (
    <div className="relative">
      {/* Logo en móvil */}
      <img
        src={logo}
        alt="Unify"
        className="block md:hidden absolute right-0 h-9 w-auto"
      />

      {/* Título de la sección */}
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Notificaciones</h1>

      {sortedNotifications.length === 0 ? (
        // Vista cuando no hay notificaciones
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 text-center">
          <div className="flex justify-center mb-4">
            <div className="bg-gray-100 p-4 rounded-full">
              <Clock className="h-8 w-8 text-gray-500" />
            </div>
          </div>
          <h2 className="text-xl font-semibold text-gray-700 mb-2">Sin notificaciones</h2>
          <p className="text-gray-500">
            Cuando tengas notificaciones, aparecerán aquí.
          </p>
        </div>
      ) : (
        // Lista de notificaciones
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 divide-y divide-gray-200">
          {sortedNotifications.map(n => {
            const fromUser = users.find(u => u.id === n.fromUserId);
            if (!fromUser) return null;

            const { icon, text } = getNotificationContent(n);

            return (
              <div
                key={n.id}
                className={`flex items-center p-4 ${
                  n.read ? '' : 'bg-blue-50'
                }`}
              >
                {/* Avatar del usuario */}
                <Link to={`/profile/${fromUser.id}`} className="mr-4">
                  <img
                    src={fromUser.avatar}
                    alt={fromUser.name}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                </Link>

                {/* Contenido de la notificación */}
                <div className="flex-1">
                  <div className="flex items-center">
                    <div className="mr-2">{icon}</div>
                    <p className="text-gray-800">{text}</p>
                  </div>
                  <div className="text-gray-500 text-sm mt-1">
                    {formatDate(n.createdAt)}
                  </div>
                </div>

                {/* Enlace a la publicación, si aplica */}
                {n.type !== 'follow' && n.postId && (
                  <Link
                    to={`/`}
                    className="ml-2 text-blue-600 text-sm hover:underline"
                  >
                    Ver
                  </Link>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Notifications;
