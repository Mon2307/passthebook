'use client'

import { useCallback, useEffect } from 'react'

function scrollToSection(sectionId) {
  const el = document.getElementById(sectionId)
  if (!el) return
  el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

function setHash(sectionId) {
  const hash = `#${sectionId}`
  if (window.location.hash !== hash) {
    window.history.replaceState(null, '', hash)
  }
}

function clearHash(sectionId) {
  if (window.location.hash === `#${sectionId}`) {
    window.history.replaceState(
      null,
      '',
      window.location.pathname + window.location.search
    )
  }
}

export function ScrollToLink({ sectionId, className, children }) {
  const handleClick = useCallback(
    (e) => {
      e.preventDefault()
      scrollToSection(sectionId)
      setHash(sectionId)
    },
    [sectionId]
  )

  return (
    <a href={`#${sectionId}`} onClick={handleClick} className={className}>
      {children}
    </a>
  )
}

export function SectionHashSync({ sectionId }) {
  useEffect(() => {
    const el = document.getElementById(sectionId)
    if (!el) return

    if (window.location.hash === `#${sectionId}`) {
      requestAnimationFrame(() => scrollToSection(sectionId))
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          window.history.replaceState(null, '', `#${sectionId}`)
        } else if (window.location.hash === `#${sectionId}`) {
          clearHash(sectionId)
        }
      },
      { threshold: 0.15 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [sectionId])

  return null
}
