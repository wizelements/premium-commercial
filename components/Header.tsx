'use client';

import { motion } from 'framer-motion';
import { Facebook, Twitter, Linkedin, Instagram, Youtube, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Red Social Bar - Matches Original */}
      <div className="bg-red-600 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-xs md:text-sm">
          <div className="flex gap-4">
            <a href="#" className="hover:opacity-80 transition">
              <Facebook size={16} />
            </a>
            <a href="#" className="hover:opacity-80 transition">
              <Twitter size={16} />
            </a>
            <a href="#" className="hover:opacity-80 transition">
              <Linkedin size={16} />
            </a>
            <a href="#" className="hover:opacity-80 transition">
              <Instagram size={16} />
            </a>
            <a href="#" className="hover:opacity-80 transition">
              <Youtube size={16} />
            </a>
          </div>
          <span className="text-xs">Follow Us</span>
        </div>
      </div>

      {/* Main Header - Dark Blue */}
      <header className="bg-slate-900 text-white py-4 sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2"
            >
              <div className="bg-blue-500 rounded px-2 py-1">
                <span className="font-bold text-sm">P</span>
              </div>
              <div className="hidden md:block">
                <span className="font-bold text-base">PREMIUM Commercial</span>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex gap-6 text-xs md:text-sm font-medium">
              <a href="#" className="hover:text-blue-400 transition">HOME</a>
              <a href="#" className="hover:text-blue-400 transition">ABOUT</a>
              <a href="#" className="hover:text-blue-400 transition">REAL ESTATE FINANCING</a>
              <a href="#" className="hover:text-blue-400 transition">BUSINESS LOANS</a>
              <a href="#" className="hover:text-blue-400 transition">APPLY ONLINE</a>
              <a href="#" className="hover:text-blue-400 transition">CONTACT</a>
            </nav>

            {/* Right Section */}
            <div className="flex items-center gap-4">
              <div className="text-right hidden md:block">
                <p className="font-bold text-sm">Call Now: 877 123 XXXX</p>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 hover:bg-slate-800 rounded transition"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="lg:hidden grid grid-cols-2 gap-2 mt-4 pt-4 border-t border-slate-700"
            >
              <a href="#" className="py-2 text-sm hover:text-blue-400">HOME</a>
              <a href="#" className="py-2 text-sm hover:text-blue-400">ABOUT</a>
              <a href="#" className="py-2 text-sm hover:text-blue-400">REAL ESTATE</a>
              <a href="#" className="py-2 text-sm hover:text-blue-400">LOANS</a>
              <a href="#" className="py-2 text-sm hover:text-blue-400">APPLY</a>
              <a href="#" className="py-2 text-sm hover:text-blue-400">CONTACT</a>
            </motion.nav>
          )}
        </div>
      </header>
    </>
  );
}
