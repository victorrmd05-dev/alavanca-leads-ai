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
  <section id="funil" className="relative py-24 md:py-32 gradient-dark overflow-hidden noise">
    {/* Atmospheric glow */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

    <div className="container relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">Pipeline</span>
        <h2 className="text-3xl md:text-[2.75rem] font-extrabold mb-4 leading-tight text-primary-foreground">
          Pipeline de Vendas <span className="text-primary">Automatizado</span>
        </h2>
        <p className="text-primary-foreground/60 max-w-xl mx-auto text-lg font-light">
          Cada lead percorre um funil inteligente — da captação ao fechamento, sem nenhum cair no esquecimento.
        </p>
      </motion.div>

      {/* Connected pipeline */}
      <div className="relative">
        {/* Connecting line (desktop) */}
        <div className="hidden md:block absolute top-[3.25rem] left-[10%] right-[10%] h-[2px]">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="h-full origin-left"
            style={{ background: "var(--gradient-accent-line)" }}
          />
        </div>

        <div className="flex flex-col md:flex-row gap-4 items-stretch">
          {stages.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="flex-1 relative rounded-xl glass p-6 text-center group"
            >
              {/* Glowing node */}
              <div className="relative w-12 h-12 rounded-full bg-foreground/90 flex items-center justify-center mx-auto mb-4 border-2 border-primary/50 group-hover:border-primary transition-colors">
                <s.icon className="w-5 h-5 text-primary" />
                <motion.div
                  className="absolute inset-0 rounded-full bg-primary/20"
                  animate={{ scale: [1, 1.4, 1], opacity: [0.4, 0, 0.4] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                />
              </div>
              <div className="text-[10px] font-bold uppercase tracking-[0.15em] text-primary mb-2">Etapa {i + 1}</div>
              <h3 className="font-bold text-primary-foreground mb-1">{s.label}</h3>
              <p className="text-primary-foreground/50 text-sm font-light">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default FunnelSection;
