import { motion } from "framer-motion";
import { Rocket, RefreshCw, Check } from "lucide-react";
import TiltCard from "./TiltCard";

const setupFeatures = [
  "Configuração completa do sistema",
  "Integração com seus canais",
  "Treinamento da IA para seu negócio",
  "Onboarding personalizado",
];

const monthlyFeatures = [
  "Hospedagem em servidor dedicado",
  "Atualizações e melhorias contínuas",
  "Suporte prioritário",
  "Monitoramento 24/7",
];

const InvestmentSection = () => (
  <section id="investimento" className="relative py-24 md:py-32 overflow-hidden">
    <div className="absolute inset-0 gradient-section" />
    
    <div className="container relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">Investimento</span>
        <h2 className="text-3xl md:text-[2.75rem] font-extrabold mb-4 leading-tight">Investimento</h2>
        <p className="text-muted-foreground max-w-xl mx-auto text-lg font-light">
          Um investimento que se paga com a primeira venda adicional que você fechar.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
        {/* Setup */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <TiltCard className="group rounded-xl bg-background p-8 shadow-card gradient-border h-full">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
              <Rocket className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Setup e Implementação</h3>
            <p className="text-muted-foreground text-sm mb-6 font-light">
              Configuração completa do sistema, integração com seus canais e treinamento da IA.
            </p>
            <ul className="space-y-3 mb-8">
              {setupFeatures.map((f) => (
                <li key={f} className="flex items-center gap-3 text-sm">
                  <Check className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-muted-foreground">{f}</span>
                </li>
              ))}
            </ul>
            <div className="pt-6 border-t border-border">
              <div className="text-2xl font-extrabold text-primary">Sob Consulta</div>
              <p className="text-muted-foreground text-xs mt-1">Pagamento único</p>
            </div>
          </TiltCard>
        </motion.div>

        {/* Monthly — highlighted */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <TiltCard className="group relative rounded-xl h-full">
            {/* Gradient border always visible */}
            <div className="absolute inset-0 rounded-xl p-[2px] bg-gradient-to-br from-primary via-accent to-primary">
              <div className="w-full h-full rounded-[calc(0.875rem-2px)] bg-background" />
            </div>
            <div className="relative p-8">
              <div className="absolute -top-3 right-6 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wide">
                Recomendado
              </div>
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <RefreshCw className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Manutenção e Licença Mensal</h3>
              <p className="text-muted-foreground text-sm mb-6 font-light">
                Hospedagem, atualizações, suporte e melhorias contínuas do sistema.
              </p>
              <ul className="space-y-3 mb-8">
                {monthlyFeatures.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm">
                    <Check className="w-4 h-4 text-primary shrink-0" />
                    <span className="text-muted-foreground">{f}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-6 border-t border-border">
                <div className="text-2xl font-extrabold text-primary">Sob Consulta</div>
                <p className="text-muted-foreground text-xs mt-1">Recorrente mensal</p>
              </div>
            </div>
          </TiltCard>
        </motion.div>
      </div>
    </div>
  </section>
);

export default InvestmentSection;
