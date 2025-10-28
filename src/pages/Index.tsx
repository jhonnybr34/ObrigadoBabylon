import Hero from "@/components/Hero";
import Timeline from "@/components/Timeline";
import Memories from "@/components/Memories";
import FinalMessage from "@/components/FinalMessage";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <Timeline />
      <Memories />
      <FinalMessage />
    </main>
  );
};

export default Index;
