import React from "react";
import { Star, MapPin, Phone } from "lucide-react";
import buildingImage from "../assets/building-image.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative pt-20 pb-16 lg:pt-32 lg:pb-24 overflow-hidden"
    >
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="animate-slideInLeft">
            <div className="flex items-center space-x-2 mb-6">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <span className="text-sm text-gray-600 font-medium">
                Premium Quality
              </span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Sree Sai Ganesh
              <span className="block text-blue-600">Towers</span>
            </h1>

            <h2 className="text-xl lg:text-2xl text-gray-700 mb-8 font-medium">
              Premium 3 BHK Flats in Visakhapatnam
            </h2>

            <div className="flex items-center space-x-2 mb-8">
              <MapPin className="h-5 w-5 text-gray-500" />
              <span className="text-gray-600">
                Near Kailasagiri, Visakhapatnam
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToContact}
                className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Book Now
              </button>
              <a
                href="tel:+919848654255"
                className="flex items-center justify-center space-x-2 border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                <Phone className="h-5 w-5" />
                <span>Call Now</span>
              </a>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-blue-600">
                  1215
                </div>
                <div className="text-sm text-gray-600">Sq Ft</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-green-600">
                  100%
                </div>
                <div className="text-sm text-gray-600">Vaastu</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-purple-600">
                  DTCP
                </div>
                <div className="text-sm text-gray-600">Approved</div>
              </div>
            </div>
          </div>

          {/* Right Content - Building Image */}
          <div className="animate-slideInRight">
            <div className="relative">
              {/* Adjust if aspect ratio plugin isn't used */}
              <img
                src={buildingImage}
                alt="Apartment View"
                className="w-full h-[600px] object-cover rounded-2xl shadow-2xl"
              />

              {/* Floating Card */}
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-xl border">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Star className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      24x7 Amenities
                    </div>
                    <div className="text-gray-600 text-sm">
                      Premium Living Experience
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
    </section>
  );
};

export default Hero;
