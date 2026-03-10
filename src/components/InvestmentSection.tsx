import { motion } from "framer-motion";
import { Rocket, RefreshCw } from "lucide-react";

const InvestmentSection = () => (
  <section id="investimento" className="py-20 md:py-28 gradient-section">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Investimento</h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Um investimento que se paga com a primeira venda adicional que você fechar.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="rounded-xl bg-background p-8 shadow-card border border-border"
        >
          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
            <Rocket className="w-6 h-6 text-primary" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Setup e Implementação</h3>
          <p className="text-muted-foreground text-sm mb-4">
            Configuração completa do sistema, integração com seus canais e treinamento da IA para seu negócio.
          </p>
          <div className="text-2xl font-bold text-primary">Sob Consulta</div>
          <p className="text-muted-foreground text-xs mt-1">Pagamento único</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="rounded-xl bg-background p-8 shadow-card border border-primary/30"
        >
          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
            <RefreshCw className="w-6 h-6 text-primary" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Manutenção e Licença Mensal</h3>
          <p className="text-muted-foreground text-sm mb-4">
            Hospedagem, atualizações, suporte e melhorias contínuas do sistema.
          </p>
          <div className="text-2xl font-bold text-primary">Sob Consulta</div>
          <p className="text-muted-foreground text-xs mt-1">Recorrente mensal</p>
        </motion.div>
      </div>
    </div>
  </section>
);

export default InvestmentSection;
