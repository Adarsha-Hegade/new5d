import React from 'react';
import { Link } from 'react-router-dom';
import { LogIn, ArrowRight, Database, ClipboardCheck, FileSpreadsheet, Tags, Building2, Users, Globe, Award } from 'lucide-react';
import Layout from '../components/layout/Layout';
import WhyChooseUs from '../components/about/WhyChooseUs';
import AboutValues from '../components/about/AboutValues';

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
      description: "Comprehensive organization and structuring of your data assets with advanced metadata management and intelligent tagging systems."
    },
    {
      icon: ClipboardCheck,
      title: "Data Cleaning",
      description: "Advanced data validation, deduplication, and standardization using AI-powered tools to ensure highest data quality standards."
    },
    {
      icon: FileSpreadsheet,
      title: "Data Formatting",
      description: "Custom data transformation and formatting solutions with support for multiple industry standards and enterprise systems."
    },
    {
      icon: Tags,
      title: "Data Marking",
      description: "Intelligent data classification and tagging system with automated metadata generation and advanced search capabilities."
    }
  ];

  const industries = [
    { 
      name: 'E-commerce',
      description: 'Streamline product catalogs and inventory data.',
      image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80'
    },
    {
      name: 'Healthcare',
      description: 'Organize patient records and research data securely.',
      image: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&q=80'
    },
    {
      name: 'Finance',
      description: 'Clean and format financial data for audits.',
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80'
    },
    {
      name: 'Manufacturing',
      description: 'Structure operational data for enhanced workflows.',
      image: 'https://images.unsplash.com/photo-1717386255773-1e3037c81788?auto=format&fit=crop&q=80'
    },
    {
      name: 'Retail',
      description: 'Optimize inventory and sales data management.',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80'
    },
    {
      name: 'Logistics',
      description: 'Keep tracking data clear and accessible.',
      image: 'https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&q=80'
    },
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
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-gray-50 hover:bg-gray-100"
            >
              Learn More
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div id="about" className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Who We Are</h2>
            <p className="mt-4 text-xl text-gray-500 max-w-3xl mx-auto">
              At Structura DataWorks, we believe that well-structured data is the foundation of success. 
              Founded by data enthusiasts and problem solvers, we aim to help businesses unlock the true 
              potential of their information.
            </p>
          </div> */}

         
                 <WhyChooseUs />

          {/* Stats */}
          <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-blue-50 p-6 rounded-lg transform hover:scale-105 transition-transform duration-200">
                <stat.icon className="h-8 w-8 text-blue-600" />
                <p className="mt-4 text-3xl font-extrabold text-blue-600">{stat.value}</p>
                <p className="text-sm font-medium text-gray-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div id="services" className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">What We Do</h2>
            <p className="mt-4 text-xl text-gray-500">
              Transform your raw data into valuable business assets with our comprehensive suite of services.
            </p>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <div key={service.title} className="relative bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200">
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
      <AboutValues />
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
              <div key={industry.name} className="group relative bg-gray-50 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200">
                <div className="h-48 w-full overflow-hidden">
                  <img
                    src={industry.image}
                    alt={industry.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-200"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-medium text-gray-900">{industry.name}</h3>
                  <p className="mt-2 text-base text-gray-500">{industry.description}</p>
                </div>
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
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-gray-50 hover:bg-blue-50"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}