import { motion } from 'framer-motion';
import { Construction, PenTool, Calendar, User, ArrowRight } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../utils/animations';

export default function BlogPage() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6">
      <div className="container mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <motion.div
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center space-x-3 glass-dark rounded-full px-6 py-3 mb-6">
              <PenTool className="w-5 h-5 text-purple-400" />
              <span className="text-gray-300">BlinX Blog</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Articles coming soon</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We're preparing interesting materials about platform development, technical details, and community life
            </p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="glass-dark rounded-2xl p-12 text-center mb-12"
          >
            <motion.div
              className="flex justify-center mb-8"
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              <Construction className="w-24 h-24 text-purple-400" />
            </motion.div>
            
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              In active development
            </motion.h2>
            
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Our team is working hard to create quality content. 
              In the blog you'll find news about updates, technical articles, 
              community member interviews, and much more.
            </p>
              
            <div className="max-w-md mx-auto">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-400">Preparation progress</span>
                <span className="text-sm text-purple-400">65%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <motion.div 
                  className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: '65%' }}
                  transition={{ duration: 2, delay: 1 }}
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="grid md:grid-cols-2 gap-8"
          >
            {[
              {
                title: "How we're building BlinX",
                excerpt: "Technical details of our platform architecture",
                author: ".furrieb",
                date: "Soon",
                category: "Development"
              },
              {
                title: "BlinX Design System", 
                excerpt: "Design principles that make the interface convenient",
                author: "fragment",
                date: "Soon",
                category: "Design"
              },
              {
                title: "BlinX Community",
                excerpt: "How we create a friendly atmosphere for everyone",
                author: "Aloha v2",
                date: "Soon", 
                category: "Community"
              },
              {
                title: "Future Plans",
                excerpt: "What features will appear in future updates",
                author: "BlinX Team",
                date: "Soon",
                category: "News"
              }
            ].map((post, index) => (
              <motion.div
                key={index}
                className="glass rounded-2xl p-6 hover:glass-dark transition-all duration-300 group"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center space-x-2 text-sm text-purple-400 mb-3">
                  <span>{post.category}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-purple-400 transition-colors duration-300">
                  {post.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <User className="w-3 h-3" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="text-center mt-12 glass rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold mb-4">Be the first to know about new articles</h3>
            <p className="text-gray-300 mb-6">Subscribe to notifications about new content releases</p>
            <div className="flex max-w-md mx-auto space-x-3">
              <input 
                type="email" 
                placeholder="your@email.com"
                className="flex-1 glass rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300">
                Subscribe
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}