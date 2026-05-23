import { Switch, Route, Router as WouterRouter, Link, useLocation } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Plane, Utensils, Calendar } from "lucide-react";
import { useRef } from "react";
import NotFound from "@/pages/not-found";
import Polaris from "@/pages/polaris";

const queryClient = new QueryClient();

const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    className={className}
  >
    {children}
  </motion.div>
);

function TopNav() {
  const [location] = useLocation();
  const isPolaris = location === "/polaris";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6 md:px-12 flex justify-between items-center pointer-events-none mix-blend-difference">
      <div className="flex items-center gap-6 pointer-events-auto">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 md:w-10 md:h-10 relative">
            <div className="absolute inset-0 grid grid-cols-2 gap-0.5 transform rotate-45 transition-transform duration-500 group-hover:rotate-90">
              <div className="bg-white/80 w-full h-full rounded-sm"></div>
              <div className="bg-white/60 w-full h-full rounded-sm"></div>
              <div className="bg-white/90 w-full h-full rounded-sm"></div>
              <div className="bg-white/70 w-full h-full rounded-sm"></div>
            </div>
          </div>
          <span className="font-serif tracking-widest uppercase text-xs md:text-sm text-white font-medium hidden sm:block">Aster</span>
        </Link>
        <div className="h-4 w-px bg-white/30 hidden sm:block"></div>
        <div className="flex gap-4">
          <Link 
            href="/" 
            className={`font-sans tracking-wider uppercase text-xs transition-colors duration-300 ${!isPolaris ? "text-white font-semibold" : "text-white/50 hover:text-white"}`}
          >
            Meridian
          </Link>
          <Link 
            href="/polaris" 
            className={`font-sans tracking-wider uppercase text-xs transition-colors duration-300 ${isPolaris ? "text-white font-semibold" : "text-white/50 hover:text-white"}`}
          >
            Polaris
          </Link>
        </div>
      </div>
      <Button variant="outline" className="pointer-events-auto rounded-full bg-transparent text-white border-white/20 hover:bg-white hover:text-black transition-all duration-300 font-sans tracking-wide text-xs h-10 px-6 uppercase">
        {isPolaris ? "Request Access" : "Apply Now"}
      </Button>
    </nav>
  );
}

