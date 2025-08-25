import React from 'react';
import { ChevronRight, Award, Users, Clock } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToPortfolio = () => {
    const element = document.getElementById('portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Designing spaces that <span className="text-orange-600">inspire</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0">
              Premium architecture and interior design services across India. From residential homes to commercial spaces, we create environments that reflect your vision and elevate your lifestyle.
            </p>
            
            {/* Stats */}
            <div className="mt-8 grid grid-cols-3 gap-6 text-center lg:text-left">
              <div>
                <div className="flex items-center justify-center lg:justify-start text-orange-600 mb-2">
                  <Users className="w-5 h-5 mr-2" />
                  <span className="font-bold text-2xl text-gray-900">500+</span>
                </div>
                <p className="text-sm text-gray-600">Happy Clients</p>
              </div>
              <div>
                <div className="flex items-center justify-center lg:justify-start text-orange-600 mb-2">
                  <Award className="w-5 h-5 mr-2" />
                  <span className="font-bold text-2xl text-gray-900">200+</span>
                </div>
                <p className="text-sm text-gray-600">Projects Completed</p>
              </div>
              <div>
                <div className="flex items-center justify-center lg:justify-start text-orange-600 mb-2">
                  <Clock className="w-5 h-5 mr-2" />
                  <span className="font-bold text-2xl text-gray-900">8+</span>
                </div>
                <p className="text-sm text-gray-600">Years Experience</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={scrollToPortfolio}
                className="px-8 py-3 bg-orange-600 text-white font-semibold rounded-full hover:bg-orange-700 transition-colors flex items-center justify-center group"
              >
                View Our Portfolio
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-8 py-3 border-2 border-orange-600 text-orange-600 font-semibold rounded-full hover:bg-orange-600 hover:text-white transition-colors"
              >
                Book Consultation
              </button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Modern interior design"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Award Winning</p>
                  <p className="text-sm text-gray-600">Design Excellence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;