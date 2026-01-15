'use client';

import { motion } from 'framer-motion';
import { CheckCircle, AlertCircle } from 'lucide-react';

const requirements = [
  {
    category: 'Basic Requirements',
    items: [
      { text: 'Legal US resident or citizen', required: true },
      { text: 'Minimum credit score of 600', required: true },
      { text: 'Minimum 2 years in business', required: true },
      { text: 'Active business bank account', required: true },
    ],
  },
  {
    category: 'Documentation',
    items: [
      { text: 'Personal ID (Driver License/Passport)', required: true },
      { text: 'Last 2 months bank statements', required: true },
      { text: 'Last 2 years tax returns', required: true },
      { text: 'Business license or registration', required: true },
      { text: 'Property appraisal or purchase agreement', required: false },
    ],
  },
  {
    category: 'Financial Requirements',
    items: [
      { text: 'Annual revenue $50K+', required: true },
      { text: 'Positive cash flow', required: false },
      { text: 'Debt-to-income ratio < 45%', required: false },
      { text: '20% down payment for some programs', required: false },
    ],
  },
];

export default function Requirements() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4 },
    },
  };

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
            Loan Requirements Checklist
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See what it takes to qualify for our loans
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mt-6 rounded-full"></div>
        </motion.div>

        {/* Requirements Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {requirements.map((section, sIdx) => (
            <motion.div
              key={sIdx}
              variants={itemVariants}
              className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-8 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-1 h-6 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full"></div>
                {section.category}
              </h3>

              <div className="space-y-4">
                {section.items.map((item, iIdx) => (
                  <motion.div
                    key={iIdx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + iIdx * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    {item.required ? (
                      <CheckCircle size={20} className="text-green-500 flex-shrink-0 mt-1" />
                    ) : (
                      <AlertCircle size={20} className="text-blue-400 flex-shrink-0 mt-1" />
                    )}
                    <div>
                      <p className="text-gray-700 font-medium">{item.text}</p>
                      {!item.required && (
                        <p className="text-xs text-gray-500 mt-1">Often helpful but not required</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Quick Qualifier */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl p-12 text-white"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">Quick 60-Second Qualifier</h3>
              <p className="text-blue-100 mb-6">
                Don't meet all requirements? No problem. Most of our clients don't initially. Get a quick assessment from our specialists.
              </p>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2">
                  <span className="text-yellow-300">✓</span> No credit inquiry
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-yellow-300">✓</span> Takes 60 seconds
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-yellow-300">✓</span> Personalized recommendation
                </li>
              </ul>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-4 px-8 rounded-lg shadow-lg transition-all duration-300 text-lg h-fit"
            >
              Check My Eligibility
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
