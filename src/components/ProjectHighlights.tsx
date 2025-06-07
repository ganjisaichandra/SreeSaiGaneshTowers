import React from 'react';
import { Home, CheckCircle, FileCheck, Building, Zap, Star } from 'lucide-react';

const ProjectHighlights = () => {
  const highlights = [
    {
      icon: Home,
      title: "1215 Sq. Ft.",
      description: "Super built-up area",
      color: "blue"
    },
    {
      icon: CheckCircle,
      title: "100% Vaastu",
      description: "Compliant design",
      color: "green"
    },
    {
      icon: FileCheck,
      title: "DTCP Approved",
      description: "Legal clearances",
      color: "purple"
    },
    {
      icon: Building,
      title: "5 Floors",
      description: "Premium structure",
      color: "indigo"
    },
    {
      icon: Zap,
      title: "24x7 Utilities",
      description: "Uninterrupted services",
      color: "yellow"
    },
    {
      icon: Star,
      title: "Premium Amenities",
      description: "Luxury living",
      color: "red"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: "bg-blue-100 text-blue-600 border-blue-200",
      green: "bg-green-100 text-green-600 border-green-200",
      purple: "bg-purple-100 text-purple-600 border-purple-200",
      indigo: "bg-indigo-100 text-indigo-600 border-indigo-200",
      yellow: "bg-yellow-100 text-yellow-600 border-yellow-200",
      red: "bg-red-100 text-red-600 border-red-200"
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <section id="highlights" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Project Highlights
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the exceptional features that make Sree Sai Ganesh Towers 
            the perfect choice for your dream home
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg card-hover border border-gray-100 text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full border-2 mb-6 ${getColorClasses(highlight.color)}`}>
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {highlight.title}
                </h3>
                <p className="text-gray-600">
                  {highlight.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-white rounded-2xl shadow-xl p-8 lg:p-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-2">5</div>
              <div className="text-gray-600 font-medium">Floors</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-green-600 mb-2">3</div>
              <div className="text-gray-600 font-medium">BHK Units</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-purple-600 mb-2">24/7</div>
              <div className="text-gray-600 font-medium">Utilities</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-indigo-600 mb-2">100%</div>
              <div className="text-gray-600 font-medium">Vaastu</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectHighlights;