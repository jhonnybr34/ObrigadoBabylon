import { motion } from "framer-motion";
const Hero = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[var(--gradient-hero)]" />
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.2),transparent_50%)]" />
      </div>
      
      <motion.div initial={{
      opacity: 0,
      y: 30
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      duration: 1,
      ease: "easeOut"
    }} className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div initial={{
        scale: 0.9
      }} animate={{
        scale: 1
      }} transition={{
        duration: 0.8,
        ease: "easeOut"
      }} className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-pink-400 via-purple-400 to-purple-800 bg-clip-text text-transparent">
            Obrigado, Babylon
          </h1>
        </motion.div>
        
        <motion.p initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        delay: 0.5,
        duration: 1
      }} className="text-xl md:text-2xl text-foreground/90 leading-relaxed max-w-2xl mx-auto">Uma história que começou em um joguinho de fadinha chamado Ragnarok </motion.p>

        <motion.div initial={{
        opacity: 0,
        scale: 0
      }} animate={{
        opacity: 1,
        scale: 1
      }} transition={{
        delay: 1,
        duration: 0.5
      }} className="mt-12 inline-block">
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-accent to-transparent" />
        </motion.div>
      </motion.div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <motion.div animate={{
        y: [0, 10, 0]
      }} transition={{
        duration: 2,
        repeat: Infinity
      }} className="text-foreground/50">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto">
            <path d="M12 5v14m0 0l7-7m-7 7l-7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.div>
      </div>
    </section>;
};
export default Hero;