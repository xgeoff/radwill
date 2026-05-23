import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useRef } from "react";
import { ArrowRight, Lock, MapPin, Anchor } from "lucide-react";

const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 1.2, delay, ease: [0.16, 1, 0.3, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

export default function Polaris() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const yHero = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div className="min-h-[100dvh] w-full bg-black text-zinc-100 overflow-x-hidden selection:bg-zinc-800 selection:text-white font-sans" ref={containerRef}>
      
      {/* Hero Section */}
      <section className="relative h-[110vh] w-full flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black z-0">
          <div className="absolute inset-0 bg-gradient-radial from-zinc-900/20 via-black to-black opacity-80 blur-3xl"></div>
          {/* Subtle noise texture */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-screen pointer-events-none"></div>
        </div>
        
        <motion.div 
          className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center justify-center pt-20"
          style={{ y: yHero, opacity: opacityHero }}
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.98, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-xl mx-auto aspect-[1.58/1] perspective-1000 mb-16"
          >
            <div
              className="w-full h-full transform-style-3d shadow-2xl rounded-2xl md:rounded-3xl border border-white/5"
              style={{
                backgroundImage: `url(${import.meta.env.BASE_URL}images/card-polaris.png)`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                boxShadow: '0 40px 100px -20px rgba(0,0,0,1), 0 0 40px rgba(255, 255, 255, 0.05)'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-50 rounded-2xl md:rounded-3xl mix-blend-overlay"></div>
            </div>
          </motion.div>

          <div className="text-center max-w-3xl mx-auto">
            <motion.h1 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2, delay: 0.5 }}
              className="font-serif text-3xl md:text-5xl lg:text-6xl tracking-wide text-zinc-100 font-normal mb-8"
            >
              Guidance at the highest level.
            </motion.h1>
          </div>
        </motion.div>
      </section>

      {/* Access Section */}
      <section className="py-40 px-6 md:px-12 bg-black relative border-t border-zinc-900">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <div className="mb-8 inline-flex items-center justify-center w-12 h-12 rounded-full border border-zinc-800 bg-zinc-950">
              <Lock className="w-4 h-4 text-zinc-400" />
            </div>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-8 font-normal tracking-wide text-zinc-100">
              Aster Polaris is extended by invitation.
            </h2>
            <p className="text-zinc-400 text-lg mb-12 font-light tracking-wide leading-relaxed max-w-2xl mx-auto">
              Reserved for those charting their own course. Polaris is our most exclusive offering, providing unprecedented access, dedicated service, and seamless integration with Commonwealth Private.
            </p>
            <Button variant="outline" className="h-12 px-8 rounded-none border-zinc-700 bg-transparent text-zinc-300 hover:bg-white hover:text-black transition-colors duration-500 font-sans tracking-widest uppercase text-xs">
              Request Access
            </Button>
          </FadeIn>
        </div>
      </section>

      {/* Editorial 1: Private Aviation */}
      <section className="py-32 px-6 md:px-12 bg-[#050505]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <FadeIn className="order-2 lg:order-1">
            <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-8 font-normal tracking-wide text-zinc-100">
              Beyond the terminal.
            </h3>
            <div className="space-y-8 text-zinc-400 font-light leading-relaxed tracking-wide">
              <p>
                Polaris transcends traditional travel benefits. Gain access to dedicated private aviation terminals, bypass commercial security, and board directly from the tarmac.
              </p>
              <ul className="space-y-4 border-t border-zinc-900 pt-8">
                <li className="flex items-center gap-4">
                  <span className="w-1 h-1 bg-zinc-600 rounded-full"></span>
                  <span>Complimentary PS access for private terminals</span>
                </li>
                <li className="flex items-center gap-4">
                  <span className="w-1 h-1 bg-zinc-600 rounded-full"></span>
                  <span>Preferred pricing on private charter flights</span>
                </li>
                <li className="flex items-center gap-4">
                  <span className="w-1 h-1 bg-zinc-600 rounded-full"></span>
                  <span>Global elite status at premier hotel collections</span>
                </li>
              </ul>
            </div>
          </FadeIn>
          <FadeIn delay={0.2} className="order-1 lg:order-2">
            <div className="aspect-[4/5] lg:aspect-[3/4] overflow-hidden grayscale">
              <img 
                src={`${import.meta.env.BASE_URL}images/polaris-jet.png`} 
                alt="Private aviation at night" 
                className="w-full h-full object-cover scale-105"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Editorial 2: Commonwealth Integration */}
      <section className="py-32 px-6 md:px-12 bg-black">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <FadeIn>
            <div className="aspect-[4/5] lg:aspect-square overflow-hidden bg-zinc-950 grayscale border border-zinc-900">
              <img 
                src={`${import.meta.env.BASE_URL}images/polaris-lounge.png`} 
                alt="Exclusive private lounge" 
                className="w-full h-full object-cover scale-105"
              />
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="mb-6">
              <Anchor className="w-5 h-5 text-zinc-500" />
            </div>
            <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-8 font-normal tracking-wide text-zinc-100">
              The Commonwealth connection.
            </h3>
            <div className="space-y-8 text-zinc-400 font-light leading-relaxed tracking-wide">
              <p>
                Polaris serves as a bridge into Commonwealth Private. Members receive a dedicated relationship manager to handle all financial inquiries, wire transfers, and bespoke lending needs.
              </p>
              <ul className="space-y-4 border-t border-zinc-900 pt-8">
                <li className="flex items-center gap-4">
                  <span className="w-1 h-1 bg-zinc-600 rounded-full"></span>
                  <span>Direct line to a dedicated private banker</span>
                </li>
                <li className="flex items-center gap-4">
                  <span className="w-1 h-1 bg-zinc-600 rounded-full"></span>
                  <span>Bespoke wealth management experiences</span>
                </li>
                <li className="flex items-center gap-4">
                  <span className="w-1 h-1 bg-zinc-600 rounded-full"></span>
                  <span>Curated investments and advisory access</span>
                </li>
              </ul>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* The Details */}
      <section className="py-32 bg-zinc-950 border-y border-zinc-900">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
            <FadeIn>
              <h4 className="font-serif text-3xl text-zinc-200 mb-4">120k</h4>
              <p className="font-sans text-xs uppercase tracking-widest text-zinc-500 mb-4">Onboarding Offer</p>
              <p className="text-sm text-zinc-400 font-light">Upon spending $10,000 in the first three months of membership.</p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <h4 className="font-serif text-3xl text-zinc-200 mb-4">$1,500</h4>
              <p className="font-sans text-xs uppercase tracking-widest text-zinc-500 mb-4">Annual Fee</p>
              <p className="text-sm text-zinc-400 font-light">An investment in unprecedented access and dedicated service.</p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <h4 className="font-serif text-3xl text-zinc-200 mb-4">Obsidian</h4>
              <p className="font-sans text-xs uppercase tracking-widest text-zinc-500 mb-4">Construction</p>
              <p className="text-sm text-zinc-400 font-light">Milled from a single block of steel with a matte obsidian finish.</p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="py-48 px-6 md:px-12 bg-black flex flex-col items-center justify-center text-center">
        <FadeIn>
          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl tracking-wide text-zinc-300 font-normal mb-12">
            When the time is right,<br/>we'll be here.
          </h2>
          <Button variant="outline" className="h-12 px-10 rounded-none border-zinc-700 bg-transparent text-zinc-300 hover:bg-white hover:text-black transition-colors duration-500 font-sans tracking-widest uppercase text-xs">
            Request Access
          </Button>
        </FadeIn>
      </section>

    </div>
  );
}