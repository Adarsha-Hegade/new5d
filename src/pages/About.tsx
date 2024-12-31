import React from 'react';
import { Building2, Users, Globe, Award } from 'lucide-react';
import Layout from '../components/layout/Layout';

export default function About() {
  return (
    <Layout>
      {/* Rest of the About page content remains the same */}
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="relative bg-blue-800 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative">
              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
                About DataEntry Pro
              </h1>
              <p className="mt-6 max-w-3xl text-xl text-blue-100">
                Leading the digital transformation in corporate data management since 2010.
              </p>
            </div>
          </div>
        </div>

        {/* Content Sections */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Rest of the content remains the same */}
        </div>
      </div>
    </Layout>
  );
}