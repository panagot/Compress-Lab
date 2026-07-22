import { useEffect, useRef, type ReactNode } from 'react'

export function Reveal({
  children,
  className = '',
  delay = 0,
  /** Skip opacity-0 gate for above-the-fold lists (avoids fake “gaps”). */
  eager = false,
}: {
  children: ReactNode
  className?: string
  delay?: number
  eager?: boolean
}) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (eager) {
      el.style.transitionDelay = `${delay}ms`
      el.classList.add('in')
      return
    }

    const show = () => {
      el.style.transitionDelay = `${delay}ms`
      el.classList.add('in')
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          show()
          io.disconnect()
        }
      },
      { threshold: 0.01, rootMargin: '40px 0px' },
    )
    io.observe(el)

    // Elements already on screen can miss the first callback in some layouts.
    const rect = el.getBoundingClientRect()
    const vh = window.innerHeight || 0
    if (rect.top < vh && rect.bottom > 0) show()

    return () => io.disconnect()
  }, [delay, eager])

  return (
    <div ref={ref} className={`reveal ${eager ? 'in' : ''} ${className}`.trim()}>
      {children}
    </div>
  )
}
