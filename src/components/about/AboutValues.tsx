import React from 'react';
import { Target, Lightbulb, Users, Shield, Award } from 'lucide-react';

const values = [
  { icon: Target, title: 'Precision', description: 'Attention to every detail in our work ensures flawless results.' },
  { icon: Lightbulb, title: 'Innovation', description: 'Constantly evolving and adopting the latest practices in data management.' },
  { icon: Users, title: 'Collaboration', description: 'Partnering closely with clients to understand and meet their unique needs.' },
  { icon: Shield, title: 'Integrity', description: 'Delivering what we promise, every time.' },
  { icon: Award, title: 'Excellence', description: 'Setting high standards for quality in every project we undertake.' },
];

export default function AboutValues() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value) => (
            <div key={value.title} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <value.icon className="h-6 w-6 text-blue-600 mr-3" />
                <h3 className="text-lg font-semibold text-gray-900">{value.title}</h3>
              </div>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}