"use client";
import React, { useState } from "react";
import {
  ArrowRight,
  CheckCircle,
  Code,
  Palette,
  Zap,
  Globe,
  Share2,
  Calendar,
  Crown,
} from "lucide-react";
import Link from "next/link";

const DigitalAgencyWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("online");

  const services = {
    online: [
      {
        title: "Website Design",
        description:
          "We design and develop responsive, user-friendly websites.",
        client: "motherlovehospital.com",
        icon: <Code className="h-8 w-8" />,
      },
      {
        title: "Social Media Management",
        description: "We create and manage engaging social media content.",
        client: "UNICEF - Be Amazing Campaign",
        icon: <Share2 className="h-8 w-8" />,
      },
    ],
    events: [
      {
        title: "Product Launches",
        description: "We create immersive experiences for product launches.",
        client: "Novo Nordisk - Tresiba Launch",
        icon: <Calendar className="h-8 w-8" />,
      },
      {
        title: "Charity Events",
        description: "We organize impactful charity events.",
        client: "EU Day Celebration - Charity Boxing Exhibition",
        icon: <Calendar className="h-8 w-8" />,
      },
    ],
    identity: [
      {
        title: "Brand Identity",
        description: "We create cohesive brand identities.",
        client: "Aybran Sourcing Solutions",
        icon: <Crown className="h-8 w-8" />,
      },
      {
        title: "Rebranding",
        description: "We help brands refresh their identity.",
        client: "Special Ice Water Rebranding",
        icon: <Palette className="h-8 w-8" />,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header/Navigation */}

      {/* Hero Section */}
      <div className="pt-20">
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white">
          <div className="container mx-auto px-6 py-24">
            <div className="max-w-3xl">
              <h1 className="mb-8 text-4xl font-bold md:text-6xl">
                Transforming Brands & Empowering Communities in Ghana –
                Digitally Done!{" "}
              </h1>
              <p className="mb-12 text-xl text-gray-100">
                Your Partner in Creative Digital Solutions, Event Magic,
                and Social Impact.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link href="#contact" className="flex items-center rounded-full bg-white px-8 py-3 font-semibold text-purple-600 transition-colors hover:bg-gray-100">
                  Start Project <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link href="/our-work" className="rounded-full border-2 border-white px-8 py-3 font-semibold text-white transition-colors hover:bg-white hover:text-purple-600">
                   Our Work
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section id="services" className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-800">
              Our Services
            </h2>
            <p className="mx-auto max-w-2xl text-gray-600">
              We offer comprehensive digital solutions to help your business
              thrive in the digital age.
            </p>
          </div>

          {/* Service Categories */}
          <div className="mb-12 flex justify-center space-x-4">
            {[
              {
                id: "online",
                label: "Online Presence",
                icon: <Globe className="h-5 w-5" />,
              },
              {
                id: "events",
                label: "Events Management",
                icon: <Calendar className="h-5 w-5" />,
              },
              {
                id: "identity",
                label: "Identity Development",
                icon: <Crown className="h-5 w-5" />,
              },
            ].map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`flex items-center rounded-full px-6 py-3 font-semibold transition-colors ${
                  activeTab === category.id
                    ? "bg-purple-600 text-white"
                    : "bg-white text-gray-600 hover:bg-gray-100"
                }`}
              >
                {category.icon}
                <span className="ml-2">{category.label}</span>
              </button>
            ))}
          </div>

          {/* Service Cards */}
          <div className="grid gap-8 md:grid-cols-2">
            {services[activeTab].map((service, index) => (
              <div
                key={index}
                className="transform rounded-2xl bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <div className="mb-4 text-purple-600">{service.icon}</div>
                <h3 className="mb-4 text-xl font-bold text-gray-800">
                  {service.title}
                </h3>
                <p className="mb-4 text-gray-600">{service.description}</p>
                <div className="text-sm text-purple-600">
                  <strong>Client:</strong> {service.client}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-800">
              Trusted by Industry Leaders
            </h2>
            <p className="text-gray-600">
              We work with amazing companies across various industries
            </p>
          </div>
          <div className="grid grid-cols-2 items-center gap-8 md:grid-cols-4">
            {[
              {
                name: "Flag of Europe",
                logo: "/assets/clients-logo/Flag_of_Europe.png",
              },
              {
                name: "Novo Nordisk",
                logo: "/assets/clients-logo/Novo_Nordisk.png",
              },
              {
                name: "unicef",
                logo: "/assets/clients-logo/unicef.png",
              },
              {
                name: "Special Ice",
                logo: "/assets/clients-logo/Special_Ice.png",
              },
            ].map((item, index) => (
              // <div
              //   key={index}
              //   className="rounded-lg bg- white p-8 shadow-sm transition-shadow hover:shadow-md"
              // >
              <img
                key={index}
                src={item.logo}
                alt={`Client ${item.name}`}
                className="h-28 w-full opacity-70 transition-opacity hover:opacity-100"
              />
              // </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-4xl font-bold text-gray-800">
                Why Choose Us?
              </h2>
              <div className="space-y-6">
                {[
                  "10+ years of industry experience",
                  "Award-winning design team",
                  "End-to-end digital solutions",
                  "Dedicated project managers",
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="mr-3 h-6 w-6 text-green-500" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl bg-gray-100 p-8">
              <div className="text-center">
                <h3 className="mb-6 text-2xl font-bold text-gray-800">
                  {`Let's discuss your project`}
                </h3>
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
                  />
                  <textarea
                    placeholder="Project Details"
                    rows={4}
                    className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
                  />
                  <button className="w-full rounded-lg bg-purple-600 py-3 font-semibold text-white transition-colors hover:bg-purple-700">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
    </div>
  );
};

export default DigitalAgencyWebsite;
