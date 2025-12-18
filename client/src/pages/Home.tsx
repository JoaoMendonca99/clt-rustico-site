import { Button } from "@/components/ui/button";
import { Copy, ArrowRight, Calendar, Users, Shield } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function Home() {
  const [serverIP] = useState("connect 198.1.195.159:28015");

  const copyIP = () => {
    navigator.clipboard.writeText(serverIP);
    toast.success("IP copiado para a área de transferência!");
  };

  return (
    <div className="flex flex-col gap-0">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero-bg.jpg" 
            alt="Rust Landscape" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/40 to-background"></div>
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        {/* Content */}
        <div className="container relative z-10 flex flex-col items-center text-center gap-6 max-w-4xl px-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 backdrop-blur-md mb-4 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-primary font-mono text-sm tracking-widest uppercase">Wipe Quinzenal - Próximo: Quinta-feira 01/01/2026</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white tracking-tighter drop-shadow-2xl animate-in fade-in zoom-in-95 duration-1000 delay-200">
            CLT <span className="text-primary">RÚSTICO</span>
          </h1>
          
          <p className="text-lg md:text-2xl text-gray-300 max-w-2xl font-light leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-400">
            Servidor Rust comunitário <span className="text-white font-bold">Solo/Duo</span>. 
            Sem Pay to Win. Apenas habilidade e sobrevivência.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-8 w-full justify-center animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-600">
            <Button 
              size="lg" 
              className="h-14 px-8 text-lg font-bold uppercase tracking-wider bg-primary hover:bg-primary/90 text-white rounded-none clip-path-button relative overflow-hidden group"
              onClick={() => window.open("steam://connect/198.1.195.159:28015")}
            >
              <span className="relative z-10 flex items-center gap-2">
                Entrar Agora <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="h-14 px-8 text-lg font-bold uppercase tracking-wider border-2 border-white/20 hover:bg-white/10 text-white rounded-none backdrop-blur-sm"
              onClick={copyIP}
            >
              <span className="flex items-center gap-2">
                <Copy className="w-5 h-5" /> Copiar IP
              </span>
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/50">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-white/50 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-card relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
        
        <div className="container grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="group relative p-8 bg-background/50 border border-white/5 hover:border-primary/50 transition-colors duration-300">
            <div className="absolute top-0 left-0 w-1 h-0 group-hover:h-full bg-primary transition-all duration-300"></div>
            <Users className="w-12 h-12 text-primary mb-6 group-hover:scale-110 transition-transform duration-300" />
            <h3 className="text-2xl font-display font-bold mb-4 text-white">Solo / Duo</h3>
            <p className="text-muted-foreground leading-relaxed">
              Limite estrito de grupo para garantir combates justos. Ideal para jogadores solitários ou duplas táticas.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="group relative p-8 bg-background/50 border border-white/5 hover:border-primary/50 transition-colors duration-300">
            <div className="absolute top-0 left-0 w-1 h-0 group-hover:h-full bg-primary transition-all duration-300"></div>
            <Shield className="w-12 h-12 text-primary mb-6 group-hover:scale-110 transition-transform duration-300" />
            <h3 className="text-2xl font-display font-bold mb-4 text-white">Zero P2W</h3>
            <p className="text-muted-foreground leading-relaxed">
              Nenhuma vantagem de combate à venda. VIPs oferecem apenas conveniência e suporte ao servidor.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="group relative p-8 bg-background/50 border border-white/5 hover:border-primary/50 transition-colors duration-300">
            <div className="absolute top-0 left-0 w-1 h-0 group-hover:h-full bg-primary transition-all duration-300"></div>
            <Calendar className="w-12 h-12 text-primary mb-6 group-hover:scale-110 transition-transform duration-300" />
            <h3 className="text-2xl font-display font-bold mb-4 text-white">Wipe Quinzenal</h3>
            <p className="text-muted-foreground leading-relaxed">
              Ciclos de 15 dias para manter o mapa fresco e a economia equilibrada. Wipe sempre às 15:00.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative flex items-center justify-center bg-primary/5">
        <div className="absolute inset-0 bg-[url('/images/rules-bg.jpg')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        <div className="container text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 text-white">PRONTO PARA SOBREVIVER?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Junte-se à comunidade CLT Rústico e experimente o Rust da maneira que ele deve ser jogado.
          </p>
          <Button 
            size="lg" 
            className="h-16 px-12 text-xl font-bold uppercase tracking-wider bg-white text-black hover:bg-gray-200 rounded-none"
            onClick={() => window.open("https://discord.gg/WGzyT4TB", "_blank")}
          >
            Entrar no Discord
          </Button>
        </div>
      </section>
    </div>
  );
}
