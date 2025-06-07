import React from 'react';
import { 
  Zap, 
  ArrowUp, 
  Shield, 
  Eye, 
  Droplets, 
  Battery,
  Camera
} from 'lucide-react';

const Amenities = () => {
  const amenities = [
    {
      icon: ArrowUp,
      title: "Elevator",
      description: "High-speed passenger lift",
      color: "blue"
    },
    {
      icon: Zap,
      title: "Generator Backup",
      description: "Uninterrupted power supply",
      color: "yellow"
    },
    {
      icon: Battery,
      title: "Transformer",
      description: "Dedicated power infrastructure",
      color: "green"
    },
    {
      icon: Eye,
      title: "Watchman Facility",
      description: "24/7 security personnel",
      color: "red"
    },
    {
      icon: Camera,
      title: "24/7 CCTV Surveillance",
      description: "Complete security monitoring",
      color: "purple"
    },
    {
      icon: Droplets,
      title: "Water Supply",
      description: "Continuous water availability",
      color: "blue"
    },
    {
      icon: Shield,
      title: "Power Backup",
      description: "Emergency power systems",
      color: "indigo"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: "bg-blue-100 text-blue-600 border-blue-200",
      yellow: "bg-yellow-100 text-yellow-600 border-yellow-200",
      green: "bg-green-100 text-green-600 border-green-200",
      red: "bg-red-100 text-red-600 border-red-200",
      purple: "bg-purple-100 text-purple-600 border-purple-200",
      indigo: "bg-indigo-100 text-indigo-600 border-indigo-200"
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <section id="amenities" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Premium Amenities
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience luxury living with our comprehensive range of modern amenities 
            designed for your comfort and convenience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {amenities.map((amenity, index) => {
            const Icon = amenity.icon;
            return (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-xl hover:shadow-xl transition-all duration-300 card-hover border-2 border-transparent hover:border-blue-100"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full border-2 mb-6 ${getColorClasses(amenity.color)}`}>
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {amenity.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {amenity.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Additional Features */}
        <div className="mt-16 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Why Choose Sree Sai Ganesh Towers?
            </h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We provide more than just a home - we offer a complete lifestyle 
              with modern conveniences and premium services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-700 font-medium">Security</div>
              <div className="text-gray-600 text-sm mt-1">Round the clock</div>
            </div>
            <div className="text-center bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
              <div className="text-gray-700 font-medium">Power Backup</div>
              <div className="text-gray-600 text-sm mt-1">Uninterrupted supply</div>
            </div>
            <div className="text-center bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-purple-600 mb-2">7</div>
              <div className="text-gray-700 font-medium">Star Amenities</div>
              <div className="text-gray-600 text-sm mt-1">Premium quality</div>
            </div>
            <div className="text-center bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-indigo-600 mb-2">∞</div>
              <div className="text-gray-700 font-medium">Water Supply</div>
              <div className="text-gray-600 text-sm mt-1">Continuous flow</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Amenities;