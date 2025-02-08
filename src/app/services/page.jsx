export default function Services() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-4 py-12">
        <h1 className="mb-8 text-center text-4xl font-bold">Our Services</h1>
        <p className="mb-4">
          From branding to event execution, we blend creativity, technology, and
          strategy to deliver exceptional results for businesses and communities
          in Ghana.
        </p>

        {/* Online Presence */}
        <section className="mb-20">
          <h2 className="mb-6 text-3xl font-bold">Online Presence</h2>
          <p className="mb-6 text-gray-700">
            We create stunning websites, manage social media, and optimize your
            online visibility to make your brand shine.
          </p>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
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
          <h2 className="mb-6 text-3xl font-bold">Events Management</h2>
          <p className="mb-6 text-gray-700">
            From product launches to charity galas, we make your events
            unforgettable.
          </p>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
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
          <h2 className="mb-6 text-3xl font-bold">Identity Development</h2>
          <p className="mb-6 text-gray-700">
            We craft logos, colors, and designs that reflect your brand’s unique
            personality.
          </p>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
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
  <div className="rounded-lg bg-white p-6 shadow-lg">
    <h3 className="mb-4 text-2xl font-bold">{title}</h3>
    <p className="mb-4 text-gray-700">{description}</p>
    <p className="text-sm text-gray-500">Client: {client}</p>
  </div>
);
