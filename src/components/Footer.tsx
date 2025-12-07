import { Instagram, Youtube, Facebook } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-foreground text-background pt-24 pb-12 border-t border-white/10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-24">
          
          {/* Brand Area */}
          <div className="max-w-md">
             <h3 className="text-3xl font-serif italic mb-6">MS Films</h3>
             <p className="text-white/60 font-light text-sm leading-relaxed">
               Criando legados visuais para casais exigentes em todo o Brasil. Disponível para casamentos.
             </p>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-16">
            <div>
              <h4 className="text-xs uppercase tracking-[0.2em] text-white/40 mb-6">Explorar</h4>
              <ul className="space-y-4 text-sm font-light">
                <li><Link to="/work" className="hover:text-primary transition-colors">Trabalhos</Link></li>
                <li><Link to="/about" className="hover:text-primary transition-colors">Sobre</Link></li>
                <li><Link to="/investment" className="hover:text-primary transition-colors">Preços</Link></li>
              </ul>
            </div>
            
            <div>
               <h4 className="text-xs uppercase tracking-[0.2em] text-white/40 mb-6">Redes Sociais</h4>
               <ul className="space-y-4 text-sm font-light">
                <li><a href="https://www.instagram.com/ms_films_ofc/" className="hover:text-primary transition-colors">Instagram</a></li>
                <li><a href="https://wa.me/554797643433" className="hover:text-primary transition-colors">Whatsapp</a></li>
                <li><a href="mailto:stoinskmateus@gmail.com" className="hover:text-primary transition-colors">E-mail</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-xs text-white/40 uppercase tracking-widest">
          <p>&copy; {currentYear} MS Films</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link to="/privacy">.</Link>
            <Link to="/terms">.</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;