import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useStore } from '../store';


const BG_FROM = '#FEFFFC';
const BG_TO = '#E1F7FF';
const HALO_MINT = '#D0F4EA';
const HALO_PINK = '#FFE7F5';
const TEXT_PRIMARY = '#2E2E2E';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const { currentUser, users, login, initialized, initializeApp } = useStore();

  useEffect(() => {
    // Inicializar la aplicación y redirigir si ya hay un usuario logueado
    if (!initialized) initializeApp();
    if (currentUser) navigate('/');
  }, [currentUser, initialized, initializeApp, navigate]);

  const handleLogin = (userId: string) => {
    // Manejar la selección de usuario demo
    login(userId);
    navigate('/welcome');
  };

  return (
    <motion.div
      className="relative flex h-screen items-center justify-center overflow-hidden"
      style={{ background: `linear-gradient(135deg, ${BG_FROM} 0%, ${BG_TO} 100%)` }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Orbes pastel mágicos con animación suave */}
      {[HALO_PINK, HALO_MINT, HALO_PINK].map((color, idx) => (
        <motion.div
          key={idx}
          className="absolute rounded-full mix-blend-overlay"
          style={{ width: 240, height: 240, backgroundColor: color, filter: 'blur(100px)' }}
          initial={{ opacity: 0.2, scale: 0.8, y: 80 * (idx - 1) }}
          animate={{ opacity: 0.6, scale: 1.25, y: 0 }}
          transition={{ duration: 12, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut', delay: idx }}
        />
      ))}

      {/* Marco con degradado sutil */}
      <motion.div
        className="p-1 rounded-4xl bg-gradient-to-br from-[#BEE3F8] to-[#FFD6E8]"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 70, damping: 12 }}
      >
        {/* Tarjeta principal con fondo semi-transparente */}
        <motion.div
          className="relative z-10 bg-white/90 p-14 rounded-3xl backdrop-blur-md shadow-2xl"
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 80, damping: 18 }}
          whileHover={{ scale: 1.03 }}
        >
          {/* Halo tenue detrás del logo */}
          <motion.div
            className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 h-64 w-64 rounded-full"
            style={{ background: `radial-gradient(circle, ${HALO_MINT} 0%, transparent 75%)` }}
            animate={{ scale: [0.95, 1.15, 0.95] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          />

          {/* Logo grande con efecto de rebote */}
          <div className="flex justify-center mb-6">
            <motion.img
              src="/assets/logo_sin_fondo.png"
              alt="Logo"
              className="h-56 w-56 object-contain"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 90, damping: 12 }}
              whileHover={{ scale: 1.05, rotate: [0, 3, -3, 0] }}
            />
          </div>

          {/* Mensaje instructivo */}
          <p className="text-center text-base font-medium text-gray-600 mb-8">
            Selecciona una cuenta demo para explorar la app.
          </p>

          {/* Lista de botones de usuario con índice para animación */}
          <div className="space-y-4">
            {users.map((u, idx) => (
              <motion.button
                key={u.id}
                onClick={() => handleLogin(u.id)}
                className="flex w-full items-center gap-4 rounded-2xl bg-white px-6 py-3 shadow-inner transition hover:bg-pink-50"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 + 0.1 * idx }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98, rotate: -1 }}
              >
                <img
                  src={u.avatar}
                  alt={u.name}
                  className="h-12 w-12 rounded-full object-cover ring-4 ring-white"
                />
                <div className="flex flex-col text-left">
                  <span className="text-lg font-bold" style={{ color: TEXT_PRIMARY }}>
                    {u.name}
                  </span>
                  <span className="text-sm text-gray-400">@{u.username}</span>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Nota de pie */}
          <div className="mt-8 rounded-2xl bg-white/70 p-4 text-center backdrop-blur-sm shadow-inner">
            <p className="text-sm text-gray-500">
              Explora todas las funciones con cualquier usuario demo.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Login;
