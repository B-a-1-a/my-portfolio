"use client"

import { useState, useEffect, useRef } from 'react'
import Marquee from 'react-fast-marquee'

const StarField = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const stars: { x: number; y: number; radius: number; color: string; twinkleSpeed: number }[] = []

    for (let i = 0; i < 200; i++) {
      const x = Math.random() * canvas.width
      const y = Math.random() * canvas.height
      const radius = Math.random() * 1.5
      const colors = ['#ffffff', '#ffffd9', '#94b0c2', '#ff9999']
      const color = colors[Math.floor(Math.random() * colors.length)]
      const twinkleSpeed = Math.random() * 0.003 + 0.005

      stars.push({ x, y, radius, color, twinkleSpeed })
    }

    let animationFrameId: number

    const animate = (time: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      stars.forEach((star) => {
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2, false)
        ctx.fillStyle = star.color
        ctx.globalAlpha = 0.5 + Math.sin(time * star.twinkleSpeed) * 0.5
        ctx.fill()
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animate(0)

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full" />
}

export default function Component() {
  const [currentTrack, setCurrentTrack] = useState<number | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [isInverted, setIsInverted] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const tracks = [
    { number: 1, title: "Reputation", duration: "4:08", top: "7%", left: "10%", audio: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Post%20Malone%20-%20Reputation%20(Official%20Audio)%20%5B%20ezmp3.cc%20%5D-5SUWvVrKOrnnLYYtaHhDpYvFz8ygif.mp3" },
    { number: 2, title: "Cooped Up w. Roddy Ricch", duration: "3:05", top: "20%", left: "45%", audio: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/02-Cooped%20Up%20(Ft.%20Roddy%20Ricch)-LgfBFOaoKNUbXjdHM70C2GEYTkWEku.mp3" },
    { number: 3, title: "Lemon Tree", duration: "4:03", top: "15%", left: "80%", audio: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/03-Lemon%20Tree-gd3L6wgMWRNve0OUrEPpTI97sAGhdh.mp3" },
    { number: 4, title: "Wrapped Around Your Finger", duration: "3:13", top: "20%", left: "15%", audio: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/04-Wrapped%20Around%20Your%20Finger-7jZ75DqZZvn8eScbEiAgEYZW3LWIuN.mp3" },
    { number: 5, title: "I Like You (A Happier Song) w. Doja Cat", duration: "3:12", top: "40%", left: "65%", audio: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/05-I%20Like%20You%20(A%20Happier%20Song)%20(Ft.%20Doja%20Cat)-PixiSzZgS6YcwRXze0VXiCUd7efGn0.mp3" },
    { number: 6, title: "I Cannot Be (A Sadder Song) w. Gunna", duration: "2:49", top: "50%", left: "40%", audio: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/06-I%20Cannot%20Be%20(A%20Sadder%20Song)%20(Ft.%20Gunna)-cFPac5c7dk8k7NtKOLhuEcerkU6Zwy.mp3" },
    { number: 7, title: "Insane", duration: "2:49", top: "60%", left: "20%", audio: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/07-Insane-B1vZZyqKXppUHIl4IMYhhryjMqbK1Y.mp3" },
    { number: 8, title: "Love/Hate Letter to Alcohol w. Fleet Foxes", duration: "3:03", top: "55%", left: "70%", audio: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/08-Love%E2%81%84Hate%20Letter%20To%20Alcohol%20(Ft.%20Fleet%20Foxes)-Fas2f9Wm63DRKPY2PufluvNNsVOeRu.mp3" },
    { number: 9, title: "Wasting Angels w. The Kid LAROI", duration: "4:03", top: "70%", left: "10%", audio: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/09-Wasting%20Angels%20(Ft.%20The%20Kid%20LAROI)-FwyohO3itjrKTufhToDOtbCE1kYHjB.mp3" },
    { number: 10, title: "Euthanasia", duration: "2:25", top: "75%", left: "85%", audio: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/10-Euthanasia-xdk5J1gmK8OHLfTCTDtSHN0OZFWRTA.mp3" },
    { number: 11, title: "When I'm Alone", duration: "3:15", top: "80%", left: "45%", audio: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/11-When%20I%E2%80%99m%20Alone-CwNPvTKNryFIKMRiOm1oGFTtQIclrE.mp3" },
    { number: 12, title: "Waiting For a Miracle", duration: "2:21", top: "85%", left: "75%", audio: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/12-Waiting%20For%20A%20Miracle-h8ARGjTCHwml6GQY3DrLTLG5zjXHn2.mp3" },
    { number: 13, title: "One Right Now w. The Weeknd", duration: "3:12", top: "90%", left: "25%", audio: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/13-One%20Right%20Now%20(Ft.%20The%20Weeknd)-RLo9akTd6oDuV4gPFZne8dInasuRnl.mp3" },
    { number: 14, title: "New Recording 12, Jan 3 2020", duration: "1:32", top: "95%", left: "60%", audio: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/14-New%20Recording%2012,%20Jan%203,%202020-WSLC5J103KfYAXaipB6gkEN6PKCPie.mp3" },
  ]

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play()
      } else {
        audioRef.current.pause()
      }
    }
  }, [isPlaying, currentTrack])

  useEffect(() => {
    const audio = audioRef.current
    if (audio) {
      const updateProgress = () => {
        setProgress((audio.currentTime / audio.duration) * 100)
      }
      const handleEnded = () => {
        setIsInverted(true)
        setIsPlaying(false)
        setTimeout(() => {
          const nextTrackNumber = currentTrack !== null ? (currentTrack % tracks.length) + 1 : 1
          setCurrentTrack(nextTrackNumber)
          setProgress(0)
          setIsInverted(false)
          audio.src = tracks[nextTrackNumber - 1].audio
          audio.play()
          setIsPlaying(true)
        }, 1000)
      }
      audio.addEventListener('timeupdate', updateProgress)
      audio.addEventListener('ended', handleEnded)
      return () => {
        audio.removeEventListener('timeupdate', updateProgress)
        audio.removeEventListener('ended', handleEnded)
      }
    }
  }, [currentTrack, tracks])

  const togglePlay = (trackNumber: number) => {
    if (currentTrack === trackNumber) {
      setIsPlaying(!isPlaying)
    } else {
      setCurrentTrack(trackNumber)
      setIsPlaying(true)
      setProgress(0)
      setIsInverted(false)
      if (audioRef.current) {
        audioRef.current.src = tracks[trackNumber - 1].audio || ''
        audioRef.current.currentTime = 0
        audioRef.current.play()
      }
    }
  }

  const getCircleStyles = (inverted: boolean) => ({
    strokeDasharray: "312.56",
    strokeDashoffset: inverted
      ? 312.56 - ((100 - progress) / 100) * 312.56
      : 312.56 - (progress / 100) * 312.56,
    transform: "rotate(-90 50 50)",
    transition: "all 0.3s linear",
  })

  const getProgressPoint = () => {
    const radius = 49.75
    const angle = (progress / 100) * 2 * Math.PI
    const x = 55 + radius * Math.cos(angle)
    const y = 55 + radius * Math.sin(angle)
    return { x, y, angle: (angle * 180) / Math.PI + 90 }
  }

  const point = getProgressPoint()

  return (
    <div className="relative min-h-screen p-4 md:p-8 text-white overflow-hidden flex flex-col" style={{ fontFamily: 'monospace', letterSpacing: '2px', background: 'linear-gradient(to bottom, #1a237e, #000000)' }}>
      <StarField />
      <div className="max-w-4xl mx-auto relative aspect-square flex-1 md:block hidden">
        <svg className="w-full h-full" viewBox="-10 -10 120 120">
          <defs>
            <filter id="exhaust" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="0.5" />
            </filter>
            <linearGradient id="exhaustGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: 'white', stopOpacity: 0 }} />
              <stop offset="50%" style={{ stopColor: 'white', stopOpacity: 0.5 }} />
              <stop offset="100%" style={{ stopColor: 'white', stopOpacity: 0 }} />
            </linearGradient>
          </defs>
          <circle
            cx="55"
            cy="55"
            r="49.75"
            fill="none"
            stroke="#333"
            strokeWidth="0.25"
            opacity="0.4"
          />
          <circle
            cx="55"
            cy="55"
            r="49.75"
            fill="none"
            stroke="#fff"
            strokeWidth="0.25"
            opacity="0.4"
            style={getCircleStyles(isInverted)}
          />
          {isPlaying && (
            <g transform={`translate(${point.x} ${point.y}) rotate(${point.angle + 180})`}>
              <path
                d="M-1.5,3 L1.5,-3 L-1.5,-3 L1.5,3 Z"
                fill="url(#exhaustGradient)"
                filter="url(#exhaust)"
                opacity="0.6"
              >
                <animate
                  attributeName="opacity"
                  values="0.6;0.4;0.6"
                  dur="10s"
                  repeatCount="indefinite"
                />
              </path>
              <image
                href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/spaceship.png-T0TqKolE6CO5skGyok3DQie7n5vhpp.webp"
                x="-4"
                y="-4"
                width="8"
                height="8"
                style={{ filter: 'invert(1)' }}
              />
            </g>
          )}
        </svg>
        {tracks.map((track) => (
          <div
            key={track.number}
            className="absolute text-[0.375rem] md:text-[0.5rem]"
            style={{
              top: track.top,
              left: track.left,
            }}
          >
            <div className="font-bold text-white/80 flex items-center gap-1">
              {track.number}
            </div>
            <div className="flex flex-col h-8 justify-between">
              <button
                onClick={() => togglePlay(track.number)}
                className="max-w-[75px] md:max-w-[100px] text-left focus:outline-none"
              >
                {currentTrack === track.number && isPlaying ? (
                  <Marquee gradient={false} speed={50} play={isPlaying}>
                    <span className="pr-4">{track.title}</span>
                  </Marquee>
                ) : (
                  <span className="truncate block">{track.title}</span>
                )}
              </button>
              <div className="text-white/60 text-[0.5rem]">{track.duration}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="md:hidden flex-1 flex flex-col justify-center">
        <div className="w-64 h-64 mx-auto relative">
          <svg className="w-full h-full" viewBox="-5 -5 110 110">
            <defs>
              <filter id="exhaustMobile" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="0.5" />
              </filter>
              <linearGradient id="exhaustGradientMobile" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{ stopColor: 'white', stopOpacity: 0 }} />
                <stop offset="50%" style={{ stopColor: 'white', stopOpacity: 0.5 }} />
                <stop offset="100%" style={{ stopColor: 'white', stopOpacity: 0 }} />
              </linearGradient>
            </defs>
            <circle
              cx="55"
              cy="55"
              r="49.75"
              fill="none"
              stroke="#333"
              strokeWidth="0.25"
              opacity="0.4"
            />
            <circle
              cx="55"
              cy="55"
              r="49.75"
              fill="none"
              stroke="#fff"
              strokeWidth="0.25"
              opacity="0.4"
              style={getCircleStyles(isInverted)}
            />
            {isPlaying && (
              <g transform={`translate(${point.x} ${point.y}) rotate(${point.angle + 180})`}>
                <path
                  d="M-1.5,3 L1.5,-3 L-1.5,-3 L1.5,3 Z"
                  fill="url(#exhaustGradientMobile)"
                  filter="url(#exhaustMobile)"
                  opacity="0.6"
                >
                  <animate
                    attributeName="opacity"
                    values="0.6;0.2;0.6"
                    dur="1s"
                    repeatCount="indefinite"
                  />
                </path>
                <image
                  href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/spaceship.png-T0TqKolE6CO5skGyok3DQie7n5vhpp.webp"
                  x="-3"
                  y="-3"
                  width="6"
                  height="6"
                  style={{ filter: 'invert(1)' }}
                />
              </g>
            )}
          </svg>
        </div>
        <div className="mt-8 space-y-2">
          {tracks.map((track) => (
            <button
              key={track.number}
              onClick={() => togglePlay(track.number)}
              className="w-full text-left focus:outline-none py-2 px-4 hover:bg-white/10 transition-colors"
            >
              <div className="flex flex-col justify-between h-8 flex-grow">
                <div className="flex items-center gap-2">
                  <span className="text-white/80">{track.number}</span>
                  {currentTrack === track.number && isPlaying ? (
                    <Marquee gradient={false} speed={50} play={isPlaying}>
                      <span className="pr-4">{track.title}</span>
                    </Marquee>
                  ) : (
                    <span className="truncate">{track.title}</span>
                  )}
                </div>
                <span className="text-white/60 text-[0.5rem]">{track.duration}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
      <footer className="text-center text-[0.375rem] md:text-[0.5rem] text-white/60 py-4">
        all rights reserved Post Malone.
      </footer>
      <audio ref={audioRef} />
    </div>
  )
}