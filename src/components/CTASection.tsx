import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "sonner";
import { ArrowRight } from "lucide-react";

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
    setTimeout(() => {
      toast.success("Obrigado! Entraremos em contato em breve.");
      setForm({ nome: "", whatsapp: "", email: "", empresa: "" });
      setLoading(false);
    }, 1000);
  };

  const inputClass =
    "w-full rounded-xl border border-border bg-background px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all placeholder:text-muted-foreground/60";

  return (
    <section id="contato" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 gradient-dark noise" />
      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container relative">
        <div className="max-w-4xl mx-auto rounded-2xl glass p-8 md:p-14">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">Agende Agora</span>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight text-primary-foreground">
                Pare de Caçar Leads.{" "}
                <span className="text-primary">Foque Apenas em Fechar Vendas.</span>
              </h2>
              <p className="text-primary-foreground/60 mb-6 font-light">
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
              <input type="text" placeholder="Seu nome *" value={form.nome} onChange={(e) => setForm({ ...form, nome: e.target.value })} className={inputClass} maxLength={100} />
              <input type="text" placeholder="WhatsApp *" value={form.whatsapp} onChange={(e) => setForm({ ...form, whatsapp: e.target.value })} className={inputClass} maxLength={20} />
              <input type="email" placeholder="E-mail *" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputClass} maxLength={255} />
              <input type="text" placeholder="Empresa (opcional)" value={form.empresa} onChange={(e) => setForm({ ...form, empresa: e.target.value })} className={inputClass} maxLength={100} />
              <Button variant="hero" size="lg" className="w-full py-6 shadow-glow group" type="submit" disabled={loading}>
                {loading ? "Enviando..." : (
                  <>
                    Agendar Demonstração
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </Button>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
