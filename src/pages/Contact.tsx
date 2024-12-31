import React from 'react';
import Layout from '../components/layout/Layout';
import ContactForm from '../components/contact/ContactForm';
import ContactInfo from '../components/contact/ContactInfo';

export default function Contact() {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="relative bg-blue-800 py-16">
          <div className="absolute inset-0">
            <img
              className="w-full h-full object-cover opacity-20"
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80"
              alt="Contact background"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-800/90 mix-blend-multiply" />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Contact Us
            </h1>
            <p className="mt-6 max-w-3xl text-xl text-blue-100">
              We'd love to hear from you! Whether you have a question, need more information about our services, or want to discuss how we can help streamline your data, our team is here to assist you.
            </p>
          </div>
        </div>

        {/* Contact Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Contact Form */}
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
                <ContactForm />
              </div>

              {/* Contact Information */}
              <div className="bg-gray-50 p-8">
                <ContactInfo />
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-blue-700 mt-16">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-extrabold text-white">Ready to Start?</h2>
            <p className="mt-4 text-xl text-blue-100">
              Let's discuss how Structura DataWorks can help your business become more efficient and data-driven.
            </p>
            <p className="mt-2 text-lg text-blue-100">
              We look forward to working with you.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}