import { motion } from "framer-motion";
import { Clock, MessageSquareWarning, Smartphone } from "lucide-react";

const problems = [
  {
    icon: Clock,
    title: "Leads esfriam rápido",
    description:
      "Responder após 5 minutos reduz a chance de conversão em até 80%. A maioria dos corretores demora horas — ou dias.",
  },
  {
    icon: MessageSquareWarning,
    title: "Falta de follow-up",
    description:
      "80% das vendas exigem pelo menos 5 contatos. Sem um sistema, o lead simplesmente esquece de você.",
  },
  {
    icon: Smartphone,
    title: "Caos multicanal",
    description:
      "WhatsApp, Instagram, formulários do site… leads chegam de todo lugar e se perdem no caminho.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5 },
  }),
};

const ProblemSection = () => (
  <section id="problema" className="py-20 md:py-28 gradient-section">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          O Maior Inimigo do Corretor Não é o Preço.{" "}
          <span className="text-primary">É o Tempo.</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Você pode ter o melhor plano do mercado, mas se não responder rápido, o lead já foi para o concorrente.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {problems.map((p, i) => (
          <motion.div
            key={p.title}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="rounded-xl bg-background p-8 shadow-card hover:shadow-elevated transition-shadow"
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
              <p.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">{p.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{p.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProblemSection;
