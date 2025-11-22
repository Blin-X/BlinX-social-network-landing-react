import { motion, AnimatePresence } from 'framer-motion';
import { 
  Users, 
  Crown, 
  Palette, 
  Shield, 
  Megaphone, 
  Bug, 
  Star, 
  MessageCircle, 
  Mail,
  Twitter,
  Github,
  Sparkles,
  Code,
  Award,
  Zap,
  Heart
} from 'lucide-react';
import { fadeInUp, staggerContainer } from '../utils/animations';
import { useState } from 'react';

interface TeamMember {
  username: string;
  role: string;
  description: string;
  icon: JSX.Element;
  color: string;
  gradient: string;
  isFounder?: boolean;
  skills: string[];
  socials: {
    [key: string]: string;
  };
}

const teamData: TeamMember[] = [
  {
    username: ".furrieb",
    role: "CEO & Lead Developer",
    description: "Project founder, platform architect. Responsible for technical vision and strategic development of BlinX.",
    icon: <Crown className="w-6 h-6" />,
    color: "from-purple-500 to-pink-500",
    gradient: "bg-gradient-to-br from-purple-500 to-pink-500",
    isFounder: true,
    skills: ["TypeScript", "React", "Node.js", "Architecture"],
    socials: {
      twitter: "#",
      github: "#",
      email: "mailto:furrieb@blinx.app"
    }
  },
  {
    username: "fragment",
    role: "Co-CEO & Head of Design", 
    description: "Co-founder and creative director. Creates unique user experience and visual identity of the platform.",
    icon: <Palette className="w-6 h-6" />,
    color: "from-blue-500 to-cyan-500",
    gradient: "bg-gradient-to-br from-blue-500 to-cyan-500",
    isFounder: true,
    skills: ["UI/UX Design", "Figma", "Branding", "Prototyping"],
    socials: {
      twitter: "#",
      dribbble: "#",
      email: "mailto:fragment@blinx.app"
    }
  },
  {
    username: "Aloha v2",
    role: "Lead Moderator",
    description: "Ensures friendly atmosphere in the community. Specializes in conflict resolution.",
    icon: <Shield className="w-6 h-6" />,
    color: "from-green-500 to-emerald-500",
    gradient: "bg-gradient-to-br from-green-500 to-emerald-500",
    skills: ["Community Management", "Conflict Resolution", "User Support"],
    socials: {
      discord: "#",
      email: "mailto:aloha@blinx.app"
    }
  },
    {
    username: "kenx",
    role: "Manager & Developer",
    description: "Ensures friendly atmosphere in the community. Specializes in conflict resolution.",
    icon: <Code className="w-6 h-6" />,
    color: "from-green-500 to-emerald-500",
    gradient: "bg-gradient-to-br from-green-500 to-emerald-500",
    skills: ["Management", "Help", "Development"],
    socials: {
      discord: "#",
      email: "mailto:kenx@blinx.app"
    }
  },
  {
    username: "nullcord", 
    role: "Senior Moderator",
    description: "Content moderation expert and platform security specialist.",
    icon: <Shield className="w-6 h-6" />,
    color: "from-green-500 to-emerald-500",
    gradient: "bg-gradient-to-br from-green-500 to-emerald-500",
    skills: ["Content Moderation", "Safety", "Policy Enforcement"],
    socials: {
      discord: "#",
      email: "mailto:nullcord@blinx.app"
    }
  },
  {
    username: "koter_na_marse",
    role: "SMM Manager & Content Creator",
    description: "Develops BlinX presence in social media, creates engaging content.",
    icon: <Megaphone className="w-6 h-6" />,
    color: "from-orange-500 to-red-500",
    gradient: "bg-gradient-to-br from-orange-500 to-red-500",
    skills: ["Social Media", "Content Creation", "Marketing"],
    socials: {
      twitter: "#",
      youtube: "#",
      email: "mailto:koter@blinx.app"
    }
  },
  {
    username: "Antidied",
    role: "QA Lead & Testing Engineer", 
    description: "Ensures highest product quality through thorough testing.",
    icon: <Bug className="w-6 h-6" />,
    color: "from-yellow-500 to-amber-500",
    gradient: "bg-gradient-to-br from-yellow-500 to-amber-500",
    skills: ["QA Testing", "Automation", "Coding"],
    socials: {
      github: "#",
      email: "mailto:antidied@blinx.app"
    }
  },
  {
    username: "Kisel",
    role: "Community Moderator",
    description: "Helps new users get familiar with the platform, answers questions.",
    icon: <Shield className="w-6 h-6" />,
    color: "from-green-500 to-emerald-500",
    gradient: "bg-gradient-to-br from-green-500 to-emerald-500",
    skills: ["User Onboarding", "Support", "Community Engagement"],
    socials: {
      discord: "#",
      email: "mailto:kisel@blinx.app"
    }
  }
];

