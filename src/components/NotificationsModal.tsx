'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Users, Briefcase, Clock, ArrowRight, CheckCircle } from 'lucide-react';
import { useState } from 'react';

interface NotificationsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function NotificationsModal({ isOpen, onClose }: NotificationsModalProps) {
  const [showSuccess, setShowSuccess] = useState(false);

  const notifications = [
    {
      id: 1,
      type: 'career',
      title: 'Join our team!',
      description: 'We are looking for talented developers and designers',
      icon: Briefcase,
      time: '2 hours ago',
      action: 'View positions',
      actionUrl: '/career'
    },
    {
      id: 2,
      type: 'update',
      title: 'Platform update',
      description: 'New features added for communities',
      icon: Users,
      time: '1 day ago',
      action: 'Learn more',
      actionUrl: '/blog'
    },
    {
      id: 3,
      type: 'reminder',
      title: 'Complete your profile',
      description: 'Tell the community about yourself',
      icon: Clock,
      time: '2 days ago',
      action: 'Complete',
      actionUrl: '/profile'
    }
  ];

  const handleActionClick = (url: string) => {
    if (url === '/career') {
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
        window.location.href = url;
      }, 2000);
    } else {
      window.location.href = url;
    }
    onClose();
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
            className="fixed top-20 md:top-24 left-4 right-4 md:left-auto md:right-4 w-auto md:w-96 z-50 max-h-[85vh]"
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
          >
            <div className="glass rounded-2xl p-4 md:p-6 shadow-2xl border border-white/10 backdrop-blur-xl max-h-full overflow-hidden flex flex-col">
              <div className="flex items-center justify-between mb-4 md:mb-6">
                <h3 className="text-lg md:text-xl font-bold text-white">Notifications</h3>
                <div className="flex items-center space-x-2 md:space-x-3">
                  <div className="hidden sm:flex items-center space-x-1 text-xs text-gray-400">
                    <span>{notifications.length} alerts</span>
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

              <div className="space-y-3 md:space-y-4 flex-1 overflow-y-auto">
                {notifications.map((notification) => (
                  <motion.div
                    key={notification.id}
                    className="glass-dark rounded-xl p-3 md:p-4 hover:glass transition-all duration-300"
                    whileHover={{ scale: 1.01 }}
                  >
                    <div className="flex items-start space-x-2 md:space-x-3">
                      <div className="text-purple-400 bg-purple-500/20 p-1.5 md:p-2 rounded-lg flex-shrink-0">
                        <notification.icon className="w-3 h-3 md:w-4 md:h-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-white text-sm md:text-base mb-1 truncate">
                          {notification.title}
                        </h4>
                        <p className="text-gray-300 text-xs md:text-sm mb-2 line-clamp-2">
                          {notification.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-gray-400">{notification.time}</span>
                          <button
                            onClick={() => handleActionClick(notification.actionUrl)}
                            className="text-purple-400 hover:text-purple-300 text-xs md:text-sm font-medium flex items-center space-x-1 transition-colors flex-shrink-0"
                          >
                            <span>{notification.action}</span>
                            <ArrowRight className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-4 pt-3 border-t border-white/10">
                <p className="text-xs text-gray-400 text-center">
                  All caught up! 🎉
                </p>
              </div>
            </div>
          </motion.div>

          <AnimatePresence>
            {showSuccess && (
              <motion.div
                className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <motion.div
                  className="glass rounded-2xl p-6 md:p-8 text-center max-w-xs md:max-w-sm mx-4"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                >
                  <CheckCircle className="w-12 h-12 md:w-16 md:h-16 text-green-400 mx-auto mb-3 md:mb-4" />
                  <h4 className="text-lg md:text-xl font-bold text-white mb-2">Application sent!</h4>
                  <p className="text-gray-300 text-sm md:text-base">
                    We will review your application and contact you soon
                  </p>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}
    </AnimatePresence>
  );
}