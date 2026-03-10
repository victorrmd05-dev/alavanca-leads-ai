import { motion } from "framer-motion";
import { UserPlus, CheckCircle, FileText, Search, Handshake } from "lucide-react";

const stages = [
  { icon: UserPlus, label: "Novo Lead", desc: "Lead entra pelo WhatsApp, Instagram ou site" },
  { icon: CheckCircle, label: "Qualificado", desc: "IA coleta dados e verifica perfil" },
  { icon: FileText, label: "Cotação Enviada", desc: "Proposta personalizada enviada automaticamente" },
  { icon: Search, label: "Análise de Proposta", desc: "Follow-up automático até decisão" },
  { icon: Handshake, label: "Fechado", desc: "Venda concluída com sucesso" },
];

const FunnelSection = () => (
  <section id="funil" className="py-20 md:py-28 gradient-section">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Pipeline de Vendas <span className="text-primary">Automatizado</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Cada lead percorre um funil inteligente — da captação ao fechamento, sem nenhum cair no esquecimento.
        </p>
      </motion.div>

      <div className="flex flex-col md:flex-row gap-4 items-stretch">
        {stages.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="flex-1 relative rounded-xl bg-background p-6 shadow-card text-center group hover:shadow-elevated transition-shadow"
          >
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-colors">
              <s.icon className="w-5 h-5 text-primary" />
            </div>
            <div className="text-xs font-semibold text-primary mb-1">Etapa {i + 1}</div>
            <h3 className="font-semibold mb-1">{s.label}</h3>
            <p className="text-muted-foreground text-sm">{s.desc}</p>
            {i < stages.length - 1 && (
              <div className="hidden md:block absolute top-1/2 -right-3 text-primary/40 text-xl">→</div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default FunnelSection;
