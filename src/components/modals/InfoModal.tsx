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
          value="W"
          status="correct"
        />
        <Cell value="E" status="absent" />
        <Cell value="A" status="absent"/>
        <Cell value="R" status="absent"/>
        <Cell value="Y" status="absent"/>
      </div>
      <p className="text-sm text-white">
        The letter W is in the word and in the correct spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="P" status="absent" />
        <Cell value="I" status="absent"/>
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="L"
          status="present"
        />
        <Cell value="O" status="absent"/>
        <Cell value="T" status="absent"/>
      </div>
      <p className="text-sm text-white">
        The letter L is in the word but in the wrong spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="V" />
        <Cell value="A" />
        <Cell value="G" />
        <Cell isRevealing={true} isCompleted={true} value="U" status="absent" />
        <Cell value="E" />
      </div>
      <p className="text-sm text-white">
        The letter U is not in the word in any spot.
      </p>

      
    </BaseModal>
  )
}
