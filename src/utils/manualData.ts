import { UserManualSection } from '../types';

export const userManualSections: UserManualSection[] = [
  {
    id: 'getting-started',
    title: 'Primeros Pasos',
    icon: 'rocket',
    content: '¡Bienvenido a Unify!, un espacio donde todos encajan. Esta guía te ayudará a navegar y utilizar todas las funciones de nuestra plataforma de redes sociales.',
    subsections: [
      {
        id: 'creating-account',
        title: 'Crear una Cuenta',
        content: 'Para crear una cuenta nueva, haz clic en el botón "Registrarse" en la página de inicio de sesión. Deberás proporcionar tu correo electrónico, crear un nombre de usuario y establecer una contraseña. Para esta demo ya has iniciado sesión como Emma Wilson.'
      },
      {
        id: 'navigating',
        title: 'Navegación en la App',
        content: 'La navegación principal se encuentra en la parte inferior de la pantalla en dispositivos móviles y en el lateral izquierdo en escritorio. Desde allí puedes acceder a tu feed, explorar contenido, revisar notificaciones y ver tu perfil.'
      },
      {
        id: 'profile-setup',
        title: 'Configurar tu Perfil',
        content: 'Visita tu página de perfil para añadir tu biografía, foto de perfil y otra información personal. Haz clic en el botón "Editar Perfil" para realizar cambios.'
      }
    ]
  },
  {
    id: 'feed',
    title: 'Feed y Publicaciones',
    icon: 'layout-dashboard',
    content: 'Tu feed muestra publicaciones de los usuarios que sigues, lo que te permite estar al día con su actividad.',
    subsections: [
      {
        id: 'viewing-feed',
        title: 'Ver tu Feed',
        content: 'El feed muestra las publicaciones más recientes de los usuarios que sigues. Desliza hacia abajo para ver más publicaciones y desliza hacia arriba para actualizar y ver nuevo contenido.'
      },
      {
        id: 'creating-post',
        title: 'Crear una Publicación',
        content: 'Para crear una nueva publicación, haz clic en el botón "+" en la barra de navegación. Puedes escribir texto y subir una imagen. Usa hashtags para hacer tu publicación más visible.'
      },
      {
        id: 'interacting',
        title: 'Interacción con Publicaciones',
        content: 'Puedes dar "me gusta" a una publicación haciendo clic en el ícono de corazón, comentar haciendo clic en el ícono de comentario y compartir haciendo clic en el ícono de compartir. Para guardar una publicación, haz clic en el ícono de marcador.'
      }
    ]
  },
  {
    id: 'connections',
    title: 'Amigos y Seguidores',
    icon: 'users',
    content: 'Conéctate con otros usuarios siguiendo sus cuentas para ver sus publicaciones en tu feed.',
    subsections: [
      {
        id: 'finding-users',
        title: 'Encontrar Usuarios',
        content: 'Utiliza la función de búsqueda en la sección Explorar para encontrar usuarios por nombre de usuario o nombre. También puedes descubrir nuevos usuarios en la sección "Sugeridos para ti".'
      },
      {
        id: 'follow-unfollow',
        title: 'Seguir y Dejar de Seguir',
        content: 'Para seguir a un usuario, visita su perfil y haz clic en el botón "Seguir". Para dejar de seguirlo, haz clic en el botón "Siguiendo" en su perfil. Al seguir a alguien, sus publicaciones aparecerán en tu feed.'
      },
      {
        id: 'managing-connections',
        title: 'Gestionar Conexiones',
        content: 'En tu página de perfil puedes ver a quién sigues y quién te sigue. Haz clic en "Siguiendo" o "Seguidores" para ver la lista completa.'
      }
    ]
  },
  {
    id: 'notifications',
    title: 'Notificaciones',
    icon: 'bell',
    content: 'Mantente al tanto de las interacciones con tu contenido y nuevos seguidores a través de las notificaciones.',
    subsections: [
      {
        id: 'types',
        title: 'Tipos de Notificaciones',
        content: 'Recibirás notificaciones cuando alguien le dé me gusta a tu publicación, comente en tu publicación o te siga. Cada tipo de notificación tiene un ícono diferente para una fácil identificación.'
      },
      {
        id: 'managing',
        title: 'Gestionar Notificaciones',
        content: 'Accede a todas tus notificaciones en la pestaña Notificaciones. Las notificaciones sin leer aparecen resaltadas. Haz clic en una notificación para ver el contenido relacionado.'
      }
    ]
  },
  {
    id: 'privacy',
    title: 'Privacidad y Seguridad',
    icon: 'shield',
    content: 'Protege tu cuenta y administra tu configuración de privacidad para controlar quién puede ver tu contenido.',
    subsections: [
      {
        id: 'privacy-settings',
        title: 'Configuración de Privacidad',
        content: 'Administra quién puede ver tus publicaciones, historias e información de perfil en la configuración de Privacidad. Puedes establecer tu cuenta como pública o privada.'
      },
      {
        id: 'blocking',
        title: 'Bloquear y Silenciar',
        content: 'Si no deseas interactuar con ciertos usuarios, puedes bloquearlos o silenciarlos. Los usuarios bloqueados no podrán ver tu perfil ni tus publicaciones. Los usuarios silenciados siguen conectados, pero su contenido no aparecerá en tu feed.'
      },
      {
        id: 'reporting',
        title: 'Reportar Contenido',
        content: 'Si encuentras contenido inapropiado, haz clic en los tres puntos de la publicación y selecciona "Reportar" para notificar a nuestro equipo de moderación.'
      }
    ]
  }
];
