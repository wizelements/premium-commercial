'use client';

import { useState } from 'react';
import { ChevronRight } from 'lucide-react';

export default function Hero() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section className="relative w-full h-[600px] bg-cover bg-center bg-blue-600 flex items-center justify-center overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 opacity-70"></div>

      <div className="relative container flex gap-12 items-center">
        {/* Left Content */}
        <div className="flex-1 text-white z-10">
          <h1 className="text-5xl font-bold mb-4 leading-tight">
            Your Trusted Partner In<br />
            <span className="text-white">Real Estate Investment</span>
          </h1>
          <p className="text-lg mb-6 opacity-90">
            Fix & Flip, Cash Out Refinance, Investor Credit<br />
            Lines, Small Balance Commercial, Land,<br />
            Construction, Hard Money & Soft Money Loans
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded transition">
            Learn more...
          </button>
        </div>

        {/* Right Content - Contact Card & Image */}
        <div className="flex-1 relative z-10">
          {/* Contact Card */}
          <div className="bg-white rounded-lg shadow-lg p-6 mb-6 absolute right-0 top-0 w-96">
            <h3 className="text-lg font-bold text-gray-900 mb-1">Have A Question?</h3>
            <p className="text-gray-700 mb-6">Contact Our Expert Now!</p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              />
              <input
                type="email"
                placeholder="Email address"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              />
              <input
                type="tel"
                placeholder="Contact #"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              />
              <button
                type="submit"
                className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-2 rounded transition"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Professional Image Placeholder */}
          <div className="absolute right-0 bottom-0 w-80 h-96 bg-gradient-to-br from-gray-300 to-gray-400 rounded-lg flex items-center justify-center">
            <div className="text-center text-gray-600">
              <p className="text-4xl mb-2">👨‍💼</p>
              <p className="text-sm">Professional Photo</p>
            </div>
          </div>
        </div>
      </div>

      {/* Carousel Arrow */}
      <button className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-30 hover:bg-opacity-50 text-white p-3 rounded-full z-20 transition">
        <ChevronRight size={24} />
      </button>
    </section>
  );
}
