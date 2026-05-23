import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const dividerLine = {
  hidden: { scaleX: 0, transformOrigin: "left" },
  visible: { scaleX: 1, transition: { duration: 1.5, ease: [0.22, 1, 0.36, 1] } }
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground relative selection:bg-primary selection:text-primary-foreground">
      <div className="noise-overlay"></div>

      {/* Navigation (Minimal) */}
      <nav className="fixed top-0 left-0 w-full z-40 px-6 py-8 mix-blend-difference">
        <div className="max-w-[1400px] mx-auto flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 1.5 }}
            className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground"
          >
            Est. 1984
          </motion.div>
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 1.5, delay: 0.2 }}
            className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground"
          >
            New York &mdash; Geneva
          </motion.div>
        </div>
      </nav>

      {/* 1. Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-secondary/40 via-background to-background -z-10"></div>
        
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-[1400px] w-full flex flex-col items-center text-center space-y-12"
        >
          <motion.div variants={fadeUp} className="mb-12 relative">
            {/* Subtle glow behind logo */}
            <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full pointer-events-none"></div>
            <img 
              src={import.meta.env.BASE_URL + 'images/logo.png'} 
              alt="RW Radwill & Co" 
              className="h-24 md:h-32 object-contain relative z-10 drop-shadow-xl"
            />
          </motion.div>
          
          <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl lg:text-7xl leading-[1.1] max-w-4xl text-foreground">
            Capital allocated with <br />
            <span className="text-primary italic">ancient precision</span>.
          </motion.h1>
          
          <motion.p variants={fadeUp} className="text-muted-foreground text-sm md:text-base max-w-lg tracking-wide uppercase font-light">
            A private holding company for those who measure legacy in generations, not quarters.
          </motion.p>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center"
        >
          <div className="w-[1px] h-16 bg-gradient-to-b from-primary/50 to-transparent"></div>
        </motion.div>
      </section>

      {/* 2. The Thesis */}
      <section className="py-32 md:py-48 px-6 bg-card/30 border-t border-border/30">
        <div className="max-w-[1180px] mx-auto grid grid-cols-1 lg:grid-cols-[220px_minmax(0,1fr)] gap-16 lg:gap-20 items-start">
          <div className="flex flex-col justify-between">
            <motion.h2 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
              className="text-primary text-xs tracking-[0.3em] uppercase mb-8"
            >
              01 // The Thesis
            </motion.h2>
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={dividerLine}
              className="h-[1px] bg-border w-full hidden lg:block"
            ></motion.div>
          </div>
          
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
            className="space-y-12 max-w-3xl"
          >
            <motion.h3 variants={fadeUp} className="text-3xl md:text-5xl leading-tight">
              Quiet certainty in an era of unprecedented noise.
            </motion.h3>
            <motion.div variants={fadeUp} className="space-y-6 text-muted-foreground font-light text-lg leading-relaxed max-w-2xl">
              <p>
                Radwill & Co does not participate in the frantic velocity of modern markets. We observe. We wait. We act with overwhelming conviction when the architecture of a sector shifts.
              </p>
              <p>
                Our capital is patient because it is permanent. We are unbound by the artificial constraints of fund lifecycles or the demands of public market quarterly reporting. This structural advantage allows us to underwrite the truly generational.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 3. The Approach (Grid) */}
      <section className="py-32 md:py-48 px-6">
        <div className="max-w-[1400px] mx-auto">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
            className="mb-24"
          >
            <motion.h2 variants={fadeUp} className="text-primary text-xs tracking-[0.3em] uppercase mb-4">
              02 // Method
            </motion.h2>
            <motion.h3 variants={fadeUp} className="text-3xl md:text-5xl">
              Calculated weight.
            </motion.h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16">
            {[
              {
                title: "Absolute Discretion",
                desc: "We do not advertise our presence or our positions. The value of an asset often diminishes the moment it becomes known."
              },
              {
                title: "Concentrated Force",
                desc: "We do not dilute our conviction. When an opportunity meets our exact criteria, we deploy capital with decisive weight."
              },
              {
                title: "Structural Permanence",
                desc: "Our horizon is unbounded. We partner with operators and assets that require a decade to mature, not a quarter."
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} 
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 1, delay: i * 0.2 } }
                }}
                className="border-t border-border pt-8"
              >
                <h4 className="text-xl font-serif mb-4 text-foreground">{item.title}</h4>
                <p className="text-muted-foreground font-light leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Large Image/Atmosphere Section */}
      <section className="py-0 px-6 h-[80vh] flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-secondary">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background z-10"></div>
          {/* Abstract geometric representation of the firm's precision */}
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: `linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)`,
            backgroundSize: `100px 100px`,
            backgroundPosition: `center center`
          }}></div>
        </div>
        
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="relative z-20 text-center max-w-3xl"
        >
          <img 
            src={import.meta.env.BASE_URL + 'images/logo.png'} 
            alt="" 
            className="h-16 object-contain mx-auto mb-12 opacity-50 grayscale mix-blend-screen"
          />
          <h2 className="text-2xl md:text-4xl italic text-primary/80">
            "We build fortresses in the minds of our partners, long before a single stone is placed."
          </h2>
        </motion.div>
      </section>

      {/* 5. Domains */}
      <section className="py-32 md:py-48 px-6 bg-card/30">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
              <motion.h2 variants={fadeUp} className="text-primary text-xs tracking-[0.3em] uppercase mb-4">
                03 // Domains
              </motion.h2>
              <motion.h3 variants={fadeUp} className="text-3xl md:text-5xl">
                Spheres of influence.
              </motion.h3>
            </motion.div>
          </div>

          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer}
            className="border-y border-border divide-y divide-border"
          >
            {[
              { num: "I", name: "Hard Assets & Infrastructure", detail: "Physical permanence." },
              { num: "II", name: "Private Credit & Special Sits", detail: "Asymmetric structuring." },
              { num: "III", name: "Generational Buyouts", detail: "Legacy preservation." }
            ].map((domain, i) => (
              <motion.div 
                key={i}
                variants={fadeUp}
                className="group flex flex-col md:flex-row md:items-center justify-between py-12 px-4 hover:bg-secondary/20 transition-colors duration-500 cursor-default"
              >
                <div className="flex items-center gap-8 mb-4 md:mb-0">
                  <span className="text-muted-foreground font-mono text-xs">{domain.num}</span>
                  <h4 className="text-2xl md:text-4xl font-serif text-foreground group-hover:text-primary transition-colors duration-500">{domain.name}</h4>
                </div>
                <span className="text-muted-foreground tracking-widest uppercase text-xs font-light">{domain.detail}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 6. Footer / Contact */}
      <footer className="py-32 px-6 relative border-t border-border">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-16">
          
          <div className="space-y-8">
            <img 
              src={import.meta.env.BASE_URL + 'images/logo.png'} 
              alt="RW Radwill & Co" 
              className="h-12 object-contain"
            />
            <p className="text-muted-foreground text-sm max-w-xs leading-relaxed font-light">
              By strict appointment only. <br/>We do not accept unsolicited materials or inquiries.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 md:gap-24">
            <div>
              <h5 className="text-xs uppercase tracking-[0.2em] text-primary mb-6">New York</h5>
              <address className="not-italic text-sm text-muted-foreground font-light leading-loose">
                Seagram Building<br />
                375 Park Avenue<br />
                New York, NY 10152
              </address>
            </div>
            <div>
              <h5 className="text-xs uppercase tracking-[0.2em] text-primary mb-6">Geneva</h5>
              <address className="not-italic text-sm text-muted-foreground font-light leading-loose">
                Rue du Rhône 65<br />
                1204 Genève<br />
                Switzerland
              </address>
            </div>
          </div>
          
        </div>
        
        <div className="max-w-[1400px] mx-auto mt-32 pt-8 border-t border-border/30 flex flex-col md:flex-row justify-between text-xs text-muted-foreground/50 tracking-wider">
          <span>&copy; {new Date().getFullYear()} RW Radwill & Co. All rights reserved.</span>
          <span className="mt-2 md:mt-0">Confidential. Do not distribute.</span>
        </div>
      </footer>
    </div>
  );
}
