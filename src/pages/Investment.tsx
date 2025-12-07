import { Check, Clock, Camera, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Investment = () => {
  // Opção única e exclusiva
  const exclusiveCollection = {
    name: "Experiência Cinematográfica",
    price: "Sob Consulta",
    description: "Nossa dedicação exclusiva para criar o legado visual do seu casamento, desenhada sob medida para vocês.",
    features: [
      "Cobertura de horas personalizada",
      "Equipe dimensionada para o evento",
      "Filme Highlight (Melhores Momentos)",
      "Teaser Cinematic (Redes Sociais)",
      "Edição da Cerimônia e Discursos na Íntegra",
      "Color Grading de Cinema",
      "Entrega Digital em Alta Resolução",
      "Trends de Instagram, TikTok etc"
    ],
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Header */}
      <section className="px-6 mb-16 md:mb-24">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-6xl font-light tracking-tighter mb-6">Investimento</h1>
          <p className="text-lg md:text-xl text-muted-foreground font-light mb-8 max-w-2xl mx-auto">
            Acreditamos que cada história merece ser contada de forma única. Por isso, não trabalhamos com pacotes engessados, mas sim com uma experiência completa e adaptável.
          </p>
        </div>
      </section>

      {/* Single Option Section */}
      <section className="px-4 md:px-6 mb-24">
        <div className="container mx-auto max-w-4xl">
          <div className="relative bg-card rounded-none p-8 md:p-16 shadow-2xl border border-primary/30 bg-secondary/5">
            {/* Badge de Exclusividade */}
            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-4 py-2 md:px-8 text-xs md:text-sm uppercase tracking-[0.2em] font-medium shadow-lg whitespace-nowrap">
              Exclusividade MS Films
            </div>
            
            <div className="text-center mb-12 mt-6">
              <h3 className="text-3xl md:text-5xl font-serif italic mb-6">{exclusiveCollection.name}</h3>
              <p className="text-xl md:text-2xl text-foreground/80 font-medium mb-6">{exclusiveCollection.price}</p>
              <p className="text-base md:text-lg text-muted-foreground font-light max-w-xl mx-auto leading-relaxed">
                {exclusiveCollection.description}
              </p>
            </div>
            
            <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent mb-12" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 md:gap-y-6 mb-16 max-w-3xl mx-auto">
              {exclusiveCollection.features.map((feature) => (
                <div key={feature} className="flex items-start gap-4">
                  <div className="mt-1 bg-primary/10 p-1 rounded-full shrink-0">
                    <Check className="h-3 w-3 md:h-4 md:w-4 text-primary" strokeWidth={2} />
                  </div>
                  <span className="text-muted-foreground/90 font-light text-base md:text-lg">{feature}</span>
                </div>
              ))}
            </div>
            
            <div className="text-center">
              <Button 
                asChild 
                size="lg"
                className="w-full md:w-auto h-auto px-8 py-6 md:px-16 md:py-8 uppercase tracking-widest text-xs md:text-sm rounded-none shadow-lg hover:shadow-primary/20 transition-all whitespace-normal text-center"
              >
                <Link to="/contact">Solicitar Orçamento Personalizado</Link>
              </Button>
              <p className="mt-6 text-[10px] md:text-xs text-muted-foreground uppercase tracking-widest opacity-60">
                Agenda 2025/2026 Aberta
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Customize? */}
      <section className="px-6 py-24 bg-secondary/20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 md:mb-20">
            <span className="text-primary text-xs uppercase tracking-[0.3em] mb-4 block">O Diferencial</span>
            <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-4">Por que Personalizar?</h2>
            <p className="text-lg text-muted-foreground font-light max-w-2xl mx-auto">
              Seu casamento tem uma dinâmica própria. Nossa cobertura se molda a ela, e não o contrário.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <div className="text-center p-8 border border-border/50 hover:border-primary/30 transition-all duration-500 bg-background/50 hover:shadow-elegant group">
              <Clock className="w-10 h-10 text-primary mx-auto mb-6 stroke-[1] group-hover:scale-110 transition-transform" />
              <h3 className="text-lg md:text-xl font-medium uppercase tracking-widest mb-4">Horas Flexíveis</h3>
              <p className="text-sm text-muted-foreground leading-relaxed font-light">
                Defina a quantidade de horas exata que você precisa. Do making of até o último convidado sair, 
                você decide o ritmo da cobertura.
              </p>
            </div>

            <div className="text-center p-8 border border-border/50 hover:border-primary/30 transition-all duration-500 bg-background/50 hover:shadow-elegant group">
              <Camera className="w-10 h-10 text-primary mx-auto mb-6 stroke-[1] group-hover:scale-110 transition-transform" />
              <h3 className="text-lg md:text-xl font-medium uppercase tracking-widest mb-4">Equipe Sob Medida</h3>
              <p className="text-sm text-muted-foreground leading-relaxed font-light">
                Adequamos o tamanho da equipe ao porte do seu evento. Casamentos intimistas pedem discrição; 
                grandes eventos exigem múltiplos ângulos.
              </p>
            </div>

            <div className="text-center p-8 border border-border/50 hover:border-primary/30 transition-all duration-500 bg-background/50 hover:shadow-elegant group">
              <Sparkles className="w-10 h-10 text-primary mx-auto mb-6 stroke-[1] group-hover:scale-110 transition-transform" />
              <h3 className="text-lg md:text-xl font-medium uppercase tracking-widest mb-4">Extras Especiais</h3>
              <p className="text-sm text-muted-foreground leading-relaxed font-light">
                Ensaios pré ou pós-casamento, edição no mesmo dia (Same Day Edit) 
                e entrega de materiais brutos conforme seu desejo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24 md:py-32 bg-primary/5">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-4xl md:text-6xl font-light tracking-tight mb-8">
            Vamos conversar sobre <br/><span className="font-serif italic text-primary">o seu dia?</span>
          </h2>
          <p className="text-lg text-muted-foreground font-light mb-12">
            Preencha nosso formulário para agendarmos uma reunião e desenharmos juntos a melhor proposta para o seu sonho.
          </p>
          <Button 
            asChild 
            size="lg" 
            className="w-full md:w-auto h-auto rounded-full px-8 py-6 md:px-16 md:py-8 text-sm md:text-base tracking-widest uppercase bg-foreground text-background hover:bg-foreground/90 shadow-xl"
          >
            <Link to="/contact">Entrar em contato</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Investment;