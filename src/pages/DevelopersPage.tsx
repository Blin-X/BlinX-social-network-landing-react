import { motion } from 'framer-motion';
import { Code, Database, GitBranch, Shield, Zap, Globe, BookOpen, Terminal, Construction, Cpu } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../utils/animations';

export default function DevelopersPage() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6">
      <div className="container mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {/* Header */}
          <motion.div
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center space-x-3 glass-dark rounded-full px-6 py-3 mb-6">
              <Code className="w-5 h-5 text-purple-400" />
              <span className="text-gray-300">For Developers</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">BlinX API</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Powerful API for integration with BlinX platform and creating your own applications
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
              <Cpu className="w-24 h-24 text-purple-400" />
            </motion.div>
            
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              API Under Development
            </motion.h2>
            
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              We're building a comprehensive API that will allow developers to create amazing integrations. 
              The documentation and endpoints are currently being finalized.
            </p>

            <div className="max-w-md mx-auto">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-400">API Development Progress</span>
                <span className="text-sm text-purple-400">45%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <motion.div 
                  className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: '45%' }}
                  transition={{ duration: 2, delay: 1 }}
                />
              </div>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: <Database className="w-8 h-8" />,
                title: "REST API",
                description: "Full data access through RESTful API with OpenAPI documentation"
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Real-time",
                description: "WebSocket connections for instant notifications and chats"
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Security",
                description: "OAuth 2.0 authentication and role-based access model"
              },
              {
                icon: <GitBranch className="w-8 h-8" />,
                title: "Webhooks",
                description: "Receive real-time notifications about events"
              },
              {
                icon: <Globe className="w-8 h-8" />,
                title: "GraphQL",
                description: "Alternative GraphQL endpoint for flexible queries"
              },
              {
                icon: <BookOpen className="w-8 h-8" />,
                title: "Documentation",
                description: "Detailed documentation with examples in different languages"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="glass rounded-2xl p-6 hover:glass-dark transition-all duration-300 group text-center"
              >
                <div className="text-purple-400 mb-4 group-hover:scale-110 transition-transform duration-300 inline-flex">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Coming Soon */}
          <motion.div
            variants={fadeInUp}
            className="glass rounded-2xl p-8 mb-12 text-center"
          >
            <Construction className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold mb-4">API Documentation Coming Soon</h2>
            <p className="text-gray-300 mb-6">
              We're working hard to provide you with comprehensive API documentation, 
              code examples, and SDKs for popular programming languages.
            </p>
            <div className="glass-dark rounded-xl p-6 max-w-2xl mx-auto">
              <div className="flex items-center justify-center space-x-4 text-sm text-gray-400">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span>REST API endpoints</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                  <span>Authentication system</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                  <span>Code examples</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            variants={fadeInUp}
            className="text-center glass rounded-2xl p-8 max-w-4xl mx-auto"
          >
            <Terminal className="w-16 h-16 text-purple-400 mx-auto mb-6" />
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Start Developing Soon</h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Get notified when our API is ready and start building amazing applications with BlinX
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-purple-500 hover:bg-purple-600 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105">
                Get Notified
              </button>
              <button className="glass hover:glass-dark text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300">
                View Roadmap
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}