// src/components/ScrollToTop.jsx
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    const timeout = setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }, 700) // 0.5 second delay

    return () => clearTimeout(timeout) // Clear timeout on cleanup
  }, [pathname])

  return null
}

export default ScrollToTop
