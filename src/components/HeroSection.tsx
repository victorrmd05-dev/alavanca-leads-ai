import { motion } from "framer-motion";
import { Bot, ArrowDown, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.gif";

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* GIF Background */}
      <div className="absolute inset-0 z-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" loading="eager" />
        <div className="absolute inset-0 bg-foreground/70" />
        {/* Gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-foreground/40" />
      </div>

      <div className="container relative z-10 py-20 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full glass px-5 py-2 mb-8"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary-foreground">Alavanca AI</span>
          </motion.div>

          <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold tracking-tight leading-[1.1] mb-6 text-primary-foreground">
            Sua IA Vendedora de Planos de Saúde Trabalhando{" "}
            <span className="text-primary relative">
              24/7
              <motion.span
                className="absolute -inset-1 bg-primary/20 rounded-lg -z-10"
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </span>
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/75 max-w-2xl mx-auto mb-12 leading-relaxed font-light">
            Pare de perder leads por demora no atendimento e falta de follow-up.
            Deixe a inteligência artificial qualificar, nutrir e agendar reuniões enquanto você foca em fechar vendas.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button variant="hero" size="lg" onClick={() => scrollTo("contato")} className="px-8 py-6 shadow-glow">
              Agendar Demonstração de 15 Minutos
            </Button>
            <Button variant="heroOutline" size="lg" onClick={() => scrollTo("solucao")} className="px-8 py-6 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
              <ArrowDown className="w-4 h-4 mr-1" />
              Ver Como Funciona
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default HeroSection;
