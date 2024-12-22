import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import FrostLogo from '../Logo/FrostLogo';
import FrostwareText from '../Logo/FrostwareText';
import NavLink from './NavLink';

const NavBar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Update active section based on scroll position
      const sections = ['home', 'features', 'download'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 ${
          isScrolled 
            ? 'bg-gray-900/90 shadow-lg shadow-blue-500/10 border border-gray-800/50' 
            : 'bg-transparent'
        } backdrop-blur-md rounded-2xl transition-all duration-300`}
      >
        <div className="px-8 py-4">
          <div className="flex items-center justify-between gap-8">
            <motion.a 
              href="#"
              className="flex items-center space-x-3 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FrostLogo size="sm" animated />
              <div className="overflow-hidden">
                <motion.div
                  initial={{ y: 0 }}
                  whileHover={{ y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <FrostwareText size="sm" />
                  <div className="text-blue-400/80 text-sm mt-1">
                    Performance Optimizer
                  </div>
                </motion.div>
              </div>
            </motion.a>

            {/* Desktop Navigation */}
            <motion.div 
              className="hidden md:flex items-center bg-gray-800/50 rounded-full p-1.5 backdrop-blur-sm"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <NavLink href="#home" isActive={activeSection === 'home'}>
                Home
              </NavLink>
              <NavLink href="#features" isActive={activeSection === 'features'}>
                Features
              </NavLink>
              <NavLink href="#download" isActive={activeSection === 'download'}>
                Download
              </NavLink>
              <motion.a
                href="https://discord.gg/getfrost"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 rounded-full bg-gradient-to-r from-blue-600 to-blue-400 text-white text-sm font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Join Discord
              </motion.a>
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden relative w-10 h-10 rounded-full bg-gray-800/50 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={isMobileMenuOpen ? 'close' : 'menu'}
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
                </motion.div>
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed top-24 left-4 right-4 z-40 bg-gray-900/95 backdrop-blur-lg rounded-2xl shadow-lg shadow-blue-500/10 border border-gray-800/50 md:hidden overflow-hidden"
          >
            <motion.div 
              className="flex flex-col p-2"
              variants={{
                show: {
                  transition: {
                    staggerChildren: 0.1
                  }
                }
              }}
              initial="hidden"
              animate="show"
            >
              {['Home', 'Features', 'Download'].map((item, index) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="px-4 py-3 rounded-xl text-gray-300 hover:text-white hover:bg-gray-800/50 transition-colors"
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    show: { opacity: 1, x: 0 }
                  }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item}
                </motion.a>
              ))}
              <motion.a
                href="https://discord.gg/getfrost"
                target="_blank"
                rel="noopener noreferrer"
                className="m-2 mt-3 px-4 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-blue-400 text-white text-center font-medium"
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  show: { opacity: 1, x: 0 }
                }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Join Discord
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};