import { AlertTriangle, Users, MessageSquare, ShieldBan, Gavel } from "lucide-react";

export default function Rules() {
  return (
    <div className="min-h-screen pt-20 pb-24">
      <section className="relative py-16 bg-primary/5 border-b border-primary/10">
        <div className="container text-center">
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 tracking-tighter">
            REGRAS DO <span className="text-primary">SERVIDOR</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light">
            Para manter a ordem e a diversão, siga as diretrizes abaixo. 
            O desconhecimento das regras não isenta de punição.
          </p>
        </div>
      </section>

      <section className="container mt-12 max-w-4xl">
        <div className="grid gap-8">
          
          {/* Rule Block 1 */}
          <div className="bg-card border-l-4 border-primary p-6 md:p-8 shadow-lg hover:bg-card/80 transition-colors">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-lg shrink-0">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-display font-bold text-white mb-2">1. Limite de Grupo (Solo/Duo)</h3>
                <p className="text-gray-300 leading-relaxed">
                  O limite máximo é de <strong className="text-white">2 jogadores</strong> por equipe, tanto na base (auth no TC, codelocks) quanto em roaming/combate.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground list-disc list-inside bg-background/30 p-4 rounded">
                  <li>Alianças são estritamente proibidas.</li>
                  <li>Trocas devem ser feitas apenas em Safe Zones ou através de Shop Fronts.</li>
                  <li>Para trocar de dupla, você deve limpar o TC, trocar códigos e remover sacos de dormir do antigo parceiro.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Rule Block 2 */}
          <div className="bg-card border-l-4 border-red-500 p-6 md:p-8 shadow-lg hover:bg-card/80 transition-colors">
            <div className="flex items-start gap-4">
              <div className="bg-red-500/10 p-3 rounded-lg shrink-0">
                <ShieldBan className="w-8 h-8 text-red-500" />
              </div>
              <div>
                <h3 className="text-2xl font-display font-bold text-white mb-2">2. Cheating e Exploits</h3>
                <p className="text-gray-300 leading-relaxed">
                  Tolerância zero para qualquer tipo de trapaça.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground list-disc list-inside bg-background/30 p-4 rounded">
                  <li>Uso de hacks, scripts ou macros resulta em banimento permanente.</li>
                  <li>Explorar bugs do jogo para obter vantagem injusta é proibido.</li>
                  <li>Associação com cheaters resultará em punição para todo o grupo.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Rule Block 3 */}
          <div className="bg-card border-l-4 border-yellow-500 p-6 md:p-8 shadow-lg hover:bg-card/80 transition-colors">
            <div className="flex items-start gap-4">
              <div className="bg-yellow-500/10 p-3 rounded-lg shrink-0">
                <MessageSquare className="w-8 h-8 text-yellow-500" />
              </div>
              <div>
                <h3 className="text-2xl font-display font-bold text-white mb-2">3. Comportamento e Chat</h3>
                <p className="text-gray-300 leading-relaxed">
                  Mantenha o respeito. Trash talk faz parte do jogo, mas há limites.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground list-disc list-inside bg-background/30 p-4 rounded">
                  <li>Racismo, homofobia, sexismo ou qualquer discurso de ódio = Banimento Permanente.</li>
                  <li>Spam no chat ou divulgação de outros servidores não é permitido.</li>
                  <li>Doxxing (divulgar informações pessoais) é estritamente proibido.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Rule Block 4 */}
          <div className="bg-card border-l-4 border-blue-500 p-6 md:p-8 shadow-lg hover:bg-card/80 transition-colors">
            <div className="flex items-start gap-4">
              <div className="bg-blue-500/10 p-3 rounded-lg shrink-0">
                <Gavel className="w-8 h-8 text-blue-500" />
              </div>
              <div>
                <h3 className="text-2xl font-display font-bold text-white mb-2">4. Griefing e Construção</h3>
                <p className="text-gray-300 leading-relaxed">
                  Regras sobre como você pode afetar a base de outros jogadores.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground list-disc list-inside bg-background/30 p-4 rounded">
                  <li>É permitido tomar bases (takeover) durante raids.</li>
                  <li>Griefing excessivo sem intenção de raid (apenas para estragar o jogo alheio) pode ser analisado pela staff.</li>
                  <li>Bloquear monumentos públicos com construções é proibido.</li>
                </ul>
              </div>
            </div>
          </div>

        </div>

        <div className="mt-12 p-6 bg-red-500/10 border border-red-500/30 rounded text-center">
          <div className="flex items-center justify-center gap-2 text-red-400 font-bold uppercase tracking-wider mb-2">
            <AlertTriangle className="w-5 h-5" /> Importante
          </div>
          <p className="text-gray-300">
            A staff reserva-se o direito de julgar casos não especificados aqui para manter a integridade do servidor.
            Em caso de dúvida, abra um ticket no Discord.
          </p>
        </div>
      </section>
    </div>
  );
}
