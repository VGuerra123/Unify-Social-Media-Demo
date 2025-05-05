import { Link } from 'react-router-dom';
import { AlertTriangle, Home } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <div className="text-center max-w-md">
        {/* Ícono de advertencia */}
        <div className="flex justify-center mb-6">
          <div className="bg-amber-100 text-amber-600 p-5 rounded-full">
            <AlertTriangle className="h-12 w-12" />
          </div>
        </div>

        {/* Título de página no encontrada */}
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Página no encontrada</h1>
        {/* Mensaje descriptivo */}
        <p className="text-lg text-gray-700 mb-8">
          La página que buscas no existe o ha sido movida.
        </p>

        {/* Botón para volver al inicio */}
        <div className="flex justify-center">
          <Link
            to="/"
            className="flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-medium shadow-md hover:bg-blue-700 transition-colors"
          >
            <Home className="h-5 w-5 mr-2" />
            Ir al inicio
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
