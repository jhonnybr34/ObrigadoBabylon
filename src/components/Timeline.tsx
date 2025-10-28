import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
interface TimelineItemProps {
  title: string;
  date: string;
  description: string;
  index: number;
}
const TimelineItem = ({
  title,
  date,
  description,
  index
}: TimelineItemProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });
  return <motion.div ref={ref} initial={{
    opacity: 0,
    x: index % 2 === 0 ? -50 : 50
  }} animate={inView ? {
    opacity: 1,
    x: 0
  } : {}} transition={{
    duration: 0.8,
    delay: index * 0.2
  }} className={`flex items-center gap-8 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
      <div className={`flex-1 ${index % 2 === 0 ? "text-right" : "text-left"}`}>
        <div className="bg-[var(--gradient-card)] p-6 rounded-xl border border-border shadow-[var(--shadow-card)]">
          <h3 className="text-2xl font-bold text-primary mb-2">{title}</h3>
          <p className="text-accent text-sm mb-3 font-semibold">{date}</p>
          <p className="text-foreground/80 leading-relaxed text-base text-right">{description}</p>
        </div>
      </div>

      <div className="relative flex items-center justify-center">
        <div className="w-4 h-4 rounded-full bg-accent shadow-[var(--shadow-glow)] z-10" />
      </div>

      <div className="flex-1" />
    </motion.div>;
};
const Timeline = () => {
  const timelineData = [{
    title: "O Encontro",
    date: "Há mais de um ano",
    description: "Nas terras de Ragnarok, um ferreiro iniciante que mal sabia jogar precisava de ajuda. Foi quando conheci você, que se tornou mais que um colega de guild, um Mentor!"
  }, {
    title: "Lost Dynasty & Turma do Pavê.",
    date: "Nossa Jornada",
    description: "Juntos lideramos guilds, enfrentamos desafios, vivemos aventuras incríveis. Uma amizade entre batalhas e conquistas."
  }, {
    title: "O Presente",
    date: "21 de Julho de 2024",
    description: "Quando mais precisei, Você me presenteou com uma placa de vídeo e uma fonte. Eu não poderia aceitar isso de graça e então propôs 500 reais, mas a sua ajuda não tinha preço."
  }, {
    title: "Tempo",
    date: "Um ano depois",
    description: "Estudei bastante, (não tanto quanto poderia rs) comecei a trabalhar em um escritório, juntei dinheiro. O tempo passou muito rápido com tanto trabalho, mas eu nunca me esqueci."
  }, {
    title: "O Agradecimento",
    date: "29 de Outubro, 2025",
    description: "Talvez o certo seria ter feito isso no dia em que tudo aconteceu, mas o momento é agora. Hoje no seu aniversário, Vou pagar minha ''divida'' um ano atrasado, mas com o coração em dia."
  }];
  return <section className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8
      }} viewport={{
        once: true
      }} className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 text-foreground">Nossa História</h2>
          <p className="text-muted-foreground text-lg">Do jogo à vida real</p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary transform -translate-x-1/2" />

          <div className="space-y-12">
            {timelineData.map((item, index) => <TimelineItem key={index} {...item} index={index} />)}
          </div>
        </div>
      </div>
    </section>;
};
export default Timeline;