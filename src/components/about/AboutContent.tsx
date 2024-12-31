import React from 'react';

export default function AboutContent() {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-lg text-gray-600">
              Structura DataWorks was born from a simple yet powerful idea: to empower businesses by giving them clarity and control over their data. As companies grow, so does the complexity of their information. We recognized the need for a dedicated partner who could simplify, structure, and optimize data, enabling businesses to thrive in today's data-driven world.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600">
              To provide businesses with precise, reliable, and tailored data solutions that enhance operational efficiency, drive innovation, and unlock new opportunities.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
            <p className="text-lg text-gray-600">
              To be the global leader in data management solutions, trusted by businesses of all sizes for delivering excellence in data cataloging, cleaning, formatting, and marking.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}