import { useState } from 'react';
import { PlusCircle, X, Image } from 'lucide-react';
import { useStore } from '../../store';

const CreatePostButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const { createPost } = useStore();

  const handleSubmit = () => {
    if (content.trim()) {
      createPost(content, imageUrl || undefined);
      setContent('');
      setImageUrl('');
      setIsOpen(false);
    }
  };

  // Selección simulada de imagen
  const handleImageSelect = () => {
    // En una app real, aquí abrirías un selector de archivos
    const demoImages = [
      'https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2253643/pexels-photo-2253643.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1380292/pexels-photo-1380292.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1738986/pexels-photo-1738986.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/242246/pexels-photo-242246.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/290119/pexels-photo-290119.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2062423/pexels-photo-2062423.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/35600/road-sun-rays-path.jpg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/210006/pexels-photo-210006.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3185480/pexels-photo-3185480.jpeg?auto=compress&cs=tinysrgb&w=800'
    ];
    const randomImage =
      demoImages[Math.floor(Math.random() * demoImages.length)];
    setImageUrl(randomImage);
  };

  return (
    <>
      {/* Botón flotante */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed z-20 bottom-20 right-5 md:bottom-10 md:right-10 bg-indigo-600 text-white rounded-full p-3 shadow-lg hover:bg-indigo-700 transition-colors"
      >
        <PlusCircle className="h-6 w-6" />
      </button>

      {/* Modal */}
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
    </>
  );
};

export default CreatePostButton;
