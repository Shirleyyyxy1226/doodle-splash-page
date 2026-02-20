import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import kiddogoLogo from "@/assets/kiddogo-logo.svg";

const navLinks = [
  { label: "How It Works", href: "#journey" },
  { label: "Features", href: "#features" },
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 bg-cream/80 backdrop-blur-md">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <motion.a
            href="/"
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src={kiddogoLogo} alt="Kiddogo" className="h-9 w-9" />
            <span className="font-display text-xl font-bold text-foreground">Kiddogo</span>
          </motion.a>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-body font-semibold text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA button */}
          <div className="hidden md:block">
            <a href="https://kiddogo.co.uk/demo" target="_blank" rel="noopener noreferrer">
              <Button className="bg-primary font-display hover:bg-coral/90">
                Try Our App ✨
              </Button>
            </a>
          </div>

          {/* Mobile menu button */}
          <button className="rounded-lg p-2 md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="border-t border-border pb-6 md:hidden"
          >
            <nav className="flex flex-col gap-4 pt-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="font-body font-semibold text-muted-foreground transition-colors hover:text-foreground"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a href="https://kiddogo.co.uk/demo" target="_blank" rel="noopener noreferrer">
                <Button className="mt-2 w-full bg-primary font-display hover:bg-coral/90">
                  Try Our App ✨
                </Button>
              </a>
            </nav>
          </motion.div>
        )}
      </div>
    </header>
  );
};
