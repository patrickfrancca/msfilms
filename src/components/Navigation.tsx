import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  // Verifica se estamos na home para controlar a cor do texto inicial (branco na home, preto nas outras)
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lógica de cor do texto
  const textColorClass = isHome && !isScrolled && !isMobileMenuOpen ? "text-white" : "text-foreground";
  const buttonVariant = isHome && !isScrolled && !isMobileMenuOpen ? "outline" : "default";

  const navLinks = [
    { to: "/work", label: "Trabalhos" },
    { to: "/about", label: "Sobre" },
    { to: "/investment", label: "Preços" },
    { to: "/contact", label: "Contato" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled || isMobileMenuOpen
            ? "bg-background/80 backdrop-blur-md border-b border-border/40 py-4" 
            : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className={`text-2xl font-light tracking-[0.2em] uppercase z-50 ${isMobileMenuOpen ? "text-foreground" : textColorClass}`}>
              MS Films
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-12">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`text-xs font-medium tracking-[0.15em] uppercase hover:text-primary transition-colors ${
                    location.pathname === link.to ? "text-primary" : textColorClass
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Button asChild variant={isHome && !isScrolled ? "secondary" : "default"} size="sm" className="rounded-none uppercase tracking-widest text-xs px-6">
                <Link to="/contact">Contrate agora</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className={`md:hidden z-50 ${isMobileMenuOpen ? "text-foreground" : textColorClass}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} strokeWidth={1} /> : <Menu size={24} strokeWidth={1} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Overlay */}
      <div className={`fixed inset-0 bg-background z-40 transition-transform duration-500 ease-in-out flex flex-col justify-center items-center ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex flex-col gap-8 text-center">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-4xl font-serif italic hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-8">
            <Button asChild size="lg" className="rounded-full px-12 uppercase tracking-widest">
              <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                CONTRATE AGORA
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;