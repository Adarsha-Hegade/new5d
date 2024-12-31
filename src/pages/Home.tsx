import React from 'react';
import { Link } from 'react-router-dom';
import { LogIn, ArrowRight, Database, ClipboardCheck, FileSpreadsheet, Tags, Building2, Users, Globe, Award } from 'lucide-react';
import Layout from '../components/layout/Layout';

export default function Home() {
  const stats = [
    { icon: Building2, value: '500+', label: 'Enterprise Clients' },
    { icon: Users, value: '50,000+', label: 'Active Users' },
    { icon: Globe, value: '20+', label: 'Countries Served' },
    { icon: Award, value: '15+', label: 'Industry Awards' },
  ];

  const services = [
    {
      icon: Database,
      title: "Data Cataloging",
      description: "Organizing your data for easy access and usability."
    },
    {
      icon: ClipboardCheck,
      title: "Data Cleaning",
      description: "Eliminating errors and redundancies for accuracy."
    },
    {
      icon: FileSpreadsheet,
      title: "Data Formatting",
      description: "Customizing data for seamless integration."
    },
    {
      icon: Tags,
      title: "Data Marking",
      description: "Adding tags and markers for better clarity."
    }
  ];

  const industries = [
    { name: 'E-commerce', description: 'Streamline product catalogs and inventory data.' },
    { name: 'Healthcare', description: 'Organize patient records and research data securely.' },
    { name: 'Finance', description: 'Clean and format financial data for audits.' },
    { name: 'Manufacturing', description: 'Structure operational data for enhanced workflows.' },
    { name: 'Retail', description: 'Optimize inventory and sales data management.' },
    { name: 'Logistics', description: 'Keep tracking data clear and accessible.' },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0">
          <img
            className="w-full h-[80vh] object-cover"
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
            alt="Data visualization"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-900/75 mix-blend-multiply" />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8 h-[80vh] flex flex-col justify-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Structura DataWorks
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-gray-300">
            Shaping Your Data for Success. In the modern business landscape, data is more than just numbers 
            and text—it's the key to unlocking opportunities.
          </p>
          <div className="mt-10 flex gap-4">
            <Link
              to="/login"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
            >
              <LogIn className="mr-2 h-5 w-5" />
              Employee Portal
            </Link>
            <a
              href="#about"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50"
            >
              Learn More
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div id="about" className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Who We Are</h2>
            <p className="mt-4 text-xl text-gray-500 max-w-3xl mx-auto">
              At Structura DataWorks, we believe that well-structured data is the foundation of success. 
              Founded by data enthusiasts and problem solvers, we aim to help businesses unlock the true 
              potential of their information.
            </p>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-blue-50 p-6 rounded-lg">
                <stat.icon className="h-8 w-8 text-blue-600" />
                <p className="mt-4 text-3xl font-extrabold text-blue-600">{stat.value}</p>
                <p className="text-sm font-medium text-gray-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="bg-blue-700 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Our Mission</h2>
            <p className="mt-4 text-xl text-blue-100 max-w-3xl mx-auto">
              To provide businesses with clean, structured, and actionable data, enabling them to focus 
              on what they do best. We envision being the global leader in data management, empowering 
              businesses of all sizes with innovative and reliable data solutions.
            </p>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div id="services" className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">What We Do</h2>
            <p className="mt-4 text-xl text-gray-500">
              At Structura DataWorks, we specialize in transforming your raw data into valuable business assets.
            </p>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <div key={service.title} className="relative bg-white p-6 rounded-lg shadow-lg">
                <div className="w-12 h-12 rounded-md bg-blue-600 flex items-center justify-center">
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">{service.title}</h3>
                <p className="mt-2 text-base text-gray-500">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Industries Section */}
      <div className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Industries We Serve</h2>
            <p className="mt-4 text-xl text-gray-500">
              Our solutions are tailored to meet the unique challenges of various industries.
            </p>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => (
              <div key={industry.name} className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-lg font-medium text-gray-900">{industry.name}</h3>
                <p className="mt-2 text-base text-gray-500">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-700">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between">
          <div className="text-center lg:text-left">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Ready to Transform Your Data?
            </h2>
            <p className="mt-3 text-lg text-blue-100">
              Join countless businesses that trust Structura DataWorks for their data needs.
            </p>
          </div>
          <div className="mt-8 lg:mt-0 flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}