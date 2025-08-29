import React from 'react';
import { Award, Users, MapPin, Clock, Star, Shield } from 'lucide-react';

const About: React.FC = () => {
  const achievements = [
    { icon: Award, number: '15+', label: 'Design Awards' },
    { icon: Users, number: '500+', label: 'Happy Clients' },
    { icon: MapPin, number: '25+', label: 'Cities Covered' },
    { icon: Clock, number: '8+', label: 'Years Experience' }
  ];

  const values = [
    {
      icon: Star,
      title: 'Excellence',
      description: 'We strive for perfection in every project, ensuring the highest quality standards in design and execution.'
    },
    {
      icon: Users,
      title: 'Client-Centric',
      description: 'Your vision is our priority. We work closely with clients to bring their dreams to life within budget and timeline.'
    },
    {
      icon: Shield,
      title: 'Integrity',
      description: 'Transparent communication, honest pricing, and ethical practices form the foundation of our business relationships.'
    }
  ];

  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About <span className="text-orange-600">Studio Element Designs</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Based in Chennai, we are a premier architectural and interior design studio serving clients across India with innovative, sustainable, and culturally sensitive design solutions.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Content */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Creating Spaces That Tell Your Story
            </h3>
            <p className="text-gray-600 mb-6">
              Founded in 2016, Studio Element Designs has been at the forefront of contemporary Indian architecture and interior design. We believe that great design is not just about aesthetics—it's about creating functional, sustainable spaces that enhance the way people live and work.
            </p>
            <p className="text-gray-600 mb-6">
              Our team combines global design trends with local craftsmanship and materials, ensuring each project reflects both international standards and Indian sensibilities. From luxury residences in Mumbai to corporate offices in Bangalore, we've successfully delivered projects across diverse sectors and scales.
            </p>
            
            {/* Key Features */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-orange-600 rounded-full mr-3"></div>
                <span className="text-gray-700">Sustainable Design</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-orange-600 rounded-full mr-3"></div>
                <span className="text-gray-700">Vastu Compliant</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-orange-600 rounded-full mr-3"></div>
                <span className="text-gray-700">Budget Optimization</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-orange-600 rounded-full mr-3"></div>
                <span className="text-gray-700">Timely Delivery</span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Our design team at work"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating Achievement Card */}
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg border border-gray-100">
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600">₹50Cr+</div>
                <div className="text-sm text-gray-600">Projects Value</div>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-orange-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{achievement.number}</div>
                <div className="text-gray-600">{achievement.label}</div>
              </div>
            );
          })}
        </div>

        {/* Values */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h3>
            <p className="text-gray-600">The principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
                    <Icon className="w-8 h-8 text-orange-600" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h4>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-16">
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Meet Our Leadership Team
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Kanish',
                role: 'Principal Architect',
                image: '/images/kanish.jpeg', // Updated path
                description: 'B.Arch from SPA Delhi, 12+ years experience in sustainable architecture'
              },
              {
                name: 'Priya Sharma',
                role: 'Lead Interior Designer',
                image: 'https://images.pexels.com/photos/3783725/pexels-photo-3783725.jpeg?auto=compress&cs=tinysrgb&w=400',
                description: 'Master\'s in Interior Design from NIFT, specialist in luxury residential interiors'
              },
              {
                name: 'Rajesh Menon',
                role: 'Project Director',
                image: 'https://images.pexels.com/photos/3778966/pexels-photo-3778966.jpeg?auto=compress&cs=tinysrgb&w=400',
                description: 'MBA + B.Arch, 10+ years in project management and client relations'
              }
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h4 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h4>
                  <p className="text-orange-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;