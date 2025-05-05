import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../store';

const Welcome = () => {
  const navigate = useNavigate();
  const { initialized, initializeApp } = useStore();

  useEffect(() => {
    if (!initialized) initializeApp();

    const timer = setTimeout(() => navigate('/'), 3000);
    return () => clearTimeout(timer);
  }, [initialized, initializeApp, navigate]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-indigo-50 to-indigo-100">
      {/* Logo */}
      <img
        src="/assets/logo_sin_fondo.png"
        alt="Unify"
        className="h-24 w-auto drop-shadow-md animate-fade-in"
      />

      {/* Texto de estado */}
      <p className="mt-8 text-gray-600 text-sm tracking-wide animate-pulse">
        Cargando tu experiencia…
      </p>
    </div>
  );
};

export default Welcome;
