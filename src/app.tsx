"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import useSound from "use-sound"
import { Analytics } from "@vercel/analytics/react"
import {
  Shield,
  ShieldAlert,
  Lock,
  Activity,
  Wifi,
  Camera,
  Ghost,
  Bomb,
  Bug,
  Zap,
  Fingerprint,
  Scan,
  Siren,
  Webcam,
  Cpu,
  HardDrive,
  Database,
  BatteryCharging,
  Radiation,
  Flame,
  Sparkles,
  AlertTriangle,
} from "lucide-react"
import { FixNowPage } from "./components/fix-now-page"
import { SupportPage } from "./components/support-page"
import { MatrixRain } from "./components/matrix-rain"
import { GlitchText } from "./components/glitch-text"
import { ProgressBar } from "./components/progress-bar"
import { FakePopup } from "./components/fake-popup"
import { JKPage } from "./components/jk-page"

export default function App() {
  const [email, setEmail] = useState("")
  const [analyzing, setAnalyzing] = useState(false)
  const [chaosMode, setChaosMode] = useState(false)
  const [countdown, setCountdown] = useState(60)
  const [showJK, setShowJK] = useState(false)
  const [logs, setLogs] = useState<string[]>([])
  const [currentPage, setCurrentPage] = useState<"main" | "fix" | "support">("main")
  const [scanProgress, setScanProgress] = useState(0)
  const [showPopup, setShowPopup] = useState(false)
  const [popupCount, setPopupCount] = useState(0)
  const [threatLevel, setThreatLevel] = useState(0)
  const [webcamActive, setWebcamActive] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const canvasRef = useRef<HTMLCanvasElement>(null)

  // Sound effects
  const [playWelcome] = useSound("/sounds/MyFriendHowAreYouDoing.mp3", { volume: 1.0 })
  const [playDontDoIt] = useSound("/sounds/DunDoItNotGood.mp3", { volume: 1.0 })
  const [playProgress, { stop: stopProgress }] = useSound("/sounds/Rewinding.mp3", { volume: 0.5, loop: true })
  const [playAlarm] = useSound("/sounds/alarm.mp3", { volume: 1.0 })
  const [playTick] = useSound("/sounds/tick.mp3", { volume: 0.5 })
  const [playSuccess] = useSound("/sounds/success.mp3")
  const [playError] = useSound("/sounds/error.mp3")
  const [playBeep] = useSound("/sounds/beep.mp3", { volume: 0.3 })
  const [playHover] = useSound("/sounds/hover.mp3", { volume: 0.4 })
  const [playGlitch] = useSound("/sounds/glitch.mp3", { volume: 0.4 })
  const [playScanClick] = useSound("/sounds/scan-click.mp3", { volume: 0.8 })
  const [playScanningLoop, { stop: stopScanningLoop }] = useSound("/sounds/scanning-loop.mp3", { volume: 0.5, loop: true })
  const [playCalmDown] = useSound("/sounds/calm-down-man.mp3", { volume: 1.0 })

  const analysisPhrases = [
    "INITIALIZING QUANTUM BLOCKCHAIN SCANNER... 🔍",
    "BYPASSING NASA MAINFRAME... 🛸",
    "LOADING: Grandmother's bank details... ✅",
    "DOWNLOADING: 69 viruses... ✅",
    "ANALYZING MINECRAFT CHAT HISTORY... 🎮",
    "SCANNING FORTNITE DANCE MOVES... 💃",
    "HACKING ROBLOX ACCOUNT... 🎯",
    "STEALING DISCORD NITRO... 👾",
    "DOWNLOADING TIK TOK DRAFTS... 📱",
    "EXPOSING BROWSER HISTORY... 💀",
    "DETECTING CRINGE LEVELS... 📊",
    "CALCULATING RIZZ FACTOR... 💯",
    "ANALYZING SPOTIFY PLAYLISTS (MID BTW)... 🎵",
    "INFILTRATING FAMILY WHATSAPP GROUP... 👨‍👩‍👧‍👦",
    "ACCESSING HIDDEN FOLDER (SUS)... 📁",
    "SCANNING REDDIT KARMA (TOUCH GRASS FR)... 🌱",
    "ANALYZING MEME FOLDER QUALITY... 💯",
    "CHECKING VALORANT RANK (IRON CONFIRMED)... 🎯",
    "DOWNLOADING CALCULATOR HISTORY... 🧮",
    "SCANNING GOOGLE MAPS SEARCH HISTORY... 🗺️",
    "ANALYZING INSTAGRAM DM RIZZ LEVELS... 📉",
    "CHECKING DUOLINGO STREAK (RIP)... 🦉",
    "SCANNING AMAZON WISHLIST (BROKE AF)... 🛒",
    "ANALYZING YOUTUBE WATCH HISTORY (SUS)... 👀",
    "DOWNLOADING CAMERA ROLL (CAUGHT IN 4K)... 📸",
    "CHECKING VENMO TRANSACTIONS (DOWN BAD)... 💸",
  ]

  const logsEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    logsEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [logs])

  useEffect(() => {
    if (analyzing) {
      playScanningLoop()
      return () => {
        stopScanningLoop()
      }
    }
  }, [analyzing, playScanningLoop, stopScanningLoop])

  useEffect(() => {
    if (analyzing) {
      let currentIndex = 0
      const interval = setInterval(() => {
        if (currentIndex < analysisPhrases.length) {
          setLogs((prev) => [...prev, analysisPhrases[currentIndex]])
          playBeep()
          setScanProgress((prev) => prev + 100 / analysisPhrases.length)
          currentIndex++
        } else {
          clearInterval(interval)
          setChaosMode(true)
          stopProgress()
          playAlarm()
          startCountdown()
          triggerPopups()
        }
      }, 600)
      return () => clearInterval(interval)
    }
  }, [analyzing])

  useEffect(() => {
    if (chaosMode) {
      const threatInterval = setInterval(() => {
        setThreatLevel((prev) => Math.min(prev + Math.random() * 5, 100))
      }, 1000)

      return () => clearInterval(threatInterval)
    }
  }, [chaosMode])

  useEffect(() => {
    if (chaosMode) {
      const handleMouseMove = (e: MouseEvent) => {
        setMousePosition({ x: e.clientX, y: e.clientY })
      }

      window.addEventListener("mousemove", handleMouseMove)
      return () => window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [chaosMode])

  useEffect(() => {
    if (webcamActive && canvasRef.current) {
      const canvas = canvasRef.current
      const ctx = canvas.getContext("2d")

      if (ctx) {
        const img = new Image()
        img.src = "/images/webcam.jpg"
        
        img.onload = () => {
          const drawFrame = () => {
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height)

            ctx.fillStyle = "rgba(0, 255, 0, 0.1)"
            ctx.fillRect(0, scanLine, canvas.width, 2)
            scanLine = (scanLine + 1) % canvas.height

            ctx.fillStyle = "red"
            ctx.font = "16px monospace"
            ctx.fillText("LIVE", 20, 30)

            ctx.beginPath()
            ctx.arc(15, 25, 5, 0, 2 * Math.PI)
            ctx.fill()

            const now = new Date()
            ctx.fillStyle = "white"
            ctx.fillText(now.toLocaleTimeString(), canvas.width - 100, 30)

            for (let i = 0; i < canvas.height; i += 4) {
              ctx.fillStyle = "rgba(0, 0, 0, 0.1)"
              ctx.fillRect(0, i, canvas.width, 1)
            }
          }

          let scanLine = 0
          const interval = setInterval(drawFrame, 50)
          return () => clearInterval(interval)
        }
      }
    }
  }, [webcamActive])

  useEffect(() => {
    // Play welcome sound when component mounts
    const timer = setTimeout(() => {
      playWelcome()
    }, 100)
    return () => clearTimeout(timer)
  }, [playWelcome])

  useEffect(() => {
    if (analyzing) {
      playProgress()
      return () => {
        stopProgress()
      }
    }
  }, [analyzing])

  useEffect(() => {
    if (chaosMode && countdown > 0) {
      const timer = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(timer)
            setShowJK(true)
            return 0
          }
          playTick()
          return prev - 1
        })
      }, 1000)
      return () => clearInterval(timer)
    }
  }, [chaosMode, countdown, playTick])

  const startCountdown = () => {
    setCountdown(60)
  }

  const triggerPopups = () => {
    if (popupCount < 5) {
      setShowPopup(true)
      setTimeout(() => {
        setShowPopup(false)
        setPopupCount((prev) => prev + 1)
        setTimeout(triggerPopups, Math.random() * 3000 + 1000)
      }, 3000)
    }
  }

  const handleAnalyze = () => {
    if (!email.trim()) {
      alert("AYO DROP THAT EMAIL FIRST FR FR 💀")
      return
    }
    setAnalyzing(true)
    setLogs([])
    setScanProgress(0)
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, "0")}`
  }

  const generateRandomLog = () => {
    const logs = [
      "NAH FR FR UR PC IS COOKED 💀",
      "WEBCAM EXPOSED - NICE GAMING CHAIR BTW",
      "FIREWALL GOT RATIO'D FR FR",
      "DOWNLOADING UR SPOTIFY PLAYLISTS... KINDA MID TBH",
      "CRYPTO MINERS BE WILDIN RN",
      "ROUTER SETTINGS ARE BUSSIN (RESPECTFULLY)",
      "REMOTE ACCESS NO CAP ON GOD",
      "BANK DETAILS? MORE LIKE OUR DETAILS NOW 🤑",
      "FOUND UR HOMEWORK FOLDER... AYO? 🤨📸",
      "STEALING UR ROBUX PASSWORD RN",
      "EXPOSING UR DISCORD KITTEN FR FR",
      "LEAKING UR REDDIT KARMA COUNT",
      "DOWNLOADING UR BROWSER EXTENSIONS (SUSSY)",
      "STEALING UR MINECRAFT WORLD (NICE BUILD BTW)",
      "ANALYZING KEYBOARD HISTORY (SKILL ISSUE)",
      "HACKING UR WIFI (PASSWORD TOO EASY FR)",
      "DOWNLOADING UR SELFIES (CAUGHT IN 4K)",
      "ANALYZING SEARCH HISTORY (DOWN BAD FR FR)",
      "STEALING UR DISCORD SERVER (MID EMOJIS BTW)",
      "DOWNLOADING UR MEMES (NOT EVEN DANK SMH)",
    ]
    return logs[Math.floor(Math.random() * logs.length)]
  }

  const handleFixNowClick = () => {
    playHover()
    setCurrentPage("fix")
  }

  const handleSupportClick = () => {
    playHover()
    setCurrentPage("support")
  }

  const handleActivateWebcam = () => {
    playGlitch()
    setWebcamActive(true)
  }

  if (showJK) {
    return <JKPage />
  }

  if (currentPage === "fix") {
    return <FixNowPage onBack={() => setCurrentPage("main")} />
  }

  if (currentPage === "support") {
    return <SupportPage onBack={() => setCurrentPage("main")} />
  }

  return (
    <>
      <div
        className={`min-h-screen ${chaosMode ? "bg-purple-900" : "bg-gray-900"} transition-colors duration-500 overflow-hidden`}
      >
        {/* Matrix Background for Chaos Mode */}
        {chaosMode && <MatrixRain />}

        {/* Cursor Tracker in Chaos Mode */}
        {chaosMode && (
          <div
            className="fixed pointer-events-none z-50"
            style={{
              left: `${mousePosition.x}px`,
              top: `${mousePosition.y}px`,
              transform: "translate(-50%, -50%)",
            }}
          >
            <div className="w-16 h-16 rounded-full border-2 border-red-500 animate-ping opacity-50"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-red-500 text-xs font-mono">
              TRACKING
            </div>
          </div>
        )}

        {/* Random Popup in Chaos Mode */}
        <AnimatePresence>{showPopup && chaosMode && <FakePopup onClose={() => setShowPopup(false)} />}</AnimatePresence>

        {/* Header */}
        <header className="border-b border-blue-500/30 p-6 relative z-10">
          <div className="container mx-auto flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Shield className="h-10 w-10 text-blue-400 animate-pulse" />
              <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
              ScamBuster 3000 – No Cap Detector
              </h1>
            </div>
            <div className="flex items-center gap-6 text-blue-400">
              <div className="flex items-center gap-2">
                <Lock className="h-5 w-5" />
                <span className="text-sm font-medium">SECURE CONNECTION FR FR</span>
              </div>
              <Activity className="h-5 w-5 animate-pulse" />
              <Wifi className="h-5 w-5" />
              <div className="hidden md:flex items-center gap-2 bg-blue-900/30 px-3 py-1 rounded-full">
                <Fingerprint className="h-4 w-4 text-blue-300" />
                <span className="text-xs font-mono text-blue-300">SECURITY LEVEL: BUSSIN</span>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto px-4 py-12 relative z-10">
          <AnimatePresence>
            {!analyzing && !chaosMode ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="max-w-2xl mx-auto space-y-8 game-panel"
              >
                <div className="text-center space-y-4">
                  <GlitchText
                    text="No Cap Email Security Check"
                    className="text-5xl font-bold text-blue-400 mb-4 game-title"
                  />
                  <p className="text-xl text-blue-300/80 game-text">Bussin security analysis, straight up fr fr</p>

                  {/* Security Stats */}
                  <div className="grid grid-cols-3 gap-4 mt-6">
                    <div className="bg-blue-900/30 p-3 rounded-lg border border-blue-500/50">
                      <div className="flex items-center justify-center gap-2 mb-1">
                        <Scan className="h-5 w-5 text-blue-400" />
                        <span className="text-blue-300 font-bold">SCANS TODAY</span>
                      </div>
                      <p className="text-2xl font-mono text-blue-200">{Math.floor(Math.random() * 1000) + 420}</p>
                    </div>
                    <div className="bg-blue-900/30 p-3 rounded-lg border border-blue-500/50">
                      <div className="flex items-center justify-center gap-2 mb-1">
                        <Bug className="h-5 w-5 text-blue-400" />
                        <span className="text-blue-300 font-bold">THREATS BLOCKED</span>
                      </div>
                      <p className="text-2xl font-mono text-blue-200">{Math.floor(Math.random() * 100) + 69}</p>
                    </div>
                    <div className="bg-blue-900/30 p-3 rounded-lg border border-blue-500/50">
                      <div className="flex items-center justify-center gap-2 mb-1">
                        <Zap className="h-5 w-5 text-blue-400" />
                        <span className="text-blue-300 font-bold">POWER LEVEL</span>
                      </div>
                      <p className="text-2xl font-mono text-blue-200">OVER 9000</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <motion.div whileHover={{ scale: 1.02 }} className="relative game-input">
                    <textarea
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Drop that sus email here bestie..."
                      className="w-full h-48 bg-gray-800 border-4 border-blue-500/50 rounded-xl p-6 text-blue-100 text-lg focus:border-blue-400 focus:ring-2 focus:ring-blue-400/50 transition-all game-text"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-xl pointer-events-none animate-pulse" />
                  </motion.div>

                  {/* Security Features */}
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center gap-2 bg-blue-900/20 p-3 rounded-lg border border-blue-500/30">
                      <input type="checkbox" className="w-4 h-4 accent-blue-500" defaultChecked />
                      <label className="text-blue-300 text-sm">Enable Quantum Encryption</label>
                    </div>
                    <div className="flex items-center gap-2 bg-blue-900/20 p-3 rounded-lg border border-blue-500/30">
                      <input type="checkbox" className="w-4 h-4 accent-blue-500" defaultChecked />
                      <label className="text-blue-300 text-sm">Activate Neural Firewall</label>
                    </div>
                    <div className="flex items-center gap-2 bg-blue-900/20 p-3 rounded-lg border border-blue-500/30">
                      <input type="checkbox" className="w-4 h-4 accent-blue-500" defaultChecked />
                      <label className="text-blue-300 text-sm">Enable Blockchain Shield</label>
                    </div>
                    <div className="flex items-center gap-2 bg-blue-900/20 p-3 rounded-lg border border-blue-500/30">
                      <input type="checkbox" className="w-4 h-4 accent-blue-500" defaultChecked />
                      <label className="text-blue-300 text-sm">Activate AI Protection</label>
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onHoverStart={() => playDontDoIt()}
                    onClick={handleAnalyze}
                    className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-bold py-4 px-8 rounded-xl text-xl transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-3 game-button"
                  >
                    <ShieldAlert className="h-6 w-6" />
                    Check the vibes
                  </motion.button>
                </div>

                {/* Gamified HUD */}
                <div className="text-center text-blue-300 game-hud">
                  <div className="flex items-center justify-between">
                    <span>Level: Rookie</span>
                    <span>Lives: 3</span>
                    <span>Score: 0</span>
                    <span>Coins: 420</span>
                  </div>
                </div>

                {/* Testimonials */}
                <div className="bg-blue-900/20 p-4 rounded-lg border border-blue-500/30">
                  <h3 className="text-blue-300 font-bold mb-2 text-center">WHAT THE HOMIES SAY</h3>
                  <div className="italic text-blue-200/80 text-sm">
                    "This app saved my Fortnite account from getting hacked fr fr no cap" - XxGamer420xX
                  </div>
                </div>
              </motion.div>
            ) : analyzing && !chaosMode ? (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-3xl mx-auto">
                <div className="bg-black/90 p-8 rounded-xl border-2 border-green-500 font-mono max-h-[70vh] overflow-y-auto scrollbar-none">
                  <div className="flex items-center gap-2 mb-4 sticky top-0 bg-black/90 py-2 z-10">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-green-500 font-bold">SYSTEM INITIALIZED</span>
                  </div>

                  {/* Progress Bar - Sticky position for visibility */}
                  <div className="sticky top-12 bg-black/90 py-2 z-10">
                    <ProgressBar progress={scanProgress} />
                  </div>

                  {/* Scrolling logs with auto-scroll */}
                  <div className="mt-4 space-y-2">
                    {logs.map((log, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-green-400 mb-2 text-lg"
                      >
                        {log}
                      </motion.div>
                    ))}
                    <div ref={logsEndRef} />
                  </div>

                  {/* Fake System Stats */}
                  <div className="grid grid-cols-2 gap-4 mt-6 text-xs text-green-300/70">
                    <div className="flex items-center gap-2">
                      <Cpu className="h-4 w-4" />
                      <span>CPU: 99% UTILIZED</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <HardDrive className="h-4 w-4" />
                      <span>DISK: OVERCLOCKED</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Database className="h-4 w-4" />
                      <span>RAM: MAXIMIZED</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <BatteryCharging className="h-4 w-4" />
                      <span>POWER: UNLIMITED</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="relative">
                {/* Glitch Effect */}
                <div className="absolute inset-0 animate-pulse bg-red-500/20" />

                {/* Warning Modal */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="max-w-3xl mx-auto bg-black/90 border-2 border-red-500 p-8 rounded-xl shadow-2xl shadow-red-500/50 relative z-10"
                >
                  <div className="text-center space-y-8">
                    <div className="relative">
                      <Camera className="h-32 w-32 text-red-400 mx-auto animate-bounce" />
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1 }}
                        className="absolute -top-4 -right-4 bg-red-500 text-white p-2 rounded-full"
                      >
                        <Bomb className="h-6 w-6" />
                      </motion.div>
                    </div>

                    <GlitchText text="⚠️ NAHHH FR FR THIS IS BAD ⚠️" className="text-4xl font-bold text-red-500" />

                    <div className="space-y-4">
                      <p className="text-3xl text-yellow-400 font-bold">BHAIYA JI! WHY YOU OPENING THIS EMAIL?! 🚨</p>
                      <p className="text-2xl text-red-400">MOTHERBOARD MELTING... UR PC IS LITERALLY ON FIRE 🔥🔥🔥</p>
                    </div>

                    {/* Threat Level Meter */}
                    <div className="bg-black/50 p-4 rounded-lg border border-red-500/50">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <Radiation className="h-5 w-5 text-red-500" />
                          <span className="text-red-400 font-bold">THREAT LEVEL</span>
                        </div>
                        <span className="text-red-300 font-mono">{Math.floor(threatLevel)}%</span>
                      </div>
                      <div className="w-full bg-gray-900 rounded-full h-4">
                        <div
                          className="bg-gradient-to-r from-yellow-500 to-red-600 h-4 rounded-full animate-pulse"
                          style={{ width: `${threatLevel}%` }}
                        ></div>
                      </div>
                    </div>

                    <div className="text-red-400 text-3xl font-mono animate-glitch font-bold">
                      Time until ur PC goes boom: {formatTime(countdown)}
                    </div>

                    {/* Webcam Feed */}
                    <div className="relative">
                      {!webcamActive ? (
                        <div
                          onClick={handleActivateWebcam}
                          className="bg-black/70 border-2 border-red-500 p-4 rounded-lg cursor-pointer hover:bg-black/90 transition-colors"
                        >
                          <div className="flex items-center justify-center gap-3 mb-2">
                            <Webcam className="h-6 w-6 text-red-500" />
                            <span className="text-red-400 font-bold">WEBCAM DETECTED</span>
                          </div>
                          <p className="text-red-300 text-center">Click to activate webcam feed (HACKED)</p>
                        </div>
                      ) : (
                        <div className="relative">
                          <canvas
                            ref={canvasRef}
                            width={320}
                            height={240}
                            className="mx-auto border-2 border-red-500 rounded-lg"
                          />
                          <div className="absolute top-2 right-2 bg-red-500 px-2 py-1 rounded text-xs text-white font-mono animate-pulse">
                            LIVE
                          </div>
                          <p className="text-red-300 text-center mt-2 text-sm">WEBCAM COMPROMISED - FEED EXPOSED</p>
                        </div>
                      )}
                    </div>

                    {/* Fake System Logs */}
                    <div className="bg-black/50 p-6 rounded-lg text-left font-mono text-sm">
                      <motion.div
                        animate={{ opacity: [0, 1] }}
                        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 0.5 }}
                      >
                        {Array.from({ length: 5 }).map((_, i) => (
                          <div key={i} className="text-red-500 text-lg mb-2">
                            [BRUH] {generateRandomLog()}
                          </div>
                        ))}
                      </motion.div>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleFixNowClick}
                        className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white font-bold py-4 px-8 rounded-xl text-xl shadow-lg animate-pulse flex items-center justify-center gap-2"
                      >
                        <Flame className="h-5 w-5" />
                        FIX NOW!!
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleSupportClick}
                        className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black font-bold py-4 px-8 rounded-xl text-xl shadow-lg animate-pulse flex items-center justify-center gap-2"
                      >
                        <Siren className="h-5 w-5" />
                        CALL SUPPORT!!
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </main>

        {/* Additional CSS */}
        <style>{`
          /* Custom scrollbar styles */
          .scrollbar-none {
            -ms-overflow-style: none;  /* IE and Edge */
            scrollbar-width: none;  /* Firefox */
          }
          
          .scrollbar-none::-webkit-scrollbar {
            display: none;  /* Chrome, Safari and Opera */
          }

          /* Game panel styles */
          .game-panel {
            background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFElEQVQYV2NkYGD4z0AswGYgQEAzA2o0QJqQAAAAAAElFTkSuQmCC') repeat;
            border: 4px solid #a855f7;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 0 15px #a855f7, inset 0 0 10px #a855f7;
            animation: game-pulse 2s infinite;
          }

          /* Game text effects */
          .game-title {
            text-shadow: 2px 2px #00f, 4px 4px #f00;
            animation: glitch 0.5s infinite;
          }

          .game-text {
            text-shadow: 1px 1px #00f;
          }

          /* Input field styling */
          .game-input {
            border: 4px dashed #00f;
            position: relative;
            overflow: hidden;
          }

          .game-input textarea {
            background: #000 url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAE0lEQVQImWP4z8DwHwAFAAAMAPkFFJqyqgQAAAABJRU5ErkJggg==') repeat;
          }

          /* Button effects */
          .game-button {
            border: 3px solid #f00;
            box-shadow: 0 0 10px #f00, inset 0 0 5px #f00;
            animation: button-glow 1.5s infinite;
          }

          /* HUD display */
          .game-hud {
            font-size: 1.2rem;
            color: #0ff;
            text-shadow: 1px 1px #00f;
            padding: 10px;
            background: rgba(0, 0, 255, 0.2);
            border-radius: 5px;
          }

          /* Animation keyframes */
          @keyframes glitch {
            0% { transform: translate(0); }
            20% { transform: translate(-2px, 2px); }
            40% { transform: translate(2px, -2px); }
            60% { transform: translate(-2px, 0); }
            80% { transform: translate(2px, 2px); }
            100% { transform: translate(0); }
          }

          @keyframes game-pulse {
            0% { box-shadow: 0 0 15px #a855f7, inset 0 0 10px #a855f7; }
            50% { box-shadow: 0 0 20px #9333ea, inset 0 0 15px #9333ea; }
            100% { box-shadow: 0 0 15px #a855f7, inset 0 0 10px #a855f7; }
          }

          @keyframes button-glow {
            0% { box-shadow: 0 0 10px #f00, inset 0 0 5px #f00; }
            50% { box-shadow: 0 0 15px #f0f, inset 0 0 10px #f0f; }
            100% { box-shadow: 0 0 10px #f00, inset 0 0 5px #f00; }
          }

          /* Ensure full height and proper overflow handling */
          html, body {
            height: 100%;
            margin: 0;
            padding: 0;
            overflow-x: hidden;
          }

          #__next {
            min-height: 100vh;
          }
        `}</style>
      </div>
      <Analytics />
    </>
  )
}

