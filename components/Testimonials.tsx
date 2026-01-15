'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'John Martinez',
    title: 'Real Estate Developer',
    company: 'Martinez Development Co.',
    text: 'PREMIUM Commercial closed our $2.5M fix & flip deal in just 48 hours. Their speed and professionalism are unmatched.',
    rating: 5,
    image: '👨‍💼',
  },
  {
    name: 'Sarah Chen',
    title: 'Business Owner',
    company: 'Tech Innovations LLC',
    text: 'Needed working capital fast for expansion. They understood our business and got us approved for $500K within 3 days.',
    rating: 5,
    image: '👩‍💼',
  },
  {
    name: 'Michael Thompson',
    title: 'Investor',
    company: 'Thompson Capital Group',
    text: 'Been using their hard money loans for 5 years. Best rates in the market and zero surprises. Highly recommend.',
    rating: 5,
    image: '👨‍💼',
  },
  {
    name: 'Lisa Anderson',
    title: 'SBA Recipient',
    company: 'Green Energy Solutions',
    text: 'Navigating SBA requirements is complex, but their team made it simple. We got our $1M loan approved in 2 weeks.',
    rating: 5,
    image: '👩‍💼',
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-4xl font-bold text-gray-900 mb-3">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real success stories from real business owners and investors
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mt-6 rounded-full"></div>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              whileHover={{ y: -8 }}
              className="bg-gray-50 rounded-xl p-8 border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="text-4xl">{testimonial.image}</div>
                <div>
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.title}</p>
                  <p className="text-xs text-blue-600 font-semibold">{testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-20 pt-12 border-t border-gray-200"
        >
          <div className="text-center">
            <p className="text-5xl font-bold text-blue-600 mb-2">$500M+</p>
            <p className="text-gray-600">Funded Since 2010</p>
          </div>
          <div className="text-center">
            <p className="text-5xl font-bold text-blue-600 mb-2">5,000+</p>
            <p className="text-gray-600">Happy Clients</p>
          </div>
          <div className="text-center">
            <p className="text-5xl font-bold text-blue-600 mb-2">48hrs</p>
            <p className="text-gray-600">Average Funding Time</p>
          </div>
          <div className="text-center">
            <p className="text-5xl font-bold text-blue-600 mb-2">4.9/5</p>
            <p className="text-gray-600">Average Rating</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
