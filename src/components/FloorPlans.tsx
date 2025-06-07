import React from "react";
import { Home, Car, Ruler, Download } from "lucide-react";
import Floorplan from "../assets/Floorplan.jpg";
import Parkingplan from "../Assets/Parking-plan.jpg";

const FloorPlans = () => {
  const specifications = [
    {
      icon: Home,
      label: "Super Built Up Area",
      value: "1215 sft",
      color: "blue",
    },
    {
      icon: Car,
      label: "Car Parking",
      value: "100 sft",
      color: "green",
    },
    {
      icon: Ruler,
      label: "Undivided Share",
      value: "38.9 sq yards",
      color: "purple",
    },
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: "bg-blue-100 text-blue-600",
      green: "bg-green-100 text-green-600",
      purple: "bg-purple-100 text-purple-600",
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <section id="floor-plans" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Floor Plans & Specifications
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Thoughtfully designed 3 BHK apartments with optimal space
            utilization and modern amenities
          </p>
        </div>

        {/* Specifications */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {specifications.map((spec, index) => {
            const Icon = spec.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg text-center card-hover"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${getColorClasses(
                    spec.color
                  )}`}
                >
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {spec.label}
                </h3>
                <div className="text-2xl font-bold text-blue-600">
                  {spec.value}
                </div>
              </div>
            );
          })}
        </div>

        {/* Floor Plans */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Floor Plan */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                3 BHK Floor Plan
              </h3>
              <p className="text-gray-600">
                Spacious layout with modern design
              </p>
            </div>
            <div className="p-6">
              <div className="aspect-w-4 aspect-h-3">
                <img
                  src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=600&q=80"
                  alt="3 BHK Floor Plan - Sree Sai Ganesh Towers"
                  className="w-full h-80 object-cover rounded-lg"
                />
              </div>
              <div className="mt-6 flex justify-center">
                <a
                  href={Floorplan}
                  download
                  className="flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Download className="h-5 w-5" />
                  <span>Download Floor Plan</span>
                </a>
              </div>
            </div>
          </div>

          {/* Parking Plan */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Parking Layout
              </h3>
              <p className="text-gray-600">Convenient parking arrangement</p>
            </div>
            <div className="p-6">
              <div className="aspect-w-4 aspect-h-3">
                <img
                  src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=600&q=80"
                  alt="Parking Plan - Sree Sai Ganesh Towers"
                  className="w-full h-80 object-cover rounded-lg"
                />
              </div>
              <div className="mt-6 flex justify-center">
                <a
                  href={Parkingplan}
                  download
                  className="flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Download className="h-5 w-5" />
                  <span>Download Parking Plan</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mt-16 bg-white rounded-2xl shadow-xl p-8 lg:p-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Apartment Features
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600 mb-2">3</div>
              <div className="text-gray-600">Bedrooms</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600 mb-2">2</div>
              <div className="text-gray-600">Bathrooms</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600 mb-2">1</div>
              <div className="text-gray-600">Living Room</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-indigo-600 mb-2">1</div>
              <div className="text-gray-600">Kitchen</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FloorPlans;
