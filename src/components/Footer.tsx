import { Bot } from "lucide-react";

const Footer = () => (
  <footer className="py-12 border-t border-border">
    <div className="container">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2 font-heading font-bold">
          <Bot className="w-5 h-5 text-primary" />
          Alavanca AI
        </div>
        <div className="text-sm text-muted-foreground text-center md:text-right">
          <p className="font-medium text-foreground">Fernando</p>
          <p>WhatsApp: (XX) XXXXX-XXXX</p>
          <p>contato@alavancaai.com.br</p>
        </div>
      </div>
      <div className="text-center mt-8 text-xs text-muted-foreground">
        © {new Date().getFullYear()} Alavanca AI. Todos os direitos reservados.
      </div>
    </div>
  </footer>
);

export default Footer;
