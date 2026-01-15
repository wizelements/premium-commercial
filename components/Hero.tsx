'use client';

import { useState } from 'react';
import { ChevronRight, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setSuccess(true);
        setFormData({ name: '', email: '', phone: '' });
        setTimeout(() => setSuccess(false), 3000);
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative w-full min-h-[650px] overflow-hidden">
      {/* Background Image - Modern Building */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=700&fit=crop")',
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-500 to-transparent opacity-75"></div>
      </div>

      <div className="relative container mx-auto px-4 py-20 flex items-center min-h-[650px]">
        {/* Left Section */}
        <motion.div
          className="flex-1 text-white z-10 pr-8"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl md:text-5xl font-bold mb-6 leading-tight">
            Your Trusted Partner In<br />
            <span className="text-white">Real Estate Investment</span>
          </h1>
          
          <p className="text-lg md:text-base mb-8 opacity-95 leading-relaxed max-w-lg">
            Fix & Flip, Cash Out Refinance, Investor Credit Lines, Small Balance Commercial, Land, Construction, Hard Money & Soft Money Loans
          </p>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded transition duration-300 shadow-lg"
          >
            Learn more...
          </motion.button>
        </motion.div>

        {/* Right Section - Contact Card */}
        <motion.div
          className="flex-1 relative z-20"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Contact Card */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Have A Question?</h3>
            <p className="text-gray-600 mb-6">Contact Our Expert Now!</p>
            
            {success && (
              <div className="mb-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg text-sm">
                Thanks! We'll contact you soon.
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
                />
              </div>
              
              <div>
                <input
                  type="email"
                  placeholder="Email address"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
                />
              </div>
              
              <div>
                <input
                  type="tel"
                  placeholder="Contact #"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
                />
              </div>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={loading}
                className="w-full bg-yellow-400 hover:bg-yellow-500 disabled:bg-gray-300 text-gray-900 font-bold py-3 rounded-lg transition duration-300 shadow-md"
              >
                {loading ? 'Submitting...' : 'Submit'}
              </motion.button>
            </form>

            {/* Direct Contact */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <a href="tel:+18771234567" className="flex items-center gap-3 text-blue-600 hover:text-blue-700 font-semibold">
                <Phone size={20} />
                Call Now: 877-123-XXXX
              </a>
            </div>
          </div>

          {/* Professional Image - Expert Advisor */}
          <motion.div
            className="absolute right-0 -bottom-12 w-64 h-80 rounded-2xl shadow-2xl overflow-hidden hidden lg:block"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop"
              alt="Expert Advisor"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Carousel Navigation */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        className="absolute right-8 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-30 hover:bg-opacity-50 text-white p-4 rounded-full z-20 transition"
      >
        <ChevronRight size={28} />
      </motion.button>
    </section>
  );
}
