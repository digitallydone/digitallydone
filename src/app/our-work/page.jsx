"use client"
import React, { useState } from 'react';
import { ArrowRight, ExternalLink, Globe, Calendar, Crown, Search } from 'lucide-react';

const WorkPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = {
    web: [
      {
        title: "Motherlove Hospital",
        category: "Website Design",
        type: "web",
        image: "/api/placeholder/600/400",
        description: "Complete website redesign focusing on patient experience and accessibility.",
        client: "Motherlove Hospital",
        deliverables: ["Responsive Website", "Patient Portal", "Appointment System"],
        results: ["50% increase in online appointments", "30% reduction in bounce rate"]
      },
      {
        title: "TechStart Platform",
        category: "Web Application",
        type: "web",
        image: "/api/placeholder/600/400",
        description: "Built a modern e-learning platform for tech education.",
        client: "TechStart Education",
        deliverables: ["Learning Management System", "Student Dashboard", "Course Creator"],
        results: ["10,000+ active users", "95% satisfaction rate"]
      }
    ],
    branding: [
      {
        title: "Aybran Sourcing Solutions",
        category: "Brand Identity",
        type: "branding",
        image: "/api/placeholder/600/400",
        description: "Complete brand identity redesign for a global sourcing company.",
        client: "Aybran Sourcing",
        deliverables: ["Logo Design", "Brand Guidelines", "Marketing Materials"],
        results: ["40% increase in brand recognition", "Successful global rollout"]
      },
      {
        title: "Special Ice Water Rebrand",
        category: "Rebranding",
        type: "branding",
        image: "/api/placeholder/600/400",
        description: "Modern rebranding for a leading beverage company.",
        client: "Special Ice",
        deliverables: ["Brand Strategy", "Packaging Design", "Visual Identity"],
        results: ["25% increase in market share", "Successful market penetration"]
      }
    ],
    events: [
      {
        title: "Tresiba Product Launch",
        category: "Product Launch",
        type: "events",
        image: "/api/placeholder/600/400",
        description: "Organized a high-profile product launch event for a new medical product.",
        client: "Novo Nordisk",
        deliverables: ["Event Planning", "Marketing Campaign", "Press Relations"],
        results: ["500+ attendees", "100+ media mentions"]
      },
      {
        title: "EU Day Charity Boxing",
        category: "Charity Event",
        type: "events",
        image: "/api/placeholder/600/400",
        description: "Organized a charity boxing exhibition for EU Day celebration.",
        client: "European Union",
        deliverables: ["Event Management", "Fundraising", "PR Campaign"],
        results: ["€100,000+ raised", "15 corporate sponsors"]
      }
    ]
  };

  const allProjects = Object.values(projects).flat();
  
  const filteredProjects = activeFilter === 'all' 
    ? allProjects 
    : projects[activeFilter];

  const searchedProjects = filteredProjects.filter(project =>
    project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    project.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    project.client.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Work</h1>
          <p className="text-xl max-w-2xl">
            Explore our portfolio of successful projects and creative solutions.
          </p>
        </div>
      </div>

      {/* Filter and Search Section */}
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { id: 'all', label: 'All Work', icon: <Globe className="h-5 w-5" /> },
              { id: 'web', label: 'Web Projects', icon: <Globe className="h-5 w-5" /> },
              { id: 'events', label: 'Events', icon: <Calendar className="h-5 w-5" /> },
              { id: 'branding', label: 'Branding', icon: <Crown className="h-5 w-5" /> }
            ].map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`flex items-center px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeFilter === category.id
                    ? 'bg-purple-600 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                {category.icon}
                <span className="ml-2">{category.label}</span>
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {searchedProjects.map((project, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <div className="text-sm text-purple-600 mb-2">{project.category}</div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <button className="flex items-center text-purple-600 hover:text-purple-700 font-semibold">
                  View Case Study <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
              <div className="relative">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover"
                />
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 bg-white p-2 rounded-full"
                >
                  ✕
                </button>
              </div>
              <div className="p-8">
                <div className="text-sm text-purple-600 mb-2">{selectedProject.category}</div>
                <h2 className="text-3xl font-bold mb-4">{selectedProject.title}</h2>
                <p className="text-gray-600 mb-6">{selectedProject.description}</p>
                
                <div className="grid md:grid-cols-2 gap-8 mb-6">
                  <div>
                    <h3 className="font-semibold mb-3">Deliverables</h3>
                    <ul className="space-y-2">
                      {selectedProject.deliverables.map((item, index) => (
                        <li key={index} className="flex items-center text-gray-600">
                          <ArrowRight className="h-4 w-4 text-purple-600 mr-2" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3">Results</h3>
                    <ul className="space-y-2">
                      {selectedProject.results.map((item, index) => (
                        <li key={index} className="flex items-center text-gray-600">
                          <ArrowRight className="h-4 w-4 text-purple-600 mr-2" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex justify-between items-center pt-6 border-t">
                  <div>
                    <div className="font-semibold">Client</div>
                    <div className="text-gray-600">{selectedProject.client}</div>
                  </div>
                  <button className="flex items-center bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition-colors">
                    Visit Project <ExternalLink className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WorkPage;