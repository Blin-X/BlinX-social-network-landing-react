import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Heart, 
  Mail, 
  ArrowUp,
  MessageCircle,
  Sparkles,
  Globe,
  Crown,
  Zap,
  Users,
  Text,
  Briefcase,
  FileText,
  Youtube,
  Activity,
  Shield
} from 'lucide-react';
import { useState, useEffect } from 'react';

const fixedParticles = [
  { left: 10, top: 20 },
  { left: 25, top: 60 },
  { left: 40, top: 10 },
  { left: 55, top: 80 },
  { left: 70, top: 30 },
  { left: 85, top: 50 },
  { left: 15, top: 70 },
  { left: 30, top: 40 }
];

export default function Footer() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const links = {
    product: [
      { name: 'Feed', href: '/app/?page=feed', icon: Zap },
      { name: 'Communities', href: '/app/?page=communities', icon: Globe },
      { name: 'Blog', href: '/blog', icon: MessageCircle },
    ],
    company: [
      { name: 'Team', href: '/team', icon: Users },
      { name: 'Career', href: '/career', icon: Briefcase },
      { name: 'Contact', href: '/contact', icon: Mail },
    ],
    developers: [
      { name: 'Documentation', href: '/developers', icon: FileText },
      { name: 'Status', href: '/status', icon: Activity },
    ],
    legal: [
      { name: 'Privacy Policy', href: '/legal/privacy', icon: Shield },
      { name: 'Terms of Use', href: '/legal/terms', icon: FileText },
    ]
  };

  const socialLinks = [
    { 
      icon: Text, 
      href: 'https://t.me/blinx_ru', 
      label: 'Telegram',
      color: 'hover:text-blue-400 hover:bg-blue-500/10'
    },
    { 
      icon: Youtube, 
      href: 'https://www.youtube.com/@blinx_ru', 
      label: 'YouTube',
      color: 'hover:text-red-400 hover:bg-red-500/10'
    },
    { 
      icon: MessageCircle, 
      href: 'https://discord.gg/U8WeKuFabD', 
      label: 'Discord',
      color: 'hover:text-indigo-400 hover:bg-indigo-500/10'
    },
    { 
      icon: Mail, 
      href: 'mailto:hello@blin-x.space', 
      label: 'Email',
      color: 'hover:text-gray-300 hover:bg-gray-500/10'
    },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-transparent to-black/80 border-t border-white/10 mt-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-pink-500/5" />
      
      <div className="absolute inset-0">
        {isClient && fixedParticles.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-400/30 rounded-full"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <div className="absolute -top-8 left-0 right-0 h-16 overflow-hidden">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="absolute top-0 left-0 w-full h-full"
        >
          <path 
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            className="fill-current text-gray-900/30"
            opacity="0.25"
          ></path>
          <path 
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            className="fill-current text-gray-900/20"
            opacity="0.5"
          ></path>
          <path 
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            className="fill-current text-gray-900/10"
          ></path>
        </svg>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          <motion.div 
            className="lg:col-span-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Link to="/" className="flex items-center space-x-3 mb-6 group">
                <motion.div 
                    className="relative"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400 }}
                >
                    <img 
                    src="https://blin-x.space/favicon.svg" 
                    alt="BlinX Logo"
                    className="w-10 h-10 object-cover"
                    />
                </motion.div>
              <div>
                <span className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  BlinX
                </span>
                <motion.div
                  className="flex items-center space-x-1 mt-1"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <Sparkles className="w-4 h-4 text-yellow-400" />
                  <span className="text-sm text-gray-400">Social Microblogging</span>
                </motion.div>
              </div>
            </Link>
            
            <p className="text-gray-400 mb-8 leading-relaxed text-lg max-w-md">
              Where moments matter. Join our growing community of creators, thinkers, and innovators shaping the future of social interaction.
            </p>
            
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className={`glass rounded-2xl p-3 text-gray-400 transition-all duration-300 group relative overflow-hidden ${social.color}`}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <social.icon className="w-5 h-5 relative z-10" />
                  <div className="absolute inset-0 bg-gradient-to-br from-current to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {Object.entries(links).map(([category, items], categoryIndex) => (
            <motion.div
              key={category}
              className="lg:col-span-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.1 + 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="font-bold text-white mb-6 text-lg flex items-center space-x-2">
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </span>
              </h3>
              <ul className="space-y-4">
                {items.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 + categoryIndex * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Link
                      to={link.href}
                      className="text-gray-400 hover:text-white transition-all duration-300 flex items-center space-x-3 group py-2"
                    >
                      <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-purple-500/20 transition-colors duration-300">
                        <link.icon className="w-4 h-4" />
                      </div>
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        {link.name}
                      </span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="glass rounded-3xl p-8 mb-12 text-center relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10" />
          <div className="relative z-10">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Crown className="w-8 h-8 text-yellow-400" />
              <h3 className="text-2xl font-bold text-white">Upgrade to BlinX Premium</h3>
            </div>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Unlock exclusive features, enhanced customization, and premium support. Elevate your social experience.
            </p>
            <motion.button
              onClick={() => window.location.href = '/premium'}
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg"
              whileHover={{ scale: 1.05, boxShadow: '0 20px 40px -10px rgba(139, 92, 246, 0.4)' }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Premium
            </motion.button>
          </div>
        </motion.div>

        <motion.div 
          className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <motion.div
              className="flex items-center space-x-2 text-gray-400"
              whileHover={{ scale: 1.05 }}
            >
              <span>Made with</span>
              <motion.div
                animate={{ 
                  scale: [1, 1.3, 1],
                  rotate: [0, 10, -10, 0]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                <Heart className="w-5 h-5 text-red-400 fill-current" />
              </motion.div>
              <span>by the BlinX team</span>
            </motion.div>
            
            <div className="flex space-x-1">
              <div className="w-1 h-1 bg-purple-400 rounded-full"></div>
              <div className="w-1 h-1 bg-pink-400 rounded-full"></div>
              <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
            </div>
          </div>

          <div className="flex items-center space-x-8">
            <span className="text-gray-400 text-sm">
              © 2025 BlinX. All rights reserved.
            </span>
            
            <motion.button
              onClick={scrollToTop}
              className="flex items-center space-x-2 text-purple-400 hover:text-white transition-colors group glass rounded-2xl px-4 py-2"
              whileHover={{ y: -2, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-sm font-medium">Back to top</span>
              <motion.div
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-5 h-5 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center"
              >
                <ArrowUp className="w-3 h-3 text-white" />
              </motion.div>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}