import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const fixedParticles = [
  { left: 10, top: 20 }, { left: 25, top: 60 }, { left: 40, top: 10 }, { left: 55, top: 80 },
  { left: 70, top: 30 }, { left: 85, top: 50 }, { left: 15, top: 70 }, { left: 30, top: 40 },
  { left: 45, top: 90 }, { left: 60, top: 15 }, { left: 75, top: 65 }, { left: 90, top: 25 },
  { left: 20, top: 85 }, { left: 35, top: 35 }, { left: 50, top: 75 }, { left: 65, top: 45 },
  { left: 80, top: 5 }, { left: 95, top: 55 }, { left: 5, top: 95 }, { left: 40, top: 50 }
];

export default function AnimatedBackground() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="fixed inset-0 -z-50 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-pink-900/20" />
      
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />
      
      <motion.div
        className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-purple-500/10 blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-purple-700/5 blur-3xl"
        animate={{
          x: [0, -100, 0],
          y: [0, 50, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      <motion.div
        className="absolute top-1/2 left-1/3 w-48 h-48 rounded-full bg-pink-500/5 blur-2xl"
        animate={{
          scale: [1, 1.4, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {isClient && fixedParticles.map((particle, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 bg-purple-400/40 rounded-full"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
          }}
          animate={{
            y: [0, -25, 0],
            x: [0, Math.random() * 15 - 7.5, 0],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: 2.5 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 4,
          }}
        />
      ))}

      <motion.div
        className="absolute inset-0 opacity-25"
        animate={{
          background: [
            'radial-gradient(600px circle at 20% 30%, rgba(139, 92, 246, 0.15) 0%, transparent 50%)',
            'radial-gradient(600px circle at 80% 70%, rgba(139, 92, 246, 0.15) 0%, transparent 50%)',
            'radial-gradient(600px circle at 40% 80%, rgba(139, 92, 246, 0.15) 0%, transparent 50%)',
            'radial-gradient(600px circle at 60% 20%, rgba(139, 92, 246, 0.15) 0%, transparent 50%)',
            'radial-gradient(600px circle at 20% 30%, rgba(139, 92, 246, 0.15) 0%, transparent 50%)',
          ]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
        }}
      />

      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-purple-500/5 blur-xl"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.3, 0.1, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
    </div>
  );
}