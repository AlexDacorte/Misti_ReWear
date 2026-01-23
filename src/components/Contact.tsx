import { motion } from "framer-motion";
import { MapPin, Phone, Clock, MessageCircle, Instagram, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const whatsappLink = "https://wa.me/51962641561?text=Hola!%20Me%20interesa%20saber%20más%20sobre%20su%20ropa%20vintage";

  const contactItems = [
    {
      icon: MapPin,
      title: "UBICACIÓN",
      content: "Arequipa, Perú",
      subtitle: "Cercado - Cayma - Yanahuara",
      color: "bg-primary",
    },
    {
      icon: Phone,
      title: "TELÉFONO",
      content: "+51 962 641 561",
      color: "bg-secondary",
    },
    {
      icon: Clock,
      title: "HORARIO",
      content: "Lunes a Sábado: 9:00 AM - 7:00 PM",
      subtitle: "Domingos: 10:00 AM - 2:00 PM",
      color: "bg-accent",
    },
  ];

  return (
    <section id="contacto" className="py-20 md:py-32 bg-muted relative overflow-hidden">
      {/* Decorative elements */}
      <motion.div 
        className="absolute top-10 left-10 text-6xl font-display text-foreground/5 hidden lg:block"
        animate={{ x: [0, 10, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        CONTACTO
      </motion.div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-12"
        >
          <div className="flex items-center gap-4 mb-4">
            <motion.div 
              className="w-4 h-4 bg-primary"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
            <span className="font-mono text-sm text-muted-foreground">HABLEMOS</span>
          </div>
          <h2 className="font-display text-4xl md:text-6xl text-foreground mb-4 tracking-tight">
            <span className="glitch" data-text="CONTÁCTANOS">CONTÁCTANOS</span>
          </h2>
          <p className="font-mono text-muted-foreground text-lg max-w-2xl">
            ¿Tienes alguna pregunta o quieres más información? ¡Escríbenos!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="space-y-4"
          >
            {contactItems.map((item, index) => (
              <motion.div 
                key={item.title}
                className="bg-card border-3 border-foreground p-6 shadow-brutal-sm flex items-start gap-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ x: -3, y: -3 }}
              >
                <motion.div 
                  className={`w-12 h-12 ${item.color} border-2 border-foreground flex items-center justify-center flex-shrink-0`}
                  whileHover={{ rotate: 10 }}
                  transition={{ type: "spring" }}
                >
                  <item.icon className="h-5 w-5 text-primary-foreground" />
                </motion.div>
                <div>
                  <h3 className="font-display text-lg text-foreground mb-1 rgb-split">{item.title}</h3>
                  <p className="font-mono text-muted-foreground">{item.content}</p>
                  {item.subtitle && (
                    <p className="font-mono text-muted-foreground text-sm">{item.subtitle}</p>
                  )}
                </div>
              </motion.div>
            ))}

            <div className="flex items-center gap-4 pt-4">
              {[
                { icon: Instagram, label: "Instagram" },
                { icon: Facebook, label: "Facebook" },
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href="#"
                  className="w-14 h-14 bg-card border-3 border-foreground flex items-center justify-center shadow-brutal-sm hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label={social.label}
                  whileHover={{ x: -3, y: -3, rotate: index % 2 === 0 ? -5 : 5 }}
                  whileTap={{ x: 1, y: 1 }}
                >
                  <social.icon className="h-6 w-6" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* WhatsApp CTA */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            whileHover={{ x: -4, y: -4 }}
            className="bg-card border-3 border-foreground p-8 shadow-brutal hover:shadow-brutal-hover transition-shadow flex flex-col items-center justify-center text-center relative overflow-hidden"
          >
            {/* Animated background pattern */}
            <div className="absolute inset-0 opacity-5">
              <motion.div
                className="absolute inset-0"
                style={{
                  backgroundImage: 'repeating-linear-gradient(45deg, currentColor 0px, currentColor 1px, transparent 1px, transparent 10px)'
                }}
                animate={{ x: [0, 10], y: [0, 10] }}
                transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
              />
            </div>

            <motion.div 
              className="w-20 h-20 bg-secondary border-3 border-foreground flex items-center justify-center mb-6 relative z-10"
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <MessageCircle className="h-10 w-10 text-secondary-foreground" />
            </motion.div>
            <h3 className="font-display text-2xl text-card-foreground mb-3 tracking-wide relative z-10">
              <span className="glitch" data-text="¡ESCRÍBENOS!">¡ESCRÍBENOS!</span>
            </h3>
            <p className="font-mono text-muted-foreground mb-6 relative z-10">
              Respuesta rápida. Consulta disponibilidad, precios y más información sobre nuestras prendas.
            </p>
            <motion.div 
              whileHover={{ x: -4, y: -4 }} 
              whileTap={{ x: 2, y: 2 }}
              className="relative z-10"
            >
              <Button
                size="lg"
                asChild
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground text-lg px-8 border-3 border-foreground shadow-brutal transition-all font-mono"
              >
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <MessageCircle className="h-5 w-5" />
                  INICIAR CHAT →
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;