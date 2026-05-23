import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Smartphone, ShieldCheck, Zap, Globe, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  const logoUrl = import.meta.env.BASE_URL + "images/logo.png";
  const mockupUrl = import.meta.env.BASE_URL + "images/mockup-hero.png";
  const lifestyleUrl = import.meta.env.BASE_URL + "images/lifestyle-pay.png";

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <img src={logoUrl} alt="Aster Logo" className="h-8 w-8 object-contain" />
            <span className="font-bold text-xl tracking-tight">Aster</span>
          </Link>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <a href="#features" className="hover:text-foreground transition-colors">Features</a>
            <a href="#card" className="hover:text-foreground transition-colors">The Card</a>
            <a href="#security" className="hover:text-foreground transition-colors">Security</a>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="hidden sm:inline-flex font-semibold">Log In</Button>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold rounded-full px-6">
              Get Started
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-secondary/40 via-background to-background" />
        <div className="absolute top-0 right-0 -z-10 w-[800px] h-[800px] bg-accent/10 rounded-full blur-[120px] opacity-50 translate-x-1/3 -translate-y-1/3" />
        
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/20 text-primary text-sm font-semibold mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Now accepting new members
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
              Banking, but make it <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">vibrant.</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-lg">
              The digital-first bank for how you actually live and spend. Instant, clear, and perfectly precise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-foreground text-background hover:bg-foreground/90 rounded-full text-lg h-14 px-8">
                Open Account
              </Button>
              <Button size="lg" variant="outline" className="rounded-full text-lg h-14 px-8">
                Explore Features
              </Button>
            </div>
            <p className="mt-6 text-sm text-muted-foreground font-medium flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-primary" />
              Powered by Commonwealth. FDIC Insured.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative lg:h-[700px] flex items-center justify-center"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-[3rem] blur-3xl opacity-30" />
            <img 
              src={mockupUrl} 
              alt="Aster App Interface" 
              className="relative z-10 w-full max-w-[400px] drop-shadow-2xl object-contain"
              onError={(e) => {
                e.currentTarget.src = "https://images.unsplash.com/photo-1616348436168-de43ad0db179?auto=format&fit=crop&q=80&w=800";
              }}
            />
          </motion.div>
        </div>
      </section>

      {/* Speed & Simplicity */}
      <section id="features" className="py-24 bg-card border-y border-border/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Designed for velocity.</h2>
            <p className="text-lg text-muted-foreground">
              We stripped away the branches, the fees, and the waiting. What's left is a beautifully fast financial tool.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="w-6 h-6 text-primary" />,
                title: "Instant Everything",
                description: "Real-time notifications, instant card freezing, and lightning-fast transfers."
              },
              {
                icon: <Globe className="w-6 h-6 text-accent" />,
                title: "No Borders",
                description: "Spend globally with zero foreign transaction fees and real exchange rates."
              },
              {
                icon: <Smartphone className="w-6 h-6 text-chart-5" />,
                title: "Digital Native",
                description: "Add to Apple Wallet instantly. Virtual cards generated on demand for secure online shopping."
              }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="p-8 rounded-3xl bg-background border border-border/50 shadow-sm hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 rounded-2xl bg-muted flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Card / Lifestyle */}
      <section id="card" className="py-32 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1 relative"
            >
              <div className="aspect-square md:aspect-[4/3] rounded-[2.5rem] overflow-hidden relative">
                <img 
                  src={lifestyleUrl} 
                  alt="Using Aster card" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-8 -right-8 bg-background p-6 rounded-3xl shadow-xl border border-border/50 max-w-xs hidden md:block"
              >
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <CreditCard className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold">Payment Sent</p>
                    <p className="text-sm text-muted-foreground">Blue Bottle Coffee</p>
                  </div>
                </div>
                <div className="text-2xl font-bold mt-4">$6.50</div>
              </motion.div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">A card that matches your energy.</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                The Aster physical card isn't just payment—it's a statement. Crafted from heavy-gauge recycled materials with our signature gradient edge. It feels substantial, because your money is.
              </p>
              <ul className="space-y-4 mb-10">
                {["Contactless ready", "Customizable limits", "Instant freeze/unfreeze", "Push notifications for every swipe"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 font-medium">
                    <div className="w-6 h-6 rounded-full bg-secondary/30 flex items-center justify-center text-primary">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <Button className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90">
                Get Your Card
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust & Security */}
      <section id="security" className="py-24 bg-foreground text-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Serious security, <br/>friendly face.</h2>
              <p className="text-muted/80 text-lg leading-relaxed mb-8">
                Aster is the modern interface, but under the hood, your money is held by Commonwealth. That means institutional-grade security and full FDIC insurance up to $250,000.
              </p>
              <div className="flex items-center gap-4">
                <img src={logoUrl} alt="Aster" className="h-8 w-8 object-contain brightness-0 invert" />
                <div className="w-px h-8 bg-border/30" />
                <span className="font-semibold text-xl tracking-tight text-white/90">COMMONWEALTH</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { title: "FDIC Insured", value: "Up to $250k" },
                { title: "Encryption", value: "Bank-level 256-bit" },
                { title: "Support", value: "24/7 In-app" },
                { title: "Uptime", value: "99.99%" }
              ].map((stat, i) => (
                <div key={i} className="p-6 rounded-2xl bg-background/5 border border-white/10">
                  <div className="text-sm text-muted/60 mb-2 font-medium uppercase tracking-wider">{stat.title}</div>
                  <div className="text-xl font-bold">{stat.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">Ready for better banking?</h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Join thousands of others who have upgraded their financial lives. It takes exactly 3 minutes to open an account.
          </p>
          <Button size="lg" className="bg-foreground text-background hover:bg-foreground/90 rounded-full text-xl h-16 px-10">
            Open Account Now <ArrowRight className="ml-2 w-6 h-6" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src={logoUrl} alt="Aster Logo" className="h-6 w-6 object-contain grayscale" />
            <span className="font-bold text-lg tracking-tight text-muted-foreground">Aster</span>
          </div>
          <div className="flex gap-6 text-sm text-muted-foreground font-medium">
            <a href="#" className="hover:text-foreground">Terms</a>
            <a href="#" className="hover:text-foreground">Privacy</a>
            <a href="#" className="hover:text-foreground">Security</a>
          </div>
          <p className="text-xs text-muted-foreground text-center md:text-right max-w-xs">
            Aster is a financial technology company, not a bank. Banking services provided by Commonwealth, Member FDIC.
          </p>
        </div>
      </footer>
    </div>
  );
}