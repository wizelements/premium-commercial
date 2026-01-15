'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: 'How quickly can I get funded?',
    answer: 'Most of our clients receive funding within 24-72 hours of application approval. Some can be funded even faster depending on documentation completeness and loan type.',
  },
  {
    question: 'What credit score do I need?',
    answer: 'While we prefer 650+, we work with borrowers down to 600. We focus more on your business fundamentals, property value, and experience than credit score alone.',
  },
  {
    question: 'What documents do I need?',
    answer: 'Typically: ID, bank statements (last 2 months), tax returns (last 2 years), proof of income, and property details. Requirements vary by loan type. We\'ll send you a complete checklist after application.',
  },
  {
    question: 'Do you offer pre-qualification?',
    answer: 'Yes! Pre-qualification is free, takes 5 minutes, and doesn\'t affect your credit score. It gives you an estimate of how much you can borrow.',
  },
  {
    question: 'What are typical interest rates?',
    answer: 'Rates vary based on loan type, amount, property, and credit. Commercial RE: 5-8%, Fix & Flip: 8-12%, Hard Money: 10-15%. Get a personalized quote from our team.',
  },
  {
    question: 'Can I use funds for multiple properties?',
    answer: 'Yes. Many of our portfolio loans allow deployment across multiple properties. We also offer portfolio programs for investors with 3+ properties.',
  },
  {
    question: 'What if I have a recent bankruptcy?',
    answer: 'We can work with clients 2+ years post-bankruptcy if credit has improved. Each case is reviewed individually. Call us for a confidential consultation.',
  },
  {
    question: 'Do you have prepayment penalties?',
    answer: 'Most of our loans have no prepayment penalties. Some hard money products may have 1-2% penalties. Full details are disclosed upfront.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-4xl font-bold text-gray-900 mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Answers to common questions about our loans and process
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mt-6 rounded-full"></div>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 0.4 }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full bg-white border border-gray-200 rounded-lg p-6 text-left hover:border-blue-300 hover:shadow-md transition-all duration-300 group"
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openIndex === idx ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown size={24} className="text-blue-500" />
                  </motion.div>
                </div>

                {/* Answer */}
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{
                    opacity: openIndex === idx ? 1 : 0,
                    height: openIndex === idx ? 'auto' : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="text-gray-600 mt-4 leading-relaxed">
                    {faq.answer}
                  </p>
                </motion.div>
              </button>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center mt-16 p-8 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl border border-blue-200"
        >
          <p className="text-gray-700 mb-4">
            Still have questions? Our loan specialists are here to help.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-3 px-10 rounded-lg shadow-lg transition-all duration-300"
          >
            Schedule a Free Consultation
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
