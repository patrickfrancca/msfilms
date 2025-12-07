import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Play } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero Section - Editorial Style */}
      <section className="relative h-screen w-full">
        {/* Vídeo de Fundo */}
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute inset-0 bg-black/20 z-10" /> {/* Overlay mais leve */}
          <video
            autoPlay
            loop
            muted
            playsInline
            // AJUSTE AQUI: object-[center_35%] sobe o foco para a altura dos rostos
            className="w-full h-full object-cover object-[center_35%]"
          >
            {/* IMPORTANTE: Coloque o arquivo de vídeo na pasta 'public' e ajuste o nome aqui */}
            <source src="/backgroundsite.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Conteúdo em Grid Editorial */}
        <div className="relative z-20 container mx-auto h-full px-6 md:px-12 flex flex-col justify-between py-12 md:py-24">
          {/* Topo */}
          <div className="flex justify-between items-start text-white/90 mix-blend-difference">
            <span className="text-sm uppercase tracking-[0.3em] font-medium hidden md:block"> </span>
          </div>

          {/* Centro / Título Principal */}
          <div className="max-w-5xl">
            <h1 className="text-7xl md:text-9xl font-light leading-[0.9] tracking-tighter text-white mix-blend-overlay mb-8">
              Ideias em <br />
              <span className="italic font-serif ml-12 md:ml-32">Histórias</span>
            </h1>
            
            <div className="flex flex-col md:flex-row gap-8 items-start md:items-center mt-12">
              <Button 
                asChild 
                size="lg" 
                className="bg-white text-black hover:bg-white/90 rounded-none px-8 h-14 text-sm tracking-widest uppercase"
              >
                <Link to="/work">
                  Ver trabalhos
                </Link>
              </Button>
              
              <p className="text-white/80 max-w-xs text-sm font-light leading-relaxed border-l border-white/30 pl-4">
                Capturando a essência bruta e a beleza intocada do seu legado de amor através de lentes cinematográficas.
              </p>
            </div>
          </div>

          {/* Bottom */}
          <div className="flex justify-between items-end text-white/80">
            <div className="animate-pulse">
              <span className="text-xs tracking-widest uppercase">Role para explorar</span>
            </div>
            <div className="hidden md:block text-right">
              <p className="text-xs tracking-widest uppercase">MS Films</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Statement (Filosofia Minimalista) */}
      <section className="py-32 px-6 bg-background">
        <div className="container mx-auto max-w-4xl text-center">
          <span className="text-primary text-xs uppercase tracking-[0.3em] mb-6 block">Nossa Filosofia</span>
          <h2 className="text-4xl md:text-6xl leading-tight font-normal mb-12 text-foreground">
            Nós não apenas documentamos casamentos; nós curamos <span className="font-script text-6xl md:text-7xl text-primary block mt-2">memórias eternas.</span>
          </h2>
          <div className="w-px h-24 bg-border mx-auto mb-12" />
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto font-light">
            Acreditamos na elegância do silêncio, na beleza do movimento natural e na sofisticação de momentos não planejados. Nossa estética é enraizada na simplicidade e na emoção genuína.
          </p>
        </div>
      </section>

      {/* Featured Work - Layout Assimétrico Moderno */}
      <section className="py-24 px-6 overflow-hidden">
        <div className="container mx-auto">
          <div className="flex justify-between items-end mb-16 px-2">
            <h2 className="text-5xl md:text-7xl font-light tracking-tighter">Trabalhos<br/>Selecionados</h2>
            <Button asChild variant="link" className="text-foreground text-lg hidden md:flex group">
              <Link to="/work">
                Todas as filmagens <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
            {/* Item 1 - Grande (Com Vídeo) */}
            <div className="md:col-span-7 relative group cursor-pointer">
              <Link to="/work">
                <div className="aspect-[4/5] overflow-hidden bg-muted relative">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="object-cover w-full h-full transition-transform duration-1000 "
                  >
                    <source src="/Casamento1.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors pointer-events-none" />
                </div>
                
                <div className="mt-4 flex justify-between items-center border-t border-border pt-4">
                  <span className="text-2xl font-serif italic">Danieli & Paulo</span>
                  <span className="text-xs uppercase tracking-widest text-muted-foreground">18.10.2025</span>
                </div>
              </Link>
            </div>
            {/* Item 2 - Menor, deslocado para baixo */}
            <div className="md:col-span-5 md:mt-32 relative group cursor-pointer">
               <Link to="/work">
                <div className="aspect-[3/4] overflow-hidden bg-muted">
                   <img
                    src="Foto1.jpg"
                    alt="Wedding 2"
                    className="object-cover w-full h-full transition-transform duration-1000"
                  />
                </div>
                <div className="mt-4 flex justify-between items-center border-t border-border pt-4">
                  <span className="text-2xl font-serif italic"></span>
                  <span className="text-xs uppercase tracking-widest text-muted-foreground">18.10.2025</span>
                </div>
              </Link>
            </div>
          </div>
          
           <div className="text-center mt-16 md:hidden">
             <Button asChild variant="outline" className="w-full py-6 uppercase tracking-widest text-xs">
              <Link to="/work">View All Projects</Link>
            </Button>
           </div>
        </div>
      </section>

      {/* Services / Minimal Cards */}
      <section className="py-24 bg-secondary/30 px-6">
        <div className="container mx-auto max-w-6xl">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-12 divide-y md:divide-y-0 md:divide-x divide-border/50">
              {[
                { title: "Cinematografia", desc: "A melhor qualidade possível de imagem e vídeo, Áudio Profissional" },
                { title: "Fotografia", desc: "Qualidade 4k de Cinema, Alta estabilidade e coloração, Álbum" },
                { title: "Videomaker & Filmmaker", desc: "Profissional altamente experiente em fotografias e gravações de casamentos" }
              ].map((item, i) => (
                <div key={i} className="pt-8 md:pt-0 md:px-8 text-center md:text-left">
                   <h3 className="text-2xl font-serif mb-4">{item.title}</h3>
                   <p className="text-muted-foreground font-light text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* CTA Minimalista (Atualizado para Mobile) */}
      <section className="py-32 px-6 text-center">
        <div className="container mx-auto">
          <h2 className="text-5xl md:text-8xl font-light tracking-tighter mb-8">
            Vamos criar a sua<br/> 
            <span className="italic font-serif text-primary/80">História?</span>
          </h2>
          {/* Botão Responsivo: w-full no mobile, w-auto no desktop, padding ajustável */}
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

export default Home;