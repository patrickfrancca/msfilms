import { Camera, Film, Mic } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero Section */}
      <section className="px-6 mb-24">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[3/4] rounded-3xl overflow-hidden rounded-sm shadow-elegant">
              <img
                src="/MS Films.jpg"
                alt="Retrato do Filmmaker"
                className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">MS Films</h1>
              <h2 className="text-2xl text-primary mb-8">Criando Histórias Atemporais</h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Acredito que o vídeo de casamento deve ser menos um simples registro e mais uma 
                  experiência emocional de cinema. Minha abordagem prioriza a discrição, 
                  uma iluminação cinematográfica e a busca pela história que é unicamente sua.
                </p>
                <p>
                  Com vasta experiência filmando casamentos, 
                  desenvolvi uma identidade visual que une a autenticidade documental com a 
                  arte cinematográfica. Cada quadro é intencional, cada momento tem significado.
                </p>
                <p>
                  O que realmente me move é criar filmes que os casais 
                  assistam ano após ano, redescobrindo novos detalhes e emoções a cada visualização.
                </p>
              </div>
              <div className="mt-8">
                <Button asChild size="lg">
                  <Link to="/contact">Vamos Criar Juntos</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="px-6 py-24 bg-card">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            A <span className="text-gradient">Filosofia</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            O dia do seu casamento é uma coleção de momentos fugazes — trocas de olhares, 
            risos nervosos, lágrimas de alegria. Minha missão é preservar esses momentos não 
            apenas como aconteceram, mas como foram sentidos. Através de atenção cuidadosa à luz, 
            composição e emoção, crio filmes que transcendem a documentação e se tornam arte.
          </p>
        </div>
      </section>

      {/* Technical Excellence */}
      <section className="px-6 py-24">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Excelência Técnica</h2>
            <p className="text-xl text-muted-foreground">
              Combinando olhar artístico com tecnologia de ponta
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card p-8 rounded-sm shadow-elegant text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Camera className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Imagens e vídeo de Cinema</h3>
              <p className="text-muted-foreground">
                Utilizamos imagens deslumbrantes em 4K com alcance dinâmico e cores excepcionais.
              </p>
            </div>

            <div className="bg-card p-8 rounded-sm shadow-elegant text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Film className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Movimento Cinematográfico</h3>
              <p className="text-muted-foreground">
                Estabilização avançada e tecnologia que permite criar movimentos suaves 
                que elevam o nível da produção de cada cena.
              </p>
            </div>

            <div className="bg-card p-8 rounded-sm shadow-elegant text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mic className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Áudio Profissional</h3>
              <p className="text-muted-foreground">
                Gravação de áudio de alta fidelidade garante que cada voto, discurso e sussurro 
                seja capturado e eternizado com clareza cristalina.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;