const stats = [
  { number: "7", label: "Talented team members", icon: <Users className="w-6 h-6" /> },
  { number: "3", label: "Years average experience", icon: <Award className="w-6 h-6" /> },
  { number: "15+", label: "Technologies in stack", icon: <Zap className="w-6 h-6" /> },
  { number: "24/7", label: "Community support", icon: <Heart className="w-6 h-6" /> },
];

export default function TeamPage() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [activeMember, setActiveMember] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const handleSubscribe = () => {
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const founders = teamData.filter(member => member.isFounder);
  const teamMembers = teamData.filter(member => !member.isFounder);

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6">
      <div className="container mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {/* Hero section */}
          <motion.div
            variants={fadeInUp}
            className="text-center mb-20"
          >
            <motion.div
              className="inline-flex items-center space-x-2 glass-dark rounded-full px-6 py-3 mb-8"
              whileHover={{ scale: 1.05 }}
            >
              <Sparkles className="w-5 h-5 text-purple-400" />
              <span className="text-gray-300">Our amazing team</span>
            </motion.div>

            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent"
              variants={fadeInUp}
            >
              BlinX Team
            </motion.h1>

            <motion.p 
              className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
              variants={fadeInUp}
            >
              Meet the talented people who make BlinX better every day.
            </motion.p>
          </motion.div>

          {/* Statistics */}
          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={fadeInUp}
                className="glass rounded-2xl p-6 text-center group hover:glass-dark transition-all duration-500"
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <motion.div
                  className="text-purple-400 mb-4 inline-flex"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  {stat.icon}
                </motion.div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Founders */}
          <motion.section variants={fadeInUp} className="mb-20">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Founders</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                The people who started this journey
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {founders.map((member, index) => (
                <motion.div
                  key={member.username}
                  className="relative group"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  onHoverStart={() => setActiveMember(member.username)}
                  onHoverEnd={() => setActiveMember(null)}
                >
                  <motion.div
                    className={`absolute -inset-4 rounded-3xl opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500 ${member.gradient}`}
                  />

                  <div className="relative glass rounded-3xl p-8 hover:glass-dark transition-all duration-500 group-hover:scale-105">
                    <div className="flex flex-col items-center text-center space-y-6">
                      <div className="relative">
                        <motion.div
                          className={`w-24 h-24 rounded-2xl ${member.gradient} flex items-center justify-center relative mx-auto`}
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          {member.icon}
                          <motion.div
                            className="absolute -top-2 -right-2"
                            animate={{ 
                              scale: [1, 1.2, 1],
                              rotate: [0, 180, 360]
                            }}
                            transition={{ 
                              duration: 3, 
                              repeat: Infinity,
                              repeatType: "reverse"
                            }}
                          >
                            <Star className="w-6 h-6 text-yellow-400 fill-current" />
                          </motion.div>
                        </motion.div>
                      </div>

                      <div className="w-full">
                        <h3 className="text-2xl font-bold text-white mb-3">{member.username}</h3>
                        
                        <div className="flex items-center justify-center space-x-2 mb-4">
                          {member.icon}
                          <div className={`px-4 py-2 rounded-full text-sm font-medium ${member.gradient} text-white`}>
                            {member.role}
                          </div>
                        </div>

                        <p className="text-gray-300 leading-relaxed mb-6">
                          {member.description}
                        </p>

                        <div className="flex flex-wrap gap-2 justify-center mb-4">
                          {member.skills.map((skill, skillIndex) => (
                            <motion.span
                              key={skill}
                              className="px-3 py-1 bg-white/5 rounded-full text-xs text-gray-400 border border-white/10"
                              initial={{ opacity: 0, scale: 0 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ delay: skillIndex * 0.1 + 0.3 }}
                              viewport={{ once: true }}
                            >
                              {skill}
                            </motion.span>
                          ))}
                        </div>

                        <motion.div 
                          className="flex justify-center space-x-4"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ delay: 0.5 }}
                        >
                          {Object.entries(member.socials).map(([platform, url]) => (
                            <motion.a
                              key={platform}
                              href={url}
                              className="text-gray-400 hover:text-white transition-colors p-2"
                              whileHover={{ scale: 1.3, y: -2 }}
                              whileTap={{ scale: 0.9 }}
                            >
                              {platform === 'twitter' && <Twitter className="w-5 h-5" />}
                              {platform === 'github' && <Github className="w-5 h-5" />}
                              {platform === 'email' && <Mail className="w-5 h-5" />}
                              {platform === 'discord' && <MessageCircle className="w-5 h-5" />}
                              {platform === 'dribbble' && <Palette className="w-5 h-5" />}
                              {platform === 'youtube' && <Megaphone className="w-5 h-5" />}
                            </motion.a>
                          ))}
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Team */}
          <motion.section variants={fadeInUp}>
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Team</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Talented specialists who make BlinX what you know it as
              </p>
            </motion.div>

            <motion.div 
              className="flex justify-center mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <div className="glass rounded-2xl p-1 inline-flex">
                {['grid', 'list'].map((mode) => (
                  <button
                    key={mode}
                    onClick={() => setViewMode(mode as 'grid' | 'list')}
                    className={`px-6 py-2 rounded-xl transition-all duration-300 ${
                      viewMode === mode
                        ? 'bg-purple-500 text-white shadow-lg'
                        : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    {mode === 'grid' ? 'Grid' : 'List'}
                  </button>
                ))}
              </div>
            </motion.div>

            <motion.div
              className={`${
                viewMode === 'grid' 
                  ? 'grid md:grid-cols-2 lg:grid-cols-3 gap-6' 
                  : 'space-y-6 max-w-4xl mx-auto'
              }`}
              layout
            >
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.username}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`group cursor-pointer ${
                    viewMode === 'grid' 
                      ? 'glass rounded-2xl p-6 hover:glass-dark transition-all duration-500 text-center' 
                      : 'glass rounded-2xl p-6 hover:glass-dark transition-all duration-500'
                  }`}
                  whileHover={{ 
                    y: viewMode === 'grid' ? -8 : -4,
                    scale: viewMode === 'grid' ? 1.02 : 1.01
                  }}
                  onHoverStart={() => setActiveMember(member.username)}
                  onHoverEnd={() => setActiveMember(null)}
                >
                  {viewMode === 'grid' ? (
                    <div className="flex flex-col items-center">
                      <motion.div
                        className="mb-4"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <div className={`w-20 h-20 rounded-2xl ${member.gradient} flex items-center justify-center mx-auto`}>
                          {member.icon}
                        </div>
                      </motion.div>

                      <h3 className="text-xl font-bold text-white mb-3">
                        {member.username}
                      </h3>
                      
                      <div className="flex items-center justify-center space-x-2 mb-4">
                        {member.icon}
                        <div className={`px-3 py-1 rounded-full text-sm font-medium ${member.gradient} text-white`}>
                          {member.role}
                        </div>
                      </div>

                      <p className="text-gray-300 text-sm leading-relaxed mb-4">
                        {member.description}
                      </p>

                      <div className="flex flex-wrap gap-1 justify-center mb-4">
                        {member.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2 py-1 bg-white/5 rounded-full text-xs text-gray-400 border border-white/10"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                      <motion.div 
                        className="flex justify-center space-x-3"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                      >
                        {Object.entries(member.socials).map(([platform, url]) => (
                          <motion.a
                            key={platform}
                            href={url}
                            className="text-gray-400 hover:text-white transition-colors"
                            whileHover={{ scale: 1.3, y: -2 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            {platform === 'twitter' && <Twitter className="w-4 h-4" />}
                            {platform === 'github' && <Github className="w-4 h-4" />}
                            {platform === 'email' && <Mail className="w-4 h-4" />}
                            {platform === 'discord' && <MessageCircle className="w-4 h-4" />}
                          </motion.a>
                        ))}
                      </motion.div>
                    </div>
                  ) : (
                    <div className="flex items-start space-x-4">
                      {/* Avatar */}
                      <motion.div
                        className="flex-shrink-0"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <div className={`w-16 h-16 rounded-2xl ${member.gradient} flex items-center justify-center`}>
                          {member.icon}
                        </div>
                      </motion.div>

                      {/* Content */}
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-2">
                          {member.username}
                        </h3>
                        
                        {/* Role with icon */}
                        <div className="flex items-center space-x-2 mb-3">
                          {member.icon}
                          <div className={`px-3 py-1 rounded-full text-sm font-medium ${member.gradient} text-white`}>
                            {member.role}
                          </div>
                        </div>

                        <p className="text-gray-300 leading-relaxed mb-3">
                          {member.description}
                        </p>

                        {/* Skills */}
                        <div className="flex flex-wrap gap-1 mb-3">
                          {member.skills.map((skill) => (
                            <span
                              key={skill}
                              className="px-2 py-1 bg-white/5 rounded-full text-xs text-gray-400 border border-white/10"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>

                        {/* Social icons */}
                        <motion.div 
                          className="flex space-x-2"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ delay: 0.3 }}
                        >
                          {Object.entries(member.socials).map(([platform, url]) => (
                            <motion.a
                              key={platform}
                              href={url}
                              className="text-gray-400 hover:text-white transition-colors"
                              whileHover={{ scale: 1.3, y: -2 }}
                              whileTap={{ scale: 0.9 }}
                            >
                              {platform === 'twitter' && <Twitter className="w-4 h-4" />}
                              {platform === 'github' && <Github className="w-4 h-4" />}
                              {platform === 'email' && <Mail className="w-4 h-4" />}
                              {platform === 'discord' && <MessageCircle className="w-4 h-4" />}
                            </motion.a>
                          ))}
                        </motion.div>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </motion.section>

          {/* CTA */}
          <motion.div
            variants={fadeInUp}
            className="text-center mt-20 glass rounded-3xl p-12 max-w-4xl mx-auto relative overflow-hidden"
          >
            <div className="relative z-10">
              <motion.h2
                className="text-3xl md:text-5xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Want to join our team?
              </motion.h2>
              
              <motion.p
                className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                viewport={{ once: true }}
              >
                We're always looking for talented people
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                <motion.button 
                  onClick={() => window.location.href = '/career'}
                  className="bg-purple-500 hover:bg-purple-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Open Positions
                </motion.button>
                
                <motion.button 
                  onClick={handleSubscribe}
                  className="glass hover:glass-dark text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Follow Updates
                </motion.button>
              </motion.div>
            </div>

            {/* Success message */}
            <AnimatePresence>
              {showSuccess && (
                <motion.div
                  className="absolute inset-0 glass rounded-3xl flex items-center justify-center bg-black/80 backdrop-blur-sm z-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <motion.div
                    className="text-center p-8 max-w-sm"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                  >
                    <Heart className="w-16 h-16 text-green-400 mx-auto mb-4 fill-green-400" />
                    <h4 className="text-2xl font-bold text-white mb-2">Thank you!</h4>
                    <p className="text-gray-300">
                      You will receive notifications about new job openings
                    </p>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}