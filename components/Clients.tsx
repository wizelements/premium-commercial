'use client';

import { motion } from 'framer-motion';
import { Building2, Factory, UtensilsCrossed } from 'lucide-react';

const clients = [
  {
    icon: Building2,
    title: 'Apartment/Multi-family',
    description: '5-20 Units, 21+ Units',
  },
  {
    icon: Factory,
    title: 'Industrial Buildings',
    description: 'Manufacturing, Office-Warehouse...',
  },
  {
    icon: UtensilsCrossed,
    title: 'Special Use Properties',
    description: 'Ice cream shop, car wash...',
  },
];

export default function Clients() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16"
        >
          Clients we have been privileged to serve include
        </motion.h2>

        <div className="flex flex-col items-center gap-12">
          {/* Client Types Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.2 }}
          >
            {clients.map((client, idx) => {
              const Icon = client.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="mb-4">
                    <Icon size={48} className="text-slate-900 mx-auto" />
                  </div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">{client.title}</h3>
                  <p className="text-sm text-gray-600">{client.description}</p>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Pagination Dots */}
          <motion.div
            className="flex justify-center gap-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <button className="w-3 h-3 bg-gray-400 rounded-full hover:bg-gray-600 transition"></button>
            <button className="w-3 h-3 bg-gray-300 rounded-full hover:bg-gray-600 transition"></button>
            <button className="w-3 h-3 bg-gray-300 rounded-full hover:bg-gray-600 transition"></button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
