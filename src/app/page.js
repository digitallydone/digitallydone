import AboutUssection from '@/components/web/AboutUssection';
import CTAsection from '@/components/web/CTAsection';
import { Button } from '@nextui-org/react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-4 py-12">
     

        {/* Services Overview */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 my-20">
          <ServiceCard
            title="Online Presence"
            description="We create stunning websites and manage social media to make your brand shine."
          />
          <ServiceCard
            title="Events Management"
            description="From product launches to charity galas, we make your events unforgettable."
          />
          <ServiceCard
            title="Identity Development"
            description="We craft logos, colors, and designs that reflect your brand’s unique personality."
          />
        </section>

        <AboutUssection/>

        {/* Client Showcase */}
        <section className="my-20">
          <h2 className="text-3xl font-bold text-center mb-8">Our Clients</h2>
          <ClientShowcase />
        </section>

        <CTAsection/>
      </main>
      {/* <Footer /> */}
    </div>
  );
}

const ServiceCard = ({ title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg">
    <h3 className="text-2xl font-bold mb-4">{title}</h3>
    <p className="text-gray-700">{description}</p>
  </div>
);

const ClientShowcase = () => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
    <img src="/clients/unicef.png" alt="UNICEF" className="w-32 h-32 object-contain" />
    <img src="/clients/novo-nordisk.png" alt="Novo Nordisk" className="w-32 h-32 object-contain" />
    <img src="/clients/mother-love.png" alt="Mother Love Hospital" className="w-32 h-32 object-contain" />
    <img src="/clients/aybran.png" alt="Aybran Sourcing Solutions" className="w-32 h-32 object-contain" />
  </div>
);