import { ReactNode } from 'react'
import classnames from 'classnames'
import { CharStatus } from '../../lib/statuses'
import { MAX_WORD_LENGTH, REVEAL_TIME_MS } from '../../constants/settings'
import { getStoredIsHighContrastMode } from '../../lib/localStorage'

type Props = {
  children?: ReactNode
  value: string
  width?: number
  status?: CharStatus
  onClick: (value: string) => void
  isRevealing?: boolean
}

export const Key = ({
  children,
  status,
  width = 40,
  value,
  onClick,
  isRevealing,
}: Props) => {
  const keyDelayMs = REVEAL_TIME_MS * MAX_WORD_LENGTH
  //const isHighContrast = getStoredIsHighContrastMode()

  const classes = classnames(
    'flex items-center justify-center rounded mx-0.5 text-lg font-bold cursor-pointer select-none text-white font-pluto',
    {
      'transition ease-in-out': isRevealing,
      'bg-black hover:bg-slate-900 active:bg-slate-400': !status,
      'bg-black text-slate-600': status === 'absent',
      'bg-white hover:bg-slate-600  text-black border-black border-2': status === 'correct',
      'bg-black hover:bg-slate-600  ': status === 'present',
    }
  )


  const styles = {
    transitionDelay: isRevealing ? `${keyDelayMs}ms` : 'unset',
    width: `${width}px`,
    height: '58px',
  }

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    onClick(value)
    event.currentTarget.blur()
  }

  return (
    <button style={styles} className={classes} onClick={handleClick}>
    
        {children || value}
    
    </button>
  )
}
