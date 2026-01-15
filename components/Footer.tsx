'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Facebook, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      {/* Main Footer */}
      <div className="border-t border-slate-700 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-blue-500 rounded px-3 py-2">
                  <span className="font-bold">P</span>
                </div>
                <span className="font-bold text-lg">PREMIUM</span>
              </div>
              <p className="text-sm text-gray-300 mb-4">Your Trusted Partner in Commercial Real Estate Financing</p>
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-blue-400 transition">
                  <Facebook size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition">
                  <Twitter size={20} />
                </a>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h4 className="font-bold mb-6 text-lg">Navigation</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#home" className="text-gray-400 hover:text-blue-400 transition">Home</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-blue-400 transition">Services</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-blue-400 transition">About Us</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-blue-400 transition">Contact</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-400 transition">Careers</a></li>
              </ul>
            </motion.div>

            {/* Loan Products */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h4 className="font-bold mb-6 text-lg">Loan Products</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="text-gray-400 hover:text-blue-400 transition">Commercial RE</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-400 transition">SBA Loans</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-400 transition">Fix & Flip</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-400 transition">Working Capital</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-400 transition">Hard Money</a></li>
              </ul>
            </motion.div>

            {/* Resources */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <h4 className="font-bold mb-6 text-lg">Resources</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="text-gray-400 hover:text-blue-400 transition">Loan Calculator</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-400 transition">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-400 transition">FAQ</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-400 transition">Guides</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-400 transition">Case Studies</a></li>
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <h4 className="font-bold mb-6 text-lg">Contact Us</h4>
              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <Phone size={18} className="text-blue-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-gray-300 font-semibold">877-123-XXXX</p>
                    <p className="text-gray-500 text-xs">24/7 Support</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail size={18} className="text-blue-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-gray-300">info@premium.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="text-blue-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-gray-300">New York, NY 10001</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Divider */}
          <div className="border-t border-slate-700 pt-8">
            {/* Trust Badges */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 text-sm"
              >
                <div className="text-3xl">🏛️</div>
                <div>
                  <p className="font-semibold text-gray-300">Fully Licensed</p>
                  <p className="text-gray-500 text-xs">All State Compliance</p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="flex items-center gap-3 text-sm"
              >
                <div className="text-3xl">🔒</div>
                <div>
                  <p className="font-semibold text-gray-300">Data Secure</p>
                  <p className="text-gray-500 text-xs">SSL Encrypted</p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex items-center gap-3 text-sm"
              >
                <div className="text-3xl">⭐</div>
                <div>
                  <p className="font-semibold text-gray-300">5-Star Rated</p>
                  <p className="text-gray-500 text-xs">1000+ Reviews</p>
                </div>
              </motion.div>
            </div>

            {/* Bottom Info */}
            <div className="border-t border-slate-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
              <p>© 2024 PREMIUM Commercial. All Rights Reserved.</p>
              <div className="flex gap-6">
                <a href="#" className="hover:text-blue-400 transition">Privacy Policy</a>
                <a href="#" className="hover:text-blue-400 transition">Terms of Service</a>
                <a href="#" className="hover:text-blue-400 transition">Disclosures</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
