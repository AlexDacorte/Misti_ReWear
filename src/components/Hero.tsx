import { motion } from "framer-motion";
import { ArrowDown, Recycle, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 scanlines noise"
    >
      {/* Background Image with Brutalist overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Ropa vintage"
          className="w-full h-full object-cover grayscale contrast-125"
        />
        <div className="absolute inset-0 bg-background/85" />
        {/* Decorative grid pattern */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'repeating-linear-gradient(0deg, hsl(var(--foreground)) 0px, hsl(var(--foreground)) 1px, transparent 1px, transparent 40px), repeating-linear-gradient(90deg, hsl(var(--foreground)) 0px, hsl(var(--foreground)) 1px, transparent 1px, transparent 40px)'
        }} />
      </div>

      {/* Marquee banner */}
      <div className="absolute top-20 left-0 right-0 bg-primary border-y-4 border-foreground py-2 overflow-hidden z-20">
        <div className="marquee whitespace-nowrap font-mono text-primary-foreground font-bold">
          ★ ROPA VINTAGE ★ SEGUNDA MANO ★ AREQUIPA ★ MODA SOSTENIBLE ★ PIEZAS ÚNICAS ★ ROPA VINTAGE ★ SEGUNDA MANO ★ AREQUIPA ★ MODA SOSTENIBLE ★ PIEZAS ÚNICAS ★
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 mt-16 md:mt-12">
        <div className="max-w-4xl mx-auto text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="flex flex-wrap items-center justify-center md:justify-start gap-3 mb-8 mt-8"
          >
            <motion.span 
              whileHover={{ scale: 1.03 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground font-mono font-bold text-sm border-3 border-foreground shadow-brutal-sm"
            >
              <Recycle className="h-4 w-4" />
              MODA SOSTENIBLE
            </motion.span>
            <motion.span 
              whileHover={{ scale: 1.03 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-accent text-accent-foreground font-mono font-bold text-sm border-3 border-foreground shadow-brutal-sm"
            >
              <Star className="h-4 w-4" />
              AREQUIPA
            </motion.span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl text-foreground mb-6 leading-none tracking-tight"
          >
            <span className="block">ROPA DE</span>
            <span 
              className="block text-primary glitch flicker-hover" 
              data-text="SEGUNDA MANO"
            >
              SEGUNDA MANO
            </span>
            <span className="block rgb-split">
              CON ONDA
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="font-mono text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto md:mx-0 border-l-4 border-primary pl-4 text-left"
          >
            Prendas únicas y de calidad a precios accesibles. 
            Dale una segunda vida a la moda en la Ciudad Blanca.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center md:items-start justify-center md:justify-start gap-4"
          >
            <motion.div whileHover={{ x: -3, y: -3 }} whileTap={{ x: 1, y: 1 }}>
              <Button size="lg" asChild className="text-lg px-8 border-3 border-foreground shadow-brutal transition-all">
                <a href="#catalogo">VER CATÁLOGO →</a>
              </Button>
            </motion.div>
            <motion.div whileHover={{ x: -3, y: -3 }} whileTap={{ x: 1, y: 1 }}>
              <Button size="lg" variant="outline" asChild className="text-lg px-8 border-3 border-foreground shadow-brutal transition-all bg-card">
                <a href="#contacto">CONTÁCTANOS</a>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="mt-12 flex items-center justify-center md:justify-start gap-6"
          >
            <motion.div 
              className="flex items-center gap-2 px-4 py-2 bg-card border-3 border-foreground"
              whileHover={{ rotate: -2, scale: 1.02 }}
            >
              <div className="w-3 h-3 bg-secondary animate-pulse" />
              <span className="font-mono text-sm font-bold">ECO-FRIENDLY</span>
            </motion.div>
            <motion.div 
              className="flex items-center gap-2 px-4 py-2 bg-card border-3 border-foreground"
              whileHover={{ rotate: 2, scale: 1.02 }}
            >
              <div className="w-3 h-3 bg-accent animate-pulse" />
              <span className="font-mono text-sm font-bold">SOSTENIBLE</span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a
          href="#catalogo"
          className="flex flex-col items-center gap-2 text-foreground hover:text-primary transition-colors group"
        >
          <span className="font-mono text-sm font-bold">EXPLORAR</span>
          <motion.div 
            className="w-10 h-10 border-3 border-foreground bg-card flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors shadow-brutal-sm"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            <ArrowDown className="h-5 w-5" />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;