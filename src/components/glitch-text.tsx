"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

interface GlitchTextProps {
  text: string
  className?: string
}

export function GlitchText({ text, className = "" }: GlitchTextProps) {
  const [glitchText, setGlitchText] = useState(text)

  useEffect(() => {
    const glitchChars = "!<>-_\\/[]{}—=+*^?#________"
    let interval: ReturnType<typeof setInterval>

    const startGlitching = () => {
      let iteration = 0

      clearInterval(interval)

      interval = setInterval(() => {
        setGlitchText(
          text
            .split("")
            .map((char, index) => {
              if (index < iteration) {
                return text[index]
              }

              if (char === " ") return " "
              return glitchChars[Math.floor(Math.random() * glitchChars.length)]
            })
            .join(""),
        )

        if (iteration >= text.length) {
          clearInterval(interval)
          setTimeout(startGlitching, Math.random() * 5000 + 2000)
        }

        iteration += 1 / 3
      }, 30)
    }

    startGlitching()

    return () => clearInterval(interval)
  }, [text])

  return (
    <motion.div
      className={className}
      animate={{
        x: [0, -2, 2, -1, 1, 0],
        filter: [
          "hue-rotate(0deg)",
          "hue-rotate(90deg)",
          "hue-rotate(180deg)",
          "hue-rotate(270deg)",
          "hue-rotate(0deg)",
        ],
      }}
      transition={{
        duration: 0.5,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse",
        repeatDelay: 5,
      }}
    >
      {glitchText}
    </motion.div>
  )
}

