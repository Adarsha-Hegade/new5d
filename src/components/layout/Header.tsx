import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Database, Menu, X, ChevronDown } from 'lucide-react';

export default function Header() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  const isActive = (path: string) => location.pathname === path;

  const menuItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isDropdownOpen) setIsDropdownOpen(false);
  };

  return (
    <header className="bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center px-4 sm:px-6 lg:px-8 h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
  <img src="/logo.png" alt=" Structura DataWorks Logo" className="h-8 w-8" />
  <div>
    <span className="text-xl font-bold text-gray-900 block leading-none">Structura</span>
    <span className="text-sm text-blue-600 font-medium">DataWorks</span>
  </div>
</Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors duration-200 ${
                  isActive(item.path)
                    ? 'text-blue-600'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center text-sm font-medium text-gray-600 hover:text-blue-600"
              >
                Services
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                  <Link
                    to="/services/data-entry"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
                  >
                    Data Entry
                  </Link>
                  <Link
                    to="/services/data-processing"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
                  >
                    Data Processing
                  </Link>
                  <Link
                    to="/services/data-analysis"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
                  >
                    Data Analysis
                  </Link>
                </div>
              )}
            </div>
            <Link
              to="/login"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
            >
              Employee Portal
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-blue-50"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-100">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    isActive(item.path)
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="px-3 py-2">
                <div className="font-medium text-gray-600 mb-2">Services</div>
                <Link
                  to="/services/data-entry"
                  className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Data Entry
                </Link>
                <Link
                  to="/services/data-processing"
                  className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Data Processing
                </Link>
                <Link
                  to="/services/data-analysis"
                  className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Data Analysis
                </Link>
              </div>
              <Link
                to="/login"
                className="block px-3 py-2 text-base font-medium text-blue-600 hover:text-blue-700"
                onClick={() => setIsMenuOpen(false)}
              >
                Employee Portal
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}