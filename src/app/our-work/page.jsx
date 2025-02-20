"use client";
import React, { useState } from "react";
import {
  ArrowRight,
  ExternalLink,
  Globe,
  Calendar,
  Crown,
  Search,
} from "lucide-react";

const WorkPage = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = {
    web: [
      {
        title: "Motherlove Hospital",
        category: "Website Design",
        type: "web",
        image: "/assets/work/MotherLoveWebFront.png",
        description:
          "Complete website redesign focusing on patient experience and accessibility.",
        client: "Motherlove Hospital",
        deliverables: [
          "Responsive Website",
          "Patient Portal",
          "Appointment System",
        ],
        results: [
          "50% increase in online appointments",
          "30% reduction in bounce rate",
        ],
      },
      {
        title: "Be Amazing",
        category: "Product Launch",
        type: "events",
        image: "/assets/work/CMHfloat.jpg",
        description:
          "Digitally Done collaborated with the Ghana Education Service (GES) and UNICEF on the 'Be Amazing, Period!' initiative, a nationwide campaign focused on behavior change. The campaign aimed to empower young girls by building their confidence and reducing school absences related to menstruation. Additionally, it encouraged the involvement of boys, teachers, and key stakeholders in creating a supportive environment for adolescent girls.",
        client: "GES ",
        deliverables: [
          "Education",
          "Support",
          // "Learning Management System",
          // "Student Dashboard",
          // "Course Creator",
        ],
        results: ["10,000+ active students", "95% satisfaction rate"],
      },
    ],
    branding: [
      {
        title: "Aybran Sourcing Solutions",
        category: "Brand Identity",
        type: "branding",
        image: "/assets/work/aybram.png",
        description:
          "Complete brand identity redesign for a global sourcing company.",
        client: "Aybran Sourcing",
        deliverables: [
          "Logo Design",
          "Brand Guidelines",
          "Marketing Materials",
        ],
        results: [
          "40% increase in brand recognition",
          "Successful global rollout",
        ],
      },
      {
        title: "Special Ice Water Rebrand",
        category: "Rebranding",
        type: "branding",
        image: "/assets/work/SpecialIceAd.png",
        description: "Modern rebranding for a leading beverage company.",
        client: "Special Ice",
        deliverables: ["Brand Strategy", "Packaging Design", "Visual Identity"],
        results: [
          "25% increase in market share",
          "Successful market penetration",
        ],
      },
    ],
    events: [
      {
        title: "Tresiba Product Launch",
        category: "Product Launch",
        type: "events",
        image: "/assets/work/Triseba.png",
        description:
          "Organized a high-profile product launch event for a new medical product.",
        client: "Novo Nordisk",
        deliverables: [
          "Event Planning",
          "Marketing Campaign",
          "Press Relations",
        ],
        results: ["500+ attendees", "100+ media mentions"],
      },
      {
        title: "EU Day Charity Boxing",
        category: "Charity Event",
        type: "events",
        image: "/assets/work/CharityBoxing.jpg",
        description:
          "Organized a charity boxing exhibition for EU Day celebration.",
        client: "European Union",
        deliverables: ["Event Management", "Fundraising", "PR Campaign"],
        results: ["€100,000+ raised", "15 corporate sponsors"],
      },
    ],
  };

  const allProjects = Object.values(projects).flat();

  const filteredProjects =
    activeFilter === "all" ? allProjects : projects[activeFilter];

  const searchedProjects = filteredProjects.filter(
    (project) =>
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.client.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 py-20 text-white">
        <div className="container mx-auto px-6">
          <h1 className="mb-6 text-4xl font-bold md:text-5xl">Our Work</h1>
          <p className="max-w-2xl text-xl">
            Explore our portfolio of successful projects and creative solutions.
          </p>
        </div>
      </div>

      {/* Filter and Search Section */}
      <div className="container mx-auto px-6 py-12">
        <div className="mb-12 flex flex-col items-center justify-between gap-6 md:flex-row">
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-4">
            {[
              {
                id: "all",
                label: "All Work",
                icon: <Globe className="h-5 w-5" />,
              },
              {
                id: "web",
                label: "Web Projects",
                icon: <Globe className="h-5 w-5" />,
              },
              {
                id: "events",
                label: "Events",
                icon: <Calendar className="h-5 w-5" />,
              },
              {
                id: "branding",
                label: "Branding",
                icon: <Crown className="h-5 w-5" />,
              },
            ].map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`flex items-center rounded-full px-6 py-3 font-semibold transition-all duration-300 ${
                  activeFilter === category.id
                    ? "bg-purple-600 text-white shadow-lg"
                    : "bg-white text-gray-600 hover:bg-gray-100"
                }`}
              >
                {category.icon}
                <span className="ml-2">{category.label}</span>
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 transform text-gray-400" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-full border border-gray-300 py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {searchedProjects.map((project, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 hover:shadow-xl"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
              <div className="p-6">
                <div className="mb-2 text-sm text-purple-600">
                  {project.category}
                </div>
                <h3 className="mb-2 text-xl font-bold text-gray-800">
                  {project.title}
                </h3>
                <p className="mb-4 text-gray-600">
                  {project.description.length > 100
                    ? project.description.substring(0, 100) + "..."
                    : project.description}
                </p>{" "}
                <button className="flex items-center font-semibold text-purple-600 hover:text-purple-700">
                  View Case Study <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
            <div className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl bg-white">
              <div className="relative">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="h-64 w-full object-cover"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute right-4 top-4 rounded-full bg-white p-2"
                >
                  ✕
                </button>
              </div>
              <div className="p-8">
                <div className="mb-2 text-sm text-purple-600">
                  {selectedProject.category}
                </div>
                <h2 className="mb-4 text-3xl font-bold">
                  {selectedProject.title}
                </h2>
                <p className="mb-6 text-gray-600">
                  {selectedProject.description}
                </p>

                <div className="mb-6 grid gap-8 md:grid-cols-2">
                  <div>
                    <h3 className="mb-3 font-semibold">Deliverables</h3>
                    <ul className="space-y-2">
                      {selectedProject.deliverables.map((item, index) => (
                        <li
                          key={index}
                          className="flex items-center text-gray-600"
                        >
                          <ArrowRight className="mr-2 h-4 w-4 text-purple-600" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="mb-3 font-semibold">Results</h3>
                    <ul className="space-y-2">
                      {selectedProject.results.map((item, index) => (
                        <li
                          key={index}
                          className="flex items-center text-gray-600"
                        >
                          <ArrowRight className="mr-2 h-4 w-4 text-purple-600" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex items-center justify-between border-t pt-6">
                  <div>
                    <div className="font-semibold">Client</div>
                    <div className="text-gray-600">
                      {selectedProject.client}
                    </div>
                  </div>
                  <button className="flex items-center rounded-full bg-purple-600 px-6 py-2 text-white transition-colors hover:bg-purple-700">
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
