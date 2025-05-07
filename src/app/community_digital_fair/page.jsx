import React from "react";

export const metadata = {
  title: "Community Digital Fair",
  openGraph: {
    title: "Community Digital Fair",
    description:
      "A community-driven digital fair where you can learn, share, and connect with others.",
    type: "website",
    url: "https://www.itsdigitally.com/community_digital_fair",
    images: [
      {
        url: "/asset/childWithDrone.png",
        width: 800,
        height: 600,
        alt: "Community Digital Fair",
      },
    ],

    description:
      "Join us in bridging the digital divide and empowering communities through technology.",
    keywords: ["Community Digital Fair", "Tech for Good", "Digital Inclusion"],
  },
};

const CDF = () => {
  return (
    <div className="bg-white">
      {/* <!-- Hero Section -->  */}
      {/* <section className="from-violet-700/90 to-violet-700/70 relative min-h-screen overflow-hidden bg-gradient-to-r"> */}
      <section className="bg- white/50 relative min-h-screen overflow-hidden bg-gradient-to-r from-gray-700/90 to-gray-700/70">
        {/* <!-- Responsive background image with overlay --> */}
        <div className="absolute inset-0 bg-[url('/asset/childWithDrone.png')] bg-cover bg-center opacity-30 mix-blend-overlay md:bg-fixed"></div>

        {/* <!-- Foreground content --> */}
        <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 text-center">
          <div className="flex flex-col items-center space-y-3">
            <img
              src="./asset/homewrit2.png"
              alt="Logo"
              className="mx-auto w-[350px] md:w-[600px]"
            />
            <p className="max-w-2xl text-lg text-teal-600 md:text-2xl">
              Igniting Tech Curiosity
            </p>
            <a href="#donate">
              <button className="rounded-full bg-teal-600 px-8 py-3 font-bold text-gray-700 shadow-lg transition hover:bg-opacity-90">
                Support Our Mission
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* <!-- About Section --> */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="mb-8 text-center text-3xl font-bold text-violet-700">
          This is what CDF is about
        </h2>
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <p className="mb-6 text-lg text-gray-700">
              {`  In an age where technology drives opportunity, millions of young
              minds in Ghana's underserved communities remain disconnected from
              the digital revolution. Without exposure to digital tools, they
              risk being left behind in an ever-evolving world.`}
            </p>
            <div className="rounded-lg border-l-4 border-teal-600 bg-teal-600/10 p-6">
              <p className="text-violet-700">
                The Community Digital Fair (CDF) is here to change that.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {/* <!-- Optimized images with lazy loading --> */}
            <img
              src="./asset/communityImg.jpg"
              alt="Community"
              className="lazy h-48 w-full rounded-lg object-cover shadow-md"
              loading="lazy"
              width="640"
              height="427"
            />
            <img
              src="./asset/images/boys.jpg"
              alt="Tech"
              className="lazy h-48 w-full rounded-lg border-2 border-teal-600 object-cover shadow-md"
              loading="lazy"
              width="640"
              height="427"
            />
            <img
              src="./asset/twoBoys.jpg"
              alt="Learning"
              className="lazy h-48 w-full rounded-lg object-cover shadow-md"
              loading="lazy"
              width="640"
              height="427"
            />
            <img
              src="./asset/images/drone-8369734_1280.jpg"
              alt="Tools"
              className="lazy h-48 w-full rounded-lg object-cover shadow-md"
              loading="lazy"
              width="640"
              height="427"
            />
          </div>
        </div>
      </section>

      {/* <!-- Challenge Section --> */}
      <section className="bg-gray-100 px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-violet-700">
            The Challenge
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-6">
              <div className="rounded-xl border-t-4 border-violet-700 bg-white p-8 shadow-sm">
                <h3 className="mb-2 text-xl font-bold text-violet-700">
                  Access Inequality
                </h3>
                <p className="text-gray-600">
                  Only 29% of youth in deprived areas have access to basic
                  digital tools.
                </p>
              </div>
              <div className="rounded-xl border-t-4 border-teal-600 bg-white p-8 shadow-sm">
                <h3 className="mb-2 text-xl font-bold text-violet-700">
                  Connectivity Gap
                </h3>
                <p className="text-gray-600">
                  60% of rural households lack internet connectivity.
                </p>
              </div>
            </div>
            <div className="rounded-xl bg-violet-700 p-8 text-white shadow-md">
              <h3 className="mb-4 text-xl font-bold">Untapped Potential</h3>
              <p className="mb-6">
                Without early digital exposure, innovation and potential remain
                untapped.
              </p>
              <img
                src="./asset/communityImg.jpg"
                alt="Challenge"
                className="lazy h-48 w-full rounded-lg border border-teal-600/30 object-cover"
                loading="lazy"
                width="800"
                height="450"
              />
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Opportunity Section --> */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="mb-12 text-center text-3xl font-bold text-violet-700">
          The Opportunity
        </h2>
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <p className="mb-6 text-lg text-gray-700">
              {`   Ghana's youth has a median age of 20.7, and are eager to learn and
              innovate. Digital skills can unlock careers in freelancing,
              e-commerce, and app development. But first the youth have to be
              nudged into curiosity.`}
            </p>
            <div className="rounded-xl bg-violet-700 p-8 text-white shadow-md">
              <p className="italic">
                {`  "Curiosity is a crucial driver for innovation because it fuels
                the desire to explore, question, and seek new solutions, leading
                to the development of novel ideas and breakthroughs."`}
              </p>
            </div>
          </div>
          <div>
            <div className="rounded-xl border-l-4 border-teal-600 bg-teal-600/10 p-8">
              <h3 className="mb-4 text-xl font-bold text-violet-700">
                Local Solutions
              </h3>
              <p className="text-gray-700">
                Local challenges like farming and waste management can be solved
                with technology, if curiosity in tech is ignited.
              </p>
              <img
                src="./asset/farm.jpg"
                alt="photorealistic-woman-organic-sustainable-garden-harvesting-produce"
                className="lazy mt-4 h-48 w-full rounded-lg object-cover"
                loading="lazy"
                width="800"
                height="450"
              />
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Pilot Edition Section --> */}
      <section className="bg-violet-700 px-4 py-16 text-white">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-8 text-center text-3xl font-bold">
            Pilot Edition @ Prampram
          </h2>

          <div className="mb-12 grid gap-12 md:grid-cols-2">
            <div>
              <h3 className="mb-4 text-xl font-bold text-teal-600">
                Why Prampram?
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="mr-2 text-teal-600">•</span>A representative
                  coastal community with limited digital access
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-teal-600">•</span>A community rich
                  in culture, ready to embrace innovation
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-teal-600">•</span>A scalable model
                  for replication in Ho, Tamale, and beyond
                </li>
              </ul>
            </div>
            <div>
              <img
                src="./asset/images/pict_large.jpg"
                alt="Prampram"
                className="lazy h-64 w-full rounded-lg border border-teal-600/30 object-cover shadow-lg"
                loading="lazy"
                width="800"
                height="450"
              />
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="mb-4 text-xl font-bold text-teal-600">
                Tech Activities
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="mr-2 text-teal-600">•</span>
                  Tricycle Tech Showcase
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-teal-600">•</span>
                  Drone Selfies & Delivery Simulations
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-teal-600">•</span>
                  Solar Charging Station (Learn & Charge Your Devices)
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-teal-600">•</span>
                  Hands-on Coding with Tablets (Scratch for Kids)
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-teal-600">•</span>
                  Computer assembling
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-teal-600">•</span>
                  VR Tours of Global Tech Hubs
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-teal-600">•</span>
                  Photo & Video Editing Basics
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-xl font-bold text-teal-600">
                Non-Tech Fun
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="mr-2 text-teal-600">•</span>
                  Traditional Games & Storytelling
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-teal-600">•</span>
                  Art & Craft
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-teal-600">•</span>
                  Food Bazaar Supporting Local Vendors
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Impact Section --> */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="mb-12 text-center text-3xl font-bold text-violet-700">
          Impact & Sustainability
        </h2>

        <div className="grid gap-12 md:grid-cols-2">
          <div className="rounded-xl border-t-4 border-violet-700 bg-white p-8 shadow-sm">
            <h3 className="mb-6 text-xl font-bold text-violet-700">
              Short-Term (2025)
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="mr-2 text-teal-600">•</span>
                Replicate in 2 more communities (Ho & Tamale)
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-teal-600">•</span>
                Train 100+ youth in digital skills
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-teal-600">•</span>
                Inspire 50% of attendees to pursue tech careers
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-teal-600">•</span>
                10 trained tech ambassadors to sustain activities
              </li>
            </ul>
          </div>

          <div className="rounded-xl border-t-4 border-teal-600 bg-white p-8 shadow-sm">
            <h3 className="mb-6 text-xl font-bold text-violet-700">
              Long-Term (2027)
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="mr-2 text-teal-600">•</span>
                Replicate in 10 communities
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-teal-600">•</span>
                Train 500+ Tech Ambassadors nationwide
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-teal-600">•</span>
                Tech hubs emerging in rural areas
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* <!-- Suport Section --> */}
      <section id="donate" className="bg-gray-100 px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-violet-700">
            How You Can Support
          </h2>

          <div className="grid gap-12 md:grid-cols-2">
            <div className="rounded-xl bg-blue-50 p-8 shadow-sm">
              <h3 className="mb-6 text-xl font-bold text-violet-700">
                Sponsor a Gadget
              </h3>
              <p className="mb-6 text-gray-700">
                Help us equip the event with essential technology:
              </p>
              <ul className="grid grid-cols-2 gap-4">
                <li className="flex items-center">
                  <span className="mr-2 text-teal-600">•</span>
                  Tablets/Phones
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-teal-600">•</span>
                  VR headsets
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-teal-600">•</span>
                  Drones
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-teal-600">•</span>
                  Projectors
                </li>
              </ul>
            </div>

            <div className="rounded-xl bg-violet-700 p-8 text-white shadow-md">
              <h3 className="mb-6 text-xl font-bold text-teal-600">Donate</h3>
              <p className="mb-6">
                Every contribution brings digital access to more communities
              </p>
              <a
                href="https://wa.me/233268431393?text=Hello,%20I%20want%20to%20support%20the%20Digital%20Community%20Fair.%20I%20am%20interested%20in%20donating:%0A- [ ] Gadgets%0A- [ ] Personnel%0A- [ ] Money%0APlease%20let%20me%20know%20the%20next%20steps."
                target="_blank"
              >
                <button className="rounded-full bg-teal-600 px-8 py-3 font-bold text-gray-700 transition hover:bg-opacity-90">
                  Make a Donation
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CDF;
