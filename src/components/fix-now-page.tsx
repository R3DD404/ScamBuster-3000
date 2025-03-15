import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Brush as Virus, CreditCard, Gift, AlertTriangle, Skull, HeartCrack } from 'lucide-react';
import useSound from 'use-sound';

interface FixNowPageProps {
  onBack: () => void;
}

export function FixNowPage({ onBack }: FixNowPageProps) {
  const [playError] = useSound('https://assets.mixkit.co/active_storage/sfx/2947/2947-preview.mp3');
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
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-violet-800 to-purple-900 text-white p-8">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={onBack}
        className="mb-8 flex items-center gap-2 text-white/80 hover:text-white"
      >
        <ArrowLeft className="h-6 w-6" />
        <span>Go back (if u dare)</span>
      </motion.button>

      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="inline-block"
          >
            <Virus className="h-24 w-24 text-red-500 mx-auto" />
          </motion.div>
          <h1 className="text-6xl font-bold bg-gradient-to-r from-red-500 via-yellow-500 to-red-500 bg-clip-text text-transparent animate-pulse">
            🚨 EMERGENCY FIX REQUIRED 🚨
          </h1>
          <p className="text-2xl text-red-300">Your device is literally crying rn fr fr 😭</p>
        </div>

        {/* Threat Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="bg-black/30 p-6 rounded-xl border-2 border-red-500/50"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-xl">Threat Level:</span>
              <span className="text-3xl font-bold text-red-500">{threatLevel.toFixed(1)}%</span>
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
            className="bg-black/30 p-6 rounded-xl border-2 border-purple-500/50"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-xl">Viruses Found:</span>
              <span className="text-3xl font-bold text-purple-400">{virusCount}</span>
            </div>
            <div className="flex gap-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <Skull key={i} className="h-8 w-8 text-purple-400 animate-bounce" style={{ animationDelay: `${i * 200}ms` }} />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Fix Options */}
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-center mb-8">
            Choose Your Fix (All 100% Legit No Cap)
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleFixAttempt}
              className="bg-gradient-to-r from-green-500 to-emerald-700 p-6 rounded-xl text-left space-y-4 hover:shadow-lg hover:shadow-green-500/20"
            >
              <div className="flex items-center gap-4">
                <CreditCard className="h-12 w-12" />
                <div>
                  <h3 className="text-2xl font-bold">Premium Fix 💎</h3>
                  <p className="text-green-200">Only $399.99 (Best Value)</p>
                </div>
              </div>
              <p className="text-sm text-green-200">
                Includes quantum virus removal and free iPhone 15 Pro Max (trust)
              </p>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleFixAttempt}
              className="bg-gradient-to-r from-yellow-500 to-orange-600 p-6 rounded-xl text-left space-y-4 hover:shadow-lg hover:shadow-yellow-500/20"
            >
              <div className="flex items-center gap-4">
                <Gift className="h-12 w-12" />
                <div>
                  <h3 className="text-2xl font-bold">Gift Card Fix 🎁</h3>
                  <p className="text-yellow-100">Just 5 Google Play cards</p>
                </div>
              </div>
              <p className="text-sm text-yellow-100">
                Send gift cards to definitely real Microsoft engineer
              </p>
            </motion.button>
          </div>
        </div>

        {/* Testimonials */}
        <div className="bg-black/30 p-8 rounded-xl space-y-6">
          <h3 className="text-3xl font-bold text-center">Real Customer Reviews (fr fr)</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/5 p-4 rounded-lg">
              <p className="italic text-gray-300">
                "I sent them 10 Google Play cards and they fixed my computer in 69 seconds! Now I'm a millionaire!"
              </p>
              <p className="text-sm text-gray-400 mt-2">- Definitely Real Person</p>
            </div>
            <div className="bg-white/5 p-4 rounded-lg">
              <p className="italic text-gray-300">
                "My PC was having a stroke fr fr but they fixed it no cap on god 💯"
              </p>
              <p className="text-sm text-gray-400 mt-2">- Trust Me Bro</p>
            </div>
          </div>
        </div>

        {/* Warning Banner */}
        <motion.div
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ repeat: Infinity, duration: 1 }}
          className="bg-red-500/20 border-2 border-red-500 p-6 rounded-xl text-center"
        >
          <AlertTriangle className="h-12 w-12 mx-auto mb-4 text-red-500" />
          <p className="text-xl font-bold text-red-400">
            ⚠️ WARNING: Your PC will literally explode in 4.20 minutes if you don't fix now! ⚠️
          </p>
        </motion.div>
      </div>
    </div>
  );
}