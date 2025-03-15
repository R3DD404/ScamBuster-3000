"use client"

import { motion } from "framer-motion"
import { AlertTriangle, X } from "lucide-react"

interface FakePopupProps {
  onClose: () => void
}

export function FakePopup({ onClose }: FakePopupProps) {
  const popupTypes = [
    {
      title: "VIRUS DETECTED!",
      message: "Your computer has 69 viruses! Download our sketchy antivirus now!",
      icon: <AlertTriangle className="h-10 w-10 text-red-500" />,
      color: "border-red-500 bg-red-900/30",
    },
    {
      title: "CONGRATULATIONS!",
      message: "You're the 1,000,000th visitor! Claim your free iPhone 15 now!",
      icon: <AlertTriangle className="h-10 w-10 text-yellow-500" />,
      color: "border-yellow-500 bg-yellow-900/30",
    },
    {
      title: "WARNING!",
      message: "Your computer performance is 69% below average! Optimize now!",
      icon: <AlertTriangle className="h-10 w-10 text-orange-500" />,
      color: "border-orange-500 bg-orange-900/30",
    },
    {
      title: "SYSTEM ALERT!",
      message: "Critical driver update required! Download now to prevent damage!",
      icon: <AlertTriangle className="h-10 w-10 text-blue-500" />,
      color: "border-blue-500 bg-blue-900/30",
    },
  ]

  const randomPopup = popupTypes[Math.floor(Math.random() * popupTypes.length)]

  const randomPosition = {
    top: `${Math.random() * 70}%`,
    left: `${Math.random() * 70}%`,
  }

  return (
    <motion.div
      className={`fixed z-50 w-80 rounded-lg border-2 ${randomPopup.color} shadow-lg`}
      style={randomPosition}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0 }}
    >
      <div className="flex items-center justify-between p-4 border-b border-gray-700">
        <div className="flex items-center gap-2">
          {randomPopup.icon}
          <h3 className="font-bold text-white">{randomPopup.title}</h3>
        </div>
        <button onClick={onClose} className="text-gray-400 hover:text-white">
          <X className="h-5 w-5" />
        </button>
      </div>
      <div className="p-4">
        <p className="text-white mb-4">{randomPopup.message}</p>
        <div className="flex justify-end gap-2">
          <button onClick={onClose} className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600">
            Cancel
          </button>
          <button onClick={onClose} className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-500">
            Download Now
          </button>
        </div>
      </div>
    </motion.div>
  )
}

