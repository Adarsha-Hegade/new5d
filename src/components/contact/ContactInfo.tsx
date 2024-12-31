import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function ContactInfo() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium text-gray-900">Contact Information</h3>
        <div className="mt-4 space-y-4">
          <div className="flex items-center">
            <Mail className="h-6 w-6 text-blue-600" />
            <span className="ml-3 text-gray-600">contact@structuradataworks.com</span>
          </div>
          <div className="flex items-center">
            <Phone className="h-6 w-6 text-blue-600" />
            <span className="ml-3 text-gray-600">+1 (555) 123-4567</span>
          </div>
          <div className="flex items-center">
            <MapPin className="h-6 w-6 text-blue-600" />
            <span className="ml-3 text-gray-600">123 Data Street, New York, NY 10001</span>
          </div>
        </div>
      </div>
      
      <div>
        <h3 className="text-lg font-medium text-gray-900">Business Hours</h3>
        <div className="mt-4 space-y-2">
          <div className="flex items-center">
            <Clock className="h-6 w-6 text-blue-600" />
            <div className="ml-3">
              <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM (EST)</p>
              <p className="text-gray-600">Saturday - Sunday: Closed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}