import React, { useState } from 'react';
import { Heart, Share2, Eye } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: 'residential' | 'commercial' | 'interiors' | '3d-renders';
  images: string[];
  location: string;
  description: string;
  details: {
    area: string;
    duration: string;
    budget: string;
    client: string;
    scope: string[];
    challenges: string;
    solution: string;
    materials: string[];
    features: string[];
  };
}

interface PortfolioProps {
  favorites: number[];
  onToggleFavorite: (projectId: number) => void;
}

const Portfolio: React.FC<PortfolioProps> = ({ favorites, onToggleFavorite }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'residential', name: 'Residential' },
    { id: 'commercial', name: 'Commercial' },
    { id: 'interiors', name: 'Interiors' },
    { id: '3d-renders', name: '3D Renders' }
  ];

  const projects: Project[] = [
    {
      id: 1,
      title: 'Luxury Villa, Gurgaon',
      category: 'residential',
      images: [
        'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      location: 'Gurgaon, Haryana',
      description: 'A contemporary 4-bedroom villa featuring modern Indian architecture with traditional elements.',
      details: {
        area: '4,500 sq ft',
        duration: '18 months',
        budget: '₹2.8 Crores',
        client: 'Private Residence',
        scope: ['Architecture Design', 'Interior Design', 'Landscape Design', 'Project Management'],
        challenges: 'Integrating modern amenities while maintaining traditional Indian architectural elements and ensuring Vastu compliance.',
        solution: 'Created a contemporary design with traditional courtyards, used local materials like Jaisalmer stone, and incorporated modern smart home technology seamlessly.',
        materials: ['Jaisalmer Stone', 'Teak Wood', 'Italian Marble', 'Copper Accents', 'Traditional Tiles'],
        features: ['Smart Home Automation', 'Solar Water Heating', 'Rainwater Harvesting', 'Traditional Courtyard', 'Modern Kitchen', 'Home Theater', 'Gym', 'Guest Suite']
      }
    },
    {
      id: 2,
      title: 'Corporate Office, Chennai',
      category: 'commercial',
      images: [
        'https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/2041627/pexels-photo-2041627.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      location: 'Chennai, Tamil Nadu',
      description: 'Modern corporate headquarters with sustainable design principles and innovative workspace solutions.',
      details: {
        area: '25,000 sq ft',
        duration: '14 months',
        budget: '₹4.2 Crores',
        client: 'Tech Startup',
        scope: ['Architecture Design', 'Interior Design', 'MEP Design', 'Sustainability Consulting'],
        challenges: 'Creating a modern workspace that promotes collaboration while maintaining productivity in Chennai\'s climate.',
        solution: 'Designed open-plan offices with flexible workstations, integrated natural lighting, and implemented energy-efficient HVAC systems.',
        materials: ['Glass Facades', 'Steel Structure', 'Bamboo Flooring', 'Recycled Materials', 'LED Lighting'],
        features: ['Green Building Certification', 'Flexible Workspaces', 'Recreation Areas', 'Cafeteria', 'Conference Rooms', 'Parking for 100 vehicles', 'Rooftop Garden']
      }
    },
    {
      id: 3,
      title: 'Minimalist Living Room',
      category: 'interiors',
      images: [
        'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      location: 'Mumbai, Maharashtra',
      description: 'Clean, minimalist interior design focusing on natural light and premium finishes.',
      details: {
        area: '1,200 sq ft',
        duration: '6 months',
        budget: '₹18 Lakhs',
        client: 'Young Professional Couple',
        scope: ['Interior Design', 'Furniture Selection', 'Lighting Design', 'Art Curation'],
        challenges: 'Maximizing space in a compact Mumbai apartment while maintaining a luxurious feel.',
        solution: 'Used neutral color palette, multi-functional furniture, and strategic lighting to create an illusion of space.',
        materials: ['White Oak', 'Natural Stone', 'Linen Fabrics', 'Brass Fixtures', 'Terrazzo Flooring'],
        features: ['Built-in Storage', 'Smart Lighting', 'Custom Furniture', 'Art Collection Display', 'Home Office Corner', 'Balcony Garden']
      }
    },
    {
      id: 4,
      title: 'Residential Complex',
      category: '3d-renders',
      images: [
        'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      location: 'Bangalore, Karnataka',
      description: 'Photorealistic 3D visualization of a premium residential development.',
      details: {
        area: '5 Acres',
        duration: '3 months (Visualization)',
        budget: '₹8 Lakhs (3D Work)',
        client: 'Real Estate Developer',
        scope: ['3D Modeling', 'Photorealistic Rendering', 'Virtual Walkthrough', 'Marketing Materials'],
        challenges: 'Creating realistic visualizations that accurately represent the proposed development for marketing purposes.',
        solution: 'Developed detailed 3D models with accurate lighting, materials, and landscaping to showcase the project\'s potential.',
        materials: ['Digital Modeling', 'Texture Mapping', 'Lighting Simulation', 'Landscape Rendering'],
        features: ['360° Virtual Tours', 'Day/Night Renderings', 'Aerial Views', 'Interior Visualizations', 'Landscape Design', 'Amenity Visualization']
      }
    },
    {
      id: 5,
      title: 'Heritage Home Restoration',
      category: 'residential',
      images: [
        'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      location: 'Jaipur, Rajasthan',
      description: 'Careful restoration of a 100-year-old heritage home blending tradition with modern amenities.',
      details: {
        area: '6,000 sq ft',
        duration: '24 months',
        budget: '₹3.5 Crores',
        client: 'Heritage Property Owner',
        scope: ['Heritage Restoration', 'Structural Strengthening', 'Modern Amenity Integration', 'Landscape Restoration'],
        challenges: 'Preserving historical architectural elements while incorporating modern conveniences and ensuring structural safety.',
        solution: 'Carefully restored original features using traditional techniques while discretely integrating modern systems.',
        materials: ['Original Sandstone', 'Traditional Lime Mortar', 'Antique Tiles', 'Carved Wooden Elements', 'Brass Fittings'],
        features: ['Restored Frescoes', 'Traditional Courtyards', 'Modern Plumbing', 'Central AC', 'Heritage Furniture', 'Traditional Gardens', 'Modern Kitchen']
      }
    },
    {
      id: 6,
      title: 'Premium Restaurant Interior',
      category: 'commercial',
      images: [
        'https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/2290753/pexels-photo-2290753.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      location: 'Delhi, NCR',
      description: 'Upscale restaurant interior design with custom furniture and ambient lighting.',
      details: {
        area: '3,500 sq ft',
        duration: '8 months',
        budget: '₹1.2 Crores',
        client: 'Restaurant Chain',
        scope: ['Interior Design', 'Kitchen Design', 'Furniture Design', 'Lighting Design', 'Branding Integration'],
        challenges: 'Creating an upscale dining atmosphere while ensuring efficient kitchen operations and customer flow.',
        solution: 'Designed elegant dining spaces with custom furniture, strategic lighting, and efficient kitchen layout.',
        materials: ['Walnut Wood', 'Marble Surfaces', 'Leather Upholstery', 'Brass Accents', 'Custom Lighting'],
        features: ['Private Dining Areas', 'Open Kitchen Concept', 'Wine Display', 'Custom Furniture', 'Ambient Lighting', 'Sound System', 'Outdoor Seating']
      }
    }
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const shareProject = (project: Project) => {
    if (navigator.share) {
      navigator.share({
        title: project.title,
        text: project.description,
        url: window.location.href
      });
    } else {
      // Fallback for WhatsApp sharing
      const message = `Check out this amazing project by Studio Element Designs: ${project.title} - ${project.description}`;
      const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
    }
  };

  return (
    <section id="portfolio" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-orange-600">Portfolio</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our diverse collection of architectural and interior design projects across India
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center mb-12 gap-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category.id
                  ? 'bg-orange-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={project.images[0]} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              {/* Project Info */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-1">{project.title}</h3>
                    <p className="text-sm text-gray-500">{project.location}</p>
                  </div>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => onToggleFavorite(project.id)}
                      className={`p-2 rounded-full transition-colors ${
                        favorites.includes(project.id)
                          ? 'bg-red-100 text-red-600'
                          : 'bg-gray-100 text-gray-600 hover:bg-red-100 hover:text-red-600'
                      }`}
                    >
                      <Heart className="w-4 h-4" fill={favorites.includes(project.id) ? 'currentColor' : 'none'} />
                    </button>
                    <button
                      onClick={() => shareProject(project)}
                      className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-orange-100 hover:text-orange-600 transition-colors"
                    >
                      <Share2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                
                <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                
                <button
                  onClick={() => setSelectedProject(project)}
                  className="flex items-center text-orange-600 hover:text-orange-700 font-medium text-sm"
                >
                  <Eye className="w-4 h-4 mr-2" />
                  View Details
                </button>
              </div>

              {/* Category Badge */}
              <div className="absolute top-4 left-4">
                <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-xs font-medium">
                  {categories.find(c => c.id === project.category)?.name}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setSelectedProject(null)}>
            <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
              {/* Image Gallery */}
              <div className="grid grid-cols-2 gap-2 p-4">
                {selectedProject.images.map((image, index) => (
                  <div key={index} className={`${index === 0 ? 'col-span-2' : ''} aspect-[4/3] overflow-hidden rounded-lg`}>
                    <img 
                      src={image} 
                      alt={`${selectedProject.title} - Image ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{selectedProject.title}</h3>
                    <p className="text-gray-600">{selectedProject.location}</p>
                    <div className="flex flex-wrap gap-4 mt-2 text-sm text-gray-500">
                      <span>Area: {selectedProject.details.area}</span>
                      <span>Duration: {selectedProject.details.duration}</span>
                      <span>Budget: {selectedProject.details.budget}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="text-gray-400 hover:text-gray-600 text-2xl"
                  >
                    ×
                  </button>
                </div>
                
                <p className="text-gray-700 mb-6">{selectedProject.description}</p>
                
                {/* Project Details */}
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Project Scope</h4>
                    <ul className="space-y-1">
                      {selectedProject.details.scope.map((item, index) => (
                        <li key={index} className="text-sm text-gray-600 flex items-center">
                          <div className="w-2 h-2 bg-orange-600 rounded-full mr-2"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features</h4>
                    <ul className="space-y-1">
                      {selectedProject.details.features.slice(0, 6).map((feature, index) => (
                        <li key={index} className="text-sm text-gray-600 flex items-center">
                          <div className="w-2 h-2 bg-orange-600 rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {/* Challenge & Solution */}
                <div className="bg-gray-50 rounded-lg p-4 mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Challenge</h4>
                  <p className="text-sm text-gray-600 mb-4">{selectedProject.details.challenges}</p>
                  
                  <h4 className="font-semibold text-gray-900 mb-2">Our Solution</h4>
                  <p className="text-sm text-gray-600">{selectedProject.details.solution}</p>
                </div>
                
                {/* Materials Used */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Materials Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.details.materials.map((material, index) => (
                      <span key={index} className="px-3 py-1 bg-orange-100 text-orange-800 text-xs rounded-full">
                        {material}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="flex space-x-4">
                  <button
                    onClick={() => onToggleFavorite(selectedProject.id)}
                    className={`flex items-center px-4 py-2 rounded-full transition-colors ${
                      favorites.includes(selectedProject.id)
                        ? 'bg-red-100 text-red-600'
                        : 'bg-gray-100 text-gray-600 hover:bg-red-100 hover:text-red-600'
                    }`}
                  >
                    <Heart className="w-4 h-4 mr-2" fill={favorites.includes(selectedProject.id) ? 'currentColor' : 'none'} />
                    {favorites.includes(selectedProject.id) ? 'Remove from Favorites' : 'Add to Favorites'}
                  </button>
                  <button
                    onClick={() => shareProject(selectedProject)}
                    className="flex items-center px-4 py-2 rounded-full bg-orange-100 text-orange-600 hover:bg-orange-200 transition-colors"
                  >
                    <Share2 className="w-4 h-4 mr-2" />
                    Share Project
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;