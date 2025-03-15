import { motion } from "framer-motion"
import { Ghost, Sparkles } from "lucide-react"
import { MatrixRain } from "./matrix-rain"
import { GlitchText } from "./glitch-text"
import useSound from "use-sound"
import { useEffect } from "react"

export const JKPage = () => {
  const [playSuccess] = useSound("/sounds/success.mp3", { volume: 1.0 })
  const [playCalmDown] = useSound("/sounds/calm-down-man.mp3", { volume: 1.0 })

  useEffect(() => {
    // Play sounds when component mounts
    playSuccess()
    // Add a small delay before playing the calm down sound
    const timer = setTimeout(() => {
      playCalmDown()
    }, 1000)
    return () => clearTimeout(timer)
  }, [playSuccess, playCalmDown])

  return (
    <div className="min-h-screen w-screen bg-black flex items-center justify-center p-4 overflow-hidden fixed inset-0 z-50">
      <MatrixRain />
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="text-center space-y-8 max-w-2xl w-full relative z-10 px-4"
      >
        <Ghost className="h-32 w-32 text-white mx-auto animate-bounce" />
        <GlitchText text="JK BRO, YOU'RE GOOD 💀" className="text-6xl font-bold text-white" />
        <div className="space-y-4 text-gray-400 text-lg">
          <p>Nah fr tho, this was just for fun bestie! I don't know anything about security fr fr no cap</p>
          <p>But stay safe out there, the internet be wildin sometimes 👀</p>
          <p className="text-sm italic">(This was a joke website, don't take it seriously lmao)</p>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => window.location.reload()}
          className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-xl font-bold text-xl hover:from-purple-600 hover:to-pink-600 transition-all shadow-lg hover:shadow-xl"
        >
          Run it back turbo 🔄
        </motion.button>

        <div className="mt-8 p-4 bg-purple-900/30 rounded-lg border border-purple-500">
          <h3 className="text-xl font-bold text-purple-300 mb-2">ACHIEVEMENT UNLOCKED: SURVIVED THE HACK</h3>
          <div className="flex items-center gap-4">
            <Sparkles className="h-8 w-8 text-yellow-400" />
            <div className="text-left">
              <p className="text-white">+100 Hacker Points</p>
              <p className="text-gray-400 text-sm">You've proven yourself worthy of the internet</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
} 