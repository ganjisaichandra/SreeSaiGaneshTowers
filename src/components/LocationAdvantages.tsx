import React from 'react';
import { MapPin, Car, Guitar as Hospital, GraduationCap, TreePine, Waves } from 'lucide-react';

const LocationAdvantages = () => {
  const locations = [
    {
      icon: TreePine,
      name: "Kailasagiri",
      distance: "50m",
      description: "Hill station & viewpoint",
      color: "green"
    },
    {
      icon: Waves,
      name: "Tenneti Park Beach",
      distance: "1km",
      description: "Beach & recreation",
      color: "blue"
    },
    {
      icon: Hospital,
      name: "Health City",
      distance: "5 min",
      description: "Medical facilities",
      color: "red"
    },
    {
      icon: GraduationCap,
      name: "Schools",
      distance: "Nearby",
      description: "Educational institutions",
      color: "purple"
    },
    {
      icon: Hospital,
      name: "Hospitals",
      distance: "Close",
      description: "Healthcare access",
      color: "indigo"
    },
    {
      icon: Car,
      name: "Transport Hub",
      distance: "2km",
      description: "Easy connectivity",
      color: "yellow"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      green: "bg-green-100 text-green-600",
      blue: "bg-blue-100 text-blue-600",
      red: "bg-red-100 text-red-600",
      purple: "bg-purple-100 text-purple-600",
      indigo: "bg-indigo-100 text-indigo-600",
      yellow: "bg-yellow-100 text-yellow-600"
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <section id="location" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Prime Location Advantages
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Strategically located in the heart of Visakhapatnam with easy access 
            to key landmarks and amenities
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Location Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {locations.map((location, index) => {
              const Icon = location.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300 card-hover"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full mb-4 ${getColorClasses(location.color)}`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {location.name}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-blue-600">
                      {location.distance}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mt-2">
                    {location.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Map Section */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-2xl">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Interactive Location
                </h3>
                <div className="flex items-center space-x-2 text-gray-600">
                  <MapPin className="h-5 w-5" />
                  <span>Coordinates: 17.7560902, 83.3426509</span>
                </div>
              </div>
              
              {/* Map Placeholder */}
              <div className="bg-white rounded-xl p-6 shadow-inner">
                <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-200 to-green-200 opacity-50"></div>
                  <div className="relative z-10 text-center">
                    <MapPin className="h-12 w-12 text-blue-600 mx-auto mb-2" />
                    <p className="text-gray-700 font-medium">Sree Sai Ganesh Towers</p>
                    <p className="text-gray-600 text-sm">Prime Visakhapatnam Location</p>
                  </div>
                  
                  {/* Location Markers */}
                  <div className="absolute top-4 left-8 bg-green-500 w-3 h-3 rounded-full animate-pulse"></div>
                  <div className="absolute bottom-8 right-6 bg-blue-500 w-3 h-3 rounded-full animate-pulse"></div>
                  <div className="absolute top-1/2 left-4 bg-red-500 w-3 h-3 rounded-full animate-pulse"></div>
                </div>
              </div>
              
              <div className="mt-6 text-center">
                <a
                  href={`https://www.google.com/maps?q=17.7560902,83.3426509`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <MapPin className="h-5 w-5" />
                  <span>View on Google Maps</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationAdvantages;