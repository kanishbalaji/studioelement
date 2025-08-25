import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold mb-4">
              Studio Element <span className="text-orange-600">Designs</span>
            </h3>
            <p className="text-gray-400 mb-6">
              Creating architectural masterpieces and stunning interior spaces across India since 2016.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-orange-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-orange-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-orange-600 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-orange-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-400 hover:text-orange-600 transition-colors">Home</a></li>
              <li><a href="#portfolio" className="text-gray-400 hover:text-orange-600 transition-colors">Portfolio</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-orange-600 transition-colors">Services</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-orange-600 transition-colors">About</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-orange-600 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-3">
              <li><span className="text-gray-400">Residential Architecture</span></li>
              <li><span className="text-gray-400">Commercial Architecture</span></li>
              <li><span className="text-gray-400">Interior Design</span></li>
              <li><span className="text-gray-400">3D Visualization</span></li>
              <li><span className="text-gray-400">Project Management</span></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-sm">
                    No. 45, Anna Salai,<br />
                    Thousand Lights,<br />
                    Chennai, TN 600002
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-orange-600 flex-shrink-0" />
                <p className="text-gray-400 text-sm">+91 63798 35726</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-orange-600 flex-shrink-0" />
                <p className="text-gray-400 text-sm">info@studioelementdesigns.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Studio Element Designs. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-orange-600 transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-orange-600 transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-orange-600 transition-colors">Sitemap</a>
            </div>
          </div>
          
          {/* Additional Info */}
          <div className="mt-6 pt-6 border-t border-gray-800 text-center">
            <p className="text-gray-500 text-xs">
              Licensed Architect | GSTIN: 33AABCS1234A1Z5 | Serving clients across India with world-class design solutions
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;