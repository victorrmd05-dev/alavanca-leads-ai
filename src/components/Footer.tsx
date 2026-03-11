import { Bot } from "lucide-react";

const Footer = () => (
  <footer className="relative py-16 gradient-dark noise overflow-hidden">
    <div className="container relative">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <div className="flex items-center gap-2 font-heading font-extrabold text-xl mb-2">
            <Bot className="w-6 h-6 text-primary" />
            <span className="text-primary-foreground">Alavanca AI</span>
          </div>
          <p className="text-primary-foreground/40 text-sm font-light">
            Inteligência artificial para corretores de planos de saúde.
          </p>
        </div>
        <div className="text-sm text-primary-foreground/60 text-center md:text-right space-y-1">
          <p className="font-semibold text-primary-foreground">Fernando</p>
          <p>WhatsApp: (XX) XXXXX-XXXX</p>
          <p>contato@alavancaai.com.br</p>
        </div>
      </div>
      <div className="mt-12 pt-6 border-t border-primary-foreground/10 text-center text-xs text-primary-foreground/30">
        © {new Date().getFullYear()} Alavanca AI. Todos os direitos reservados.
      </div>
    </div>
  </footer>
);

export default Footer;
