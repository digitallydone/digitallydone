// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';

import Footer from "@/components/Footer";
import Navbar from "@/components/NavbarTop";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-12">About Us</h1>

        {/* Mission Statement */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-gray-700">
            Our mission is to gather really smart people who want to make sure everyone has access
            to digital skills and knowledge, especially those who might not have as many
            opportunities. We want to keep creating projects that help people learn and grow in the
            digital world in a way that’s long-lasting and makes a big difference in their lives.
          </p>
        </section>

        {/* Vision Statement */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
          <p className="text-gray-700">
            In the next 2-5 years, we want to become the best at what we do, known for always doing
            things amazingly well and coming up with new, cool ideas. We’ll keep trying new things
            and doing even better than people expect, so we can be the leaders in making marketing
            really awesome.
          </p>
        </section>
      </main>
    </div>
  );
}