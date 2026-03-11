import { motion } from "framer-motion";
import { Clock, MessageSquareWarning, Smartphone } from "lucide-react";
import TiltCard from "./TiltCard";

const problems = [
  {
    icon: Clock,
    title: "Leads esfriam rápido",
    stat: "80%",
    statLabel: "menos conversão após 5min",
    description:
      "Responder após 5 minutos reduz a chance de conversão em até 80%. A maioria dos corretores demora horas — ou dias.",
  },
  {
    icon: MessageSquareWarning,
    title: "Falta de follow-up",
    stat: "5x",
    statLabel: "contatos para fechar",
    description:
      "80% das vendas exigem pelo menos 5 contatos. Sem um sistema, o lead simplesmente esquece de você.",
  },
  {
    icon: Smartphone,
    title: "Caos multicanal",
    stat: "3+",
    statLabel: "canais sem integração",
    description:
      "WhatsApp, Instagram, formulários do site… leads chegam de todo lugar e se perdem no caminho.",
  },
];

const ProblemSection = () => (
  <section id="problema" className="relative py-24 md:py-32 overflow-hidden">
    {/* Dot grid background */}
    <div className="absolute inset-0 dot-grid opacity-50" />
    
    <div className="container relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">O Problema</span>
        <h2 className="text-3xl md:text-[2.75rem] font-extrabold mb-4 leading-tight">
          O Maior Inimigo do Corretor Não é o Preço.{" "}
          <span className="text-primary">É o Tempo.</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto text-lg font-light">
          Você pode ter o melhor plano do mercado, mas se não responder rápido, o lead já foi para o concorrente.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {problems.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
          >
            <TiltCard className="group rounded-xl bg-background p-8 shadow-card hover:shadow-elevated transition-all duration-300 gradient-border h-full">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/15 transition-colors">
                <p.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="mb-4">
                <span className="text-3xl font-extrabold text-primary">{p.stat}</span>
                <span className="text-xs text-muted-foreground ml-2 uppercase tracking-wide">{p.statLabel}</span>
              </div>
              <h3 className="text-xl font-bold mb-3">{p.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{p.description}</p>
            </TiltCard>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProblemSection;
