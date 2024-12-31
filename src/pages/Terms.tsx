import React from 'react';

export default function Terms() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-blue-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white">
            Terms & Conditions
          </h1>
          <p className="mt-4 text-xl text-blue-100">
            Last updated: March 1, 2024
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white shadow-lg rounded-lg p-8">
          <div className="prose max-w-none">
            <h2>1. Introduction</h2>
            <p>
              These Terms and Conditions govern your use of DataEntry Pro's services and website. 
              By accessing or using our services, you agree to be bound by these terms.
            </p>

            <h2>2. Definitions</h2>
            <p>
              "Service" refers to the data entry management platform provided by DataEntry Pro.
              "User" refers to any individual or entity that accesses or uses the Service.
            </p>

            <h2>3. Use License</h2>
            <p>
              Permission is granted to temporarily access and use the Service for personal 
              or business purposes, subject to these Terms and Conditions.
            </p>

            <h2>4. Data Privacy</h2>
            <p>
              Your use of the Service is also governed by our Privacy Policy. You agree 
              to our collection and use of information as detailed in that policy.
            </p>

            <h2>5. User Obligations</h2>
            <p>
              Users must maintain the confidentiality of their account credentials and 
              are responsible for all activities under their account.
            </p>

            <h2>6. Intellectual Property</h2>
            <p>
              All content, features, and functionality of the Service are owned by 
              DataEntry Pro and are protected by international copyright, trademark, 
              and other intellectual property laws.
            </p>

            <h2>7. Limitation of Liability</h2>
            <p>
              DataEntry Pro shall not be liable for any indirect, incidental, special, 
              consequential, or punitive damages resulting from your use of the Service.
            </p>

            <h2>8. Changes to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. Users will be 
              notified of any changes through the Service.
            </p>

            <h2>9. Governing Law</h2>
            <p>
              These terms shall be governed by and construed in accordance with the 
              laws of the United States, without regard to its conflict of law provisions.
            </p>

            <h2>10. Contact Information</h2>
            <p>
              Questions about these Terms and Conditions should be sent to us at 
              legal@dataentrypro.com.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}