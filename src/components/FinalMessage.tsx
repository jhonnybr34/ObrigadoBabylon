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
            Para o Babylon
          </h2>

          <div className="space-y-6 text-foreground/90 leading-relaxed text-lg">
            <p>
              Sei que já faz um ano desde que você me ajudou naquele momento difícil. 
              O tempo passou voando com todo o trabalho, mas isso nunca significou que eu esqueci.
            </p>
            
            <p>
              Você não precisava ter feito nada daquilo. Éramos apenas dois jogadores que se conheceram 
              no Ragnarok - eu, um ferreiro perdido, e você, que teve a paciência de me ensinar e se tornou 
              muito mais que um companheiro de guild.
            </p>

            <p>
              Aquela placa de vídeo e fonte não eram apenas equipamentos. Era você acreditando em mim 
              quando eu mais precisava. Era a prova de que amizades verdadeiras podem nascer nos lugares 
              mais inesperados.
            </p>

            <p className="text-accent font-semibold">
              Hoje, no seu aniversário, envio os 800 reais - não porque era uma dívida, mas porque 
              quero retribuir à minha maneira. Cheguei atrasado um ano, mas meu coração sempre esteve 
              em dia com você.
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
            Seu amigo ferreiro ⚔️
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalMessage;
