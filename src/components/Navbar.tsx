import { Bot } from "lucide-react";

const navLinks = [
  { label: "Problema", href: "#problema" },
  { label: "Solução", href: "#solucao" },
  { label: "Pipeline", href: "#funil" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Investimento", href: "#investimento" },
  { label: "Contato", href: "#contato" },
];

const Navbar = () => {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container flex items-center justify-between h-16">
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="flex items-center gap-2 font-heading font-bold text-lg">
          <Bot className="w-6 h-6 text-primary" />
          Alavanca AI
        </button>
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((l) => (
            <button
              key={l.href}
              onClick={() => scrollTo(l.href)}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
