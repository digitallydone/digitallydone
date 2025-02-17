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
  Star,
  Quote,
} from "lucide-react";

const AboutUs = () => {
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

  const testimonials = [
    {
      name: "Jerome Adzah",
      role: "",
      content:
        "Digitally Done transformed our business’s digital footprint with their innovative strategies. From revamping our social media campaigns to implementing razor-sharp SEO tactics, their team delivered measurable results that boosted our ROI by 40% in just six months. Their ability to blend creativity with analytics is unmatched, and their responsiveness made collaboration seamless. If you’re serious about scaling your brand online, Digitally Done is the partner you need. Highly recommend their services!",
      image: "/assets/client-testimony/jerome_adzah.jpg",
    },
    {
      name: "Deborah Smallie Lomotey",
      role: "  ",
      content:
        "Digitally Done orchestrated the Diplo-Rumble charity boxing event with impeccable precision, turning a high-stakes diplomatic initiative into a resounding success. From coordinating logistics between the EU delegation and local stakeholders to managing the Bukom Boxing Arena setup, their team ensured seamless execution. Digitally Done’s ability to balance grandeur with grassroots impact showcases their mastery in purpose-driven event management. A flawless blend of strategy and soul!",
      image: "/assets/client-testimony/deborah_smallie_lomote.jpg",
    },
    {
      name: "Akosua Kwafo Ogyiri",
      role: "",
      content:
        "Digitally Done delivers social media excellence. Their blend of creativity and analytics transforms campaigns and drives impressions while fostering authentic audience connections. They masterfully integrate advocacy for causes like #EndPeriodPoverty, proving digital strategies can ignite real-world impact. A trusted partner for measurable, purpose-driven growth.",
      image: "/assets/client-testimony/akosua_kwafo_ogyiri.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* About Us Section */}
      <section id="about" className="bg-white py-20">
        <div className="container mx-auto px-6">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div className="space-y-6">
              <h2 className="mb-6 text-4xl font-bold text-gray-800">
                About Us
              </h2>
              <p> Where Creativity Meets Social Impact</p>
              <p className="text-gray-600">
                <span>Our Story:</span> Digitally Done was founded with a bold
                vision—to bridge the digital divide in Ghana while empowering
                businesses and communities through innovation and creativity.
              </p>
              <p className="text-gray-600">
                Our journey began with a small but passionate team of creatives,
                marketers, and strategists who saw a gap in how businesses,
                NGOs, and local organizations leveraged digital technology.
              </p>
              <p className="text-gray-600">
                With deep roots in Ghanaian culture and a global outlook, we
                have transformed from a boutique agency into a powerhouse of
                digital solutions and event experiences.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-6">
                <div className="rounded-lg bg-purple-50 p-4 text-center">
                  <div className="mb-2 text-4xl font-bold text-purple-600">
                    200+
                  </div>
                  <div className="text-gray-600">Projects Completed</div>
                </div>
                <div className="rounded-lg bg-purple-50 p-4 text-center">
                  <div className="mb-2 text-4xl font-bold text-purple-600">
                    50+
                  </div>
                  <div className="text-gray-600">Team Members</div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="/assets/team/team_at_work.jpg"
                alt="Team at work"
                className="h-full w-full rounded-lg object-cover"
              />
              <img
                src="/assets/team/office_space.jpeg"
                alt="Office space"
                className="mt-8 h-full w-full rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Mission Statement */}
        <section className="mb-20">
          <h2 className="mb-6 text-3xl font-bold">Our Mission</h2>
          <p className="text-gray-700">
            Our mission is to gather really smart people who want to make sure
            everyone has access to digital skills and knowledge, especially
            those who might not have as many opportunities. We want to keep
            creating projects that help people learn and grow in the digital
            world in a way that’s long-lasting and makes a big difference in
            their lives.
          </p>
        </section>

        {/* Vision Statement */}
        <section className="mb-20">
          <h2 className="mb-6 text-3xl font-bold">Our Vision</h2>
          <p className="text-gray-700">
            In the next 2-5 years, we want to become the best at what we do,
            known for always doing things amazingly well and coming up with new,
            cool ideas. We’ll keep trying new things and doing even better than
            people expect, so we can be the leaders in making marketing really
            awesome.
          </p>
        </section>
      </div>

      {/* Testimonials Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-800">
              What Our Clients Say
            </h2>
            <p className="text-gray-600">{`Don't just take our word for it`}</p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="rounded-2xl bg-gray-50 p-8 transition-shadow hover:shadow-lg"
              >
                <Quote className="mb-4 h-8 w-8 text-purple-600" />
                <p className="mb-6 text-gray-600">{testimonial.content}</p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="mr-4 h-12 w-12 rounded-full"
                  />
                  <div>
                    <div className="font-semibold text-gray-800">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-600">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 py-20">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-3xl text-center text-white">
            <h2 className="mb-6 text-4xl font-bold">
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="mb-8 text-xl">
              {`Let's create something amazing together. Get in touch with our team today.`}
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <button className="flex items-center justify-center rounded-full bg-white px-8 py-3 font-semibold text-purple-600 transition-colors hover:bg-gray-100">
                Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="rounded-full border-2 border-white px-8 py-3 font-semibold text-white transition-colors hover:bg-white hover:text-purple-600">
                Schedule a Call
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
