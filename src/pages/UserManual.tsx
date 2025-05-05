import { useState } from 'react';
import { ChevronRight, ChevronDown } from 'lucide-react';
import { userManualSections } from '../utils/manualData';
import * as LucideIcons from 'lucide-react';

const UserManual: React.FC = () => {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    'getting-started': true // Expandir por defecto la primera sección
  });
  const [expandedSubsections, setExpandedSubsections] = useState<Record<string, boolean>>({});

  // Alternar visibilidad de sección principal
  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  // Alternar visibilidad de subsección
  const toggleSubsection = (subId: string) => {
    setExpandedSubsections(prev => ({
      ...prev,
      [subId]: !prev[subId]
    }));
  };

  // Obtener componente de icono dinámicamente
  const getIcon = (iconName: string) => {
    const Icon = (LucideIcons as any)[
      iconName.charAt(0).toUpperCase() + iconName.slice(1)
    ];
    return Icon ? <Icon className="h-5 w-5" /> : null;
  };

  return (
    <div>
      {/* Encabezado del manual */}
      <div className="bg-blue-600 text-white p-6 rounded-xl mb-6">
        <h1 className="text-2xl font-bold mb-2">Manual de SocioSphere</h1>
        <p>
          Bienvenido al manual completo de SocioSphere. Aquí encontrarás
          toda la información para aprovechar al máximo la plataforma.
        </p>
      </div>

      {/* Secciones del manual */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 divide-y divide-gray-200 mb-6">
        {userManualSections.map(section => (
          <div key={section.id}>
            {/* Botón de encabezado de sección */}
            <button
              onClick={() => toggleSection(section.id)}
              className="flex items-center justify-between w-full p-4 text-left focus:outline-none"
            >
              <div className="flex items-center">
                <div className="mr-3 text-blue-600">
                  {getIcon(section.icon)}
                </div>
                <span className="font-semibold text-gray-900">
                  {section.title}
                </span>
              </div>
              {expandedSections[section.id] ? (
                <ChevronDown className="h-5 w-5 text-gray-400" />
              ) : (
                <ChevronRight className="h-5 w-5 text-gray-400" />
              )}
            </button>

            {/* Contenido de sección */}
            {expandedSections[section.id] && (
              <div className="px-4 pb-4">
                <p className="text-gray-700 mb-4">{section.content}</p>

                {/* Sub-secciones, si existen */}
                {section.subsections && (
                  <div className="space-y-2 ml-8">
                    {section.subsections.map(sub => (
                      <div
                        key={sub.id}
                        className="border border-gray-200 rounded-lg"
                      >
                        {/* Botón de encabezado de subsección */}
                        <button
                          onClick={() => toggleSubsection(sub.id)}
                          className="flex items-center justify-between w-full p-3 text-left focus:outline-none"
                        >
                          <span className="font-medium text-gray-800">
                            {sub.title}
                          </span>
                          {expandedSubsections[sub.id] ? (
                            <ChevronDown className="h-4 w-4 text-gray-400" />
                          ) : (
                            <ChevronRight className="h-4 w-4 text-gray-400" />
                          )}
                        </button>

                        {/* Contenido de subsección */}
                        {expandedSubsections[sub.id] && (
                          <div className="px-3 pb-3">
                            <p className="text-gray-700">
                              {sub.content}
                            </p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Pie del manual con ayuda adicional */}
      <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-3">
          ¿Necesitas más ayuda?
        </h2>
        <p className="text-gray-700 mb-4">
          Esta es una aplicación de demostración. Consulta las FAQs o
          contacta al soporte para más información.
        </p>
        <div className="flex space-x-4">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            Contactar soporte
          </button>
          <button className="px-4 py-2 bg-white text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            Ver FAQs
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserManual;
