'use client';

import { motion } from 'framer-motion';
import { Briefcase, Users, Hammer, Zap, Building2, Building, Landmark, Wrench } from 'lucide-react';

const services = [
  {
    icon: Briefcase,
    title: 'Commercial Real Estate Financing',
    description: 'Commercial real estate owners love our business Real Estate loans for commercial construction, property purchase, refinancing combined with some of the lowest mortgage rates.',
    highlights: ['Property Purchase', 'Refinancing', 'Construction Loans'],
    color: 'from-orange-400 to-red-500'
  },
  {
    icon: Users,
    title: 'SBA Loans',
    description: 'The SBA offers numerous loan programs to help entrepreneurs start, manage and grow their businesses. SBA loan is a small business loan that is partly guaranteed by the U.S. government.',
    highlights: ['Startup Funding', 'Business Growth', 'Government Backed'],
    color: 'from-blue-400 to-blue-600'
  },
  {
    icon: Hammer,
    title: 'Fix N Flip Loans',
    description: 'Looking to purchase and rehab an investment property? We are your go-to short-term financing solution provider to fund the purchase and repairs of an investment property.',
    highlights: ['Fast Approval', 'Property Renovation', 'Investment Ready'],
    color: 'from-green-400 to-teal-500'
  },
  {
    icon: Zap,
    title: 'Working Capital Loans',
    description: 'With our Working Capital Loans, we\'ve helped thousands of businesses need collateral for amounts under $725,000 - unlike traditional bank loans.',
    highlights: ['No Collateral', 'Quick Funding', 'Up to $725K'],
    color: 'from-yellow-400 to-orange-500'
  },
  {
    icon: Building2,
    title: 'Hard Money Loans',
    description: 'Hard money loans are designed to be short-term. We can help bridge the gap in your investing. Typically you can receive up to 75% of the value of your property.',
    highlights: ['Short Term', 'Quick Turnaround', 'Up to 75% LTV'],
    color: 'from-red-400 to-pink-500'
  },
  {
    icon: Building,
    title: 'Apartment Loans',
    description: 'Planning to purchase an apartment building, a condominium or any multifamily residential complex? We can get a multifamily loan approved for you for 85% of the total value.',
    highlights: ['Multi-unit Properties', 'Up to 85% LTV', 'Portfolio Loans'],
    color: 'from-indigo-400 to-blue-600'
  },
  {
    icon: Landmark,
    title: 'Bridge Loans',
    description: 'Short term mortgage financing that bridges the gap between the termination of one loan and the beginning of another. Perfect for interim financing needs.',
    highlights: ['Interim Financing', 'Quick Closing', 'Gap Solution'],
    color: 'from-cyan-400 to-blue-500'
  },
  {
    icon: Wrench,
    title: 'Equipment Financing',
    description: 'Buying equipment becomes urgent as businesses strive to move forward. We understand the difficulty and provide flexible equipment financing solutions.',
    highlights: ['Asset Financing', 'Business Expansion', 'Equipment Purchase'],
    color: 'from-purple-400 to-pink-600'
  },
];

export default function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-4xl font-bold text-gray-900 mb-3">
            Business Financing Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Customized to Your Unique Needs
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mt-6 rounded-full"></div>
        </motion.div>
        
        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                {/* Image Placeholder */}
                <div className={`h-40 bg-gradient-to-br ${service.color} flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 opacity-20">
                    <svg className="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16z" />
                    </svg>
                  </div>
                  <Icon size={60} className="text-white z-10" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-bold text-lg text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-sm text-gray-600 mb-5 leading-relaxed">{service.description}</p>
                  
                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {service.highlights.map((highlight, i) => (
                      <span
                        key={i}
                        className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full font-medium"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>

                  {/* CTA Link */}
                  <motion.a
                    whileHover={{ x: 5 }}
                    href="#"
                    className="text-blue-600 hover:text-blue-800 font-semibold text-sm inline-flex items-center gap-2 transition-colors"
                  >
                    Learn More...
                    <span>→</span>
                  </motion.a>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-6">
            Can't find what you're looking for?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-3 px-10 rounded-lg shadow-lg transition-all duration-300"
          >
            Contact Our Specialists
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
