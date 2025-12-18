import { Separator } from "@/components/ui/separator";

export default function About() {
  return (
    <div className="min-h-screen pt-20 pb-24">
      {/* Header Section */}
      <section className="relative py-20 bg-card overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/images/about-bg.jpg" 
            alt="Industrial Texture" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
        </div>
        <div className="container relative z-10">
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 tracking-tighter">
            SOBRE O <span className="text-primary">SERVIDOR</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl font-light">
            Uma experiência autêntica de Rust, focada na comunidade e no equilíbrio competitivo.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="container mt-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div className="space-y-8">
          <div className="prose prose-invert max-w-none">
            <h3 className="text-2xl font-display font-bold text-white mb-4 border-l-4 border-primary pl-4">
              Nossa Filosofia
            </h3>
            <p className="text-gray-300 leading-relaxed text-lg">
              O CLT Rústico nasceu da necessidade de um servidor brasileiro que respeitasse o tempo do jogador. 
              Sabemos que nem todos podem jogar 24 horas por dia, por isso criamos um ambiente onde a estratégia 
              e a habilidade valem mais que o tempo online.
            </p>
            <p className="text-gray-300 leading-relaxed text-lg mt-4">
              Nosso foco é oferecer uma experiência <span className="text-primary font-bold">Vanilla+</span>, 
              mantendo a essência do jogo original mas com pequenas melhorias de qualidade de vida que não 
              afetam o combate ou a economia de forma injusta.
            </p>
          </div>

          <div className="bg-card/50 border border-white/5 p-8 rounded-sm">
            <h3 className="text-xl font-display font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-2 h-8 bg-primary"></span>
              Configurações do Servidor
            </h3>
            <ul className="space-y-4">
              <li className="flex justify-between items-center border-b border-white/5 pb-2">
                <span className="text-muted-foreground">Modo de Jogo</span>
                <span className="font-mono font-bold text-white">Solo / Duo</span>
              </li>
              <li className="flex justify-between items-center border-b border-white/5 pb-2">
                <span className="text-muted-foreground">Ciclo de Wipe</span>
                <span className="font-mono font-bold text-white">Quinzenal (15 dias)</span>
              </li>

              <li className="flex justify-between items-center border-b border-white/5 pb-2">
                <span className="text-muted-foreground">Anti-Cheat</span>
                <span className="font-mono font-bold text-primary">Ativo + Admin Monitor</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="space-y-8">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-orange-600 rounded-sm blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-background border border-white/10 p-8">
              <h3 className="text-3xl font-display font-bold text-white mb-6 text-center">
                ZERO PAY TO WIN
              </h3>
              <Separator className="my-6 bg-white/10" />
              <p className="text-center text-muted-foreground mb-8">
                Nós acreditamos que a vitória deve ser conquistada, não comprada. 
                Em nosso servidor, você nunca encontrará:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 text-red-400 bg-red-500/5 p-3 border border-red-500/10">
                  <span className="text-xl">✕</span> Kits de Armas
                </div>
                <div className="flex items-center gap-3 text-red-400 bg-red-500/5 p-3 border border-red-500/10">
                  <span className="text-xl">✕</span> Recursos Extras
                </div>
                <div className="flex items-center gap-3 text-red-400 bg-red-500/5 p-3 border border-red-500/10">
                  <span className="text-xl">✕</span> Teleporte em Combate
                </div>
                <div className="flex items-center gap-3 text-red-400 bg-red-500/5 p-3 border border-red-500/10">
                  <span className="text-xl">✕</span> Vantagens de Dano
                </div>
              </div>
            </div>
          </div>

          <div className="bg-primary/10 border border-primary/20 p-6">
            <h4 className="font-display font-bold text-primary mb-2 uppercase tracking-wider">
              Compromisso da Staff
            </h4>
            <p className="text-sm text-muted-foreground">
              Nossa equipe de administração não joga no servidor. Estamos aqui apenas para garantir 
              que as regras sejam seguidas e para ajudar com problemas técnicos. Transparência total.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
