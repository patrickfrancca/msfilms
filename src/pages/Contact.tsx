import { Instagram, Mail, ArrowRight, MessageCircle } from "lucide-react";

const Contact = () => {
  // Opções de contato configuradas
  const contactOptions = [
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "(47) 9764-3433",
      action: "Iniciar Conversa",
      href: "https://wa.me/554797643433", // Substitua pelo link real do WhatsApp
      primary: true, // Destaque visual
    },
    {
      icon: Mail,
      label: "E-mail",
      value: "stoinskmateus@gmail.com",
      action: "Enviar Mensagem",
      href: "mailto:stoinskmateus@gmail.com",
      primary: false,
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: "ms_films_ofc",
      action: "Analisar perfil",
      href: "https://www.instagram.com/ms_films_ofc/",
      primary: false,
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-16 bg-background flex flex-col justify-center">
      <div className="container mx-auto px-6 max-w-5xl">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-primary text-xs uppercase tracking-[0.3em] mb-6 block">Contato Direto</span>
          <h1 className="text-5xl md:text-7xl font-light tracking-tighter mb-8">Vamos Conversar</h1>
          <p className="text-xl text-muted-foreground font-light max-w-xl mx-auto leading-relaxed">
            Simplificamos o processo. Escolha seu canal preferido abaixo para iniciarmos uma conversa sobre o seu grande dia.
          </p>
        </div>

        {/* Grid de Cartões de Contato */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          {contactOptions.map((option) => (
            <a
              key={option.label}
              href={option.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative p-10 flex flex-col items-center text-center transition-all duration-500 border cursor-pointer ${
                option.primary 
                  ? "bg-secondary/10 border-primary/20 hover:border-primary/40 hover:bg-secondary/20 hover:-translate-y-1 hover:shadow-elegant" 
                  : "bg-card border-border hover:border-primary/20 hover:-translate-y-1 hover:shadow-elegant"
              }`}
            >
              {/* Ícone */}
              <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-8 transition-all duration-500 ${
                option.primary 
                  ? "bg-primary text-primary-foreground shadow-lg group-hover:scale-110" 
                  : "bg-secondary text-foreground group-hover:bg-primary/10 group-hover:text-primary group-hover:scale-110"
              }`}>
                <option.icon strokeWidth={1} className="w-7 h-7" />
              </div>
              
              {/* Texto */}
              <h3 className="text-3xl font-serif italic mb-3 text-foreground">{option.label}</h3>
              <p className="text-sm text-muted-foreground font-light mb-10 tracking-wide">{option.value}</p>
              
              {/* Ação */}
              <div className={`mt-auto flex items-center gap-3 text-xs uppercase tracking-[0.2em] font-medium border-b pb-1 transition-all ${
                 option.primary 
                  ? "text-primary border-primary/30 group-hover:border-primary" 
                  : "text-muted-foreground border-transparent group-hover:text-primary group-hover:border-primary/30"
              }`}>
                {option.action} <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
              </div>
            </a>
          ))}
        </div>

        {/* Informações Adicionais Minimalistas */}
        <div className="border-t border-border/40 pt-16">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
              <div>
                 <h4 className="font-serif italic text-xl mb-3">Atendimento</h4>
                 <p className="text-sm text-muted-foreground font-light leading-relaxed">
                   Segunda a Segunda<br/>09:00 - 18:00
                 </p>
              </div>
              <div>
                 <h4 className="font-serif italic text-xl mb-3">Localização</h4>
                 <p className="text-sm text-muted-foreground font-light leading-relaxed">
                   Base em Massaranduba - SC<br/>
                 </p>
              </div>
              <div>
                 <h4 className="font-serif italic text-xl mb-3">Parcerias</h4>
                 <p className="text-sm text-muted-foreground font-light leading-relaxed">
                   Para publicações e parcerias:<br/>(47) 9764-3433
                 </p>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;