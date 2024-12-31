import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">About Us</h3>
            <p className="text-gray-400">
              Structura DataWorks is a leading provider of data management solutions, 
              helping businesses transform their raw data into valuable insights.
            </p>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center text-gray-400">
                <Mail className="h-5 w-5 mr-2" />
                <span>contact@structuradataworks.com</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Phone className="h-5 w-5 mr-2" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center text-gray-400">
                <MapPin className="h-5 w-5 mr-2" />
                <span>123 Data Street, New York, NY 10001</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-3">
              <div>
                <Link to="/terms" className="text-gray-400 hover:text-gray-300">
                  Terms & Conditions
                </Link>
              </div>
              <div>
                <Link to="/contact" className="text-gray-400 hover:text-gray-300">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} Structura DataWorks. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}