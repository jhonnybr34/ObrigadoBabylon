import { motion } from "framer-motion";
import { Play, Pause } from "lucide-react";
import { useState, useRef } from "react";

const Memories = () => {
  const [playingAudio1, setPlayingAudio1] = useState(false);
  const [playingAudio2, setPlayingAudio2] = useState(false);
  const audio1Ref = useRef<HTMLAudioElement>(null);
  const audio2Ref = useRef<HTMLAudioElement>(null);

  const toggleAudio1 = () => {
    if (audio1Ref.current) {
      if (playingAudio1) {
        audio1Ref.current.pause();
      } else {
        audio2Ref.current?.pause();
        setPlayingAudio2(false);
        audio1Ref.current.play();
      }
      setPlayingAudio1(!playingAudio1);
    }
  };

  const toggleAudio2 = () => {
    if (audio2Ref.current) {
      if (playingAudio2) {
        audio2Ref.current.pause();
      } else {
        audio1Ref.current?.pause();
        setPlayingAudio1(false);
        audio2Ref.current.play();
      }
      setPlayingAudio2(!playingAudio2);
    }
  };

  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 text-foreground">Memórias de Ragnarok</h2>
          <p className="text-muted-foreground text-lg">Registros de nossa aventura</p>
        </motion.div>

        {/* Images Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="aspect-video bg-muted/20 rounded-xl border border-border overflow-hidden shadow-[var(--shadow-card)]"
            >
              <img
                src={`/placeholder.svg`}
                alt={`Registro ${i} do jogo`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </motion.div>

        {/* Audio Players */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Audio 1 - Ferreiro Miséria */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-[var(--gradient-card)] p-8 rounded-xl border border-border shadow-[var(--shadow-card)]"
          >
            <div className="flex flex-col items-center gap-4">
              <button
                onClick={toggleAudio1}
                className="w-20 h-20 rounded-full bg-primary/10 hover:bg-primary/20 border-2 border-primary flex items-center justify-center transition-all hover:scale-110 shadow-[var(--shadow-glow)]"
              >
                {playingAudio1 ? (
                  <Pause className="w-8 h-8 text-primary" fill="currentColor" />
                ) : (
                  <Play className="w-8 h-8 text-primary" fill="currentColor" />
                )}
              </button>
              <audio
                ref={audio1Ref}
                onEnded={() => setPlayingAudio1(false)}
                src="/audios/ferreiro-miseria.mp3"
              />
              <h3 className="text-2xl font-bold text-primary">O Ferreiro Miséria</h3>
              <p className="text-foreground/80 text-center leading-relaxed">
                A história épica do ferreiro iniciante que mais caía do que batia, mas nunca desistiu. 
                Cada morte era uma lição, cada erro uma risada compartilhada com quem teve paciência de ensinar.
              </p>
            </div>
          </motion.div>

          {/* Audio 2 - A Lost Dynasty */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-[var(--gradient-card)] p-8 rounded-xl border border-border shadow-[var(--shadow-card)]"
          >
            <div className="flex flex-col items-center gap-4">
              <button
                onClick={toggleAudio2}
                className="w-20 h-20 rounded-full bg-accent/10 hover:bg-accent/20 border-2 border-accent flex items-center justify-center transition-all hover:scale-110 shadow-[var(--shadow-glow)]"
              >
                {playingAudio2 ? (
                  <Pause className="w-8 h-8 text-accent" fill="currentColor" />
                ) : (
                  <Play className="w-8 h-8 text-accent" fill="currentColor" />
                )}
              </button>
              <audio
                ref={audio2Ref}
                onEnded={() => setPlayingAudio2(false)}
                src="/audios/lost-dynasty.mp3"
              />
              <h3 className="text-2xl font-bold text-accent">A Lost Dynasty</h3>
              <p className="text-foreground/80 text-center leading-relaxed">
                Com a voz de locutor profissional, Babylon narra a glória de nossa guild. 
                A Lost Dynasty, que conquistou territórios, enfrentou desafios e deixou sua marca na história de Ragnarok.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Memories;
