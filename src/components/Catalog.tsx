import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProductCard from "./ProductCard";
import { Button } from "@/components/ui/button";

const categories = ["TODOS", "BLUSAS", "PANTALONES", "VESTIDOS", "CHAQUETAS", "ACCESORIOS"];

const products = [
  {
    id: 1,
    name: "Blusa Floral Vintage",
    price: 25,
    category: "BLUSAS",
    size: "M",
    image: "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=400&h=500&fit=crop",
    condition: "Excelente",
  },
  {
    id: 2,
    name: "Jeans Clásicos",
    price: 35,
    category: "PANTALONES",
    size: "30",
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=500&fit=crop",
    condition: "Muy Bueno",
  },
  {
    id: 3,
    name: "Vestido Bohemio",
    price: 45,
    category: "VESTIDOS",
    size: "S",
    image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400&h=500&fit=crop",
    condition: "Excelente",
  },
  {
    id: 4,
    name: "Chaqueta de Cuero",
    price: 80,
    category: "CHAQUETAS",
    size: "L",
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=500&fit=crop",
    condition: "Bueno",
  },
  {
    id: 5,
    name: "Blusa de Seda",
    price: 30,
    category: "BLUSAS",
    size: "S",
    image: "https://images.unsplash.com/photo-1598554747436-c9293d6a588f?w=400&h=500&fit=crop",
    condition: "Excelente",
  },
  {
    id: 6,
    name: "Pantalón de Lino",
    price: 40,
    category: "PANTALONES",
    size: "M",
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=500&fit=crop",
    condition: "Muy Bueno",
  },
  {
    id: 7,
    name: "Vestido Midi Elegante",
    price: 55,
    category: "VESTIDOS",
    size: "M",
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=500&fit=crop",
    condition: "Excelente",
  },
  {
    id: 8,
    name: "Bolso de Cuero",
    price: 50,
    category: "ACCESORIOS",
    size: "Único",
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=500&fit=crop",
    condition: "Muy Bueno",
  },
];

const Catalog = () => {
  const [activeCategory, setActiveCategory] = useState("TODOS");

  const filteredProducts =
    activeCategory === "TODOS"
      ? products
      : products.filter((product) => product.category === activeCategory);

  return (
    <section id="catalogo" className="py-20 md:py-32 bg-muted relative">
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-20 h-20 border-4 border-primary rotate-12 hidden lg:block" />
      <div className="absolute bottom-20 left-10 w-16 h-16 bg-secondary hidden lg:block" />
      
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-12"
        >
          <div className="flex items-center gap-4 mb-4">
            <motion.div 
              className="w-4 h-4 bg-primary"
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            />
            <span className="font-mono text-sm text-muted-foreground">COLECCIÓN</span>
          </div>
          <h2 className="font-display text-4xl md:text-6xl text-foreground mb-4 tracking-tight">
            <span className="rgb-split">NUESTRO</span>{" "}
            <span className="text-primary glitch" data-text="CATÁLOGO">CATÁLOGO</span>
          </h2>
          <p className="font-mono text-muted-foreground text-lg max-w-2xl">
            Explora nuestra colección de ropa de segunda mano seleccionada cuidadosamente
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex flex-wrap gap-2 md:gap-3 mb-12"
        >
          {categories.map((category, index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ x: -2, y: -2 }}
              whileTap={{ x: 1, y: 1 }}
            >
              <Button
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => setActiveCategory(category)}
                className={`font-mono border-3 border-foreground ${
                  activeCategory === category 
                    ? "shadow-brutal-sm" 
                    : "shadow-brutal-sm bg-card"
                } transition-all`}
              >
                {category}
              </Button>
            </motion.div>
          ))}
        </motion.div>

        {/* Products Grid with AnimatePresence for smooth transitions */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <ProductCard {...product} index={index} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Catalog;