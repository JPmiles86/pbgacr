'use client'

interface DownloadButtonProps {
  children: React.ReactNode
  className?: string
}

const DownloadButton = ({ children, className }: DownloadButtonProps) => {
  const handleClick = () => {
    document.getElementById('downloads')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <button onClick={handleClick} className={className}>
      {children}
    </button>
  )
}

export default DownloadButton