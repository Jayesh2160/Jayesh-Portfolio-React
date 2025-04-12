import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

export function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center"
    >
      <h1 className="text-5xl font-bold mb-4 text-cyan-400">Jayesh Vedu Khairnar</h1>
      <h2 className="text-2xl">
        <Typewriter
          words={['Welcome to my portfolio!', 'I am a developer.', 'Let\'s build something amazing.']}
          loop={true}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1500}
        />
      </h2>
    </motion.div>
  );
}
