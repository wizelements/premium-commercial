'use client';

import { motion } from 'framer-motion';
import { FileText, Clock, DollarSign, ArrowRight } from 'lucide-react';

const steps = [
  {
    step: 1,
    icon: FileText,
    title: 'Apply Online',
    description: 'No Obligation, FREE Consultation',
    details: 'Complete our simple online form in minutes. No hidden fees, no obligations. Just a quick consultation to understand your needs.',
  },
  {
    step: 2,
    icon: Clock,
    title: 'Quick Processing',
    description: 'Every Application is Processed on Priority',
    details: 'Our expert team reviews your application and gets back to you within 24 hours with an initial decision and next steps.',
  },
  {
    step: 3,
    icon: DollarSign,
    title: 'Get Funded',
    description: 'Within 72 Hours or Even Less',
    details: 'Once approved, funds are typically deposited to your account within 72 hours. Sometimes even faster depending on your situation.',
  },
];

export default function Process() {
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

  const stepVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-800 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-4xl font-bold mb-4">3 Steps Simplified Process</h2>
          <p className="text-lg text-blue-200">Get funded faster than you think possible</p>
          <div className="h-1 w-24 bg-gradient-to-r from-yellow-400 to-yellow-500 mx-auto mt-6 rounded-full"></div>
        </motion.div>

        {/* Steps Container */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {steps.map((item, idx) => {
            const Icon = item.icon;
            const isLast = idx === steps.length - 1;

            return (
              <motion.div key={idx} variants={stepVariants}>
                <div className="flex flex-col items-center relative">
                  {/* Circle Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="relative mb-8"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
                    <div className="relative w-28 h-28 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-2xl">
                      <Icon size={56} className="text-slate-900" />
                    </div>
                    {/* Step Number */}
                    <div className="absolute -top-2 -right-2 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                      {item.step}
                    </div>
                  </motion.div>

                  {/* Content */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 + idx * 0.1 }}
                    className="text-center"
                  >
                    <h3 className="font-bold text-2xl mb-2">Step {item.step}: {item.title}</h3>
                    <p className="text-lg text-yellow-300 font-semibold mb-3">{item.description}</p>
                    <p className="text-sm text-gray-300 leading-relaxed max-w-xs">{item.details}</p>
                  </motion.div>

                  {/* Arrow to next step */}
                  {!isLast && (
                    <motion.div
                      animate={{ x: [0, 8, 0] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                      className="hidden md:flex absolute top-32 -right-12 text-yellow-400"
                    >
                      <ArrowRight size={32} />
                    </motion.div>
                  )}

                  {/* Mobile arrow */}
                  {!isLast && (
                    <div className="md:hidden my-6 text-yellow-400">
                      <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
                        <ArrowRight size={24} className="rotate-90" />
                      </motion.div>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center mt-20 pt-12 border-t border-slate-700"
        >
          <p className="text-gray-300 mb-6">Ready to get started?</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-slate-900 font-bold py-4 px-12 rounded-lg shadow-xl transition-all duration-300"
          >
            Apply Now - It's FREE
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
