import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import Layout from '../components/layout/Layout';

export default function Contact() {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    // Simulate form submission
    setTimeout(() => setFormStatus('sent'), 1000);
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        {/* Rest of the Contact page content remains the same */}
      </div>
    </Layout>
  );
}