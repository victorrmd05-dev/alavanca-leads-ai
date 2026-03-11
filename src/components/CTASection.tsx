import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "sonner";

const CTASection = () => {
  const [form, setForm] = useState({ nome: "", whatsapp: "", email: "", empresa: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.nome.trim() || !form.whatsapp.trim() || !form.email.trim()) {
      toast.error("Preencha os campos obrigatórios.");
      return;
    }
    setLoading(true);
    // Placeholder: integrate with backend/calendar
    setTimeout(() => {
      toast.success("Obrigado! Entraremos em contato em breve.");
      setForm({ nome: "", whatsapp: "", email: "", empresa: "" });
      setLoading(false);
    }, 1000);
  };

  return (
    <section id="contato" className="py-20 md:py-28">
      <div className="container">
        <div className="max-w-4xl mx-auto rounded-2xl bg-card p-8 md:p-14 shadow-elevated">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                Pare de Caçar Leads.{" "}
                <span className="text-primary">Foque Apenas em Fechar Vendas.</span>
              </h2>
              <p className="text-muted-foreground mb-6">
                Agende uma demonstração gratuita de 15 minutos e veja como a Alavanca AI pode
                transformar sua operação de vendas de planos de saúde.
              </p>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              <input
                type="text"
                placeholder="Seu nome *"
                value={form.nome}
                onChange={(e) => setForm({ ...form, nome: e.target.value })}
                className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
                maxLength={100}
              />
              <input
                type="text"
                placeholder="WhatsApp *"
                value={form.whatsapp}
                onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
                className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
                maxLength={20}
              />
              <input
                type="email"
                placeholder="E-mail *"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
                maxLength={255}
              />
              <input
                type="text"
                placeholder="Empresa (opcional)"
                value={form.empresa}
                onChange={(e) => setForm({ ...form, empresa: e.target.value })}
                className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
                maxLength={100}
              />
              <Button variant="hero" size="lg" className="w-full py-6" type="submit" disabled={loading}>
                {loading ? "Enviando..." : "Agendar Demonstração"}
              </Button>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
