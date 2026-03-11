import { motion } from "framer-motion";
import { Brain, AudioLines, FilterX, Server } from "lucide-react";
import TiltCard from "./TiltCard";

const diffs = [
  {
    icon: Brain,
    title: "IA com memória",
    description: "A IA lembra de conversas anteriores e retoma o contexto, gerando uma experiência personalizada para cada lead.",
  },
  {
    icon: AudioLines,
    title: "Transcrição de áudio do WhatsApp",
    description: "Áudios recebidos são transcritos automaticamente para que a IA entenda e responda sem perder informação.",
  },
  {
    icon: FilterX,
    title: "Filtro de curiosos",
    description: "A qualificação inteligente separa leads reais de curiosos, para você investir tempo apenas em quem vai comprar.",
  },
  {
    icon: Server,
    title: "Servidor próprio (VPS)",
    description: "Seus dados ficam em servidor dedicado, garantindo segurança, privacidade e controle total das informações.",
  },
];

const DifferentialsSection = () => (
  <section id="diferenciais" className="relative py-24 md:py-32 overflow-hidden">
    <div className="absolute inset-0 dot-grid opacity-30" />

    <div className="container relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">Diferenciais</span>
        <h2 className="text-3xl md:text-[2.75rem] font-extrabold mb-4 leading-tight">
          Diferenciais <span className="text-primary">Técnicos</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto text-lg font-light">
          Tecnologia de ponta adaptada para a realidade do corretor brasileiro.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {diffs.map((d, i) => (
          <motion.div
            key={d.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
          >
            <TiltCard className="group rounded-xl bg-background p-7 shadow-card text-center gradient-border h-full">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:shadow-glow transition-shadow duration-500">
                <d.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-bold mb-2">{d.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed font-light">{d.description}</p>
            </TiltCard>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default DifferentialsSection;
