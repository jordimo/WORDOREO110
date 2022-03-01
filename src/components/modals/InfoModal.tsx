import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="How to play" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-white">
        Guess the word in 6 tries. After each guess, the color of the tiles will
        change to show how close your guess was to the word.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="C"
          status="correct"
        />
        <Cell value="R" status="absent" />
        <Cell value="E" status="absent"/>
        <Cell value="A" status="absent"/>
        <Cell value="M" status="absent"/>
      </div>
      <p className="text-sm text-white">
        The letter C is in the word and in the correct spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="B" status="absent" />
        <Cell value="I" status="absent"/>
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="T"
          status="present"
        />
        <Cell value="E" status="absent"/>
        <Cell value="S" status="absent"/>
      </div>
      <p className="text-sm text-white">
        The letter T is in the word but in the wrong spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="S" />
        <Cell value="N" />
        <Cell value="A" />
        <Cell isRevealing={true} isCompleted={true} value="C" status="absent" />
        <Cell value="K" />
      </div>
      <p className="text-sm text-white">
        The letter C is not in the word in any spot.
      </p>

      
    </BaseModal>
  )
}
