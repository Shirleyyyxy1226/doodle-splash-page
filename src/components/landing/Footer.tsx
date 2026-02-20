import { Heart, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-foreground py-12 text-muted">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="text-2xl">🦒</span>
            <span className="font-display text-xl font-bold text-card">Kiddogo</span>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {["How It Works", "Features", "About", "Contact"].map((link) => (
              <a
                key={link}
                href="#"
                className="font-body text-sm text-muted-foreground transition-colors hover:text-card"
              >
                {link}
              </a>
            ))}
          </nav>

          {/* Newsletter hint */}
          <div className="flex items-center gap-2 rounded-full bg-card/10 px-4 py-2">
            <Mail className="h-4 w-4 text-coral" />
            <span className="font-body text-sm text-muted-foreground">Join the waitlist</span>
          </div>
        </div>

        <div className="my-8 h-px bg-card/10" />

        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="flex items-center gap-1 font-body text-sm text-muted-foreground">
            Made with <Heart className="h-4 w-4 fill-coral text-coral" /> for families with little ones
          </p>
          <p className="font-body text-xs text-muted-foreground">
            © 2026 Kiddogo. Kid-conscious travel planning.
          </p>
        </div>
      </div>
    </footer>
  );
};
