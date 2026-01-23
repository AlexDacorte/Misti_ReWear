import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  category: string;
  size: string;
  image: string;
  condition: string;
  index: number;
}

const ProductCard = ({
  name,
  price,
  category,
  size,
  image,
  condition,
  index,
}: ProductCardProps) => {
  const whatsappMessage = encodeURIComponent(
    `Hola! Me interesa: ${name} - Talla: ${size} - Precio: S/${price}`
  );
  const whatsappLink = `https://wa.me/51962641561?text=${whatsappMessage}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotate: index % 2 === 0 ? -1 : 1 }}
      whileInView={{ opacity: 1, y: 0, rotate: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={{ 
        x: -4, 
        y: -4,
        transition: { duration: 0.15 }
      }}
      className="group bg-card border-3 border-foreground shadow-brutal hover:shadow-brutal-hover transition-all relative overflow-hidden"
    >
      {/* Glitch overlay on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none z-10 transition-opacity">
        <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
      </div>

      <div className="relative aspect-[3/4] overflow-hidden border-b-3 border-foreground">
        <motion.img
          src={image}
          alt={name}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          <motion.span 
            className="px-3 py-1 bg-primary text-primary-foreground text-xs font-mono font-bold border-2 border-foreground"
            whileHover={{ rotate: -2, scale: 1.05 }}
          >
            {category.toUpperCase()}
          </motion.span>
          <motion.span 
            className="px-3 py-1 bg-secondary text-secondary-foreground text-xs font-mono font-bold border-2 border-foreground"
            whileHover={{ rotate: 2, scale: 1.05 }}
          >
            {condition.toUpperCase()}
          </motion.span>
        </div>
        
        {/* Scan line effect on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" style={{
          background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.1) 2px, rgba(0,0,0,0.1) 4px)'
        }} />
      </div>

      <div className="p-4">
        <motion.h3 
          className="font-display text-lg text-card-foreground mb-1 line-clamp-1 tracking-wide rgb-split"
        >
          {name.toUpperCase()}
        </motion.h3>
        <p className="font-mono text-muted-foreground text-sm mb-3">TALLA: {size}</p>
        <div className="flex items-center justify-between">
          <motion.span 
            className="font-display text-2xl text-primary"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            S/{price}
          </motion.span>
          <motion.div whileHover={{ x: -2, y: -2 }} whileTap={{ x: 1, y: 1 }}>
            <Button size="sm" asChild className="border-2 border-foreground shadow-brutal-sm transition-all">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 font-mono"
              >
                <MessageCircle className="h-4 w-4" />
                CONSULTAR
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;