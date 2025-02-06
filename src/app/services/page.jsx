export default function Services() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-12">Our Services</h1>

        {/* Online Presence */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-6">Online Presence</h2>
          <p className="text-gray-700 mb-6">
            We create stunning websites, manage social media, and optimize your online visibility to
            make your brand shine.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ServiceExample
              title="Website Design"
              description="We design and develop responsive, user-friendly websites."
              client="motherlovehospital.com"
            />
            <ServiceExample
              title="Social Media Management"
              description="We create and manage engaging social media content."
              client="UNICEF - Be Amazing Campaign"
            />
          </div>
        </section>

        {/* Events Management */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-6">Events Management</h2>
          <p className="text-gray-700 mb-6">
            From product launches to charity galas, we make your events unforgettable.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ServiceExample
              title="Product Launches"
              description="We create immersive experiences for product launches."
              client="Novo Nordisk - Tresiba Launch"
            />
            <ServiceExample
              title="Charity Events"
              description="We organize impactful charity events."
              client="EU Day Celebration - Charity Boxing Exhibition"
            />
          </div>
        </section>

        {/* Identity Development */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-6">Identity Development</h2>
          <p className="text-gray-700 mb-6">
            We craft logos, colors, and designs that reflect your brand’s unique personality.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ServiceExample
              title="Brand Identity"
              description="We create cohesive brand identities."
              client="Aybran Sourcing Solutions"
            />
            <ServiceExample
              title="Rebranding"
              description="We help brands refresh their identity."
              client="Special Ice Water Rebranding"
            />
          </div>
        </section>
      </main>
    </div>
  );
}

const ServiceExample = ({ title, description, client }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg">
    <h3 className="text-2xl font-bold mb-4">{title}</h3>
    <p className="text-gray-700 mb-4">{description}</p>
    <p className="text-sm text-gray-500">Client: {client}</p>
  </div>
);