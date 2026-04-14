import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Car, Users, MapPin, Globe, Leaf, Rocket, Shield, 
  Cpu, DollarSign, MessageCircle, ArrowRight, CheckCircle2, 
  Menu, X, ChevronDown, PlayCircle, Loader2, Lock, FileText, Send, Phone
} from "lucide-react";
import PrototypeModel from "./components/PrototypeModel";


// --- Sub-Components ---

const FeatureCard = ({ icon: Icon, title, description, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="glass-card p-8 hover:bg-white/10 transition-colors group"
  >
    <div className="w-12 h-12 bg-indigo-500/20 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
      <Icon className="text-indigo-400" size={24} />
    </div>
    <h3 className="text-xl font-display font-semibold mb-3">{title}</h3>
    <p className="text-slate-400 leading-relaxed">{description}</p>
  </motion.div>
);

const StatItem = ({ label, value, icon: Icon }) => (
  <div className="flex flex-col items-center text-center p-6">
    <Icon className="text-emerald-400 mb-4" size={32} />
    <span className="text-4xl font-display font-bold mb-2">{value}</span>
    <span className="text-slate-400 text-sm">{label}</span>
  </div>
);

const Modal = ({ isOpen, onClose, title, children }) => (
  <AnimatePresence>
    {isOpen && (
      <div className="fixed inset-0 z-[60] flex items-center justify-center p-6">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        />
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-lg glass-card p-8 bg-slate-900 border border-white/10 shadow-2xl overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-4">
            <button onClick={onClose} className="text-slate-400 hover:text-white transition-colors">
              <X size={24} />
            </button>
          </div>
          <h2 className="text-2xl font-display font-bold mb-6">{title}</h2>
          {children}
        </motion.div>
      </div>
    )}
  </AnimatePresence>
);

// --- Main App ---

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isInvestorModalOpen, setIsInvestorModalOpen] = useState(false);
  const [isDataRoomRequestOpen, setIsDataRoomRequestOpen] = useState(false);
  const [isPrototypeOpen, setIsPrototypeOpen] = useState(false);
  const [formState, setFormState] = useState("idle"); // idle | submitting | success

  
  const [inquiryData, setInquiryData] = useState({
    name: "",
    firm: "",
    email: "",
    checkSize: ""
  });

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSendInquiry = (e) => {
    e.preventDefault();
    setFormState("submitting");
    
    // Simulate API call
    setTimeout(() => {
      setFormState("success");
      console.log("Inquiry sent to innotechat@gmail.com:", inquiryData);
      
      // Auto-close after success
      setTimeout(() => {
        setIsInvestorModalOpen(false);
        setIsDataRoomRequestOpen(false);
        setFormState("idle");
        setInquiryData({ name: "", firm: "", email: "", checkSize: "" });
      }, 2000);
    }, 1500);
  };

  const navLinks = [
    { name: "Vision", href: "#vision" },
    { name: "Product", href: "#product" },
    { name: "Prototype", onClick: () => setIsPrototypeOpen(true) },
    { name: "Technology", href: "#tech" },
    { name: "Impact", href: "#impact" },
    { name: "Docs", onClick: () => setIsDataRoomRequestOpen(true) },
  ];

  return (
    <div className="min-h-screen">
      <div className="gradient-mesh" />

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass-nav py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center">
              <Rocket size={20} className="text-white" />
            </div>
            <span className="text-2xl font-display font-bold tracking-tight">OnTheGo</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              link.onClick ? (
                <button key={link.name} onClick={link.onClick} className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
                  {link.name}
                </button>
              ) : (
                <a key={link.name} href={link.href} className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
                  {link.name}
                </a>
              )
            ))}
            <button 
              onClick={() => setIsInvestorModalOpen(true)}
              className="px-5 py-2 bg-white text-slate-950 text-sm font-semibold rounded-full hover:bg-slate-200 transition-colors"
            >
              Invest Now
            </button>
          </div>

          <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed top-[72px] left-0 w-full bg-slate-900 border-b border-white/10 z-40 overflow-hidden md:hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                link.onClick ? (
                  <button key={link.name} onClick={() => { link.onClick(); setMobileMenuOpen(false); }} className="text-lg font-medium text-slate-300 text-left">
                    {link.name}
                  </button>
                ) : (
                  <a key={link.name} href={link.href} className="text-lg font-medium text-slate-300" onClick={() => setMobileMenuOpen(false)}>
                    {link.name}
                  </a>
                )
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section id="vision" className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-indigo-300 text-sm font-medium mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            Seed Round Open - ₹2 Crore Opportunity
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-tight mb-8"
          >
            A <span className="text-gradient">Real-Time</span> <br />
            Mobility Network
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-3xl text-lg md:text-xl text-slate-400 leading-relaxed mb-12"
          >
            Every day, millions of cars travel with empty seats. OnTheGo activates this wasted capacity, 
            connecting drivers already on the road with travelers heading the same way.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-6"
          >
            <button onClick={() => setIsInvestorModalOpen(true)} className="btn-primary flex items-center gap-2">
              Invest Now <ArrowRight size={18} />
            </button>
            <button onClick={() => setIsDataRoomRequestOpen(true)} className="btn-outline flex items-center gap-2">
              Request Data Room <Lock size={18} />
            </button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-20 animate-bounce cursor-pointer text-slate-500"
            onClick={() => document.getElementById('product')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <ChevronDown size={32} />
          </motion.div>
        </div>
      </section>

      {/* Product Innovation */}
      <section id="product" className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Product Innovation</h2>
            <p className="max-w-2xl text-slate-400 text-lg">
              We aren't a taxi service. We are a dynamic infrastructure layer for modern commuters.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard 
              delay={0.1}
              icon={Car}
              title="Live Drive Mode"
              description="Drivers broadcast availability while in motion. No pre-scheduling, just instant cost-sharing."
            />
            <FeatureCard 
              delay={0.2}
              icon={MapPin}
              title="Route Matching"
              description="AI analyzes path intersections in seconds, ensuring drivers never detour more than 5 minutes."
            />
            <FeatureCard 
              delay={0.3}
              icon={Users}
              title="Commuter Circles"
              description="Build trust with location-based groups, verified office colleagues, and private social circles."
            />
          </div>
        </div>
      </section>

      {/* Prototype Placeholder */}
      <section id="prototype" className="py-24 px-6 bg-slate-900/50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-4">Functional Prototype</h2>
            <p className="text-slate-400">Experience the interface that redefine mobility.</p>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            onClick={() => setIsPrototypeOpen(true)}
            className="relative aspect-video glass-card overflow-hidden group cursor-pointer"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-purple-600/20 group-hover:opacity-100 opacity-50 transition-opacity" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 space-y-4">
              <div className="w-20 h-20 bg-indigo-600 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                <PlayCircle size={40} className="text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Launch Interactive Prototype</h3>
                <p className="text-slate-300 mt-2">Professional MVP simulation for Driver & Passenger discovery modes.</p>
              </div>
              <div className="px-4 py-1.5 bg-indigo-500/20 border border-indigo-500/30 rounded text-xs text-indigo-300 font-mono">
                [CLICK TO OPEN PRODUCTION PREVIEW]
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technology & Infrastructure */}
      <section id="tech" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 capitalize">Real-Time Infrastructure</h2>
              <ul className="space-y-6">
                {[
                  { title: "Proprietary AI Engine", desc: "Low-latency spatial matching processing thousands of location updates per second.", icon: Cpu },
                  { title: "Maps Integration", desc: "Advanced routing APIs for traffic-aware ETAs and road-snapping precision.", icon: Globe },
                  { title: "Trust-Score Safety", desc: "Multi-layered verification and live ride tracking systems.", icon: Shield },
                  { title: "Voice Coordination", desc: "Integrated communication layer for seamless driver-passenger handshakes.", icon: MessageCircle },
                ].map((item, i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="mt-1"><CheckCircle2 className="text-indigo-400" size={20} /></div>
                    <div>
                      <h4 className="font-semibold text-lg">{item.title}</h4>
                      <p className="text-slate-400">{item.desc}</p>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>
            <div className="relative glass-card p-12 aspect-square flex items-center justify-center overflow-hidden">
               <div className="absolute inset-0 opacity-10">
                 <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-500 via-transparent to-transparent animate-pulse" />
               </div>
               <div className="text-center relative z-10">
                 <div className="text-indigo-400 mb-6 flex justify-center"><Cpu size={64} /></div>
                 <h3 className="text-3xl font-display font-bold mb-4">Infrastructure Core</h3>
                 <p className="text-slate-400">Continuous Processing Layer</p>
                 <div className="mt-8 flex gap-2 justify-center">
                    <div className="h-1 w-8 bg-indigo-500 rounded-full animate-pulse" />
                    <div className="h-1 w-8 bg-purple-500 rounded-full animate-pulse delay-75" />
                    <div className="h-1 w-8 bg-emerald-500 rounded-full animate-pulse delay-150" />
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Market Impact & Sustainability */}
      <section id="impact" className="py-24 px-6 bg-brand-canvas relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Environmental Impact</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Sustainable urban mobility isn't just a goal; it's our direct output.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12 bg-white/5 border border-white/10 rounded-3xl p-12 backdrop-blur-sm">
            <StatItem icon={Leaf} value="40%" label="Reduction in per-user CO2" />
            <StatItem icon={Car} value="500K+" label="Projected Monthly Liters Saved" />
            <StatItem icon={Globe} value="Net Zero" label="Target Corporate Mobility" />
          </div>
        </div>
      </section>

      {/* Investment CTA */}
      <section className="py-24 px-6 relative">
         <div className="max-w-4xl mx-auto glass-card p-12 md:p-20 text-center relative overflow-hidden">
           <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/20 blur-[100px] -mr-32 -mt-32" />
           <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-600/10 blur-[100px] -ml-32 -mb-32" />
           
           <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">Join the Movement</h2>
           <p className="text-xl text-slate-300 mb-12">
             We are building the future of shared mobility. Explore our ₹2 Crore seed investment opportunity.
           </p>
           
           <div className="flex flex-col sm:flex-row gap-6 justify-center">
             <button onClick={() => setIsInvestorModalOpen(true)} className="btn-primary">Invest Now</button>
             <button onClick={() => setIsDataRoomRequestOpen(true)} className="btn-outline flex items-center gap-2 justify-center">
               <Lock size={18} /> Request Data Room
             </button>
           </div>
         </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:row items-center justify-between gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
              <Rocket size={16} className="text-white" />
            </div>
            <span className="text-xl font-display font-bold tracking-tight">OnTheGo</span>
          </div>
          
          <div className="flex gap-8 text-sm text-slate-500">
             <a href="mailto:innotechat@gmail.com" className="hover:text-white transition-colors flex items-center gap-2">
               <MessageCircle size={14} /> innotechat@gmail.com
             </a>
             <a href="https://wa.me/918533899999" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2">
               <Phone size={14} /> WhatsApp
             </a>
          </div>
          
          <div className="flex gap-6 text-sm text-slate-500">
             <a href="#" className="hover:text-white transition-colors">Twitter</a>
             <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          </div>
          
          <p className="text-slate-500 text-sm italic">
            © 2026 OnTheGo Mobility. Verified Foundation.
          </p>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/918533899999" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-[100] bg-emerald-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform active:scale-95 group flex items-center gap-2"
      >
        <Phone size={24} />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 font-semibold whitespace-nowrap">
          WhatsApp Us
        </span>
      </a>

      {/* INVESTOR INQUIRY MODAL */}
      <Modal 
        isOpen={isInvestorModalOpen} 
        onClose={() => setIsInvestorModalOpen(false)}
        title="Seed Round Inquiry"
      >
        {formState === "success" ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="text-emerald-400" size={32} />
            </div>
            <h3 className="text-xl font-bold">Inquiry Sent!</h3>
            <p className="text-slate-400">The founding team will reach out shortly.</p>
            <div className="pt-4 space-y-2">
              <a href="mailto:innotechat@gmail.com" className="block text-indigo-400 font-medium">innotechat@gmail.com</a>
              <a href="https://wa.me/918533899999" target="_blank" rel="noopener noreferrer" className="block text-emerald-400 font-medium">Verified WhatsApp Support</a>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSendInquiry} className="space-y-4">
            <div className="space-y-1">
              <label className="text-xs font-semibold uppercase tracking-wider text-slate-500">Full Name</label>
              <input required value={inquiryData.name} onChange={(e) => setInquiryData({...inquiryData, name: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-lg p-3 outline-none focus:border-indigo-500 transition-colors" placeholder="Jane Doe" />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-semibold uppercase tracking-wider text-slate-500">Firm / Entity</label>
              <input required value={inquiryData.firm} onChange={(e) => setInquiryData({...inquiryData, firm: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-lg p-3 outline-none focus:border-indigo-500 transition-colors" placeholder="Sequoia Capital / Angel" />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-semibold uppercase tracking-wider text-slate-500">Work Email</label>
              <input required type="email" value={inquiryData.email} onChange={(e) => setInquiryData({...inquiryData, email: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-lg p-3 outline-none focus:border-indigo-500 transition-colors" placeholder="jane@firm.com" />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-semibold uppercase tracking-wider text-slate-500">Estimated Check Size (₹)</label>
              <select value={inquiryData.checkSize} onChange={(e) => setInquiryData({...inquiryData, checkSize: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-lg p-3 outline-none focus:border-indigo-500 transition-colors">
                <option value="">Select Range</option>
                <option value="5-10L">₹5L - ₹10L</option>
                <option value="10-25L">₹10L - ₹25L</option>
                <option value="25-50L">₹25L - ₹50L</option>
                <option value="50L+">₹50L+</option>
              </select>
            </div>
            <button disabled={formState === "submitting"} className="w-full btn-primary mt-4 flex items-center justify-center gap-2">
              {formState === "submitting" ? <Loader2 className="animate-spin" size={20} /> : <Send size={20} />}
              {formState === "submitting" ? "Sending..." : "Submit Inquiry"}
            </button>
          </form>
        )}
      </Modal>

      {/* DATA ROOM REQUEST MODAL */}
      <Modal 
        isOpen={isDataRoomRequestOpen} 
        onClose={() => setIsDataRoomRequestOpen(false)}
        title="Request Data Room Access"
      >
        {formState === "success" ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 bg-indigo-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Lock className="text-indigo-400" size={32} />
            </div>
            <h3 className="text-xl font-bold">Access Requested</h3>
            <p className="text-slate-400">A security link to the Virtual Data Room will be sent to your work email shortly after verification.</p>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="p-4 glass-card bg-indigo-500/5 flex gap-4">
               <FileText className="text-indigo-400 shrink-0" size={24} />
               <div className="text-sm">
                 <p className="font-semibold">Documents Included:</p>
                 <ul className="text-slate-400 list-disc list-inside mt-2 space-y-1">
                   <li>Pitch Deck Narrative</li>
                   <li>Technical Architecture Brief</li>
                   <li>Unit Economics & Projections</li>
                   <li>Compliance & Legal Structure</li>
                 </ul>
               </div>
            </div>
            <form onSubmit={handleSendInquiry} className="space-y-4">
              <div className="space-y-1">
                <label className="text-xs font-semibold uppercase tracking-wider text-slate-500">Work Email</label>
                <input required type="email" value={inquiryData.email} onChange={(e) => setInquiryData({...inquiryData, email: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-lg p-3 outline-none focus:border-indigo-500 transition-colors" placeholder="jane@firm.com" />
              </div>
              <button disabled={formState === "submitting"} className="w-full btn-primary flex items-center justify-center gap-2">
                {formState === "submitting" ? <Loader2 className="animate-spin" size={20} /> : <Rocket size={20} />}
                {formState === "submitting" ? "Verifying..." : "Request Secure Link"}
              </button>
            </form>
          </div>
        )}
      </Modal>

      {/* PROTOTYPE MODAL */}
      <AnimatePresence>
        {isPrototypeOpen && (
          <PrototypeModel onClose={() => setIsPrototypeOpen(false)} />
        )}
      </AnimatePresence>

    </div>
  );
}
