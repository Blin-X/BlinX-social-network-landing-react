import { motion } from 'framer-motion';
import { Mail, MessageCircle, Clock, Users, Heart } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../utils/animations';

export default function ContactPage() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6">
      <div className="container mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Contact us</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We're always happy to hear your questions, suggestions and feedback
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <motion.div
              variants={fadeInUp}
              className="space-y-8"
            >
              <div className="glass rounded-2xl p-8">
                <h2 className="text-3xl font-bold mb-6">Our contacts</h2>
                
                <div className="space-y-6">
                  {[
                    {
                      icon: <Mail className="w-6 h-6" />,
                      title: "Email",
                      content: "hello@blin-x.space",
                      description: "Main communication channel"
                    },
                    {
                      icon: <MessageCircle className="w-6 h-6" />,
                      title: "Discord",
                      content: "https://discord.gg/U8WeKuFabD",
                      description: "Join our community"
                    },
                    {
                      icon: <Users className="w-6 h-6" />,
                      title: "Technical support",
                      content: "support@blin-x.space", 
                      description: "Help with platform usage"
                    },
                    {
                      icon: <Clock className="w-6 h-6" />,
                      title: "Response time",
                      content: "24-48 hours",
                      description: "Average response time to requests"
                    }
                  ].map((contact, index) => (
                    <motion.div
                      key={contact.title}
                      className="flex items-start space-x-4 p-4 rounded-xl hover:glass-dark transition-all duration-300"
                      whileHover={{ x: 5 }}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="text-purple-400 mt-1">
                        {contact.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-white mb-1">{contact.title}</h3>
                        <p className="text-lg text-gray-300 mb-1">{contact.content}</p>
                        <p className="text-sm text-gray-400">{contact.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <motion.div
                className="glass rounded-2xl p-8 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <Heart className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">We care about every user</h3>
                <p className="text-gray-300">
                  95% of requests are resolved within 24 hours
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="glass rounded-2xl p-8"
            >
              <h2 className="text-3xl font-bold mb-6">Direct contact with founders</h2>
              
              <div className="space-y-6">
                <div className="bg-purple-500/10 border border-purple-500/20 rounded-xl p-6">
                  <h3 className="font-semibold text-purple-400 mb-3">For job applications and partnerships:</h3>
                  <div className="space-y-3 text-gray-300">
                    <div className="flex items-center space-x-3">
                      <MessageCircle className="w-5 h-5 text-purple-400" />
                      <span>Discord: .furrieb</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Users className="w-5 h-5 text-purple-400" />
                      <span>Telegram: @ARESTZADOXXING</span>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-6">
                  <h3 className="font-semibold text-blue-400 mb-3">For technical issues:</h3>
                  <div className="space-y-3 text-gray-300">
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-blue-400" />
                      <span>support@blin-x.space</span>
                    </div>
                    <p className="text-sm text-gray-400">Our support team will help you with any technical problems</p>
                  </div>
                </div>

                <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-6">
                  <h3 className="font-semibold text-green-400 mb-3">General inquiries:</h3>
                  <div className="space-y-3 text-gray-300">
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-green-400" />
                      <span>hello@blin-x.space</span>
                    </div>
                    <p className="text-sm text-gray-400">For business inquiries and general questions</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}