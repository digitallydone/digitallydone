import React from "react";
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-4 gap-8">
        <div>
          <h4 className="text-2xl font-bold mb-4">DigitallyDone</h4>
          <p className="text-gray-400">
            Creating digital experiences that matter.
          </p>
        </div>
        <div>
          <h5 className="font-semibold mb-4">Services</h5>
          <ul className="space-y-2 text-gray-400">
            <li>Online Presence</li>
            <li>Events Management</li>
            <li>Identity Development</li>
            <li>Digital Marketing</li>
          </ul>
        </div>
        <div>
          <h5 className="font-semibold mb-4">Company</h5>
          <ul className="space-y-2 text-gray-400">
            <li>About Us</li>
            <li>Careers</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>
        {/* <div>
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
      </div> */}
        <div>
          <h5 className="font-semibold mb-4">Contact</h5>
          <ul className="space-y-2 text-gray-400">
            <li>business@itsdigitally.com</li>
            <li> 0241984605</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
        <p>&copy; 2025 DigitallyDone. All rights reserved.</p>
      </div>
    </div>
  </footer>
  );
};
export default Footer;
