import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

// Фиксированные позиции для частиц (чтобы избежать hydration mismatch)
const fixedParticles = [
  { left: 10, top: 20 },
  { left: 25, top: 60 },
  { left: 40, top: 10 },
  { left: 55, top: 80 },
  { left: 70, top: 30 },
  { left: 85, top: 50 },
  { left: 15, top: 70 },
  { left: 30, top: 40 },
  { left: 45, top: 90 },
  { left: 60, top: 15 },
  { left: 75, top: 65 },
  { left: 90, top: 25 },
  { left: 20, top: 85 },
  { left: 35, top: 35 },
  { left: 50, top: 75 },
  { left: 65, top: 45 },
  { left: 80, top: 5 },
  { left: 95, top: 55 },
  { left: 5, top: 95 },
  { left: 40, top: 50 }
];

export default function ParallaxBackground() {
  const ref = useRef<HTMLDivElement>(null);
  const [isClient, setIsClient] = useState(false);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const y2 = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const y3 = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Выносим градиенты в отдельные переменные чтобы избежать разрывов строк
  const gridGradient = `linear-gradient(rgba(139,92,246,0.1)1px,transparent 1px),linear-gradient(90deg,rgba(139,92,246,0.1)1px,transparent 1px)`;
  
  const radialGradients = [
    `radial-gradient(600px circle at 20% 30%,rgba(139,92,246,0.15)0%,transparent 50%)`,
    `radial-gradient(600px circle at 80% 70%,rgba(139,92,246,0.15)0%,transparent 50%)`,
    `radial-gradient(600px circle at 40% 80%,rgba(139,92,246,0.15)0%,transparent 50%)`,
    `radial-gradient(600px circle at 60% 20%,rgba(139,92,246,0.15)0%,transparent 50%)`,
    `radial-gradient(600px circle at 20% 30%,rgba(139,92,246,0.15)0%,transparent 50%)`,
  ];

  return (
    <>
      {/* Этот div нужен для отслеживания скролла */}
      <div ref={ref} className="absolute inset-0" />
      
      {/* Фон с параллакс эффектом */}
      <div className="fixed inset-0 -z-50 overflow-hidden">
        {/* Сетка - убираем пробелы в gradient */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: gridGradient,
            backgroundSize: '50px 50px',
          }}
        />
        
        {/* Основной градиент */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-pink-900/20" />
        
        <motion.div
          style={{ y: y1 }}
          className="absolute inset-0"
        >
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-purple-500/10 blur-3xl"
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
          
          <motion.div
            className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-purple-700/5 blur-3xl"
            animate={{
              x: [0, -80, 0],
              y: [0, 60, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              repeatType: "reverse",
              delay: 2,
            }}
          />
        </motion.div>

        <motion.div
          style={{ y: y2 }}
          className="absolute inset-0"
        >
          <motion.div
            className="absolute top-1/2 left-1/3 w-64 h-64 rounded-full bg-pink-500/5 blur-2xl"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </motion.div>

        <motion.div
          style={{ y: y3, opacity }}
          className="absolute inset-0"
        >
          {isClient && fixedParticles.map((particle, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-purple-400/30 rounded-full"
              style={{
                left: `${particle.left}%`,
                top: `${particle.top}%`,
              }}
              animate={{
                y: [0, -30, 0],
                x: [0, Math.random() * 20 - 10, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
            />
          ))}
        </motion.div>

        {/* Радиальные градиенты - убираем пробелы */}
        <motion.div
          style={{ y: y1 }}
          className="absolute inset-0 opacity-40"
          animate={{
            background: radialGradients
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
          }}
        />
      </div>
    </>
  );
}