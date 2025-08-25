import React from 'react';
import { Home, Building2, PaintBucket, Cuboid as Cube, CheckCircle, ArrowRight } from 'lucide-react';

interface ServicesProps {
  onServiceClick: (serviceId: string) => void;
}

const Services: React.FC<ServicesProps> = ({ onServiceClick }) => {
  const services = [
    {
      id: 'residential',
      icon: Home,
      title: 'Residential Architecture',
      description: 'Complete home design services from concept to construction supervision across India.',
      features: ['Custom Home Design', 'Villa Architecture', 'Apartment Planning', 'Heritage Restoration'],
      price: 'Starting from ₹150/sq ft'
    },
    {
      id: 'commercial',
      icon: Building2,
      title: 'Commercial Architecture',
      description: 'Professional commercial spaces designed for functionality and brand identity.',
      features: ['Office Buildings', 'Retail Spaces', 'Hotels & Restaurants', 'Industrial Design'],
      price: 'Starting from ₹200/sq ft'
    },
    {
      id: 'interiors',
      icon: PaintBucket,
      title: 'Interior Design',
      description: 'Complete interior solutions that reflect your personality and lifestyle preferences.',
      features: ['Space Planning', 'Furniture Design', 'Lighting Design', 'Material Selection'],
      price: 'Starting from ₹1,200/sq ft'
    },
    {
      id: '3d-visualization',
      icon: Cube,
      title: '3D Visualization',
      description: 'Photorealistic 3D renders and virtual walkthroughs for better project visualization.',
      features: ['3D Modeling', 'Photorealistic Renders', 'Virtual Walkthroughs', 'Animation'],
      price: 'Starting from ₹8,000/render'
    }
  ];

  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-orange-600">Services</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive architectural and interior design services tailored for Indian homes and businesses
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow group">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-orange-600 transition-colors">
                  <Icon className="w-6 h-6 text-orange-600 group-hover:text-white transition-colors" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="border-t pt-4">
                  <p className="text-orange-600 font-semibold text-sm mb-3">{service.price}</p>
                  <button 
                    onClick={() => onServiceClick(service.id)}
                    className="flex items-center text-orange-600 hover:text-orange-700 font-medium text-sm group-hover:translate-x-1 transition-transform"
                  >
                    Learn More <ArrowRight className="ml-2 w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Process Section */}
        <div className="bg-white rounded-2xl p-8 md:p-12">
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Our Design Process
            </h3>
            <p className="text-gray-600">A streamlined approach to bring your vision to life</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Consultation', description: 'Initial meeting to understand your requirements, budget, and timeline.' },
              { step: '02', title: 'Concept Design', description: 'Create preliminary designs and mood boards for your approval.' },
              { step: '03', title: 'Development', description: 'Detailed drawings, 3D renders, and material specifications.' },
              { step: '04', title: 'Execution', description: 'Construction supervision and project completion with quality checks.' }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-orange-600">{process.step}</span>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{process.title}</h4>
                <p className="text-gray-600 text-sm">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;