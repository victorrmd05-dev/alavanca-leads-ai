import { motion } from "framer-motion";
import { Zap, LayoutDashboard, RefreshCw, CalendarCheck } from "lucide-react";
import TiltCard from "./TiltCard";

const features = [
  {
    icon: Zap,
    title: "Atendimento instantâneo e qualificação automática",
    description:
      "A IA responde em segundos, coleta informações do lead e qualifica automaticamente com perguntas inteligentes.",
    accent: "from-primary/20 to-primary/5",
  },
  {
    icon: LayoutDashboard,
    title: "Gestão visual de leads em Kanban",
    description:
      "Visualize todos os seus leads em um pipeline organizado. Saiba exatamente onde cada oportunidade está.",
    accent: "from-accent/20 to-accent/5",
  },
  {
    icon: RefreshCw,
    title: "Follow-up automático e persistente",
    description:
      "A IA envia mensagens de acompanhamento no momento certo, sem ser invasiva, até o lead responder.",
    accent: "from-primary/20 to-primary/5",
  },
  {
    icon: CalendarCheck,
    title: "Agendamento automático de consultas",
    description:
      "Quando o lead está pronto, a IA agenda a reunião de venda direto na sua agenda. Zero atrito.",
    accent: "from-accent/20 to-accent/5",
  },
];

const SolutionSection = () => (
  <section id="solucao" className="relative py-24 md:py-32 overflow-hidden">
    <div className="container relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">A Solução</span>
        <h2 className="text-3xl md:text-[2.75rem] font-extrabold mb-4 leading-tight">
          Sua <span className="text-primary">IA Vendedora 24/7</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg font-light">
          Construída com Chatwoot + automação n8n + inteligência artificial, a Alavanca AI transforma seu processo de vendas.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
          >
            <TiltCard className={`group relative rounded-xl bg-gradient-to-br ${f.accent} p-[1px] h-full`}>
              <div className="flex gap-5 rounded-[calc(0.875rem-1px)] bg-background p-7 h-full">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:shadow-glow transition-shadow duration-500">
                  <f.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">{f.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{f.description}</p>
                </div>
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SolutionSection;
