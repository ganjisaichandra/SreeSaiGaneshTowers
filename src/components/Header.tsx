import React, { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import Logo from "../assets/Logo .jpg";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-lg backdrop-blur-sm"
          : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <img
              src={Logo}
              alt="Sree Sai Ganesh Towers Logo"
              className="h-10 w-10 rounded-lg object-cover"
            />
            <div>
              <h1 className="text-xl font-bold text-gray-900">
                Sree Shiva Sai Durga Builders
              </h1>
              <p className="text-sm text-gray-600">Premium Living</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("highlights")}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("location")}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Location
            </button>
            <button
              onClick={() => scrollToSection("floor-plans")}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Floor Plans
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Contact
            </button>
            <a
              href="tel:+919848654255"
              className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span>Call Now</span>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <nav className="py-4 space-y-4">
              <button
                onClick={() => scrollToSection("hero")}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:text-blue-600 transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("highlights")}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:text-blue-600 transition-colors"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection("location")}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:text-blue-600 transition-colors"
              >
                Location
              </button>
              <button
                onClick={() => scrollToSection("floor-plans")}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:text-blue-600 transition-colors"
              >
                Floor Plans
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:text-blue-600 transition-colors"
              >
                Contact
              </button>
              <div className="px-4">
                <a
                  href="tel:+919848654255"
                  className="flex items-center justify-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors w-full"
                >
                  <Phone className="h-4 w-4" />
                  <span>Call Now</span>
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
