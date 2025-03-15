import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, HeadsetIcon, Phone, Mail, MessageSquare, Coffee, Loader } from 'lucide-react';
import useSound from 'use-sound';

interface SupportPageProps {
  onBack: () => void;
}

export function SupportPage({ onBack }: SupportPageProps) {
  const [playError] = useSound('https://assets.mixkit.co/active_storage/sfx/2947/2947-preview.mp3');
  const [isLoading, setIsLoading] = useState(false);

  const handleSupportAction = () => {
    setIsLoading(true);
    playError();
    setTimeout(() => {
      setIsLoading(false);
      alert('SORRY VHAI! All our agents are busy eating biryani! Please try again in 2-3 business years! 🍛');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-800 to-indigo-900 text-white p-8">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={onBack}
        className="mb-8 flex items-center gap-2 text-white/80 hover:text-white"
      >
        <ArrowLeft className="h-6 w-6" />
        <span>Go back (pls don't)</span>
      </motion.button>

      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="inline-block"
          >
            <HeadsetIcon className="h-24 w-24 text-purple-400 mx-auto" />
          </motion.div>
          <h1 className="text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400 bg-clip-text text-transparent">
            24/7 Premium Support
          </h1>
          <p className="text-2xl text-purple-300">
            (Actually available 0/7, trust me bro)
          </p>
        </div>

        {/* Contact Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleSupportAction}
            className="bg-black/30 p-8 rounded-xl border-2 border-purple-500/30 hover:border-purple-500/50 transition-all"
          >
            <Phone className="h-12 w-12 text-purple-400 mb-4" />
            <h3 className="text-2xl font-bold mb-2">Call Now</h3>
            <p className="text-purple-300">+1-420-69-SCAM</p>
            <p className="text-sm text-purple-400 mt-2">
              (Charges may apply, like ur whole bank account fr fr)
            </p>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleSupportAction}
            className="bg-black/30 p-8 rounded-xl border-2 border-pink-500/30 hover:border-pink-500/50 transition-all"
          >
            <Mail className="h-12 w-12 text-pink-400 mb-4" />
            <h3 className="text-2xl font-bold mb-2">Email Support</h3>
            <p className="text-pink-300">definitely@notascam.cap</p>
            <p className="text-sm text-pink-400 mt-2">
              (Response time: 3-5 business decades)
            </p>
          </motion.button>
        </div>

        {/* Live Chat */}
        <div className="bg-black/30 p-8 rounded-xl border-2 border-blue-500/30">
          <div className="flex items-center gap-4 mb-6">
            <MessageSquare className="h-8 w-8 text-blue-400" />
            <h3 className="text-2xl font-bold">Live Chat Support</h3>
          </div>

          <div className="space-y-4 mb-6">
            <div className="flex items-start gap-4">
              <div className="bg-blue-500/20 rounded-lg p-4 flex-1">
                <p className="text-blue-300">Hello! How can I scam... I mean help you today? 😊</p>
                <p className="text-sm text-blue-400 mt-2">- Tech Support (real)</p>
              </div>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleSupportAction}
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 py-4 rounded-lg font-bold text-lg flex items-center justify-center gap-3"
          >
            {isLoading ? (
              <>
                <Loader className="h-6 w-6 animate-spin" />
                <span>Connecting to agent...</span>
              </>
            ) : (
              <>
                <MessageSquare className="h-6 w-6" />
                <span>Start Chat</span>
              </>
            )}
          </motion.button>
        </div>

        {/* Status */}
        <div className="flex items-center justify-center gap-4 text-yellow-300">
          <Coffee className="h-6 w-6 animate-bounce" />
          <p className="text-lg">
            All agents are currently on a samosa break. Please try again later! 🥟
          </p>
        </div>

        {/* Fake Reviews */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              text: "They fixed my computer by making it more broken! 11/10 would recommend! 💯",
              author: "- Definitely Not A Bot"
            },
            {
              text: "Sent them my life savings in iTunes gift cards, now I'm living in a box but my PC works great!",
              author: "- Happy Customer (real)"
            },
            {
              text: "Tech support guy was so nice, he even offered to marry my daughter! Very professional!",
              author: "- Trust Me Bro"
            }
          ].map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white/5 p-6 rounded-xl"
            >
              <p className="italic text-gray-300 mb-2">{review.text}</p>
              <p className="text-sm text-gray-400">{review.author}</p>
            </motion.div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="text-center text-xs text-gray-400 max-w-lg mx-auto">
          <p>
            * By contacting support, you agree to surrender your entire crypto wallet, 
            your Roblox account, and your grandmother's secret cookie recipe. 
            No refunds, no takebacks, no cap fr fr.
          </p>
        </div>
      </div>
    </div>
  );
}