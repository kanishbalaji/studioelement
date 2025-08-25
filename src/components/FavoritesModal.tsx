import React from 'react';
import { X, Heart, Share2, Eye } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: 'residential' | 'commercial' | 'interiors' | '3d-renders';
  image: string;
  location: string;
  description: string;
}

interface FavoritesModalProps {
  favorites: number[];
  onClose: () => void;
  onToggleFavorite: (projectId: number) => void;
}

const FavoritesModal: React.FC<FavoritesModalProps> = ({ favorites, onClose, onToggleFavorite }) => {
  // Sample projects data (in a real app, this would come from props or a store)
  const allProjects: Project[] = [
    {
      id: 1,
      title: 'Luxury Villa, Gurgaon',
      category: 'residential',
      image: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800',
      location: 'Gurgaon, Haryana',
      description: 'A contemporary 4-bedroom villa featuring modern Indian architecture with traditional elements.'
    },
    {
      id: 2,
      title: 'Corporate Office, Chennai',
      category: 'commercial',
      image: 'https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg?auto=compress&cs=tinysrgb&w=800',
      location: 'Chennai, Tamil Nadu',
      description: 'Modern corporate headquarters with sustainable design principles and innovative workspace solutions.'
    },
    {
      id: 3,
      title: 'Minimalist Living Room',
      category: 'interiors',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
      location: 'Mumbai, Maharashtra',
      description: 'Clean, minimalist interior design focusing on natural light and premium finishes.'
    },
    {
      id: 4,
      title: 'Residential Complex',
      category: '3d-renders',
      image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800',
      location: 'Bangalore, Karnataka',
      description: 'Photorealistic 3D visualization of a premium residential development.'
    },
    {
      id: 5,
      title: 'Heritage Home Restoration',
      category: 'residential',
      image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800',
      location: 'Jaipur, Rajasthan',
      description: 'Careful restoration of a 100-year-old heritage home blending tradition with modern amenities.'
    },
    {
      id: 6,
      title: 'Premium Restaurant Interior',
      category: 'commercial',
      image: 'https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&w=800',
      location: 'Delhi, NCR',
      description: 'Upscale restaurant interior design with custom furniture and ambient lighting.'
    }
  ];

  const favoriteProjects = allProjects.filter(project => favorites.includes(project.id));

  const shareProject = (project: Project) => {
    if (navigator.share) {
      navigator.share({
        title: project.title,
        text: project.description,
        url: window.location.href
      });
    } else {
      const message = `Check out this amazing project by Studio Element Designs: ${project.title} - ${project.description}`;
      const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-white rounded-xl max-w-4xl w-full max-h-[80vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Your Favorites</h2>
            <p className="text-gray-600">{favoriteProjects.length} saved projects</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {favoriteProjects.length === 0 ? (
            <div className="text-center py-12">
              <Heart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No favorites yet</h3>
              <p className="text-gray-500">Start exploring our portfolio and save your favorite projects!</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-6">
              {favoriteProjects.map((project) => (
                <div key={project.id} className="bg-gray-50 rounded-lg overflow-hidden">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  <div className="p-4">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="font-bold text-lg text-gray-900 mb-1">{project.title}</h3>
                        <p className="text-sm text-gray-500">{project.location}</p>
                      </div>
                      <div className="flex space-x-2">
                        <button
                          onClick={() => onToggleFavorite(project.id)}
                          className="p-2 rounded-full bg-red-100 text-red-600 hover:bg-red-200 transition-colors"
                        >
                          <Heart className="w-4 h-4" fill="currentColor" />
                        </button>
                        <button
                          onClick={() => shareProject(project)}
                          className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-orange-100 hover:text-orange-600 transition-colors"
                        >
                          <Share2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 text-sm mb-3">{project.description}</p>
                    
                    <button className="flex items-center text-orange-600 hover:text-orange-700 font-medium text-sm">
                      <Eye className="w-4 h-4 mr-2" />
                      View Project
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FavoritesModal;