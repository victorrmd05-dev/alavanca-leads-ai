import { motion } from "framer-motion";
import { Zap, LayoutDashboard, RefreshCw, CalendarCheck } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Atendimento instantâneo e qualificação automática",
    description:
      "A IA responde em segundos, coleta informações do lead e qualifica automaticamente com perguntas inteligentes.",
  },
  {
    icon: LayoutDashboard,
    title: "Gestão visual de leads em Kanban",
    description:
      "Visualize todos os seus leads em um pipeline organizado. Saiba exatamente onde cada oportunidade está.",
  },
  {
    icon: RefreshCw,
    title: "Follow-up automático e persistente",
    description:
      "A IA envia mensagens de acompanhamento no momento certo, sem ser invasiva, até o lead responder.",
  },
  {
    icon: CalendarCheck,
    title: "Agendamento automático de consultas",
    description:
      "Quando o lead está pronto, a IA agenda a reunião de venda direto na sua agenda. Zero atrito.",
  },
];

const SolutionSection = () => (
  <section id="solucao" className="py-20 md:py-28">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          A Solução: Sua <span className="text-primary">IA Vendedora 24/7</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
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
            className="flex gap-5 rounded-xl bg-card p-7 shadow-card hover:shadow-elevated transition-shadow"
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
              <f.icon className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{f.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SolutionSection;
