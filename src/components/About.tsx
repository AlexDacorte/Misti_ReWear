import { motion } from "framer-motion";
import { Heart, Leaf, Shield, Truck } from "lucide-react";

const features = [
  {
    icon: Leaf,
    title: "MODA SOSTENIBLE",
    description: "Reduce tu huella ambiental eligiendo ropa de segunda mano de calidad.",
    color: "bg-secondary",
  },
  {
    icon: Heart,
    title: "PIEZAS ÚNICAS",
    description: "Cada prenda tiene su historia y estilo único que no encontrarás en tiendas convencionales.",
    color: "bg-primary",
  },
  {
    icon: Shield,
    title: "CALIDAD GARANTIZADA",
    description: "Seleccionamos cuidadosamente cada prenda para asegurar su buen estado.",
    color: "bg-accent",
  },
  {
    icon: Truck,
    title: "ENVÍOS A TODO AREQUIPA",
    description: "Llevamos tu pedido a cualquier distrito de la Ciudad Blanca.",
    color: "bg-foreground text-background",
  },
];

const About = () => {
  return (
    <section id="nosotros" className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Decorative background shapes */}
      <motion.div 
        className="absolute top-20 right-20 w-32 h-32 border-4 border-accent hidden lg:block"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div 
        className="absolute bottom-40 left-10 w-24 h-24 bg-primary/20 hidden lg:block"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 3, repeat: Infinity }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <motion.div 
                className="w-4 h-4 bg-accent"
                animate={{ rotate: [0, 90, 180, 270, 360] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              />
              <span className="font-mono text-sm text-muted-foreground">QUIÉNES SOMOS</span>
            </div>
            <h2 className="font-display text-4xl md:text-6xl text-foreground mb-6 tracking-tight">
              <span className="rgb-split">SOBRE</span>{" "}
              <motion.span 
                className="text-primary inline-block"
                whileHover={{ rotate: [-1, 1, -1, 0], transition: { duration: 0.3 } }}
              >
                NOSOTROS
              </motion.span>
            </h2>
            <div className="space-y-4 font-mono text-muted-foreground text-lg">
              <motion.p 
                className="border-l-4 border-primary pl-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                Somos un emprendimiento arequipeño dedicado a darle una segunda vida a la ropa 
                de calidad. Creemos que la moda sostenible no solo es buena para el planeta, 
                sino también para tu bolsillo.
              </motion.p>
              <motion.p 
                className="border-l-4 border-secondary pl-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                Cada prenda es seleccionada con cuidado, lavada y presentada para que 
                encuentres piezas únicas que reflejen tu estilo personal. ¡Únete al 
                movimiento de moda consciente en Arequipa!
              </motion.p>
            </div>

            {/* Stats with animations */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              {[
                { value: "500+", label: "PRENDAS", color: "text-primary" },
                { value: "200+", label: "CLIENTES", color: "text-secondary" },
                { value: "2+", label: "AÑOS", color: "text-accent" },
              ].map((stat, index) => (
                <motion.div 
                  key={stat.label}
                  className="bg-card border-3 border-foreground p-4 shadow-brutal-sm"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  whileHover={{ x: -3, y: -3 }}
                >
                  <motion.span 
                    className={`font-display text-3xl ${stat.color}`}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
                  >
                    {stat.value}
                  </motion.span>
                  <p className="font-mono text-sm text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20, rotate: index % 2 === 0 ? -2 : 2 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                whileHover={{ 
                  x: -4, 
                  y: -4,
                  transition: { duration: 0.15 }
                }}
                className="bg-card border-3 border-foreground p-6 shadow-brutal transition-shadow hover:shadow-brutal-hover"
              >
                <motion.div 
                  className={`w-12 h-12 ${feature.color} border-2 border-foreground flex items-center justify-center mb-4`}
                  whileHover={{ rotate: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <feature.icon className="h-6 w-6" />
                </motion.div>
                <h3 className="font-display text-lg text-card-foreground mb-2 tracking-wide rgb-split">
                  {feature.title}
                </h3>
                <p className="font-mono text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;