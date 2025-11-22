import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const texts = [
  { word: "microblogging", emoji: "💫" },
  { word: "communities", emoji: "👥" },
  { word: "moments", emoji: "⚡" },
  { word: "communication", emoji: "💬" },
  { word: "creativity", emoji: "🎨" },
  { word: "discoveries", emoji: "🔍" }
];

export default function MorphingText() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % texts.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="inline-block h-16 md:h-20 lg:h-24 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.span
          key={currentIndex}
          className="text-purple-400 font-bold text-4xl md:text-5xl lg:text-6xl xl:text-7xl inline-flex items-center space-x-3"
          initial={{ y: 80, opacity: 0, scale: 0.8 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: -80, opacity: 0, scale: 1.2 }}
          transition={{ 
            duration: 0.6,
            ease: [0.4, 0, 0.2, 1]
          }}
        >
          <span>{texts[currentIndex].word}</span>
          <motion.span
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.2, type: "spring" }}
          >
            {texts[currentIndex].emoji}
          </motion.span>
        </motion.span>
      </AnimatePresence>
    </div>
  );
}