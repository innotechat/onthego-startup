import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Play, MapPin, User, ShieldCheck, Navigation, 
  Search, CheckCircle2, ChevronRight, X, 
  LogIn, UserPlus, Car, Users, ArrowLeft
} from 'lucide-react';

const PrototypeModel = ({ onClose }) => {
  const [scene, setScene] = useState(0);
  const [role, setRole] = useState(null); // 'driver' | 'passenger'
  const [isActivating, setIsActivating] = useState(false);

  const nextScene = () => setScene(prev => prev + 1);
  const prevScene = () => setScene(prev => Math.max(0, prev - 1));

  const GlassCard = ({ children, className = "", onClick }) => (
    <motion.div 
      whileHover={onClick ? { scale: 1.02 } : {}}
      whileTap={onClick ? { scale: 0.98 } : {}}
      onClick={onClick}
      className={`backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl ${className} ${onClick ? 'cursor-pointer' : ''}`}
    >
      {children}
    </motion.div>
  );

  const SmartphoneFrame = ({ children }) => (
    <div className="relative w-[340px] sm:w-[380px] h-[720px] sm:h-[800px] bg-black rounded-[50px] sm:rounded-[60px] border-[8px] border-[#1a1a2e] shadow-[0_0_100px_rgba(59,130,246,0.2)] overflow-hidden">
      {/* Dynamic Notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-black rounded-b-2xl z-50 flex items-center justify-center">
        <div className="w-10 h-1 bg-white/10 rounded-full"></div>
      </div>
      
      {/* Power/Volume Buttons */}
      <div className="absolute right-[-10px] top-32 w-1 h-16 bg-[#1a1a2e] rounded-l-md" />
      <div className="absolute left-[-10px] top-24 w-1 h-12 bg-[#1a1a2e] rounded-r-md" />
      <div className="absolute left-[-10px] top-40 w-1 h-12 bg-[#1a1a2e] rounded-r-md" />

      {/* Content */}
      <div className="h-full w-full relative pt-10 pb-6 overflow-hidden bg-[#050510]">
        <AnimatePresence mode="wait">
          {children}
        </AnimatePresence>
      </div>

      {/* Home Indicator */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/20 rounded-full z-50" />
    </div>
  );

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
    >
      <button 
        onClick={onClose}
        className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors p-2 rounded-full border border-white/10 hover:bg-white/5"
      >
        <X size={32} />
      </button>

      <div className="flex flex-col items-center">
        <SmartphoneFrame>
          {/* SCENE 0: LOGIN / WELCOME */}
          {scene === 0 && (
            <motion.div 
              key="scene0"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, x: -100 }}
              className="h-full flex flex-col px-8 justify-center py-12 text-center"
            >
              <div className="w-20 h-20 bg-indigo-600 rounded-3xl mx-auto mb-8 flex items-center justify-center shadow-xl">
                 <Navigation className="text-white" size={40} />
              </div>
              <h1 className="text-3xl font-bold mb-2">Welcome to OnTheGo</h1>
              <p className="text-white/50 mb-12">The real-time mobility network.</p>

              <div className="space-y-4">
                <button 
                  onClick={nextScene}
                  className="w-full py-4 bg-white text-black rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-white/90 transition-all"
                >
                  <LogIn size={20} /> Login with Phone
                </button>
                <button 
                  onClick={nextScene}
                  className="w-full py-4 bg-white/5 border border-white/10 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-white/10 transition-all"
                >
                  <UserPlus size={20} /> Create Account
                </button>
              </div>
              
              <div className="mt-12 text-xs text-white/30">
                By continuing, you agree to our Terms of Service.
              </div>
            </motion.div>
          )}

          {/* SCENE 1: ROLE SELECTION */}
          {scene === 1 && (
            <motion.div 
              key="scene1"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              className="h-full flex flex-col px-8 py-10"
            >
              <button onClick={prevScene} className="text-white/50 mb-8 flex items-center gap-2">
                <ArrowLeft size={20} /> Back
              </button>
              
              <h2 className="text-2xl font-bold mb-2">Choose your mode</h2>
              <p className="text-white/50 mb-8">You can switch anytime in settings.</p>

              <div className="space-y-6">
                <GlassCard 
                  className={`p-6 border-2 transition-all ${role === 'driver' ? 'border-indigo-500 bg-indigo-500/10' : 'border-white/10'}`}
                  onClick={() => { setRole('driver'); setTimeout(nextScene, 300); }}
                >
                   <div className="flex gap-4">
                      <div className="w-12 h-12 bg-indigo-500/20 rounded-xl flex items-center justify-center">
                        <Car className="text-indigo-400" />
                      </div>
                      <div>
                        <h3 className="font-bold">I am a Driver</h3>
                        <p className="text-xs text-white/40 mt-1">Share seats and offset fuel costs.</p>
                      </div>
                   </div>
                </GlassCard>

                <GlassCard 
                  className={`p-6 border-2 transition-all ${role === 'passenger' ? 'border-emerald-500 bg-emerald-500/10' : 'border-white/10'}`}
                  onClick={() => { setRole('passenger'); setTimeout(nextScene, 300); }}
                >
                   <div className="flex gap-4">
                      <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center">
                        <Users className="text-emerald-400" />
                      </div>
                      <div>
                        <h3 className="font-bold">I am a Passenger</h3>
                        <p className="text-xs text-white/40 mt-1">Find real-time rides on your route.</p>
                      </div>
                   </div>
                </GlassCard>
              </div>
            </motion.div>
          )}

          {/* SCENE 2: ACTIVATE (DRIVER PERSPECTIVE) */}
          {scene === 2 && (
            <motion.div 
              key="scene2"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              className="h-full flex flex-col px-6 justify-between py-12"
            >
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">OnTheGo</h1>
                <p className="text-white/50 mt-2">Driver Perspective: Active Mode</p>
              </div>

              <div className="flex-1 flex items-center justify-center relative">
                <motion.div 
                  animate={{ 
                    scale: isActivating ? [1, 1.5, 1] : 1,
                    opacity: isActivating ? [0.2, 0.5, 0.2] : 0.2
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute w-64 h-64 rounded-full bg-emerald-500/20 blur-3xl"
                />
                <motion.button 
                  whileTap={{ scale: 0.9 }}
                  onClick={() => {
                    setIsActivating(true);
                    setTimeout(nextScene, 1200);
                  }}
                  className="group relative z-10 w-48 h-48 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-700 flex flex-col items-center justify-center shadow-[0_0_50px_rgba(16,185,129,0.4)]"
                >
                  <Play className="w-12 h-12 fill-white mb-2" />
                  <span className="text-xs font-bold tracking-widest uppercase">Activate Live Drive</span>
                </motion.button>
              </div>

              <GlassCard className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                    <Navigation className="text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Auto-Optimize Enabled</p>
                    <p className="text-xs text-white/40">Searching for hyper-local matches...</p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          )}

          {/* SCENE 3: SPLIT SCREEN / MATCHING */}
          {scene === 3 && (
            <motion.div 
              key="scene3"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, y: -100 }}
              className="h-full relative"
            >
              {/* Map Background Mockup */}
              <div className="absolute inset-0 bg-[#0A0A1F]">
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#3B82F6 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
                <svg className="absolute inset-0 w-full h-full">
                  <motion.path 
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, repeat: Infinity }}
                    d="M 50 500 Q 150 400 300 200" 
                    fill="none" 
                    stroke="#3B82F6" 
                    strokeWidth="4" 
                    strokeDasharray="10 5" 
                  />
                  <motion.circle 
                    cx="50" cy="500" r="6" fill="#10B981"
                    animate={{ r: [6, 10, 6] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                  <motion.circle 
                    cx="300" cy="200" r="6" fill="#3B82F6"
                    animate={{ r: [6, 10, 6] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: 0.75 }}
                  />
                </svg>
              </div>

              <div className="relative z-10 p-6 flex flex-col h-full uppercase tracking-tighter font-display">
                <GlassCard className="p-4 mb-4 border-blue-500/50">
                   <div className="flex items-center gap-3">
                     <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-blue-400">
                       <Search size={20} />
                     </div>
                     <p className="text-sm">Cyber City Corridor</p>
                   </div>
                </GlassCard>

                <div className="mt-auto space-y-4 mb-12">
                  <h3 className="text-xs font-bold text-blue-400 tracking-widest uppercase">Optimized Matches</h3>
                  <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    <GlassCard className="p-4">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-3 text-left">
                          <div className="w-12 h-12 rounded-full bg-indigo-500/20 border-2 border-indigo-500 flex items-center justify-center">
                             <User className="text-indigo-400" />
                          </div>
                          <div>
                            <p className="font-bold normal-case">Arjun V.</p>
                            <p className="text-[10px] text-indigo-400 font-bold tracking-widest">92% ROUTE MATCH</p>
                          </div>
                        </div>
                        <button 
                          onClick={nextScene}
                          className="bg-indigo-600 px-4 py-2 rounded-xl text-xs font-bold hover:bg-indigo-500 transition-colors"
                        >
                          ACCEPT
                        </button>
                      </div>
                    </GlassCard>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}

          {/* SCENE 4: DIGITAL HANDSHAKE */}
          {scene === 4 && (
            <motion.div 
              key="scene4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              className="h-full flex flex-col items-center justify-center text-center p-8"
            >
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-24 h-24 bg-emerald-500/10 rounded-full flex items-center justify-center mb-8 border border-emerald-500/30 shadow-[0_0_30px_rgba(16,185,129,0.1)]"
              >
                <ShieldCheck className="w-12 h-12 text-emerald-400" />
              </motion.div>
              
              <h2 className="text-2xl font-bold mb-2">Secure Handshake</h2>
              <p className="text-white/40 text-sm mb-8">Confirm verification code</p>
              
              <div className="flex gap-3 mb-12">
                {['8', '5', '3', '3'].map((num, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 * i }}
                    className="w-12 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-2xl font-mono font-bold text-emerald-400"
                  >
                    {num}
                  </motion.div>
                ))}
              </div>

              <button 
                onClick={nextScene}
                className="w-full py-4 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center gap-2 hover:bg-white/10 transition-colors"
              >
                <span>Complete Verification</span>
                <ChevronRight size={16} />
              </button>
            </motion.div>
          )}

          {/* SCENE 5: FINAL SUCCESS */}
          {scene === 5 && (
            <motion.div 
              key="scene5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="h-full flex flex-col items-center justify-center px-8 text-center bg-gradient-to-b from-indigo-950/20 to-black"
            >
              <div className="w-24 h-24 bg-emerald-500 rounded-3xl mb-8 flex items-center justify-center shadow-[0_0_80px_rgba(16,185,129,0.3)]">
                <CheckCircle2 className="w-12 h-12 text-white" />
              </div>
              
              <h1 className="text-3xl font-bold mb-4">Journey Active</h1>
              <p className="text-white/50 mb-12 italic">Cost-sharing enabled. Safety protocols active.</p>
              
              <GlassCard className="p-6 w-full mb-12">
                 <div className="flex justify-between items-center">
                    <div className="text-left">
                       <p className="text-xs text-white/40 uppercase font-bold tracking-widest">Est. Offset</p>
                       <p className="text-xl font-bold text-emerald-400">₹240.00</p>
                    </div>
                    <div className="text-right">
                       <p className="text-xs text-white/40 uppercase font-bold tracking-widest">CO2 Saved</p>
                       <p className="text-xl font-bold text-blue-400">1.2kg</p>
                    </div>
                 </div>
              </GlassCard>

              <button 
                onClick={() => setScene(0)}
                className="group flex items-center gap-3 text-white/40 hover:text-white transition-colors"
              >
                <div className="p-2 rounded-full border border-white/10 group-hover:bg-white/5">
                   <Play size={16} />
                </div>
                <span className="text-xs uppercase tracking-widest font-bold">Restart Vision</span>
              </button>
            </motion.div>
          )}
        </SmartphoneFrame>

        {/* Presenter Footer */}
        <div className="mt-8 flex gap-2">
           {[0, 1, 2, 3, 4, 5].map(num => (
              <button 
                key={num}
                onClick={() => setScene(num)}
                className={`w-3 h-3 rounded-full transition-all ${scene === num ? 'bg-indigo-500 w-8' : 'bg-white/20 hover:bg-white/40'}`}
              />
           ))}
        </div>
        <p className="mt-6 text-[10px] text-white/30 uppercase tracking-[0.3em] font-medium">
          OnTheGo Prototype • Secure Investor Preview
        </p>
      </div>
    </motion.div>
  );
};

export default PrototypeModel;
