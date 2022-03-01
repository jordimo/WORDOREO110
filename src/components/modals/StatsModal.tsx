import Countdown from 'react-countdown'
import { StatBar } from '../stats/StatBar'
import { Histogram } from '../stats/Histogram'
import { GameStats } from '../../lib/localStorage'
import { shareStatus } from '../../lib/share'
import { tomorrow } from '../../lib/words'
import { BaseModal } from './BaseModal'
import { TOTAL_DAILY_GAMES } from '../../constants/settings'

import {
  STATISTICS_TITLE,
  GUESS_DISTRIBUTION_TEXT,
  NEW_WORD_TEXT,
  SHARE_TEXT,
} from '../../constants/strings'
import classNames from 'classnames'
import { count } from 'console'



type Props = {
  isOpen: boolean
  handleClose: () => void
  guesses: string[]
  gameStats: GameStats
  isGameLost: boolean
  isGameWon: boolean
  handleShare: () => void
  isHardMode: boolean
  isDarkMode: boolean
  isHighContrastMode: boolean
}

export const StatsModal = ({
  isOpen,
  handleClose,
  guesses,
  gameStats,
  isGameLost,
  isGameWon,
  handleShare,
  isHardMode,
  isDarkMode,
  isHighContrastMode,
}: Props) => {
  if (gameStats.totalGames <= 0) {
    return (
      <BaseModal
        title={STATISTICS_TITLE}
        isOpen={isOpen}
        handleClose={handleClose}         
      >
        <StatBar gameStats={gameStats}  />
      </BaseModal>
    )
  }

  const moreGamesToday = (gameStats.dailyGames < TOTAL_DAILY_GAMES)

 
  return (
    <BaseModal
      title={STATISTICS_TITLE}
      isOpen={isOpen}
      handleClose={handleClose}
    >
      <StatBar gameStats={gameStats} />
      <h4 className="text-lg leading-6 font-medium text-white font-pluto">
        {GUESS_DISTRIBUTION_TEXT}
      </h4>
      <Histogram gameStats={gameStats} />
      {(isGameLost || isGameWon) && (
        <div className="mt-5 sm:mt-6 columns-2 text-white font-pluto">


      {(gameStats.dailyGames < TOTAL_DAILY_GAMES) && (
        <div>
          {gameStats.dailyGames} out of {TOTAL_DAILY_GAMES} daily games
        </div>
      )}

      {(gameStats.dailyGames >= TOTAL_DAILY_GAMES) && (
        <div>
        <h5>{NEW_WORD_TEXT}</h5>
        <Countdown
          className="text-lg font-medium text-white font-pluto"
          date={tomorrow}
          daysInHours={true}
        />
      </div>
      
      )}
          
          
          
          
          
          <button
            type="button"
            className="mt-2 w-full bg-black rounded-md  shadow-sm px-4 py-2 text-base font-medium text-white "
            onClick={() => {
              shareStatus(
                guesses,
                isGameLost,
                isHardMode,
                isDarkMode,
                isHighContrastMode
              )
              handleShare()
            }}
          >
            {SHARE_TEXT}
          </button>
        </div>
      )}
    </BaseModal>
  )
}
