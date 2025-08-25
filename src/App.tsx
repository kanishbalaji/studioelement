import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, MapPin, Heart, Share2, ChevronRight, Star, Users, Award, Clock, ArrowLeft } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import ServiceDetail from './components/ServiceDetail';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FavoritesModal from './components/FavoritesModal';

function App() {
  const [favorites, setFavorites] = useState<number[]>([]);
  const [showFavorites, setShowFavorites] = useState(false);
  const [currentView, setCurrentView] = useState<'home' | 'service'>('home');
  const [selectedService, setSelectedService] = useState<string>('');

  useEffect(() => {
    // Load favorites from localStorage
    const savedFavorites = localStorage.getItem('studio-favorites');
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);

  const toggleFavorite = (projectId: number) => {
    setFavorites(prev => {
      const newFavorites = prev.includes(projectId) 
        ? prev.filter(id => id !== projectId)
        : [...prev, projectId];
      localStorage.setItem('studio-favorites', JSON.stringify(newFavorites));
      return newFavorites;
    });
  };

  const handleServiceClick = (serviceId: string) => {
    setSelectedService(serviceId);
    setCurrentView('service');
  };

  const handleBackToHome = () => {
    setCurrentView('home');
    setSelectedService('');
  };

  if (currentView === 'service') {
    return (
      <div className="min-h-screen bg-white">
        <Header onShowFavorites={() => setShowFavorites(true)} favoritesCount={favorites.length} />
        <div className="pt-16">
          <button
            onClick={handleBackToHome}
            className="fixed top-20 left-4 z-40 flex items-center px-4 py-2 bg-white shadow-lg rounded-full text-gray-700 hover:text-orange-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </button>
          <ServiceDetail serviceId={selectedService} />
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header onShowFavorites={() => setShowFavorites(true)} favoritesCount={favorites.length} />
      <Hero />
      <Portfolio favorites={favorites} onToggleFavorite={toggleFavorite} />
      <Services onServiceClick={handleServiceClick} />
      <About />
      <Contact />
      <Footer />
      
      {showFavorites && (
        <FavoritesModal 
          favorites={favorites}
          onClose={() => setShowFavorites(false)}
          onToggleFavorite={toggleFavorite}
        />
      )}
    </div>
  );
}

export default App;