function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const yHero = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div className="min-h-[100dvh] w-full bg-background text-foreground overflow-x-hidden selection:bg-primary selection:text-white" ref={containerRef}>
      
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-background z-0">
          <div className="absolute inset-0 bg-gradient-radial from-blue-600/40 via-purple-600/10 to-transparent opacity-80 blur-3xl"></div>
        </div>
        
        <motion.div 
          className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center justify-center"
          style={{ y: yHero, opacity: opacityHero }}
        >
          <div className="text-center max-w-4xl mx-auto mb-16 md:mb-24">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-5xl md:text-7xl lg:text-8xl xl:text-9xl leading-[1.1] tracking-tight text-balance font-medium mb-6"
            >
              Designed for a life <span className="italic text-gradient-aster font-semibold">in motion.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="font-sans text-lg md:text-xl text-muted-foreground max-w-xl mx-auto tracking-wide"
            >
              The flagship credit card by Aster. Global access, exceptional rewards, and unparalleled service.
            </motion.p>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-2xl mx-auto aspect-[1.58/1] perspective-1000 group"
          >
            <motion.div
              animate={{ 
                rotateY: [0, 5, -5, 0],
                rotateX: [0, -5, 5, 0]
              }}
              transition={{ 
                duration: 20, 
                repeat: Infinity,
                ease: "linear"
              }}
              className="w-full h-full transform-style-3d shadow-2xl rounded-2xl md:rounded-3xl"
              style={{
                backgroundImage: `url(${import.meta.env.BASE_URL}images/card-meridian.png)`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                boxShadow: '0 40px 80px -20px rgba(0,0,0,0.8), 0 0 50px rgba(37, 99, 235, 0.4)'
              }}
            >
              {/* Card specular highlight */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-2xl md:rounded-3xl mix-blend-overlay"></div>
            </motion.div>
          </motion.div>
        </motion.div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60 text-primary">
          <span className="text-[10px] uppercase tracking-[0.2em] font-sans font-semibold">Scroll to explore</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent"></div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 md:py-48 px-6 md:px-12 bg-background border-t border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <FadeIn>
            <h2 className="font-serif text-3xl md:text-5xl leading-tight mb-8">
              A line of longitude.<br/>The peak of achievement.
            </h2>
            <p className="font-sans text-lg md:text-xl text-muted-foreground leading-relaxed">
              Meridian represents a new paradigm in premium banking. It is not merely a payment instrument, but a passport to curated experiences, designed meticulously for those who define the culture.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Editorial Grid 1: Travel */}
      <section className="py-20 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute left-0 bottom-0 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">
          <FadeIn>
            <div className="aspect-[4/5] relative overflow-hidden bg-muted rounded-lg border border-white/5">
              <img 
                src={`${import.meta.env.BASE_URL}images/lounge.png`} 
                alt="Traveler in a departure lounge" 
                className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
              />
              <div className="absolute inset-0 bg-blue-900/10 mix-blend-overlay"></div>
            </div>
          </FadeIn>
          
          <div className="flex flex-col justify-center">
            <FadeIn delay={0.2}>
              <div className="mb-6 inline-flex items-center gap-3">
                <Plane className="w-5 h-5 text-primary" />
                <span className="font-sans uppercase tracking-[0.2em] text-xs font-semibold text-gradient-aster">Global Access</span>
              </div>
              <h3 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-8 leading-tight">The world, <br/><span className="italic text-gradient-aster font-semibold">unlocked.</span></h3>
              <p className="text-muted-foreground text-lg mb-10 leading-relaxed font-sans">
                Access over 1,300 airport lounges worldwide. Enjoy elevated status at premium hotel collections. No foreign transaction fees, ever.
              </p>
              
              <ul className="space-y-6 mb-12 border-t border-white/10 pt-8">
                {[
                  "5x points on flights booked directly or with Aster Travel",
                  "3x points on hotels and rental cars",
                  "$300 annual travel credit applied automatically",
                  "Priority Pass™ Select membership"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="mt-1 w-2 h-2 rounded-full bg-gradient-aster shrink-0 shadow-[0_0_8px_rgba(59,130,246,0.6)]" />
                    <span className="font-sans text-base">{item}</span>
                  </li>
                ))}
              </ul>
              
              <Button variant="link" className="p-0 h-auto text-primary hover:text-white font-sans text-sm uppercase tracking-wider group flex items-center gap-2">
                Explore Travel Benefits <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Editorial Grid 2: Dining */}
      <section className="py-20 px-6 md:px-12 bg-[#050b14] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay"></div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">
          <div className="flex flex-col justify-center order-2 lg:order-1">
            <FadeIn delay={0.2}>
              <div className="mb-6 inline-flex items-center gap-3">
                <Utensils className="w-5 h-5 text-primary" />
                <span className="font-sans uppercase tracking-[0.2em] text-xs font-semibold text-gradient-aster">Culinary Excellence</span>
              </div>
              <h3 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-8 leading-tight">Taste the <br/><span className="italic text-gradient-aster font-semibold">extraordinary.</span></h3>
              <p className="text-muted-foreground text-lg mb-10 leading-relaxed font-sans">
                Priority reservations at the world's most sought-after restaurants. Exclusive culinary events and a dedicated concierge to curate your dining itinerary.
              </p>
              
              <ul className="space-y-6 mb-12 border-t border-white/10 pt-8">
                {[
                  "4x points on dining, worldwide",
                  "Global Dining Access by Aster",
                  "$120 annual dining credit",
                  "Exclusive chef-curated experiences"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="mt-1 w-2 h-2 rounded-full bg-gradient-aster shrink-0 shadow-[0_0_8px_rgba(59,130,246,0.6)]" />
                    <span className="font-sans text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
          
          <FadeIn className="order-1 lg:order-2">
            <div className="aspect-[4/5] relative overflow-hidden bg-muted rounded-lg border border-white/5">
              <img 
                src={`${import.meta.env.BASE_URL}images/restaurant.png`} 
                alt="Elegant restaurant scene" 
                className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Editorial Grid 3: Lifestyle */}
      <section className="py-20 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute right-0 bottom-0 w-[800px] h-[800px] bg-pink-600/10 rounded-full blur-[120px] translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">
          <FadeIn>
            <div className="aspect-square lg:aspect-[4/5] relative overflow-hidden bg-muted rounded-lg border border-white/5">
              <img 
                src={`${import.meta.env.BASE_URL}images/skyline.png`} 
                alt="City skyline at dusk" 
                className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
              />
              <div className="absolute inset-0 bg-blue-900/10 mix-blend-overlay"></div>
            </div>
          </FadeIn>
          
          <div className="flex flex-col justify-center">
            <FadeIn delay={0.2}>
              <div className="mb-6 inline-flex items-center gap-3">
                <Calendar className="w-5 h-5 text-primary" />
                <span className="font-sans uppercase tracking-[0.2em] text-xs font-semibold text-gradient-aster">Curated Lifestyle</span>
              </div>
              <h3 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-8 leading-tight">Always on the <br/><span className="italic text-gradient-aster font-semibold">guest list.</span></h3>
              <p className="text-muted-foreground text-lg mb-10 leading-relaxed font-sans">
                Presale tickets to concerts, VIP sports packages, and cultural events. Meridian elevates your everyday with intelligent benefits.
              </p>
              
              <ul className="space-y-6 mb-12 border-t border-white/10 pt-8">
                {[
                  "2x points on all other purchases",
                  "24/7 Global Concierge",
                  "Purchase protection and extended warranty",
                  "Cell phone protection up to $800"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="mt-1 w-2 h-2 rounded-full bg-gradient-aster shrink-0 shadow-[0_0_8px_rgba(59,130,246,0.6)]" />
                    <span className="font-sans text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* The Details Section */}
      <section className="py-32 bg-[#030812] border-y border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-aster opacity-[0.05] mix-blend-screen"></div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            <FadeIn delay={0.1}>
              <div className="flex flex-col items-center text-center">
                <span className="font-serif text-4xl md:text-5xl mb-4 text-white">75k</span>
                <h4 className="font-sans font-semibold text-sm uppercase tracking-widest mb-2 text-gradient-aster">Bonus Points</h4>
                <p className="text-sm text-muted-foreground">Earn 75,000 bonus points after spending $4,000 in the first 3 months.</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="flex flex-col items-center text-center">
                <span className="font-serif text-4xl md:text-5xl mb-4 text-white">$395</span>
                <h4 className="font-sans font-semibold text-sm uppercase tracking-widest mb-2 text-gradient-aster">Annual Fee</h4>
                <p className="text-sm text-muted-foreground">Exceptional value easily offset by travel and dining credits.</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="flex flex-col items-center text-center">
                <span className="font-serif text-4xl md:text-5xl mb-4 text-white">0%</span>
                <h4 className="font-sans font-semibold text-sm uppercase tracking-widest mb-2 text-gradient-aster">Foreign Fees</h4>
                <p className="text-sm text-muted-foreground">No foreign transaction fees on any purchases made internationally.</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.4}>
              <div className="flex flex-col items-center text-center">
                <span className="font-serif text-4xl md:text-5xl mb-4 text-white">Metal</span>
                <h4 className="font-sans font-semibold text-sm uppercase tracking-widest mb-2 text-gradient-aster">Construction</h4>
                <p className="text-sm text-muted-foreground">Laser-etched dark metal core with a premium deep blue finish.</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-40 px-6 md:px-12 bg-background flex flex-col items-center justify-center text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-blue-600/20 via-transparent to-transparent opacity-80 blur-2xl"></div>
        
        <FadeIn className="relative z-10">
          <div className="w-16 h-16 mx-auto mb-10 relative">
            <div className="absolute inset-0 grid grid-cols-2 gap-1 transform rotate-45">
              <div className="bg-primary/80 w-full h-full rounded-sm shadow-[0_0_15px_rgba(37,99,235,0.5)]"></div>
              <div className="bg-blue-400/60 w-full h-full rounded-sm"></div>
              <div className="bg-purple-500/90 w-full h-full rounded-sm shadow-[0_0_15px_rgba(168,85,247,0.5)]"></div>
              <div className="bg-pink-500/70 w-full h-full rounded-sm"></div>
            </div>
          </div>
          
          <h2 className="font-serif text-5xl md:text-7xl mb-8">Elevate your trajectory.</h2>
          <p className="font-sans text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
            Join the collective of global travelers and tastemakers. Apply for the Aster Meridian today.
          </p>
          
          <Button size="lg" className="bg-primary text-white hover:bg-blue-600 h-14 px-10 rounded-full font-sans tracking-widest uppercase text-sm font-bold transition-all duration-300 shadow-[0_0_30px_rgba(37,99,235,0.4)] hover:shadow-[0_0_40px_rgba(37,99,235,0.6)]">
            Apply for Meridian
          </Button>
          
          <div className="mt-12 text-xs text-muted-foreground/60 max-w-xl mx-auto space-y-2">
            <p>Rates and fees apply. Variable APR 19.99% – 28.99% based on creditworthiness.</p>
            <p>Aster is a financial technology company, not a bank. Banking services provided by Commonwealth Bank, Member FDIC.</p>
          </div>
        </FadeIn>
      </section>
      
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/polaris" component={Polaris} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <TopNav />
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;