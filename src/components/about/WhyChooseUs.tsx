import React from 'react';
import { CheckCircle } from 'lucide-react';

const reasons = [
  { title: 'Expertise You Can Trust', description: 'Our team comprises data professionals with years of experience across various industries.' },
  { title: 'Tailored Solutions', description: 'We don\'t believe in one-size-fits-all; every solution is customized to your specific requirements.' },
  { title: 'Seamless Integration', description: 'Our services are designed to fit seamlessly into your workflows, ensuring minimal disruption.' },
  { title: 'Commitment to Success', description: 'Your success is our success, and we go the extra mile to make it happen.' },
];

export default function WhyChooseUs() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Why Choose Structura DataWorks?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason) => (
            <div key={reason.title} className="flex items-start">
              <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900">{reason.title}</h3>
                <p className="mt-2 text-gray-600">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}