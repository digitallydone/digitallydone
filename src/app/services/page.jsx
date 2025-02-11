"use client"
import React, { useState } from 'react';
import { Code, Palette, Globe, Share2, Calendar, Crown } from 'lucide-react';

const ServicesPage = () => {
  const [activeTab, setActiveTab] = useState('all');
  
  const serviceCategories = {
    online: [
      {
        title: "Website Design",
        description: "We design and develop responsive, user-friendly websites.",
        client: "motherlovehospital.com",
        icon: <Code className="h-8 w-8" />
      },
      {
        title: "Social Media Management",
        description: "We create and manage engaging social media content.",
        client: "UNICEF - Be Amazing Campaign",
        icon: <Share2 className="h-8 w-8" />
      }
    ],
    events: [
      {
        title: "Product Launches",
        description: "We create immersive experiences for product launches.",
        client: "Novo Nordisk - Tresiba Launch",
        icon: <Calendar className="h-8 w-8" />
      },
      {
        title: "Charity Events",
        description: "We organize impactful charity events.",
        client: "EU Day Celebration - Charity Boxing Exhibition",
        icon: <Calendar className="h-8 w-8" />
      }
    ],
    identity: [
      {
        title: "Brand Identity",
        description: "We create cohesive brand identities.",
        client: "Aybran Sourcing Solutions",
        icon: <Crown className="h-8 w-8" />
      },
      {
        title: "Rebranding",
        description: "We help brands refresh their identity.",
        client: "Special Ice Water Rebranding",
        icon: <Palette className="h-8 w-8" />
      }
    ]
  };

  // Get all services for 'all' tab
  const allServices = Object.values(serviceCategories).flat();

  const displayedServices = activeTab === 'all' ? allServices : serviceCategories[activeTab];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl max-w-2xl">
            Comprehensive digital solutions tailored to your business needs.
          </p>
        </div>
      </div>

      {/* Services Section */}
      <div className="container mx-auto px-6 py-12">
        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {[
            { id: 'all', label: 'All Services', icon: <Globe className="h-5 w-5" /> },
            { id: 'online', label: 'Online Presence', icon: <Globe className="h-5 w-5" /> },
            { id: 'events', label: 'Events', icon: <Calendar className="h-5 w-5" /> },
            { id: 'identity', label: 'Identity', icon: <Crown className="h-5 w-5" /> }
          ].map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`flex items-center px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === category.id
                  ? 'bg-purple-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              {category.icon}
              <span className="ml-2">{category.label}</span>
            </button>
          ))}
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedServices.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="text-purple-600 mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <div className="text-sm text-purple-600">
                <strong>Featured Client:</strong> {service.client}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;