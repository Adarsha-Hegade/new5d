import React from 'react';
import { Building2, Users, Globe, Award } from 'lucide-react';

export default function About() {
  return (
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
        <div className="space-y-16">
          {/* Mission Section */}
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900">Our Mission</h2>
            <p className="mt-4 text-lg text-gray-500">
              To revolutionize corporate data management through innovative solutions that 
              empower businesses to make better decisions, faster. We're committed to 
              providing cutting-edge technology that transforms raw data into actionable insights.
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="bg-blue-50 p-6 rounded-lg">
              <Building2 className="h-8 w-8 text-blue-600" />
              <p className="mt-4 text-3xl font-extrabold text-blue-600">500+</p>
              <p className="text-sm font-medium text-gray-500">Enterprise Clients</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <Users className="h-8 w-8 text-blue-600" />
              <p className="mt-4 text-3xl font-extrabold text-blue-600">50,000+</p>
              <p className="text-sm font-medium text-gray-500">Active Users</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <Globe className="h-8 w-8 text-blue-600" />
              <p className="mt-4 text-3xl font-extrabold text-blue-600">20+</p>
              <p className="text-sm font-medium text-gray-500">Countries Served</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <Award className="h-8 w-8 text-blue-600" />
              <p className="mt-4 text-3xl font-extrabold text-blue-600">15+</p>
              <p className="text-sm font-medium text-gray-500">Industry Awards</p>
            </div>
          </div>

          {/* Team Section */}
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900">Leadership Team</h2>
            <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: 'Sarah Johnson',
                  role: 'Chief Executive Officer',
                  image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
                },
                {
                  name: 'Michael Chen',
                  role: 'Chief Technology Officer',
                  image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80',
                },
                {
                  name: 'David Williams',
                  role: 'Chief Operations Officer',
                  image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&q=80',
                },
              ].map((person) => (
                <div key={person.name} className="flex flex-col items-center">
                  <img
                    className="w-32 h-32 rounded-full object-cover"
                    src={person.image}
                    alt={person.name}
                  />
                  <h3 className="mt-4 text-lg font-medium text-gray-900">{person.name}</h3>
                  <p className="text-sm text-gray-500">{person.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}