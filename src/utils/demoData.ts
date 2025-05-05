import { User, Post, Notification } from '../types';

/**
 * Genera datos de demostración con mayor variedad de publicaciones: arte, viajes, tech, cocina y foto‑paisaje.
 * Incluye posts con y sin imágenes para probar las pestañas Multimedia/Textos.
 */
export const generateDemoData = () => {
  /* -------------------------------------------------------------------------- */
  /*  Usuarios                                                                  */
  /* -------------------------------------------------------------------------- */
  const demoUsers: User[] = [
    {
      id: 'user-1',
      username: 'ju4n4._10',
      name: 'Juana Contreras',
      avatar:
        'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
      bio: 'Artista digital y diseñadora UX. Amante del café.',
      followers: ['user-2', 'user-3', 'user-4'],
      following: ['user-2', 'user-5'],
      joinedAt: '2023-01-15T10:30:00Z',
    },
    {
      id: 'user-2',
      username: 'alberto_to',
      name: 'Alberto Natales',
      avatar:
        'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=150',
      bio: 'Ingeniero de software y aficionado al senderismo.',
      followers: ['user-1', 'user-3'],
      following: ['user-1', 'user-3', 'user-4'],
      joinedAt: '2023-02-18T14:20:00Z',
    },
    {
      id: 'user-3',
      username: 'shia_prk',
      name: 'Sara González',
      avatar:
        'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
      bio: 'Bloguera de viajes explorando nuevos lugares. Amante de la comida.',
      followers: ['user-1', 'user-2', 'user-5'],
      following: ['user-1', 'user-2', 'user-4'],
      joinedAt: '2023-03-05T09:15:00Z',
    },
    {
      id: 'user-4',
      username: 'did_ler',
      name: 'Tadeo Silva',
      avatar:
        'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150',
      bio: 'Fotógrafo y aventurero al aire libre.',
      followers: ['user-2', 'user-3', 'user-5'],
      following: ['user-5'],
      joinedAt: '2023-01-28T16:45:00Z',
    },
    {
      id: 'user-5',
      username: 'olivia_singh',
      name: 'Olivia Soto',
      avatar:
        'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150',
      bio: 'Chef y autora de libros de cocina. Impartiendo clases culinarias online.',
      followers: ['user-1', 'user-4'],
      following: ['user-3', 'user-4'],
      joinedAt: '2023-04-12T11:30:00Z',
    },
  ];

  /* -------------------------------------------------------------------------- */
  /*  Publicaciones                                                             */
  /* -------------------------------------------------------------------------- */
  const demoPosts: Post[] = [
    // --- EXISTENTES ---------------------------------------------------------
    {
      id: 'post-1',
      userId: 'user-3',
      content:
        '¡Acabo de visitar el café más increíble en Tokio! El matcha latte fue espectacular. #viajes #foodie',
      imageUrl:
        'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=800',
      likes: ['user-1', 'user-2', 'user-4'],
      comments: [
        {
          id: 'comment-1',
          userId: 'user-1',
          content: '¡Se ve delicioso! ¿Cómo se llama el lugar?',
          createdAt: '2025-05-01T14:35:00Z',
        },
        {
          id: 'comment-2',
          userId: 'user-3',
          content: 'Se llama Cafe Kitsuné en Shibuya. ¡Vale la pena visitarlo!',
          createdAt: '2025-05-02T14:40:00Z',
        },
      ],
      createdAt: '2025-05-01T14:30:00Z',
    },
    {
      id: 'post-2',
      userId: 'user-5',
      content:
        'Comparto mi última receta de pasta casera con salsa de trufa. ¡Más fácil de lo que crees! #cocina #hechoencasa',
      imageUrl:
        'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=800',
      likes: ['user-1', 'user-3'],
      comments: [
        {
          id: 'comment-3',
          userId: 'user-3',
          content: '¡Se ve increíble! ¿Podrías compartir la receta?',
          createdAt: '2025-05-03T16:15:00Z',
        },
      ],
      createdAt: '2025-04-18T16:00:00Z',
    },
    {
      id: 'post-3',
      userId: 'user-1',
      content:
        'Acabo de terminar mi último proyecto de arte digital. ¡Me tomó más de 30 horas y estoy muy orgullosa del resultado! #artedigital #creatividad',
      imageUrl:
        'https://images.pexels.com/photos/1616403/pexels-photo-1616403.jpeg?auto=compress&cs=tinysrgb&w=800',
      likes: ['user-2', 'user-3', 'user-4', 'user-5'],
      comments: [
        {
          id: 'comment-4',
          userId: 'user-2',
          content: '¡Increíble! ¿Qué software utilizas?',
          createdAt: '2025-04-17T10:15:00Z',
        },
        {
          id: 'comment-5',
          userId: 'user-1',
          content: '¡Gracias! Uso una combinación de Procreate y Adobe Illustrator.',
          createdAt: '2025-04-18T10:20:00Z',
        },
        {
          id: 'comment-6',
          userId: 'user-4',
          content: 'Los colores son impresionantes. ¡Me encantaría ver un video del proceso algún día!',
          createdAt: '2025-04-18T11:05:00Z',
        },
      ],
      createdAt: '2025-04-17T10:00:00Z',
    },
    {
      id: 'post-4',
      userId: 'user-2',
      content:
        '¡Por fin alcancé la cima del Monte Rainier tras meses de entrenamiento! La vista desde arriba lo valió todo. #senderismo #montañas',
      imageUrl:
        'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=800',
      likes: ['user-1', 'user-3', 'user-4'],
      comments: [
        {
          id: 'comment-7',
          userId: 'user-4',
          content: '¡Felicidades! También está en mi lista de pendientes.',
          createdAt: '2025-04-16T18:45:00Z',
        },
      ],
      createdAt: '2025-04-16T18:30:00Z',
    },
    {
      id: 'post-5',
      userId: 'user-4',
      content:
        'Capturé este amanecer en el Parque Nacional Joshua Tree. La naturaleza es la mejor artista. #fotografía #naturaleza',
      imageUrl:
        'https://images.pexels.com/photos/1624438/pexels-photo-1624438.jpeg?auto=compress&cs=tinysrgb&w=800',
      likes: ['user-1', 'user-2', 'user-3', 'user-5'],
      comments: [
        {
          id: 'comment-8',
          userId: 'user-3',
          content: '¡Impresionante! ¿Qué cámara utilizas?',
          createdAt: '2025-05-02T08:20:00Z',
        },
        {
          id: 'comment-9',
          userId: 'user-4',
          content: 'Sony A7IV con un lente 24‑70 mm. Es mi favorita para paisajes.',
          createdAt: '2025-05-02T08:30:00Z',
        },
      ],
      createdAt: '2025-05-02T08:00:00Z',
    },
    {
      id: 'post-6',
      userId: 'user-2',
      content:
        'Probando el nuevo framework de JavaScript \\u201cQuantum.js\\u201d — ¡los benchmarks son una locura! #dev #javascript',
      imageUrl: undefined, // Solo texto
      likes: ['user-1'],
      comments: [],
      createdAt: '2025-05-03T09:00:00Z',
    },
    {
      id: 'post-7',
      userId: 'user-1',
      content:
        'Pequeño timelapse del proceso de ilustración 🌌 (GIF en comentarios).',
      imageUrl:
        'https://images.pexels.com/photos/1785703/pexels-photo-1785703.jpeg?auto=compress&cs=tinysrgb&w=800',
      likes: ['user-3', 'user-5'],
      comments: [
        {
          id: 'comment-10',
          userId: 'user-5',
          content: '¡El contraste de colores es una pasada!',
          createdAt: '2025-05-03T10:25:00Z',
        },
      ],
      createdAt: '2025-05-03T10:00:00Z',
    },
    {
      id: 'post-8',
      userId: 'user-5',
      content:
        'Mini‑tutorial: Cómo emplatar para fotos de Instagram 📸🍽️',
      imageUrl:
        'https://images.pexels.com/photos/2232/vegetables-italian-pizza-restaurant.jpg?auto=compress&cs=tinysrgb&w=800',
      likes: ['user-1', 'user-3', 'user-4'],
      comments: [],
      createdAt: '2025-05-02T19:00:00Z',
    },
    {
      id: 'post-9',
      userId: 'user-3',
      content:
        'Top 5 mercados callejeros que no puedes perderte en Bangkok. Próximamente video‑blog completo.',
      imageUrl:
        'https://images.pexels.com/photos/302789/pexels-photo-302789.jpeg?auto=compress&cs=tinysrgb&w=800',
      likes: ['user-2'],
      comments: [],
      createdAt: '2025-05-01T07:45:00Z',
    },
    {
      id: 'post-10',
      userId: 'user-4',
      content:
        'Nueva serie de fotos en blanco y negro: \\u201cSombras Urbanas\\u201d. Aquí un adelanto.',
      imageUrl:
        'https://images.pexels.com/photos/45982/pexels-photo-45982.jpeg?auto=compress&cs=tinysrgb&w=800',
      likes: ['user-2', 'user-5'],
      comments: [
        {
          id: 'comment-11',
          userId: 'user-2',
          content: 'El juego de luces es brutal 🔥',
          createdAt: '2025-05-02T12:10:00Z',
        },
      ],
      createdAt: '2025-04-30T20:15:00Z',
    },
    {
      id: 'post-11',
      userId: 'user-3',
      content: 'Recorriendo los callejones de Hanoi en busca del mejor Pho 🍜',
      imageUrl:
        'https://images.pexels.com/photos/2788792/pexels-photo-2788792.jpeg?auto=compress&cs=tinysrgb&w=800',
      likes: ['user-2', 'user-5'],
      comments: [],
      createdAt: '2025-04-29T07:30:00Z',
    },
    {
      id: 'post-12',
      userId: 'user-2',
      content:
        'Tip rápido: usa `pnpm` en lugar de `npm` para instalaciones un 50 % más rápidas. #devtips',
      imageUrl: undefined,
      likes: ['user-1'],
      comments: [],
      createdAt: '2025-05-02T09:40:00Z',
    },
    {
      id: 'post-13',
      userId: 'user-4',
      content:
        'Atardecer con drone sobre el desierto de Atacama. La paleta de colores natural no necesita filtros.',
      imageUrl:
        'https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=800',
      likes: ['user-1', 'user-3'],
      comments: [],
      createdAt: '2025-05-01T19:10:00Z',
    },
    {
      id: 'post-14',
      userId: 'user-5',
      content: 'Nuevo reel: 3 ideas de desayunos proteicos en menos de 10 min. 💪🍳',
      imageUrl:
        'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=800',
      likes: ['user-2', 'user-3', 'user-4'],
      comments: [],
      createdAt: '2025-04-28T06:50:00Z',
    },
    {
      id: 'post-15',
      userId: 'user-1',
      content:
        'WIP de ilustración: jugando con texturas neon RGB. Comentarios bienvenidos 🖌️✨',
      imageUrl: undefined,
      likes: ['user-3'],
      comments: [],
      createdAt: '2025-05-03T11:20:00Z',
    },
    {
      id: 'post-16',
      userId: 'user-2',
      content: 'Primer trail nocturno con linternas frontales, increíble experiencia. #outdoors',
      imageUrl:
        'https://images.pexels.com/photos/1470391/pexels-photo-1470391.jpeg?auto=compress&cs=tinysrgb&w=800',
      likes: ['user-4'],
      comments: [],
      createdAt: '2025-04-30T22:15:00Z',
    },
    {
      id: 'post-17',
      userId: 'user-3',
      content:
        '¿Sabías que en Singapur hay un jardín nocturno iluminado con LEDs gigantes? Subiré vlog pronto.',
      imageUrl:
        'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=800',
      likes: ['user-1'],
      comments: [],
      createdAt: '2025-04-27T13:05:00Z',
    },
    {
      id: 'post-18',
      userId: 'user-4',
      content: 'Mini serie macro: gotas de lluvia sobre pétalos 🌧️🌸',
      imageUrl:
        'https://images.pexels.com/photos/450062/pexels-photo-450062.jpeg?auto=compress&cs=tinysrgb&w=800',
      likes: ['user-2', 'user-5'],
      comments: [],
      createdAt: '2025-04-26T09:30:00Z',
    },
    {
      id: 'post-19',
      userId: 'user-5',
      content:
        'Pregunta abierta: ¿Salsa BBQ coreana o americana para costillas? 🤔',
      imageUrl: undefined,
      likes: ['user-1', 'user-3'],
      comments: [],
      createdAt: '2025-05-01T17:55:00Z',
    },
    {
      id: 'post-20',
      userId: 'user-2',
      content: 'Benchmark: Rust vs Go en servicios gRPC — resultados sorprendentes (hilo 👇)',
      imageUrl: undefined,
      likes: ['user-1', 'user-3'],
      comments: [],
      createdAt: '2025-05-02T12:00:00Z',
    },

    /* ---------------------------------------------------------------------- */
    /* 21‑30                                                                  */
    /* ---------------------------------------------------------------------- */
    {
      id: 'post-21',
      userId: 'user-1',
      content: 'Compartiendo paleta de colores retro‑futurista 🎨 #inspo',
      imageUrl:
        'https://images.pexels.com/photos/225502/pexels-photo-225502.jpeg?auto=compress&cs=tinysrgb&w=800',
      likes: [],
      comments: [],
      createdAt: '2025-04-25T20:30:00Z',
    },
    {
      id: 'post-22',
      userId: 'user-3',
      content: 'Dato curioso: el 60 % de la población en Islandia cree en elfos. #traveltrivia',
      imageUrl: undefined,
      likes: ['user-5'],
      comments: [],
      createdAt: '2025-04-24T14:10:00Z',
    },
    {
      id: 'post-23',
      userId: 'user-4',
      content: 'Workshop online: Fotografía nocturna — inscripciones abiertas.',
      imageUrl:
        'https://images.pexels.com/photos/261044/pexels-photo-261044.jpeg?auto=compress&cs=tinysrgb&w=800',
      likes: ['user-2'],
      comments: [],
      createdAt: '2025-04-24T09:45:00Z',
    },
    {
      id: 'post-24',
      userId: 'user-5',
      content: 'Receta express: hummus de betarraga (color + nutrientes).',
      imageUrl:
        'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
      likes: ['user-1', 'user-2'],
      comments: [],
      createdAt: '2025-05-02T15:40:00Z',
    },
    {
      id: 'post-25',
      userId: 'user-2',
      content: 'Iniciando reto de 30 días sin café ☕🚫 — día 1.',
      imageUrl: undefined,
      likes: [],
      comments: [],
      createdAt: '2025-05-03T08:00:00Z',
    },
    {
      id: 'post-26',
      userId: 'user-1',
      content: 'Sketch rápido de personaje cyberpunk antes de dormir.',
      imageUrl:
        'https://images.pexels.com/photos/2387793/pexels-photo-2387793.jpeg?auto=compress&cs=tinysrgb&w=800',
      likes: ['user-2', 'user-3'],
      comments: [],
      createdAt: '2025-04-23T23:50:00Z',
    },
    {
      id: 'post-27',
      userId: 'user-3',
      content:
        'Dato: En Japón hay máquinas expendedoras con ramen caliente. ¡Vídeo pronto!',
      imageUrl: undefined,
      likes: ['user-1'],
      comments: [],
      createdAt: '2025-04-23T12:20:00Z',
    },
    {
      id: 'post-28',
      userId: 'user-4',
      content:
        'Fotografiando la vía láctea en el desierto. ISO 3200, 20 s, f/2.8 📷',
      imageUrl:
        'https://images.pexels.com/photos/1252869/pexels-photo-1252869.jpeg?auto=compress&cs=tinysrgb&w=800',
      likes: ['user-2', 'user-5'],
      comments: [],
      createdAt: '2025-04-22T02:10:00Z',
    },
    {
      id: 'post-29',
      userId: 'user-5',
      content:
        '¿Team cilantro o sin cilantro en el guacamole? 🥑 Cuéntenme abajo.',
      imageUrl: undefined,
      likes: ['user-1', 'user-4'],
      comments: [],
      createdAt: '2025-04-30T18:25:00Z',
    },
    {
      id: 'post-30',
      userId: 'user-2',
      content:
        'Live‑coding: construyendo un clon de Twitter con Next.js 15 — link al repo en bio.',
      imageUrl:
        'https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=800',
      likes: ['user-1', 'user-3'],
      comments: [],
      createdAt: '2025-05-03T14:40:00Z',
    },
    {
      id: 'post-31',
      userId: 'user-1',
      content:
        'Probando pinceles de acuarela digital. Resultado súper orgánico 🎨',
      imageUrl:
        'https://images.pexels.com/photos/461064/pexels-photo-461064.jpeg?auto=compress&cs=tinysrgb&w=800',
      likes: ['user-3'],
      comments: [],
      createdAt: '2025-04-21T11:30:00Z',
    },
    {
      id: 'post-32',
      userId: 'user-3',
      content:
        'Mi equipaje para 3 meses en Sudeste Asiático — minimalismo extremo 🧳✨',
      imageUrl:
        'https://images.pexels.com/photos/821652/pexels-photo-821652.jpeg?auto=compress&cs=tinysrgb&w=800',
      likes: ['user-5'],
      comments: [],
      createdAt: '2025-04-20T08:15:00Z',
    },
    {
      id: 'post-33',
      userId: 'user-4',
      content: 'Tips de composición: regla de los tercios vs proporción áurea.',
      imageUrl: undefined,
      likes: ['user-2', 'user-3'],
      comments: [],
      createdAt: '2025-04-19T17:05:00Z',
    },
    {
      id: 'post-34',
      userId: 'user-5',
      content:
        'Nuevo batch de galletas veganas ✨ Receta sin azúcar refinada en stories.',
      imageUrl:
        'https://images.pexels.com/photos/302680/pexels-photo-302680.jpeg?auto=compress&cs=tinysrgb&w=800',
      likes: ['user-1', 'user-4'],
      comments: [],
      createdAt: '2025-04-29T10:00:00Z',
    },
    {
      id: 'post-35',
      userId: 'user-2',
      content:
        'Configuré mi teclado mecánico con switches silent‑red. Productividad +10 %',
      imageUrl:
        'https://images.pexels.com/photos/845451/pexels-photo-845451.jpeg?auto=compress&cs=tinysrgb&w=800',
      likes: ['user-3'],
      comments: [],
      createdAt: '2025-05-02T13:25:00Z',
    },
    {
      id: 'post-36',
      userId: 'user-1',
      content:
        'Paleta neón inspirada en Blade Runner para mi próximo póster. Thoughts?',
      imageUrl: undefined,
      likes: ['user-2', 'user-5'],
      comments: [],
      createdAt: '2025-04-18T09:45:00Z',
    },
    {
      id: 'post-37',
      userId: 'user-3',
      content:
        'Consejo: usa Google Maps offline en zonas rurales; me salvó en Laos 🙌',
      imageUrl:
        'https://images.pexels.com/photos/2398220/pexels-photo-2398220.jpeg?auto=compress&cs=tinysrgb&w=800',
      likes: [],
      comments: [],
      createdAt: '2025-04-17T06:40:00Z',
    },
    {
      id: 'post-38',
      userId: 'user-4',
      content:
        'Noche de luna llena reflejada en el lago. Fotografía larga exposición.',
      imageUrl:
        'https://images.pexels.com/photos/247599/pexels-photo-247599.jpeg?auto=compress&cs=tinysrgb&w=800',
      likes: ['user-2', 'user-5'],
      comments: [],
      createdAt: '2025-04-16T22:55:00Z',
    },
    {
      id: 'post-39',
      userId: 'user-5',
      content:
        'Pequeño secreto: agrega un toque de salsa de pescado a la sopa de miso 😏',
      imageUrl: undefined,
      likes: ['user-1'],
      comments: [],
      createdAt: '2025-04-28T14:30:00Z',
    },
    {
      id: 'post-40',
      userId: 'user-2',
      content:
        'Micro‑benchmark: Zig vs C en WebAssembly — spoiler: ¡Zig sorprende! 🚀',
      imageUrl:
        'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=800',
      likes: ['user-3', 'user-4'],
      comments: [],
      createdAt: '2025-05-03T15:15:00Z',
    },
    {
      id: 'post-41',
      userId: 'user-3',
      content:
        'Aprendiendo a tostar mis propios granos de café en Vietnam ☕🌱 Experiencia brutal.',
      imageUrl:
        'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=800',
      likes: ['user-5'],
      comments: [],
      createdAt: '2025-04-15T07:20:00Z',
    },
    {
      id: 'post-42',
      userId: 'user-1',
      content:
        'Sneak peek de mi póster con realidad aumentada ⚡🎨 — lanzamiento mañana.',
      imageUrl:
        'https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=800',
      likes: ['user-3', 'user-4'],
      comments: [],
      createdAt: '2025-05-03T18:10:00Z',
    },
    {
      id: 'post-43',
      userId: 'user-5',
      content:
        '¡Abiertas inscripciones para mi curso “Salsas del Mundo” online! 🍅🌶️',
      imageUrl:
        'https://images.pexels.com/photos/5591660/pexels-photo-5591660.jpeg?auto=compress&cs=tinysrgb&w=800',
      likes: ['user-2', 'user-3'],
      comments: [],
      createdAt: '2025-04-29T08:55:00Z',
    },
    {
      id: 'post-44',
      userId: 'user-4',
      content:
        'Timelapse de nubes sobre los Andes ☁️🏔️ — 3000 fotos condensadas en 30 s.',
      imageUrl:
        'https://images.pexels.com/photos/158827/clouds-cloudporn-weather-lookup-158827.jpeg?auto=compress&cs=tinysrgb&w=800',
      likes: ['user-1', 'user-2', 'user-5'],
      comments: [],
      createdAt: '2025-04-14T19:00:00Z',
    },
    {
      id: 'post-45',
      userId: 'user-2',
      content: 'Dev meme del día: “works on my machine” 😂',
      imageUrl:
        'https://images.pexels.com/photos/942317/pexels-photo-942317.jpeg?auto=compress&cs=tinysrgb&w=800',
      likes: ['user-1'],
      comments: [],
      createdAt: '2025-05-03T09:15:00Z',
    },
    {
      id: 'post-46',
      userId: 'user-3',
      content:
        'Foto nocturna desde el tren Trans‑Siberiano 🚂🌌 — silencio absoluto.',
      imageUrl:
        'https://images.pexels.com/photos/1535160/pexels-photo-1535160.jpeg?auto=compress&cs=tinysrgb&w=800',
      likes: ['user-4'],
      comments: [],
      createdAt: '2025-04-13T22:05:00Z',
    },
    {
      id: 'post-47',
      userId: 'user-1',
      content:
        'Venta benéfica de prints — el 100 % de lo recaudado va a refugios de animales. 🐾',
      imageUrl:
        'https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&cs=tinysrgb&w=800',
      likes: ['user-2', 'user-3', 'user-5'],
      comments: [],
      createdAt: '2025-04-30T11:10:00Z',
    },
    {
      id: 'post-48',
      userId: 'user-5',
      content:
        'Pan sin gluten recién salido del horno 😍 Receta ultra esponjosa.',
      imageUrl:
        'https://images.pexels.com/photos/461428/pexels-photo-461428.jpeg?auto=compress&cs=tinysrgb&w=800',
      likes: ['user-1', 'user-4'],
      comments: [],
      createdAt: '2025-04-27T16:35:00Z',
    },
    {
      id: 'post-49',
      userId: 'user-4',
      content:
        'Revelé mi último carrete de película analógica. Pure grain love 🎞️',
      imageUrl:
        'https://images.pexels.com/photos/1252983/pexels-photo-1252983.jpeg?auto=compress&cs=tinysrgb&w=800',
      likes: ['user-2'],
      comments: [],
      createdAt: '2025-04-25T13:20:00Z',
    },
    {
      id: 'post-50',
      userId: 'user-2',
      content:
        'Subí las diapositivas del taller de robótica con Raspberry Pi. Link en bio 🤖',
      imageUrl: undefined,
      likes: ['user-3', 'user-4'],
      comments: [],
      createdAt: '2025-04-26T18:40:00Z',
    },
    {
      id: 'post-51',
      userId: 'user-3',
      content:
        'Buceo en Phuket: visibilidad perfecta y encuentro con tortugas 🐢',
      imageUrl:
        'https://images.pexels.com/photos/189353/pexels-photo-189353.jpeg?auto=compress&cs=tinysrgb&w=800',
      likes: ['user-1', 'user-5'],
      comments: [],
      createdAt: '2025-05-01T07:15:00Z',
    },
    {
      id: 'post-52',
      userId: 'user-1',
      content:
        '¡Giveaway! Comparto mi set de pinceles Procreate favoritos. Detalles en el link.',
      imageUrl:
        'https://images.pexels.com/photos/2587247/pexels-photo-2587247.jpeg?auto=compress&cs=tinysrgb&w=800',
      likes: ['user-3'],
      comments: [],
      createdAt: '2025-05-02T20:05:00Z',
    },
    {
      id: 'post-53',
      userId: 'user-5',
      content:
        'Receta: aceite picante “Sichuan style” 🥵🔥 Perfecto para dumplings.',
      imageUrl:
        'https://images.pexels.com/photos/5938/food-peppers.jpg?auto=compress&cs=tinysrgb&w=800',
      likes: ['user-2'],
      comments: [],
      createdAt: '2025-04-22T12:50:00Z',
    },
    {
      id: 'post-54',
      userId: 'user-2',
      content:
        'Lancé mi extensión VS Code “Focus‑Mode” — reduce distracciones. ✨',
      imageUrl:
        'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800',
      likes: ['user-1', 'user-3'],
      comments: [],
      createdAt: '2025-05-03T13:55:00Z',
    },
    {
      id: 'post-55',
      userId: 'user-4',
      content:
        'Descendiendo en MTB por sendero volcánico — ¡adrenalina pura! 🚵‍♂️',
      imageUrl:
        'https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=800',
      likes: ['user-2', 'user-5'],
      comments: [],
      createdAt: '2025-04-18T15:30:00Z',
    },
    {
      id: 'post-56',
      userId: 'user-3',
      content:
        'Festival cultural en Hoi An: linternas, comida callejera y música 🎉',
      imageUrl:
        'https://images.pexels.com/photos/1779653/pexels-photo-1779653.jpeg?auto=compress&cs=tinysrgb&w=800',
      likes: ['user-1'],
      comments: [],
      createdAt: '2025-04-17T18:45:00Z',
    },
    {
      id: 'post-57',
      userId: 'user-1',
      content:
        'Hilo sobre teoría del color: contraste simultáneo y armonías 🔶🔷',
      imageUrl: undefined,
      likes: ['user-2', 'user-3'],
      comments: [],
      createdAt: '2025-04-16T10:20:00Z',
    },
    {
      id: 'post-58',
      userId: 'user-2',
      content:
        'TIP: Usa `docker-slim` para reducir el tamaño de tus imágenes en producción 🐳',
      imageUrl: undefined,
      likes: ['user-1'],
      comments: [],
      createdAt: '2025-05-02T11:10:00Z',
    },
    {
      id: 'post-59',
      userId: 'user-5',
      content:
        'Hoy stream en vivo cocinando ramen desde cero 🍜 ¡Los espero a las 20 h!',
      imageUrl:
        'https://images.pexels.com/photos/2619967/pexels-photo-2619967.jpeg?auto=compress&cs=tinysrgb&w=800',
      likes: ['user-3', 'user-4'],
      comments: [],
      createdAt: '2025-04-30T14:30:00Z',
    },
    {
      id: 'post-60',
      userId: 'user-4',
      content:
        'Compuesto final de trazos de estrellas (star trails) sobre Patagonia ✨',
      imageUrl:
        'https://images.pexels.com/photos/1252890/pexels-photo-1252890.jpeg?auto=compress&cs=tinysrgb&w=800',
      likes: ['user-2', 'user-5'],
      comments: [],
      createdAt: '2025-04-15T02:20:00Z',
    },
  ];

  /* -------------------------------------------------------------------------- */
  /*  Notificaciones                                                            */
  /* -------------------------------------------------------------------------- */
  const demoNotifications: Notification[] = [
    {
      id: 'notif-1',
      type: 'like',
      fromUserId: 'user-2',
      toUserId: 'user-1',
      postId: 'post-3',
      read: false,
      createdAt: '2025-05-03T10:05:00Z',
    },
    {
      id: 'notif-2',
      type: 'comment',
      fromUserId: 'user-2',
      toUserId: 'user-1',
      postId: 'post-3',
      read: false,
      createdAt: '2025-02-17T10:15:00Z',
    },
    {
      id: 'notif-3',
      type: 'follow',
      fromUserId: 'user-3',
      toUserId: 'user-1',
      read: true,
      createdAt: '2025-03-26T14:20:00Z',
    },
    {
      id: 'notif-4',
      type: 'like',
      fromUserId: 'user-5',
      toUserId: 'user-1',
      postId: 'post-3',
      read: true,
      createdAt: '2025-05-01T13:10:00Z',
    },
    {
      id: 'notif-5',
      type: 'comment',
      fromUserId: 'user-4',
      toUserId: 'user-1',
      postId: 'post-3',
      read: false,
      createdAt: '2025-04-27T11:05:00Z',
    },
  ];

  /* -------------------------------------------------------------------------- */
  /*  Retorno                                                                   */
  /* -------------------------------------------------------------------------- */
  const currentUser = demoUsers[0]; // Juana Contreras

  return {
    users: demoUsers,
    posts: demoPosts,
    notifications: demoNotifications,
    currentUser,
  };
};
