// Utility for managing background mode toggle between blue gradient and stock images

export const getBackgroundMode = (): 'blue' | 'image' => {
  return (process.env.BACKGROUND_MODE as 'blue' | 'image') || 'blue'
}

export const shouldUseImages = (): boolean => {
  return getBackgroundMode() === 'image'
}

export const getHeroBackgroundClasses = (): string => {
  const mode = getBackgroundMode()
  
  if (mode === 'image') {
    return 'relative text-white overflow-hidden'
  }
  
  // Default blue gradient
  return 'relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white overflow-hidden'
}

export const getHeroBackgroundStyle = (): React.CSSProperties => {
  const mode = getBackgroundMode()
  
  if (mode === 'image') {
    return {}
  }
  
  // Default blue fallback
  return { backgroundColor: '#003d87' }
}