import { Play, Maximize2, X, Image as ImageIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
  DialogDescription,
  DialogClose
} from "@/components/ui/dialog";
// Removemos o ScrollArea para usar scroll nativo e evitar bugs visuais

const Work = () => {
  const portfolios = [
    { 
      id: 1, 
      title: "Danieli & Paulo", 
      location: "Massaranduba, SC", 
      date: "18.10.2025",
      mainVideo: "/Dani/2 lo.mp4",
      gallery: [
          "/Dani/1.jpg",
          "/Dani/2.jpg",
          "/Dani/3.jpg"
      ],
      extraContent: {
        description: "Uma celebração clássica com toques modernos no interior de Santa Catarina. A cerimônia ao pôr do sol foi seguida de uma recepção vibrante.",
        videos: [
            "/Dani/1 lo.mp4",             
            "/Dani/2 lo.mp4",      
            "/Dani/3 lower.mp4",
            "/Dani/Trend.mp4"
        ],
        images: [
          "/Dani/1.jpg",
          "/Dani/2.jpg",
          "/Dani/3.jpg"
        ]
      }
    },
    { 
      id: 2, 
      title: "Ani & Adriano", 
      location: "Joinville, SC", 
      date: "02.11.2025",
      mainVideo: "/Ani/ani1.mp4", 
      gallery: [
        "/Ani/1.jpg", 
        "/Ani/2.jpg", 
        "/Ani/3.jpg"
      ],
      extraContent: {
        description: "Elegância urbana em Joinville. Ani e Adriano optaram por uma estética minimalista que realçou a arquitetura do local.",
        videos: [
            "/adrianoani.mp4",
            "/Ani/ani1.mp4",
            "/Ani/ani2.mp4"
        ],
        images: [
          "/Ani/1.jpg",
          "/Ani/2.jpg",
          "/Ani/3.jpg",
          "/Ani/4.jpg"
        ]
      }
    },
    { 
      id: 3, 
      title: "Samara & Luís", 
      location: "Massaranduba, SC", 
      date: "15.12.2025",
      mainVideo: "/samaraluis.mp4", 
      gallery: [
        "/Samara/image.png", 
        "/Samara/image2.png", 
        "/Samara/image3.png"
      ],
      extraContent: {
        description: "Um casamento intimista e cheio de emoção. A conexão entre Samara e Luís guiou toda a narrativa visual deste filme.",
        videos: [
         "/Samara/1.mp4", 
         "/Samara/2.mp4",
        ],
        images: [
        "/Samara/image.png", 
        "/Samara/image2.png", 
        "/Samara/image3.png"
        ]
      }
    },
  ];

  const getImageUrl = (path: string) => {
    if (path.includes("/") || path.includes("http") || path.includes(".jpg") || path.includes(".png")) {
      return path;
    }
    return `https://images.unsplash.com/photo-${path}?q=80&w=800`;
  };

  return (
    <div className="min-h-screen pt-24 pb-16 bg-background">
      <div className="container mx-auto px-6">
        
        {/* Cabeçalho */}
        <div className="text-center mb-24">
          <span className="text-primary text-xs uppercase tracking-[0.3em] mb-4 block">Trabalhos Selecionados</span>
          <h1 className="text-5xl md:text-7xl font-light tracking-tighter mb-6">
            Portfólio <span className="font-serif italic text-primary">Exclusivo</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light">
            Uma curadoria das nossas histórias mais recentes.
          </p>
        </div>

        {/* Lista de Projetos */}
        <div className="flex flex-col gap-32">
          {portfolios.map((project, index) => (
            <div key={project.id} className="group relative">
              
              {/* Info do Projeto */}
              <div className="flex flex-col md:flex-row justify-between items-end mb-8 border-b border-border/40 pb-4">
                <div>
                  <span className="text-xs font-medium text-primary uppercase tracking-widest mb-2 block">{project.location} — {project.date}</span>
                  <h2 className="text-4xl md:text-6xl font-serif italic text-foreground">{project.title}</h2>
                </div>
                
                <div className="flex items-center gap-4 mt-4 md:mt-0">
                  <span className="text-xs text-muted-foreground uppercase tracking-[0.2em] hidden md:block">Projeto {String(index + 1).padStart(2, '0')}</span>
                  
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="sm" className="rounded-none uppercase tracking-widest text-xs gap-2 hover:bg-primary hover:text-white transition-colors">
                        <Maximize2 className="w-3 h-3" /> Ver Galeria Completa
                      </Button>
                    </DialogTrigger>
                    
                    {/* Conteúdo do Pop-up */}
                    <DialogContent className="max-w-[95vw] w-full h-[90vh] p-0 rounded-none bg-background border-none overflow-hidden flex flex-col">
                        
                        {/* Header do Modal (Fixo no topo) */}
                        <div className="flex justify-between items-center p-6 border-b border-border/40 bg-background/95 backdrop-blur z-20 shrink-0">
                          <div>
                            <DialogTitle className="text-2xl font-serif italic">{project.title}</DialogTitle>
                            <DialogDescription className="text-xs uppercase tracking-widest text-muted-foreground mt-1">
                              {project.location} — Galeria Estendida
                            </DialogDescription>
                          </div>
                          <DialogClose asChild>
                            <Button variant="ghost" size="icon" className="rounded-full hover:bg-muted">
                              <X className="w-5 h-5" />
                            </Button>
                          </DialogClose>
                        </div>

                        {/* Área de Conteúdo com Scroll Nativo (Evita que o conteúdo vaze) */}
                        <div className="flex-1 overflow-y-auto p-6 md:p-12">
                          <div className="max-w-7xl mx-auto space-y-16 pb-16">
                            <p className="text-lg md:text-xl font-light leading-relaxed text-muted-foreground max-w-3xl">
                              {project.extraContent.description}
                            </p>

                            <div className="space-y-8">
                              <div className="flex items-center gap-3 mb-4">
                                <Play className="w-5 h-5 text-primary" />
                                <h3 className="text-sm uppercase tracking-widest font-medium">Filmes ({project.extraContent.videos.length})</h3>
                              </div>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {project.extraContent.videos.map((vid, i) => (
                                  <div key={i} className="aspect-video bg-muted overflow-hidden rounded-sm shadow-lg relative group/video">
                                    <video controls className="w-full h-full object-cover">
                                      <source src={vid} type="video/mp4" />
                                    </video>
                                    <div className="absolute top-2 right-2 bg-black/50 px-2 py-1 text-[10px] text-white uppercase tracking-widest rounded-sm backdrop-blur-sm">
                                        Filme {i + 1}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>

                            <div className="space-y-8">
                              <div className="flex items-center gap-3 mb-4">
                                <ImageIcon className="w-5 h-5 text-primary" />
                                <h3 className="text-sm uppercase tracking-widest font-medium">Fotografia</h3>
                              </div>
                              <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
                                {project.extraContent.images.map((img, i) => (
                                  <div key={i} className="break-inside-avoid overflow-hidden rounded-sm shadow-elegant hover:shadow-xl transition-shadow duration-500">
                                    <img 
                                      src={getImageUrl(img)} 
                                      alt={`Gallery ${i}`}
                                      className="w-full h-auto object-cover hover:scale-105 transition-transform duration-1000"
                                    />
                                  </div>
                                ))}
                              </div>
                            </div>
                            
                            <div className="text-center pt-12 border-t border-border/30">
                              <h4 className="font-serif italic text-3xl mb-6">Gostou dessa história?</h4>
                              <Button asChild size="lg" className="rounded-full px-12 uppercase tracking-widest">
                                <Link to="/contact">Solicitar Orçamento</Link>
                              </Button>
                            </div>
                          </div>
                        </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>

              {/* Layout de Grid Principal */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                <div className="md:col-span-8 relative w-full aspect-video overflow-hidden rounded-sm shadow-2xl bg-black">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="object-cover w-full h-full transition-transform duration-[2s] group-hover:scale-105"
                  >
                    <source src={project.mainVideo} type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
                </div>

                <div className="md:col-span-4 flex flex-col gap-6 h-full">
                  <div className="relative flex-1 overflow-hidden rounded-sm shadow-elegant w-full min-h-[150px]">
                    <img 
                      src={getImageUrl(project.gallery[0])} 
                      alt="Detail 1" 
                      className="object-cover w-full h-full hover:scale-110 transition-transform duration-700 absolute inset-0"
                    />
                  </div>
                  
                  <div className="flex-1 grid grid-cols-2 gap-6 min-h-[150px]">
                    <div className="relative overflow-hidden rounded-sm shadow-elegant w-full h-full">
                      <img 
                        src={getImageUrl(project.gallery[1])} 
                        alt="Detail 2" 
                        className="object-cover w-full h-full hover:scale-110 transition-transform duration-700 absolute inset-0"
                      />
                    </div>
                    <div className="relative overflow-hidden rounded-sm shadow-elegant group/last w-full h-full">
                      <img 
                        src={getImageUrl(project.gallery[2])} 
                        alt="Detail 3" 
                        className="object-cover w-full h-full hover:scale-110 transition-transform duration-700 absolute inset-0"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover/last:opacity-100 transition-opacity duration-300">
                          <PlusIcon />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* CTA Final */}
        <div className="mt-32 text-center border-t border-border/40 pt-24">
           <h3 className="text-3xl md:text-5xl font-light mb-8">Gostou do nosso olhar?</h3>
           <Button asChild size="lg" className="rounded-full px-12 py-8 text-sm tracking-widest uppercase shadow-xl">
             <Link to="/contact">Solicitar Orçamento</Link>
           </Button>
        </div>

      </div>
    </div>
  );
};

const PlusIcon = () => (
  <div className="w-10 h-10 rounded-full border border-white/50 flex items-center justify-center text-white backdrop-blur-sm">
    <span className="text-2xl font-thin leading-none mb-1">+</span>
  </div>
);

export default Work;