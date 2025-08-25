import React, { useState } from 'react';
import { Menu, X, Heart } from 'lucide-react';

interface HeaderProps {
  onShowFavorites: () => void;
  favoritesCount: number;
}

const Header: React.FC<HeaderProps> = ({ onShowFavorites, favoritesCount }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-gray-900">
              Studio Element <span className="text-orange-600">Designs</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-orange-600 transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('portfolio')} className="text-gray-700 hover:text-orange-600 transition-colors">
              Portfolio
            </button>
            <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-orange-600 transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-orange-600 transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-orange-600 transition-colors">
              Contact
            </button>
          </nav>

          {/* Favorites & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <button 
              onClick={onShowFavorites}
              className="relative p-2 text-gray-700 hover:text-orange-600 transition-colors"
            >
              <Heart className="w-5 h-5" />
              {favoritesCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-orange-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {favoritesCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-700 hover:text-orange-600 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('home')} className="text-left text-gray-700 hover:text-orange-600 transition-colors">
                Home
              </button>
              <button onClick={() => scrollToSection('portfolio')} className="text-left text-gray-700 hover:text-orange-600 transition-colors">
                Portfolio
              </button>
              <button onClick={() => scrollToSection('services')} className="text-left text-gray-700 hover:text-orange-600 transition-colors">
                Services
              </button>
              <button onClick={() => scrollToSection('about')} className="text-left text-gray-700 hover:text-orange-600 transition-colors">
                About
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-left text-gray-700 hover:text-orange-600 transition-colors">
                Contact
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;