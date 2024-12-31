import React from 'react';

export default function AboutHero() {
  return (
    <div className="relative bg-blue-800 py-16">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover opacity-20"
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80"
          alt="Data visualization background"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-800/90 mix-blend-multiply" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          About Us
        </h1>
        <p className="mt-6 max-w-3xl text-xl text-blue-100">
          Welcome to Structura DataWorks, where we transform raw, unstructured information into meaningful and impactful assets.
        </p>
      </div>
    </div>
  );
}