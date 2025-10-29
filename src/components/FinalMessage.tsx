import { motion } from "framer-motion";
import { Heart, Gift, Users } from "lucide-react";

const FinalMessage = () => {
  return (
    <section className="py-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(168,85,247,0.1),transparent_70%)]" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-[var(--gradient-card)] p-12 rounded-2xl border border-border shadow-[var(--shadow-card)]"
        >
          <div className="flex justify-center gap-8 mb-8">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Heart className="w-12 h-12 text-accent" fill="currentColor" />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1, rotate: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Gift className="w-12 h-12 text-primary" />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Users className="w-12 h-12 text-accent" />
            </motion.div>
          </div>

          <h2 className="text-4xl font-bold text-center mb-8 text-foreground">
            Parabéns Cassio! (Babylon)
          </h2>

          <div className="space-y-6 text-foreground/90 leading-relaxed text-lg">
            <p>
              Sei que já faz um ano desde que você me ajudou com a placa e a fonte. Prometi estudar para conseguir um trabalho legal, até estudei, mas não vou mentir zoei muito também rs. 
              Consegui um trabalho tranquilo, não é dos melhores mas o tempo passou voando com toda essa experiencia nova, mas isso não quer dizer que eu esqueci.
            </p>
            
            <p>
              Tivemos momentos dificeis por conta das figurinhas, mas faz parte por isso se chama Discord de Discordia kkk.

            </p>

            <p>
              Você não precisava ter feito nada daquilo, Aquela placa de vídeo e fonte não eram apenas equipamentos. Era você acreditando em mim e no meu futuro
              quando eu mais precisava. Por isso eu sou muito grato a você que me deu essa oportunidade tão cedo.
              tive varias experiencias novas e necessarias. E eu nunca soube como agradecer, tanto que esqueci que eu poderia ter parcelado essa ''divida'' kkkk mas isso é prova de que amizades podem nascer nos lugares mais inesperados kk.
            </p>

            <p className="text-accent font-semibold">
              Hoje, no seu aniversário, envio os 924,54 reais (alguns juros de amizade kk) - não porque era uma dívida, mas porque 
              quero retribuir à minha maneira. Cheguei atrasado um ano, mas eu sempre estive pensando em como retribuir esse presente.

            </p>

            <p className="text-center pt-8 text-2xl font-bold">
              Feliz aniversário, meu amigo! 🎂✨
            </p>

            <p className="text-center text-muted-foreground italic">
              Que nossa amizade continue além das telas, além dos jogos, 
              para sempre nas nossas memórias e histórias.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-xl text-primary font-semibold">
            Com gratidão eterna,
          </p>
          <p className="text-lg text-foreground/70 mt-2">
            Jhonny o ferreiro miseria ⚔️
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalMessage;
