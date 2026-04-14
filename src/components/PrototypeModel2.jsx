import React, { useState, useEffect } from 'react';
import { 
  Play, MapPin, User, ShieldCheck, Navigation, Search, 
  CheckCircle2, ChevronRight, Mail, Lock, Phone, 
  ArrowLeft, Star, Share2, Gift, HelpCircle, 
  Clock, CreditCard, Settings, LogOut, Menu, X
} from 'lucide-react';

const PrototypeModel2 = ({ onClose }) => {
  // State Management for Navigation
  const [view, setView] = useState('onboarding'); // onboarding, login, signup, home, match, handshake, rating, profile, referrals, faq
  const [isActivating, setIsActivating] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Helper for UI Cards
  const GlassCard = ({ children, className = "", onClick = null }) => (
    <div 
      onClick={onClick}
      className={`backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl transition-all active:scale-95 ${className}`}
    >
      {children}
    </div>
  );

  // Navigation Logic
  const navigate = (target) => {
    setSidebarOpen(false);
    setView(target);
  };

  // Sub-Components
  const Sidebar = () => (
    <div className={`absolute inset-y-0 left-0 w-64 bg-[#0A0A1F]/95 backdrop-blur-2xl z-[60] transform transition-transform duration-300 border-r border-white/10 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
      <div className="p-8 pt-16 flex flex-col h-full">
        <div className="flex items-center gap-3 mb-10">
          <div className="w-12 h-12 rounded-2xl bg-emerald-500 flex items-center justify-center shadow-lg shadow-emerald-500/20">
            <Navigation className="text-white w-6 h-6" />
          </div>
          <div>
            <h2 className="font-bold">OnTheGo</h2>
            <p className="text-[10px] text-emerald-400 tracking-widest font-bold uppercase">Pro Driver</p>
          </div>
        </div>

        <nav className="space-y-4 flex-1">
          <button onClick={() => navigate('home')} className="flex items-center gap-4 w-full p-3 rounded-2xl hover:bg-white/5 text-white/70 hover:text-white transition-all">
            <MapPin size={20} /> <span className="text-sm font-medium">Dashboard</span>
          </button>
          <button onClick={() => navigate('profile')} className="flex items-center gap-4 w-full p-3 rounded-2xl hover:bg-white/5 text-white/70 hover:text-white transition-all">
            <User size={20} /> <span className="text-sm font-medium">My Profile</span>
          </button>
          <button onClick={() => navigate('referrals')} className="flex items-center gap-4 w-full p-3 rounded-2xl hover:bg-white/5 text-white/70 hover:text-white transition-all">
            <Gift size={20} /> <span className="text-sm font-medium">Refer & Earn</span>
          </button>
          <button onClick={() => navigate('faq')} className="flex items-center gap-4 w-full p-3 rounded-2xl hover:bg-white/5 text-white/70 hover:text-white transition-all">
            <HelpCircle size={20} /> <span className="text-sm font-medium">Support & FAQ</span>
          </button>
        </nav>

        <button onClick={() => navigate('onboarding')} className="flex items-center gap-4 w-full p-3 rounded-2xl text-red-400 hover:bg-red-400/10 transition-all mt-auto">
          <LogOut size={20} /> <span className="text-sm font-medium">Logout</span>
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-black/95 backdrop-blur-xl text-white flex flex-col items-center justify-center p-4 font-sans overflow-hidden fixed inset-0 z-[100] animate-in fade-in duration-300">
      
      {/* Close Button */}
      <button 
        onClick={onClose}
        className="absolute top-8 right-8 z-[110] p-3 rounded-full bg-white/5 border border-white/10 text-white/50 hover:text-white transition-all"
      >
        <X size={24} />
      </button>

      {/* Mock Smartphone Frame */}
      <div className="relative w-[340px] sm:w-[380px] h-[720px] sm:h-[800px] bg-black rounded-[50px] sm:rounded-[60px] border-[8px] border-[#1a1a2e] shadow-[0_0_100px_rgba(59,130,246,0.2)] overflow-hidden">

        
        {/* Dynamic Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-black rounded-b-3xl z-[70] flex items-center justify-center">
          <div className="w-12 h-1 bg-white/10 rounded-full"></div>
        </div>

        {/* Global Sidebar Overlay */}
        {sidebarOpen && <div onClick={() => setSidebarOpen(false)} className="absolute inset-0 bg-black/60 z-[55] backdrop-blur-sm animate-in fade-in duration-300" />}
        <Sidebar />

        {/* Header Bar (Conditional) */}
        {['home', 'profile', 'referrals', 'faq', 'rating'].includes(view) && (
          <div className="absolute top-10 inset-x-0 px-6 flex justify-between items-center z-50">
            <button onClick={() => setSidebarOpen(true)} className="p-2 rounded-xl bg-white/5 border border-white/10"><Menu size={20} /></button>
            <div className="text-xs font-bold tracking-widest uppercase text-white/40">OnTheGo</div>
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-emerald-500 to-blue-500 border border-white/20 overflow-hidden">
              <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="avatar" />
            </div>
          </div>
        )}

        <div className="h-full w-full relative">
          
          {/* VIEW: ONBOARDING */}
          {view === 'onboarding' && (
            <div className="h-full flex flex-col p-8 justify-end bg-gradient-to-t from-blue-900/40 via-[#050510] to-[#050510] animate-in fade-in duration-700">
              <div className="mb-12">
                <div className="w-16 h-16 bg-emerald-500 rounded-2xl flex items-center justify-center shadow-2xl mb-6">
                  <Navigation className="text-white w-8 h-8" />
                </div>
                <h1 className="text-4xl font-bold mb-4">The Future of <br/><span className="text-emerald-400">Urban Mobility</span></h1>
                <p className="text-white/50 leading-relaxed">Join the world's first AI-optimized, real-time carpooling network. Move smarter, save more.</p>
              </div>
              <div className="space-y-4 mb-8">
                <button onClick={() => setView('signup')} className="w-full py-4 bg-emerald-500 rounded-2xl font-bold text-black shadow-lg shadow-emerald-500/20 active:scale-95 transition-transform">Get Started</button>
                <button onClick={() => setView('login')} className="w-full py-4 bg-white/5 border border-white/10 rounded-2xl font-bold active:scale-95 transition-transform">Sign In</button>
              </div>
            </div>
          )}

          {/* VIEW: LOGIN */}
          {view === 'login' && (
            <div className="h-full p-8 flex flex-col animate-in slide-in-from-bottom duration-500">
              <button onClick={() => setView('onboarding')} className="mt-8 mb-8 p-2 w-10 h-10 rounded-full bg-white/5"><ArrowLeft size={20}/></button>
              <h2 className="text-3xl font-bold mb-2">Welcome Back</h2>
              <p className="text-white/40 mb-10 text-sm font-medium">Sign in to continue your journey.</p>
              
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-white/40 uppercase tracking-widest ml-1">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" size={18} />
                    <input type="email" placeholder="name@example.com" className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:border-emerald-500/50 transition-colors" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-white/40 uppercase tracking-widest ml-1">Password</label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" size={18} />
                    <input type="password" placeholder="••••••••" className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:border-emerald-500/50 transition-colors" />
                  </div>
                </div>
              </div>
              
              <button onClick={() => setView('home')} className="mt-12 w-full py-4 bg-emerald-500 rounded-2xl font-bold text-black shadow-lg shadow-emerald-500/20">Sign In</button>
              <p className="mt-6 text-center text-sm text-white/40">Don't have an account? <span onClick={() => setView('signup')} className="text-emerald-400 font-bold cursor-pointer">Sign Up</span></p>
            </div>
          )}

          {/* VIEW: SIGNUP */}
          {view === 'signup' && (
            <div className="h-full p-8 flex flex-col animate-in slide-in-from-bottom duration-500">
              <button onClick={() => setView('onboarding')} className="mt-8 mb-8 p-2 w-10 h-10 rounded-full bg-white/5"><ArrowLeft size={20}/></button>
              <h2 className="text-3xl font-bold mb-2">Join the Network</h2>
              <p className="text-white/40 mb-10 text-sm font-medium">Create your driver/passenger profile.</p>
              
              <div className="space-y-4 overflow-y-auto pr-2 scrollbar-hide">
                <div className="flex gap-4">
                  <div className="flex-1 space-y-1">
                    <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest ml-1">First Name</label>
                    <input type="text" placeholder="John" className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-4 focus:outline-none focus:border-emerald-500/50" />
                  </div>
                  <div className="flex-1 space-y-1">
                    <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest ml-1">Last Name</label>
                    <input type="text" placeholder="Doe" className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-4 focus:outline-none focus:border-emerald-500/50" />
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest ml-1">Mobile Number</label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" size={18} />
                    <input type="tel" placeholder="+1 (555) 000-0000" className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 focus:outline-none" />
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest ml-1">Password</label>
                  <input type="password" placeholder="••••••••" className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-4 focus:outline-none" />
                </div>
              </div>
              
              <button onClick={() => setView('home')} className="mt-12 w-full py-4 bg-emerald-500 rounded-2xl font-bold text-black">Complete Profile</button>
            </div>
          )}

          {/* VIEW: HOME (The original Scene 1 expanded) */}
          {view === 'home' && (
            <div className="h-full pt-24 px-6 pb-12 flex flex-col justify-between animate-in fade-in duration-500">
              <div className="space-y-1">
                <h3 className="text-white/40 text-xs font-bold uppercase tracking-widest">Current Status</h3>
                <h1 className="text-2xl font-bold">Ready to Drive</h1>
              </div>

              <div className="flex-1 flex items-center justify-center relative">
                 <div className={`absolute w-72 h-72 rounded-full bg-emerald-500/10 blur-[80px] transition-all duration-1000 ${isActivating ? 'scale-150 opacity-100' : 'scale-50 opacity-50'}`} />
                 <button 
                  onClick={() => {
                    setIsActivating(true);
                    setTimeout(() => {
                      setIsActivating(false);
                      setView('match');
                    }, 1500);
                  }}
                  className="group relative z-10 w-44 h-44 rounded-full bg-gradient-to-br from-emerald-500/20 to-emerald-700/20 border-4 border-emerald-500/50 flex flex-col items-center justify-center shadow-[0_0_80px_rgba(16,185,129,0.2)] transition-all hover:scale-105 active:scale-95"
                >
                  <div className={`absolute inset-0 rounded-full border-4 border-emerald-400/30 animate-ping ${isActivating ? 'block' : 'hidden'}`} />
                  <Play className={`w-12 h-12 ${isActivating ? 'text-white' : 'text-emerald-400'} fill-current mb-2`} />
                  <span className="text-[10px] font-bold tracking-widest uppercase text-emerald-400">
                    {isActivating ? 'Activating...' : 'Go Live'}
                  </span>
                </button>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <GlassCard className="p-4">
                  <p className="text-[10px] font-bold text-white/40 uppercase mb-1">Total Earnings</p>
                  <p className="text-xl font-bold">$1,240.50</p>
                </GlassCard>
                <GlassCard className="p-4">
                  <p className="text-[10px] font-bold text-white/40 uppercase mb-1">Daily Rides</p>
                  <p className="text-xl font-bold">12</p>
                </GlassCard>
              </div>

              <GlassCard className="p-5 flex items-center justify-between border-emerald-500/30">
                <div className="flex items-center gap-3">
                  <Navigation className="text-emerald-400" size={20} />
                  <div>
                    <p className="text-sm font-bold">Auto-Optimize Mode</p>
                    <p className="text-xs text-white/40 italic">Smart route pairing active</p>
                  </div>
                </div>
                <div className="w-12 h-6 bg-emerald-500 rounded-full p-1 flex items-center justify-end">
                  <div className="w-4 h-4 bg-white rounded-full shadow-sm" />
                </div>
              </GlassCard>
            </div>
          )}

          {/* VIEW: MATCH (Scene 2 Expanded) */}
          {view === 'match' && (
            <div className="h-full animate-in slide-in-from-right duration-500 relative bg-[#0A0A1F]">
              <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#3B82F6 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
              
              <div className="relative z-10 h-full flex flex-col p-6">
                <div className="mt-12 flex items-center justify-between">
                   <h2 className="text-xl font-bold">Perfect Match Found</h2>
                   <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-[10px] font-bold rounded-full">EN-ROUTE</span>
                </div>

                <div className="flex-1 flex flex-col justify-center">
                   <div className="relative h-64 w-full">
                      {/* Abstract Visual Map Representation */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-white/5 rounded-full animate-pulse" />
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-white/10 rounded-full animate-pulse delay-75" />
                      
                      {/* Connection Line */}
                      <div className="absolute top-1/4 right-1/4 w-4 h-4 bg-emerald-400 rounded-full shadow-[0_0_20px_rgba(16,185,129,0.5)]" />
                      <div className="absolute bottom-1/4 left-1/4 w-4 h-4 bg-blue-400 rounded-full shadow-[0_0_20px_rgba(59,130,246,0.5)]" />
                      <div className="absolute top-1/2 left-1/2 w-[2px] h-[100px] bg-gradient-to-t from-blue-400 to-emerald-400 rotate-45 -translate-x-1/2 -translate-y-1/2" />
                   </div>
                </div>

                <GlassCard className="p-6 mb-8 border-blue-500/40">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-gray-500 to-gray-700 border-2 border-blue-400 overflow-hidden">
                      <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Raj" alt="Raj" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Raj Kapoor</h4>
                      <div className="flex items-center gap-2">
                        <div className="flex text-yellow-500"><Star size={12} fill="currentColor" /><Star size={12} fill="currentColor" /><Star size={12} fill="currentColor" /><Star size={12} fill="currentColor" /><Star size={12} fill="currentColor" /></div>
                        <span className="text-[10px] text-white/40">(240+ Rides)</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3 pt-4 border-t border-white/10">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-blue-400" />
                      <p className="text-xs text-white/60">Pickup: Cyber City Mall, Entrance A</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-emerald-400" />
                      <p className="text-xs text-white/60">Drop: Global Tech Park, Building 7</p>
                    </div>
                  </div>

                  <div className="flex gap-4 mt-6">
                    <button onClick={() => setView('home')} className="flex-1 py-3 rounded-xl bg-white/5 text-sm font-bold">Reject</button>
                    <button onClick={() => setView('handshake')} className="flex-1 py-3 rounded-xl bg-blue-600 text-sm font-bold shadow-lg shadow-blue-600/20">Accept Match</button>
                  </div>
                </GlassCard>
              </div>
            </div>
          )}

          {/* VIEW: HANDSHAKE (Scene 3 Expanded) */}
          {view === 'handshake' && (
            <div className="h-full bg-[#050510] flex flex-col p-8 items-center justify-center animate-in zoom-in duration-500">
              <div className="w-24 h-24 rounded-full bg-emerald-500/10 flex items-center justify-center mb-8 border border-emerald-500/30">
                <ShieldCheck className="w-12 h-12 text-emerald-400 animate-bounce" />
              </div>
              <h2 className="text-2xl font-bold mb-2">Secure Match</h2>
              <p className="text-white/40 text-sm mb-10 text-center">Your passenger is waiting. Please verify the code upon arrival.</p>
              
              <div className="flex gap-4 mb-12">
                {['4', '9', '2', '1'].map((n, i) => (
                  <div key={i} className="w-16 h-20 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-4xl font-mono font-bold text-emerald-400">
                    {n}
                  </div>
                ))}
              </div>

              <div className="w-full space-y-4">
                <GlassCard className="p-4 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center"><Phone size={20} /></div>
                  <div>
                    <p className="text-xs font-bold text-white/40 uppercase">Call Passenger</p>
                    <p className="text-sm">Connect securely via VoIP</p>
                  </div>
                </GlassCard>
                <button onClick={() => setView('rating')} className="w-full py-5 bg-white text-black font-bold rounded-2xl shadow-xl">Complete Ride</button>
              </div>
            </div>
          )}

          {/* VIEW: RATING & FEEDBACK */}
          {view === 'rating' && (
            <div className="h-full p-8 pt-24 flex flex-col items-center animate-in slide-in-from-bottom duration-500">
               <div className="w-20 h-20 rounded-full bg-blue-500/20 flex items-center justify-center mb-6">
                 <CheckCircle2 className="text-blue-400 w-10 h-10" />
               </div>
               <h2 className="text-2xl font-bold mb-2">Ride Completed</h2>
               <p className="text-white/40 mb-10">Rate your experience with Raj</p>

               <div className="flex gap-2 mb-12">
                 {[1,2,3,4,5].map(s => (
                   <Star key={s} className={`w-10 h-10 ${s <= 4 ? 'text-yellow-500 fill-yellow-500' : 'text-white/10'}`} />
                 ))}
               </div>

               <div className="w-full space-y-4">
                  <p className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1">Comments (Optional)</p>
                  <textarea placeholder="Write your feedback..." className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 h-32 focus:outline-none focus:border-emerald-500/50" />
               </div>

               <button onClick={() => setView('home')} className="mt-12 w-full py-4 bg-emerald-500 rounded-2xl font-bold text-black">Submit & Finish</button>
            </div>
          )}

          {/* VIEW: PROFILE */}
          {view === 'profile' && (
            <div className="h-full pt-24 px-6 animate-in slide-in-from-right duration-500 overflow-y-auto pb-12">
              <div className="flex flex-col items-center mb-8">
                <div className="relative">
                  <div className="w-28 h-28 rounded-full border-4 border-emerald-500 p-1">
                    <div className="w-full h-full rounded-full overflow-hidden bg-gray-800">
                      <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="Felix" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 right-0 w-8 h-8 bg-emerald-500 rounded-full border-4 border-black flex items-center justify-center">
                    <Settings size={12} />
                  </div>
                </div>
                <h2 className="text-2xl font-bold mt-4">Felix Henderson</h2>
                <p className="text-emerald-400 text-sm font-bold uppercase tracking-tighter">Gold Tier Driver • 4.95 Rating</p>
              </div>

              <div className="space-y-4">
                <GlassCard className="p-4 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Clock className="text-white/30" />
                    <div>
                      <p className="text-sm font-bold">Ride History</p>
                      <p className="text-xs text-white/40">342 trips completed</p>
                    </div>
                  </div>
                  <ChevronRight className="text-white/20" size={18} />
                </GlassCard>
                <GlassCard className="p-4 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <CreditCard className="text-white/30" />
                    <div>
                      <p className="text-sm font-bold">Payment Methods</p>
                      <p className="text-xs text-white/40">Visa ending in 4421</p>
                    </div>
                  </div>
                  <ChevronRight className="text-white/20" size={18} />
                </GlassCard>
                <GlassCard className="p-4 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <ShieldCheck className="text-white/30" />
                    <div>
                      <p className="text-sm font-bold">Privacy & Security</p>
                      <p className="text-xs text-white/40">Manage your data</p>
                    </div>
                  </div>
                  <ChevronRight className="text-white/20" size={18} />
                </GlassCard>
              </div>
            </div>
          )}

          {/* VIEW: REFERRALS */}
          {view === 'referrals' && (
            <div className="h-full pt-24 px-8 flex flex-col items-center text-center animate-in slide-in-from-right duration-500">
              <div className="w-32 h-32 bg-emerald-500/10 rounded-full flex items-center justify-center mb-8">
                <Gift className="w-16 h-16 text-emerald-400" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Earn While You <br/>Help Us Grow</h2>
              <p className="text-white/40 mb-10 leading-relaxed">Invite a friend to drive or ride and you both get <span className="text-white font-bold">$20.00 credit</span> once they complete 5 rides.</p>
              
              <GlassCard className="w-full p-6 border-emerald-500/30 mb-8">
                <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-3">Your Referral Code</p>
                <div className="flex items-center justify-between bg-black/40 rounded-xl p-4 border border-white/5">
                  <span className="text-xl font-mono font-bold text-emerald-400 tracking-wider">ONTHEGO-FELIX</span>
                  <button className="text-blue-400 font-bold text-sm uppercase">Copy</button>
                </div>
              </GlassCard>

              <button className="w-full py-4 bg-blue-600 rounded-2xl flex items-center justify-center gap-3 font-bold shadow-lg shadow-blue-600/20 active:scale-95 transition-all">
                <Share2 size={20} /> Share Referral Link
              </button>
            </div>
          )}

          {/* VIEW: FAQ */}
          {view === 'faq' && (
            <div className="h-full pt-24 px-6 animate-in slide-in-from-right duration-500 overflow-y-auto pb-12">
               <h2 className="text-3xl font-bold mb-6">Support & FAQ</h2>
               
               <div className="space-y-4">
                  {[
                    { q: "How are matches calculated?", a: "Our proprietary AI analyzes route overlaps, traffic patterns, and user ratings to find the 85%+ perfect pairing." },
                    { q: "Is it safe to drive/ride?", a: "Every user is identity-verified. Real-time GPS tracking and 24/7 security dispatch are active during every trip." },
                    { q: "How do I get paid?", a: "Earnings are instantly added to your wallet after each ride and can be withdrawn daily to your linked bank account." },
                    { q: "What about cancellations?", a: "Cancellations made within 2 minutes are free. After that, a small convenience fee applies to protect our network." }
                  ].map((item, i) => (
                    <GlassCard key={i} className="p-5">
                      <h4 className="font-bold text-sm mb-2">{item.q}</h4>
                      <p className="text-xs text-white/40 leading-relaxed">{item.a}</p>
                    </GlassCard>
                  ))}
               </div>

               <div className="mt-10 p-6 bg-emerald-500/10 border border-emerald-500/20 rounded-3xl text-center">
                 <p className="text-sm font-medium mb-4">Still need help?</p>
                 <button className="px-6 py-2 bg-emerald-500 text-black rounded-xl text-xs font-bold uppercase tracking-widest">Contact Support</button>
               </div>
            </div>
          )}

        </div>
      </div>

      {/* Development Status Bar */}
      <div className="mt-8 flex gap-3 flex-wrap justify-center max-w-md">
        {['onboarding', 'login', 'home', 'match', 'handshake', 'rating', 'profile', 'referrals', 'faq'].map(v => (
          <button
            key={v}
            onClick={() => navigate(v)}
            className={`px-3 py-1 rounded-full text-[10px] font-bold border transition-all uppercase tracking-tighter ${view === v ? 'bg-emerald-500 border-emerald-400 text-black' : 'bg-white/5 border-white/10 text-white/40'}`}
          >
            {v}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PrototypeModel2;