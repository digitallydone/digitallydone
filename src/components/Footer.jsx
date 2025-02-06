import React from "react";
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="mt-20 bg-gray-800 py-12 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* About Section */}
          <div>
            <h3 className="mb-4 text-xl font-bold">About Us</h3>
            <p className="text-gray-400">
              Digitally Done is your digital sidekick, helping brands shine
              online and offline with creative solutions.
            </p>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="mb-4 text-xl font-bold">Contact</h3>
            <p className="text-gray-400">Phone: 0241984605</p>
            <p className="text-gray-400">Email: business@itsdigitally.com</p>
          </div>

          {/* Social Media Section */}
          <div>
            <h3 className="mb-4 text-xl font-bold">Follow Us</h3>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white">
                Facebook
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                Twitter
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                Instagram
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400">
            &copy; 2023 Digitally Done. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
