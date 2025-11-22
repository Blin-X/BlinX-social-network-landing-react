import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, Code, Palette, Users, MessageCircle, ExternalLink } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../utils/animations';
import { useState } from 'react';

interface Vacancy {
  title: string;
  department: string;
  icon: JSX.Element;
  type: string;
  salary: string;
  description: string;
  requirements: string[];
  contact: string;
}

const vacancies: Vacancy[] = [
  {
    title: "Frontend Developer",
    department: "Development",
    icon: <Code className="w-6 h-6" />,
    type: "Remote",
    salary: "from 120,000 ₽",
    description: "Development of BlinX user interface using React, Next.js and TypeScript",
    requirements: [
      "1+ years experience with React/Next.js",
      "TypeScript knowledge",
      "REST API experience",
      "Understanding of UI/UX principles"
    ],
    contact: "Contact .furrieb on Discord or @ARESTZADOXXING on Telegram"
  },
  {
    title: "UI/UX Designer",
    department: "Design", 
    icon: <Palette className="w-6 h-6" />,
    type: "Remote",
    salary: "from 80,000 ₽",
    description: "Creating user interfaces and improving platform user experience",
    requirements: [
      "1+ years experience in UI/UX design",
      "Knowledge of Figma, Adobe Creative Suite",
      "Understanding of usability principles",
      "Portfolio with works"
    ],
    contact: "Contact .furrieb on Discord or @ARESTZADOXXING on Telegram"
  },
  {
    title: "Community Manager",
    department: "Community",
    icon: <Users className="w-6 h-6" />,
    type: "Remote", 
    salary: "from 60,000 ₽",
    description: "Community moderation, user support and community development",
    requirements: [
      "Community moderation experience",
      "Communication skills",
      "Social media knowledge",
      "Conflict resolution skills"
    ],
    contact: "Contact .furrieb on Discord or @ARESTZADOXXING on Telegram"
  },
  {
    title: "Backend Developer",
    department: "Development",
    icon: <Code className="w-6 h-6" />,
    type: "Remote",
    salary: "from 140,000 ₽", 
    description: "Platform backend development, database and API work",
    requirements: [
      "2+ years experience with Node.js/Python",
      "Database knowledge (PostgreSQL, MongoDB)",
      "Docker experience",
      "Understanding of security principles"
    ],
    contact: "Contact .furrieb on Discord or @ARESTZADOXXING on Telegram"
  }
];

export default function CareerPage() {
  const [selectedVacancy, setSelectedVacancy] = useState<number | null>(null);

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
            <div className="inline-flex items-center space-x-3 glass-dark rounded-full px-6 py-3 mb-6">
              <Briefcase className="w-5 h-5 text-purple-400" />
              <span className="text-gray-300">Career at BlinX</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Join the team</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Become part of a project that changes how people communicate online
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {vacancies.map((vacancy, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="glass rounded-2xl p-8 hover:glass-dark transition-all duration-300 cursor-pointer group"
                onClick={() => setSelectedVacancy(selectedVacancy === index ? null : index)}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="text-purple-400 bg-purple-500/20 p-3 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                      {vacancy.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{vacancy.title}</h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-400">
                        <span>{vacancy.department}</span>
                        <span>•</span>
                        <span>{vacancy.type}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-purple-400 mb-1">{vacancy.salary}</div>
                    <ExternalLink className="w-4 h-4 text-gray-400" />
                  </div>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">{vacancy.description}</p>

                <AnimatePresence>
                  {selectedVacancy === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-gray-700 pt-6">
                        <h4 className="font-semibold mb-4">Requirements:</h4>
                        <ul className="space-y-2 mb-6">
                          {vacancy.requirements.map((req, idx) => (
                            <li key={idx} className="flex items-center space-x-3 text-gray-300">
                              <div className="w-2 h-2 bg-purple-400 rounded-full" />
                              <span>{req}</span>
                            </li>
                          ))}
                        </ul>
                        
                        <div className="bg-purple-500/10 border border-purple-500/20 rounded-xl p-4">
                          <div className="flex items-center space-x-3">
                            <MessageCircle className="w-5 h-5 text-purple-400" />
                            <div>
                              <div className="font-semibold text-purple-400">How to apply:</div>
                              <div className="text-gray-300 text-sm">{vacancy.contact}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {selectedVacancy !== index && (
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedVacancy(index);
                    }}
                    className="w-full glass py-3 rounded-xl font-semibold transition-all duration-300 mt-4"
                  >
                    Learn more
                  </button>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={fadeInUp}
            className="text-center mt-16 glass rounded-2xl p-8 max-w-4xl mx-auto"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Why work at BlinX?</h2>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              {[
                "Flexible schedule and remote work",
                "Interesting technical challenges",
                "Opportunity to influence the product"
              ].map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}