import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Users, MessageCircle, Heart, Zap, Globe, Shield } from 'lucide-react';
import MorphingText from '../components/MorphingText';
import { fadeInUp, staggerContainer } from '../utils/animations';

export default function Home() {
  return (
    <div className="">
      <section className="relative flex items-center justify-center px-4 sm:px-6" style={{ paddingTop: '6rem' }}>
        <div className="container mx-auto">
          <motion.div
            className="text-center"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center space-x-2 glass-dark rounded-full px-4 py-2 mb-6 sm:mb-8"
            >
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-xs sm:text-sm text-gray-300">New era of social networks</span>
            </motion.div>

            <motion.h1 
              variants={fadeInUp}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight"
            >
              BlinX - platform
              <br />
              for
              <br />
              <MorphingText />
            </motion.h1>

            <motion.p 
              variants={fadeInUp}
              className="text-lg sm:text-xl text-gray-300 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-4"
            >
              Share moments, find like-minded people and create communities 
              in a modern social network focused on microblogging.
            </motion.p>

            <motion.div 
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4"
            >
              <button 
                onClick={() => window.location.href = '/app'} 
                className="group relative bg-purple-500 hover:bg-purple-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 glow-animation w-full sm:w-auto"
              >
                <span className="flex items-center justify-center sm:justify-start space-x-2">
                  <span>Join now</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              
              <button className="glass hover:glass-dark text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 w-full sm:w-auto">
                Download app (soon)
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

        {/* Features */}
      <section className="py-16 sm:py-20 px-4 sm:px-6">
        <div className="container mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div
              variants={fadeInUp}
              className="text-center mb-12 sm:mb-16"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">Why BlinX?</h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
                Modern platform created for live communication and fast content sharing
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {[
                {
                  icon: <MessageCircle className="w-8 h-8 sm:w-10 sm:h-10" />,
                  title: "Microblogging",
                  description: "Short posts, quick thoughts, instant reactions"
                },
                {
                  icon: <Users className="w-8 h-8 sm:w-10 sm:h-10" />,
                  title: "Communities",
                  description: "Find people by interests and create thematic groups"
                },
                {
                  icon: <Zap className="w-8 h-8 sm:w-10 sm:h-10" />,
                  title: "Instant feed",
                  description: "Algorithm that shows the most interesting content first"
                },
                {
                  icon: <Heart className="w-8 h-8 sm:w-10 sm:h-10" />,
                  title: "Reactions",
                  description: "Express emotions through extended reactions and stickers"
                },
                {
                  icon: <Shield className="w-8 h-8 sm:w-10 sm:h-10" />,
                  title: "Privacy",
                  description: "Full control over your data and privacy settings"
                },
                {
                  icon: <Globe className="w-8 h-8 sm:w-10 sm:h-10" />,
                  title: "Accessibility",
                  description: "Works fast even with slow internet"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="glass rounded-2xl p-6 sm:p-8 hover:glass-dark transition-all duration-300 group text-center"
                >
                  <div className="text-purple-400 mb-4 group-hover:scale-110 transition-transform duration-300 inline-flex">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed text-sm sm:text-base">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-black/50">
        <div className="container mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 text-center"
          >
            {[
              { number: "50K+", label: "Users" },
              { number: "1M+", label: "Posts per day" },
              { number: "10K+", label: "Communities" },
              { number: "99.9%", label: "Uptime" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="glass rounded-2xl p-4 sm:p-8"
              >
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-400 mb-1 sm:mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 text-xs sm:text-sm md:text-base">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 px-4 sm:px-6">
        <div className="container mx-auto text-center">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6"
            >
              Join BlinX today
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto"
            >
              Become part of the growing community today
            </motion.p>
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center"
            >
              <button 
                onClick={() => window.location.href = '/app'} 
                className="bg-purple-500 hover:bg-purple-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
              >
                Sign up
              </button>
              <button 
                onClick={() => window.location.href = 'https://discord.gg/U8WeKuFabD'} 
                className="glass hover:glass-dark text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold transition-all duration-300 w-full sm:w-auto"
              >
                Learn more
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}