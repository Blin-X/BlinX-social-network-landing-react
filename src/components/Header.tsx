'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { 
  Menu, 
  Crown, 
  Zap, 
  HelpCircle, 
  Server, 
  Mail, 
  X, 
  ChevronRight, 
  Search, 
  Bell, 
  Home, 
  Users, 
  Briefcase, 
  Code
} from 'lucide-react';
import SearchModal from '../components/SearchModal';
import NotificationsModal from '../components/NotificationsModal';

export default function Header() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      setIsSearchOpen(false);
      setIsNotificationsOpen(false);
    }
  }, [isMobileMenuOpen]);

  const navItems = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/features', label: 'Features', icon: Zap },
    { href: '/help', label: 'Faq', icon: HelpCircle },
    { href: '/team', label: 'Team', icon: Users },
    { href: '/career', label: 'Career', icon: Briefcase },
    { href: '/premium', label: 'Premium', icon: Crown },
    { href: '/developers', label: 'Developers', icon: Code },
    { href: '/contact', label: 'Contact', icon: Mail },
    { href: '/status', label: 'Status', icon: Server },
  ];

  const handleSearchClick = () => {
    setIsSearchOpen(true);
    setIsNotificationsOpen(false);
  };

  const handleNotificationsClick = () => {
    setIsNotificationsOpen(true);
    setIsSearchOpen(false);
  };

  return (
    <>
      <motion.header 
        className={`fixed top-4 left-4 right-4 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'glass rounded-2xl shadow-2xl border border-white/10 backdrop-blur-xl' 
            : 'bg-transparent backdrop-blur-none border border-transparent'
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ 
          duration: 0.8,
          type: "spring",
          stiffness: 100,
          damping: 20
        }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        <div className={`container mx-auto px-6 transition-all duration-500 ${
          isScrolled ? 'py-3' : 'py-4'
        }`}>
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-3 group">
                <motion.div 
                    className="relative"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400 }}
                >
                    <img 
                    src="https://blin-x.space/favicon.svg" 
                    alt="BlinX Logo"
                    className="w-7 h-7 object-cover"
                    />
                </motion.div>
              <motion.span 
                className="text-xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                BlinX
              </motion.span>
            </Link>

            <nav className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <motion.div
                  key={item.href}
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                >
                  <Link
                    to={item.href}
                    className={`relative px-4 py-2 rounded-xl transition-all duration-300 flex items-center space-x-2 group ${
                      location.pathname === item.href
                        ? 'text-purple-400 bg-purple-500/10'
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="flex items-center space-x-2">
              <motion.button 
                onClick={handleSearchClick}
                className="flex items-center space-x-2 glass rounded-xl p-3 text-gray-300 hover:text-white transition-colors relative"
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: 'rgba(255, 255, 255, 0.1)'
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Search className="w-4 h-4" />
              </motion.button>
              <motion.button 
                onClick={handleNotificationsClick}
                className="flex items-center space-x-2 glass rounded-xl p-3 text-gray-300 hover:text-white transition-colors relative"
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: 'rgba(255, 255, 255, 0.1)'
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Bell className="w-4 h-4" />
                <motion.div 
                  className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-gray-900"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.button>
              
              <div className="hidden lg:flex items-center space-x-3">
                <motion.button 
                  className="glass px-4 py-2 rounded-xl hover:glass-dark transition-all duration-300 text-sm"
                  onClick={() => window.location.href = '/app/?page=login'}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Sign In
                </motion.button>
                <motion.button 
                  className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-xl font-semibold transition-all duration-300"
                  onClick={() => window.location.href = '/app/?page=register'}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: '0 10px 30px -10px rgba(139, 92, 246, 0.5)'
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Sign Up
                </motion.button>
              </div>

              <motion.button 
                className="lg:hidden text-gray-300 hover:text-white transition-colors p-2"
                onClick={() => setIsMobileMenuOpen(true)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Menu className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </div>

        <motion.div 
          className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500"
          initial={{ scaleX: 0 }}
          animate={{ 
            scaleX: isScrolled ? 1 : 0,
            opacity: isScrolled ? 1 : 0
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.header>

      <SearchModal 
        isOpen={isSearchOpen} 
        onClose={() => setIsSearchOpen(false)} 
      />

      <NotificationsModal 
        isOpen={isNotificationsOpen} 
        onClose={() => setIsNotificationsOpen(false)} 
      />

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-lg z-40 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            <motion.div
              className="fixed top-0 right-0 bottom-0 w-80 bg-gray-900/95 backdrop-blur-2xl z-50 lg:hidden border-l border-gray-800/50"
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ 
                type: "spring", 
                damping: 30, 
                stiffness: 300 
              }}
            >
              <div className="p-6 h-full flex flex-col">
                <motion.div 
                  className="flex items-center justify-between mb-8"
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                >
                <div className="flex items-center space-x-3">
                <motion.div 
                    className="relative"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400 }}
                >
                    <img 
                    src="https://blin-x.space/favicon.svg" 
                    alt="BlinX Logo"
                    className="w-7 h-7 object-cover"
                    />
                </motion.div>
                <span className="font-bold text-white text-xl">BlinX</span>
                </div>
                  <motion.button 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-gray-400 hover:text-white transition-colors p-2"
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <X className="w-5 h-5" />
                  </motion.button>
                </motion.div>

                <div className="flex space-x-2 mb-6">
                  <motion.button 
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setIsSearchOpen(true);
                    }}
                    className="flex-1 glass py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Search className="w-4 h-4" />
                    <span>Search</span>
                  </motion.button>
                  <motion.button 
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setIsNotificationsOpen(true);
                    }}
                    className="flex-1 glass py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2 relative"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Bell className="w-4 h-4" />
                    <span>Alerts</span>
                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full" />
                  </motion.button>
                </div>

                <nav className="space-y-2 flex-1">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.href}
                      initial={{ x: 50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 + 0.2 }}
                    >
                      <Link
                        to={item.href}
                        className={`flex items-center justify-between p-4 rounded-xl transition-all duration-300 group ${
                          location.pathname === item.href
                            ? 'bg-purple-500/20 text-purple-400'
                            : 'text-gray-300 hover:bg-white/5 hover:text-white'
                        }`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <div className="flex items-center space-x-3">
                          <item.icon className="w-4 h-4" />
                          <span className="font-medium">{item.label}</span>
                        </div>
                        <motion.div
                          whileHover={{ x: 3 }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          <ChevronRight className="w-4 h-4" />
                        </motion.div>
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                <motion.div 
                  className="mt-8 space-y-3"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <motion.button 
                    className="w-full glass py-3 rounded-xl font-semibold transition-all duration-300"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      window.location.href = '/app/?page=login';
                    }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Sign In
                  </motion.button>
                  <motion.button 
                    className="w-full bg-purple-500 hover:bg-purple-600 text-white py-3 rounded-xl font-semibold transition-all duration-300"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      window.location.href = '/app/?page=register';
                    }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Sign Up
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}