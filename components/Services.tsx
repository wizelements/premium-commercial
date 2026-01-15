'use client';

import { motion } from 'framer-motion';
import { Briefcase, Users, Hammer, Zap, Building2, Building, Landmark, Wrench } from 'lucide-react';

const services = [
  {
    icon: Briefcase,
    title: 'Commercial Real Estate Financing',
    description: 'Commercial real estate owners love our business Real Estate loans for commercial construction, property purchase, refinancing combined with some of the lowest mortgage rates.',
    highlights: ['Property Purchase', 'Refinancing', 'Construction Loans'],
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop',
  },
  {
    icon: Users,
    title: 'SBA Loans',
    description: 'The SBA offers numerous loan programs to help entrepreneurs start, manage and grow their businesses. SBA loan is a small business loan that is partly guaranteed by the U.S. government.',
    highlights: ['Startup Funding', 'Business Growth', 'Government Backed'],
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop',
  },
  {
    icon: Hammer,
    title: 'Fix N Flip Loans',
    description: 'Looking to purchase and rehab an investment property? We are your go-to short-term financing solution provider to fund the purchase and repairs of an investment property.',
    highlights: ['Fast Approval', 'Property Renovation', 'Investment Ready'],
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=300&fit=crop',
  },
  {
    icon: Zap,
    title: 'Working Capital Loans',
    description: 'With our Working Capital Loans, we\'ve helped thousands of businesses need collateral for amounts under $725,000 - unlike traditional bank loans.',
    highlights: ['No Collateral', 'Quick Funding', 'Up to $725K'],
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop',
  },
  {
    icon: Building2,
    title: 'Hard Money Loans',
    description: 'Hard money loans are designed to be short-term. We can help bridge the gap in your investing. Typically you can receive up to 75% of the value of your property.',
    highlights: ['Short Term', 'Quick Turnaround', 'Up to 75% LTV'],
    image: 'https://images.unsplash.com/photo-1554224311-beee415c15c7?w=400&h=300&fit=crop',
  },
  {
    icon: Building,
    title: 'Apartment Loans',
    description: 'Planning to purchase an apartment building, a condominium or any multifamily residential complex? We can get a multifamily loan approved for you for 85% of the total value.',
    highlights: ['Multi-unit Properties', 'Up to 85% LTV', 'Portfolio Loans'],
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop',
  },
  {
    icon: Landmark,
    title: 'Bridge Loans',
    description: 'Short term mortgage financing that bridges the gap between the termination of one loan and the beginning of another. Perfect for interim financing needs.',
    highlights: ['Interim Financing', 'Quick Closing', 'Gap Solution'],
    image: 'https://images.unsplash.com/photo-1486311338391-e3db7939f8d9?w=400&h=300&fit=crop',
  },
  {
    icon: Wrench,
    title: 'Equipment Financing',
    description: 'Buying equipment becomes urgent as businesses strive to move forward. We understand the difficulty and provide flexible equipment financing solutions.',
    highlights: ['Asset Financing', 'Business Expansion', 'Equipment Purchase'],
    image: 'https://images.unsplash.com/photo-1581091160550-2173dba999ef?w=400&h=300&fit=crop',
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
        
        {/* Services Grid - 2 Rows of 4 */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-6"
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
                {/* Service Image */}
                <div className="h-40 bg-gray-200 overflow-hidden relative group">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
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
