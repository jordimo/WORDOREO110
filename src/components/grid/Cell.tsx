import { CharStatus } from '../../lib/statuses'
import classnames from 'classnames'
import { REVEAL_TIME_MS } from '../../constants/settings'
import { getStoredIsHighContrastMode } from '../../lib/localStorage'

type Props = {
  value?: string
  status?: CharStatus
  isRevealing?: boolean
  isCompleted?: boolean
  position?: number
}

export const Cell = ({
  value,
  status,
  isRevealing,
  isCompleted,
  position = 0,
}: Props) => {
  const isFilled = value && !isCompleted
  const shouldReveal = isRevealing && isCompleted
  const animationDelay = `${position * REVEAL_TIME_MS}ms`
  const isHighContrast = getStoredIsHighContrastMode()

  const classes = classnames(
    'w-14 h-14 rounded-full flex items-center justify-center mx-0.5 text-4xl font-bold font-pluto',
    {
      'text-white bg-black ': !status,
      'border-black bg-black  ': value && !status,
      'absent shadowed bg-black  border-black text-slate-600': status === 'absent',
      'correct bg-white border-black text-black border-4': status === 'correct',
      'present shadowed bg-black  text-white border-0': status === 'present',
      'cell-fill-animation': isFilled,
      'cell-reveal': shouldReveal,
    }
  )

  return (
    <div className={classes} style={{ animationDelay }}>
        <div className="letter-container" style={{ animationDelay }}>
          {value}
        </div>
    </div>
  )
}
