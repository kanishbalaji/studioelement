import React from 'react';
import { Home, Building2, PaintBucket, Cuboid as Cube, CheckCircle, Star, Clock, Users, Award, Phone, Mail } from 'lucide-react';

interface ServiceDetailProps {
  serviceId: string;
}

const ServiceDetail: React.FC<ServiceDetailProps> = ({ serviceId }) => {
  const serviceData = {
    residential: {
      icon: Home,
      title: 'Residential Architecture',
      subtitle: 'Creating Dream Homes Across India',
      description: 'Our residential architecture services combine contemporary design with traditional Indian elements, ensuring your home reflects your personality while meeting modern lifestyle needs.',
      heroImage: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=1200',
      services: [
        {
          name: 'Custom Home Design',
          description: 'Bespoke architectural solutions tailored to your family\'s unique requirements and lifestyle.',
          features: ['Site Analysis', 'Vastu Consultation', 'Custom Floor Plans', '3D Visualization'],
          price: '₹150-200/sq ft'
        },
        {
          name: 'Villa Architecture',
          description: 'Luxury villa designs that blend modern amenities with timeless architectural principles.',
          features: ['Landscape Integration', 'Smart Home Systems', 'Premium Materials', 'Energy Efficiency'],
          price: '₹200-300/sq ft'
        },
        {
          name: 'Apartment Planning',
          description: 'Optimized layouts for urban apartments maximizing space utilization and natural light.',
          features: ['Space Optimization', 'Storage Solutions', 'Natural Ventilation', 'Modern Amenities'],
          price: '₹120-180/sq ft'
        },
        {
          name: 'Heritage Restoration',
          description: 'Careful restoration of heritage properties preserving historical character.',
          features: ['Historical Research', 'Traditional Techniques', 'Modern Integration', 'Conservation'],
          price: '₹300-500/sq ft'
        }
      ],
      process: [
        { step: 'Site Visit & Analysis', description: 'Comprehensive site evaluation and client consultation' },
        { step: 'Concept Development', description: 'Initial design concepts and mood boards' },
        { step: 'Design Development', description: 'Detailed drawings and 3D visualizations' },
        { step: 'Approval & Documentation', description: 'Municipal approvals and construction drawings' },
        { step: 'Construction Support', description: 'Site supervision and quality control' }
      ],
      portfolio: [
        {
          title: 'Modern Villa, Gurgaon',
          image: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=400',
          area: '4,500 sq ft',
          location: 'Gurgaon, Haryana'
        },
        {
          title: 'Heritage Restoration, Jaipur',
          image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=400',
          area: '6,000 sq ft',
          location: 'Jaipur, Rajasthan'
        },
        {
          title: 'Contemporary Home, Bangalore',
          image: 'https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg?auto=compress&cs=tinysrgb&w=400',
          area: '3,200 sq ft',
          location: 'Bangalore, Karnataka'
        }
      ]
    },
    commercial: {
      icon: Building2,
      title: 'Commercial Architecture',
      subtitle: 'Building Spaces for Business Success',
      description: 'Our commercial architecture services focus on creating functional, efficient, and inspiring workspaces that enhance productivity and reflect your brand identity.',
      heroImage: 'https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg?auto=compress&cs=tinysrgb&w=1200',
      services: [
        {
          name: 'Office Buildings',
          description: 'Modern office spaces designed for collaboration, productivity, and employee well-being.',
          features: ['Flexible Layouts', 'Natural Lighting', 'Energy Efficiency', 'Technology Integration'],
          price: '₹200-350/sq ft'
        },
        {
          name: 'Retail Spaces',
          description: 'Attractive retail environments that enhance customer experience and drive sales.',
          features: ['Customer Flow Design', 'Brand Integration', 'Display Solutions', 'Lighting Design'],
          price: '₹250-400/sq ft'
        },
        {
          name: 'Hotels & Restaurants',
          description: 'Hospitality spaces that create memorable experiences for guests and diners.',
          features: ['Ambiance Design', 'Kitchen Planning', 'Guest Experience', 'Operational Efficiency'],
          price: '₹300-500/sq ft'
        },
        {
          name: 'Industrial Design',
          description: 'Functional industrial facilities optimized for operations and safety.',
          features: ['Workflow Optimization', 'Safety Compliance', 'Utility Planning', 'Expansion Capability'],
          price: '₹150-250/sq ft'
        }
      ],
      process: [
        { step: 'Business Analysis', description: 'Understanding your business needs and objectives' },
        { step: 'Space Programming', description: 'Defining space requirements and relationships' },
        { step: 'Design Development', description: 'Creating functional and aesthetic solutions' },
        { step: 'Technical Documentation', description: 'Detailed construction and MEP drawings' },
        { step: 'Project Management', description: 'Construction oversight and quality assurance' }
      ],
      portfolio: [
        {
          title: 'Tech Office, Chennai',
          image: 'https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg?auto=compress&cs=tinysrgb&w=400',
          area: '25,000 sq ft',
          location: 'Chennai, Tamil Nadu'
        },
        {
          title: 'Premium Restaurant, Delhi',
          image: 'https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&w=400',
          area: '3,500 sq ft',
          location: 'Delhi, NCR'
        },
        {
          title: 'Retail Showroom, Mumbai',
          image: 'https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=400',
          area: '8,000 sq ft',
          location: 'Mumbai, Maharashtra'
        }
      ]
    },
    interiors: {
      icon: PaintBucket,
      title: 'Interior Design',
      subtitle: 'Transforming Spaces, Enhancing Lives',
      description: 'Our interior design services create beautiful, functional spaces that reflect your personality and enhance your daily living experience through thoughtful design and premium finishes.',
      heroImage: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200',
      services: [
        {
          name: 'Residential Interiors',
          description: 'Complete home interior solutions from concept to execution.',
          features: ['Space Planning', 'Color Schemes', 'Furniture Selection', 'Lighting Design'],
          price: '₹1,200-2,000/sq ft'
        },
        {
          name: 'Commercial Interiors',
          description: 'Professional interior design for offices, retail, and hospitality spaces.',
          features: ['Brand Integration', 'Functional Layouts', 'Employee Wellness', 'Customer Experience'],
          price: '₹800-1,500/sq ft'
        },
        {
          name: 'Luxury Interiors',
          description: 'High-end interior design with premium materials and custom elements.',
          features: ['Custom Furniture', 'Premium Materials', 'Art Curation', 'Luxury Finishes'],
          price: '₹2,500-5,000/sq ft'
        },
        {
          name: 'Renovation & Makeover',
          description: 'Transform existing spaces with strategic design interventions.',
          features: ['Space Optimization', 'Modern Updates', 'Budget-Friendly Solutions', 'Quick Turnaround'],
          price: '₹600-1,200/sq ft'
        }
      ],
      process: [
        { step: 'Design Brief', description: 'Understanding your lifestyle and preferences' },
        { step: 'Concept Design', description: 'Mood boards and initial design concepts' },
        { step: 'Design Development', description: '3D visualizations and material selection' },
        { step: 'Documentation', description: 'Detailed drawings and specifications' },
        { step: 'Implementation', description: 'Project execution and styling' }
      ],
      portfolio: [
        {
          title: 'Minimalist Apartment, Mumbai',
          image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400',
          area: '1,200 sq ft',
          location: 'Mumbai, Maharashtra'
        },
        {
          title: 'Luxury Villa Interiors, Goa',
          image: 'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=400',
          area: '5,000 sq ft',
          location: 'Goa'
        },
        {
          title: 'Modern Office, Pune',
          image: 'https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=400',
          area: '8,000 sq ft',
          location: 'Pune, Maharashtra'
        }
      ]
    },
    '3d-visualization': {
      icon: Cube,
      title: '3D Visualization',
      subtitle: 'Bringing Ideas to Life',
      description: 'Our 3D visualization services help clients visualize their projects before construction, enabling better decision-making and ensuring the final result matches expectations.',
      heroImage: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1200',
      services: [
        {
          name: '3D Architectural Rendering',
          description: 'Photorealistic exterior and interior renderings of architectural projects.',
          features: ['Photorealistic Quality', 'Multiple Angles', 'Day/Night Views', 'Landscape Integration'],
          price: '₹8,000-15,000/render'
        },
        {
          name: 'Virtual Walkthroughs',
          description: 'Interactive 3D tours allowing clients to explore spaces virtually.',
          features: ['360° Views', 'Interactive Navigation', 'VR Compatible', 'Multiple Rooms'],
          price: '₹25,000-50,000/project'
        },
        {
          name: 'Animation & Flythrough',
          description: 'Dynamic video presentations showcasing architectural projects.',
          features: ['Smooth Animations', 'Professional Narration', 'Music & Effects', 'HD Quality'],
          price: '₹50,000-1,00,000/video'
        },
        {
          name: 'Marketing Visuals',
          description: 'High-quality visuals for real estate marketing and presentations.',
          features: ['Brochure Quality', 'Multiple Formats', 'Quick Turnaround', 'Revision Support'],
          price: '₹5,000-10,000/visual'
        }
      ],
      process: [
        { step: '3D Modeling', description: 'Creating accurate 3D models from architectural drawings' },
        { step: 'Material Application', description: 'Applying realistic materials and textures' },
        { step: 'Lighting Setup', description: 'Setting up realistic lighting scenarios' },
        { step: 'Rendering', description: 'High-quality rendering with post-processing' },
        { step: 'Final Delivery', description: 'Delivery in required formats and resolutions' }
      ],
      portfolio: [
        {
          title: 'Residential Complex, Bangalore',
          image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=400',
          area: '5 Acres',
          location: 'Bangalore, Karnataka'
        },
        {
          title: 'Commercial Tower, Hyderabad',
          image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=400',
          area: '50,000 sq ft',
          location: 'Hyderabad, Telangana'
        },
        {
          title: 'Villa Interior Visualization',
          image: 'https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg?auto=compress&cs=tinysrgb&w=400',
          area: '4,000 sq ft',
          location: 'Chennai, Tamil Nadu'
        }
      ]
    }
  };

  const service = serviceData[serviceId as keyof typeof serviceData];
  if (!service) return <div>Service not found</div>;

  const Icon = service.icon;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-gray-900 to-gray-700">
        <div className="absolute inset-0">
          <img 
            src={service.heroImage} 
            alt={service.title}
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white">
            <div className="flex items-center mb-4">
              <div className="w-16 h-16 bg-orange-600 rounded-lg flex items-center justify-center mr-4">
                <Icon className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-2">{service.title}</h1>
                <p className="text-xl text-gray-200">{service.subtitle}</p>
              </div>
            </div>
            <p className="text-lg max-w-2xl">{service.description}</p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-lg text-gray-600">Comprehensive solutions tailored to your needs</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {service.services.map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.name}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                  <ul className="grid grid-cols-2 gap-2">
                    {item.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-orange-600 font-semibold">{item.price}</span>
                  <button className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors">
                    Get Quote
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-lg text-gray-600">How we bring your vision to life</p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {service.process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">{index + 1}</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{step.step}</h3>
                <p className="text-sm text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Showcase */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <p className="text-lg text-gray-600">Recent work in {service.title.toLowerCase()}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {service.portfolio.map((project, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg text-gray-900 mb-2">{project.title}</h3>
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>{project.area}</span>
                    <span>{project.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-3xl font-bold mb-2">200+</div>
              <div className="text-orange-100">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">500+</div>
              <div className="text-orange-100">Happy Clients</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">8+</div>
              <div className="text-orange-100">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">25+</div>
              <div className="text-orange-100">Cities Served</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl text-gray-300 mb-8">Let's discuss your vision and create something amazing together</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="flex items-center justify-center px-8 py-3 bg-orange-600 text-white font-semibold rounded-full hover:bg-orange-700 transition-colors">
              <Phone className="w-5 h-5 mr-2" />
              Call Now: +91 98765 43210
            </button>
            <button className="flex items-center justify-center px-8 py-3 border-2 border-orange-600 text-orange-600 font-semibold rounded-full hover:bg-orange-600 hover:text-white transition-colors">
              <Mail className="w-5 h-5 mr-2" />
              Get Free Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;