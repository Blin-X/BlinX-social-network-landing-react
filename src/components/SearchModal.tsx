'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Search, X, Users, Hash, FileText, ArrowRight } from 'lucide-react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchType, setSearchType] = useState<'users' | 'tags' | 'posts'>('users');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  const handleSearch = () => {
    if (!searchQuery.trim()) return;

    const baseUrl = 'http://localhost/app/?page=search';
    let searchUrl = '';

    switch (searchType) {
      case 'users':
        searchUrl = `${baseUrl}&type=users&q=${encodeURIComponent(searchQuery)}`;
        break;
      case 'tags':
        searchUrl = `${baseUrl}&type=tags&q=${encodeURIComponent(searchQuery)}`;
        break;
      case 'posts':
        searchUrl = `${baseUrl}&type=posts&q=${encodeURIComponent(searchQuery)}`;
        break;
    }

    window.location.href = searchUrl;
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          
          <motion.div
            className="fixed top-20 md:top-24 left-4 right-4 md:left-auto md:right-4 w-auto md:w-96 z-50 max-h-[85vh] overflow-hidden"
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
          >
            <div className="glass rounded-2xl p-4 md:p-6 shadow-2xl border border-white/10 backdrop-blur-xl max-h-full overflow-y-auto">
              <div className="flex items-center justify-between mb-4 md:mb-6">
                <h3 className="text-lg md:text-xl font-bold text-white">Search BlinX</h3>
                <div className="flex items-center space-x-2 md:space-x-3">
                  <div className="hidden sm:flex items-center space-x-1 text-xs text-gray-400">
                    <kbd className="px-1.5 py-0.5 glass rounded text-xs">ESC</kbd>
                    <span className="hidden md:inline">to close</span>
                  </div>
                  <motion.button 
                    onClick={onClose}
                    className="text-gray-400 hover:text-white transition-colors p-1.5 md:p-2"
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <X className="w-4 h-4 md:w-5 md:h-5" />
                  </motion.button>
                </div>
              </div>

              <div className="relative mb-4 md:mb-6">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 md:w-5 md:h-5" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="What are you looking for?"
                  className="w-full glass rounded-xl pl-10 pr-4 py-2.5 md:py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 text-sm md:text-base"
                  autoFocus
                />
              </div>

              <div className="grid grid-cols-3 gap-2 md:gap-3 mb-4 md:mb-6">
                {[
                  { type: 'users' as const, icon: Users, label: 'People', mobileLabel: 'Users' },
                  { type: 'tags' as const, icon: Hash, label: 'Tags', mobileLabel: 'Tags' },
                  { type: 'posts' as const, icon: FileText, label: 'Posts', mobileLabel: 'Posts' },
                ].map((item) => (
                  <motion.button
                    key={item.type}
                    onClick={() => setSearchType(item.type)}
                    className={`flex items-center justify-center space-x-1.5 md:space-x-2 p-2 md:p-3 rounded-xl transition-all duration-300 text-xs md:text-sm ${
                      searchType === item.type
                        ? 'bg-purple-500 text-white shadow-lg'
                        : 'glass text-gray-300 hover:text-white hover:bg-white/5'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <item.icon className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" />
                    <span className="hidden sm:inline">{item.label}</span>
                    <span className="sm:hidden">{item.mobileLabel}</span>
                  </motion.button>
                ))}
              </div>

              <motion.button
                onClick={handleSearch}
                disabled={!searchQuery.trim()}
                className={`w-full flex items-center justify-center space-x-2 py-3 md:py-4 rounded-xl font-semibold transition-all duration-300 text-sm md:text-base ${
                  searchQuery.trim()
                    ? 'bg-purple-500 hover:bg-purple-600 text-white shadow-lg'
                    : 'glass text-gray-400 cursor-not-allowed'
                }`}
                whileHover={searchQuery.trim() ? { scale: 1.02 } : {}}
                whileTap={searchQuery.trim() ? { scale: 0.98 } : {}}
              >
                <span className="truncate">
                  Search {searchType}
                </span>
                <ArrowRight className="w-4 h-4 flex-shrink-0" />
              </motion.button>

              <div className="mt-3 text-xs text-gray-400 text-center px-1">
                {searchType === 'users' && 'Find users by name or username'}
                {searchType === 'tags' && 'Discover content by hashtags'}
                {searchType === 'posts' && 'Search posts and content'}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}