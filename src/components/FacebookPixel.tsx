import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { initFacebookPixel, trackEvent } from '@/lib/facebook'

export const FacebookPixel = () => {
  const location = useLocation()

  useEffect(() => {
    initFacebookPixel()
  }, [])

  useEffect(() => {
    // Track page view on every route change
    trackEvent('PageView')
  }, [location])

  return null
}
