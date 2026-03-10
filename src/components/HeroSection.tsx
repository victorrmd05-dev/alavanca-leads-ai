import { motion } from "framer-motion";
import { Bot, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center gradient-hero overflow-hidden">
      <div className="container relative z-10 py-20 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 mb-8">
            <Bot className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Alavanca AI</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6">
            Sua IA Vendedora de Planos de Saúde Trabalhando{" "}
            <span className="text-primary">24/7</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Pare de perder leads por demora no atendimento e falta de follow-up.
            Deixe a inteligência artificial qualificar, nutrir e agendar reuniões enquanto você foca em fechar vendas.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" onClick={() => scrollTo("contato")} className="px-8 py-6">
              Agendar Demonstração de 15 Minutos
            </Button>
            <Button variant="heroOutline" size="lg" onClick={() => scrollTo("solucao")} className="px-8 py-6">
              <ArrowDown className="w-4 h-4 mr-1" />
              Ver Como Funciona
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Decorative blobs */}
      <div className="absolute top-20 -right-32 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute -bottom-20 -left-32 w-96 h-96 rounded-full bg-accent/5 blur-3xl" />
    </section>
  );
};

export default HeroSection;
