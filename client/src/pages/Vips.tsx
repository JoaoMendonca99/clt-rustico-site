import { Check, Star, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Vips() {
  return (
    <div className="min-h-screen pt-20 pb-24">
      <section className="container text-center py-16">
        <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 tracking-tighter">
          APOIE O <span className="text-primary">PROJETO</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light">
          Torne-se um VIP para ajudar a manter o servidor online e receba benefícios exclusivos de qualidade de vida.
          <br />
          <span className="text-primary font-bold uppercase text-sm tracking-widest mt-2 block">
            Lembre-se: Zero Pay to Win
          </span>
        </p>
      </section>

      <section className="container grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl">
        {/* VIP Card */}
        <div className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-b from-gray-500 to-gray-800 rounded-lg blur opacity-30 group-hover:opacity-75 transition duration-500"></div>
          <div className="relative h-full bg-card border border-white/10 rounded-lg overflow-hidden flex flex-col">
            <div className="h-2 bg-gray-500 w-full"></div>
            <div className="p-8 flex-1 flex flex-col">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-3xl font-display font-bold text-white">VIP</h3>
                  <p className="text-muted-foreground text-sm uppercase tracking-wider">Acesso Básico</p>
                </div>
                <Star className="w-10 h-10 text-gray-500" />
              </div>
              
              <div className="text-4xl font-mono font-bold text-white mb-8">
                R$ 15,00 <span className="text-sm text-muted-foreground font-sans font-normal">/ mês</span>
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-gray-300">Slot reservado (entra sem fila)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-gray-300">Skinbox (skins de itens)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-gray-300">Sign Artist (pintar placas com imagens)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-gray-300">Tag [VIP] no chat e Discord</span>
                </li>
              </ul>

              <Button className="w-full bg-gray-700 hover:bg-gray-600 text-white font-bold uppercase tracking-wider h-12 rounded-sm">
                Adquirir VIP
              </Button>
            </div>
          </div>
        </div>

        {/* VIP+ Card */}
        <div className="relative group transform md:-translate-y-4">
          <div className="absolute -inset-0.5 bg-gradient-to-b from-primary to-orange-600 rounded-lg blur opacity-50 group-hover:opacity-100 transition duration-500 animate-pulse"></div>
          <div className="relative h-full bg-[#1a1a1a] border border-primary/30 rounded-lg overflow-hidden flex flex-col">
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
               <img src="/images/vip-card-bg.jpg" alt="" className="w-full h-full object-cover mix-blend-overlay" />
            </div>
            
            <div className="h-2 bg-primary w-full relative z-10"></div>
            <div className="p-8 flex-1 flex flex-col relative z-10">
              <div className="absolute top-4 right-4 bg-primary text-white text-xs font-bold px-2 py-1 rounded uppercase tracking-wider">
                Mais Popular
              </div>
              
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-3xl font-display font-bold text-white flex items-center gap-2">
                    VIP <span className="text-primary">+</span>
                  </h3>
                  <p className="text-primary/80 text-sm uppercase tracking-wider">Acesso Premium</p>
                </div>
                <Zap className="w-10 h-10 text-primary" />
              </div>
              
              <div className="text-4xl font-mono font-bold text-white mb-8">
                R$ 25,00 <span className="text-sm text-muted-foreground font-sans font-normal">/ mês</span>
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-start gap-3">
                  <div className="bg-primary/20 p-1 rounded-full">
                    <Check className="w-4 h-4 text-primary shrink-0" />
                  </div>
                  <span className="text-white font-medium">Todos os benefícios do VIP</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-primary/20 p-1 rounded-full">
                    <Check className="w-4 h-4 text-primary shrink-0" />
                  </div>
                  <span className="text-gray-300">Furnace Splitter (organiza fornalhas)</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-primary/20 p-1 rounded-full">
                    <Check className="w-4 h-4 text-primary shrink-0" />
                  </div>
                  <span className="text-gray-300">Box Sorter (organiza baús)</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-primary/20 p-1 rounded-full">
                    <Check className="w-4 h-4 text-primary shrink-0" />
                  </div>
                  <span className="text-gray-300">Building Skins (todas as DLCs de construção)</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-primary/20 p-1 rounded-full">
                    <Check className="w-4 h-4 text-primary shrink-0" />
                  </div>
                  <span className="text-gray-300">Tag [VIP+] dourada exclusiva</span>
                </li>
              </ul>

              <Button className="w-full bg-primary hover:bg-primary/90 text-white font-bold uppercase tracking-wider h-14 rounded-sm shadow-[0_0_20px_rgba(204,85,0,0.3)] hover:shadow-[0_0_30px_rgba(204,85,0,0.5)] transition-shadow">
                Adquirir VIP+
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="container mt-16 text-center">
        <div className="bg-background/50 border border-white/5 p-6 max-w-2xl mx-auto rounded-lg">
          <h4 className="text-white font-bold mb-2">Nota de Transparência</h4>
          <p className="text-sm text-muted-foreground">
            Todo o valor arrecadado é reinvestido no pagamento da hospedagem dedicada, 
            plugins premium e divulgação do servidor. Não visamos lucro.
          </p>
        </div>
      </section>
    </div>
  );
}
