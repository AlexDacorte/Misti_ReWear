import { motion } from "framer-motion";
import { Zap, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12 border-t-4 border-background relative overflow-hidden">
      {/* Animated background pattern */}
      <motion.div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'repeating-linear-gradient(90deg, currentColor 0px, currentColor 1px, transparent 1px, transparent 20px)'
        }}
        animate={{ x: [0, 20] }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.div 
            className="flex items-center gap-3"
            whileHover={{ x: -2 }}
          >
            <motion.div 
              className="w-10 h-10 bg-primary flex items-center justify-center"
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Zap className="h-6 w-6 text-primary-foreground" />
            </motion.div>
            <span className="font-display text-xl tracking-wider">
              MISTI REWEAR
            </span>
          </motion.div>

          <nav className="flex flex-wrap justify-center gap-6">
            {["INICIO", "CATÁLOGO", "NOSOTROS", "CONTACTO"].map((item, index) => (
              <motion.a 
                key={item}
                href={`#${item.toLowerCase()}`} 
                className="font-mono text-sm text-background/70 hover:text-primary transition-colors relative"
                whileHover={{ y: -2 }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {item}
              </motion.a>
            ))}
          </nav>

          <motion.p 
            className="font-mono text-background/60 text-sm flex items-center gap-2"
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            HECHO CON{" "}
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 0.5, repeat: Infinity }}
            >
              <Heart className="h-4 w-4 text-primary inline" />
            </motion.span>
            {" "}EN AREQUIPA © {currentYear}
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;