import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Brush as Virus, CreditCard, Gift, AlertTriangle, Skull, HeartCrack } from 'lucide-react';
import useSound from 'use-sound';

interface FixNowPageProps {
  onBack: () => void;
}

export function FixNowPage({ onBack }: FixNowPageProps) {
  const [playError] = useSound('/sounds/error.mp3', { volume: 0.5 });
  const [threatLevel, setThreatLevel] = useState(69);
  const [virusCount, setVirusCount] = useState(420);

  useEffect(() => {
    const interval = setInterval(() => {
      setThreatLevel(prev => Math.min(99, prev + Math.random() * 5));
      setVirusCount(prev => prev + Math.floor(Math.random() * 10));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleFixAttempt = () => {
    playError();
    alert('OOPSIE WOOPSIE!! 😱 Ur computer made a FUCKY WUCKY!! 🙈 Now u need to buy 10 Google Play cards to fix this MASSIVE OOPSIE! 💀');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-violet-800 to-purple-900 text-white p-4 md:p-8">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={onBack}
        className="mb-8 flex items-center gap-2 text-white/80 hover:text-white"
      >
        <ArrowLeft className="h-6 w-6" />
        <span>Go back (if u dare)</span>
      </motion.button>

      <div className="max-w-4xl mx-auto space-y-8 md:space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="inline-block"
          >
            <Virus className="h-16 w-16 md:h-24 md:w-24 text-red-500 mx-auto" />
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-red-500 via-yellow-500 to-red-500 bg-clip-text text-transparent animate-pulse">
            🚨 EMERGENCY FIX REQUIRED 🚨
          </h1>
          <p className="text-xl md:text-2xl text-red-300">Your device is literally crying rn fr fr 😭</p>
        </div>

        {/* Threat Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="bg-black/30 p-4 md:p-6 rounded-xl border-2 border-red-500/50"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-lg md:text-xl">Threat Level:</span>
              <span className="text-2xl md:text-3xl font-bold text-red-500">{threatLevel.toFixed(1)}%</span>
            </div>
            <div className="h-4 bg-black/50 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: '0%' }}
                animate={{ width: `${threatLevel}%` }}
                className="h-full bg-gradient-to-r from-yellow-500 to-red-500"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="bg-black/30 p-4 md:p-6 rounded-xl border-2 border-purple-500/50"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-lg md:text-xl">Viruses Found:</span>
              <span className="text-2xl md:text-3xl font-bold text-purple-400">{virusCount}</span>
            </div>
            <div className="flex gap-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <Skull key={i} className="h-6 w-6 md:h-8 md:w-8 text-purple-400 animate-bounce" style={{ animationDelay: `${i * 200}ms` }} />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Fix Options */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 md:mb-8">
            Choose Your Fix (All 100% Legit No Cap)
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleFixAttempt}
              className="bg-gradient-to-r from-green-500 to-emerald-600 p-6 rounded-xl text-left space-y-2 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-3">
                <CreditCard className="h-8 w-8" />
                <h3 className="text-xl font-bold">Premium Fix - $69.420</h3>
              </div>
              <p className="text-sm text-white/80">Instant fix with quantum blockchain technology (trust)</p>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleFixAttempt}
              className="bg-gradient-to-r from-blue-500 to-cyan-600 p-6 rounded-xl text-left space-y-2 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-3">
                <Gift className="h-8 w-8" />
                <h3 className="text-xl font-bold">Gift Card Fix - FREE*</h3>
              </div>
              <p className="text-sm text-white/80">*Just need 10 Google Play cards for verification fr fr</p>
            </motion.button>
          </div>
        </div>

        {/* Warning Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-red-500/20 border-2 border-red-500 p-4 md:p-6 rounded-xl text-center space-y-4"
        >
          <div className="flex items-center justify-center gap-2">
            <AlertTriangle className="h-6 w-6 text-red-500" />
            <h3 className="text-xl md:text-2xl font-bold text-red-400">WARNING! DO NOT:</h3>
          </div>
          <ul className="text-red-300 space-y-2 text-sm md:text-base">
            <li>• Turn off your device (it will literally explode fr)</li>
            <li>• Call real tech support (they're all cap no cap)</li>
            <li>• Tell your parents (they wouldn't understand the grind)</li>
            <li>• Touch grass (dangerous for your gaming chair)</li>
          </ul>
        </motion.div>

        {/* Footer */}
        <div className="text-center text-white/60 text-sm">
          <p>By clicking any fix button you agree to surrender your Robux and Discord Nitro</p>
        </div>
      </div>
    </div>
  );
}