import { useEffect, useState } from 'react'

export default function Loader({ onFinish }) {
  const [progress, setProgress] = useState(0)
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        // Accelerate as it gets closer
        const increment = prev < 70 ? Math.random() * 12 + 3 : Math.random() * 6 + 1
        return Math.min(prev + increment, 100)
      })
    }, 80)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (progress >= 100) {
      const timer = setTimeout(() => setFadeOut(true), 400)
      const finish = setTimeout(() => onFinish(), 900)
      return () => { clearTimeout(timer); clearTimeout(finish) }
    }
  }, [progress, onFinish])

  return (
    <div
      className={`fixed inset-0 z-9999 bg-base-100 flex flex-col items-center justify-center transition-opacity duration-500 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {/* Terminal-style loader */}
      <div className="w-80 sm:w-96">
        {/* Terminal window */}
        <div className="bg-base-200/50 border border-base-content/10 rounded-xl overflow-hidden">
          {/* Top bar */}
          <div className="flex items-center gap-2 px-4 py-2.5 border-b border-base-content/5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
            <span className="ml-auto text-[10px] font-mono text-base-content/20">loading...</span>
          </div>

          {/* Content */}
          <div className="p-5 font-mono text-sm space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-green-400">$</span>
              <span className="text-base-content/50">initializing portfolio</span>
              <span className="animate-blink text-primary">_</span>
            </div>

            {/* Progress bar */}
            <div className="space-y-2">
              <div className="w-full h-1.5 bg-base-content/5 rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary rounded-full transition-all duration-200 ease-out"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <div className="flex justify-between text-[10px] text-base-content/30">
                <span>{progress < 30 ? 'Loading assets...' : progress < 60 ? 'Building components...' : progress < 90 ? 'Rendering UI...' : 'Complete!'}</span>
                <span>{Math.round(progress)}%</span>
              </div>
            </div>

            {/* Status lines */}
            <div className="space-y-1 text-[11px] text-base-content/20">
              {progress > 15 && <p><span className="text-green-400/60">✓</span> fonts loaded</p>}
              {progress > 40 && <p><span className="text-green-400/60">✓</span> styles compiled</p>}
              {progress > 65 && <p><span className="text-green-400/60">✓</span> components mounted</p>}
              {progress > 90 && <p><span className="text-green-400/60">✓</span> ready</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
