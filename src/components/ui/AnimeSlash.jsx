import { motion } from 'framer-motion';

const AnimeSlash = ({ className = '', delay = 0 }) => {
  return (
    <motion.div
      className={`absolute bg-primary ${className}`}
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.65, 0, 0.35, 1]
      }}
      style={{ 
        transformOrigin: 'left',
        height: '2px'
      }}
    />
  );
};

export default AnimeSlash;