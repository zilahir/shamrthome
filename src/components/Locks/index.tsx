import React, { ReactElement, useState } from 'react'
import Box from '../common/Box'

import styles from './Locks.module.scss'

interface HandlerProps {
  openModal: () => void;
}

const Handler = ({
  openModal,
}: HandlerProps):ReactElement => (
  <div onClick={() => openModal()} className={styles.locksHandler}>
    
  </div>
)

const Locks = (): ReactElement => {
  const [isModalOpen, toggleModalOpen] = useState<boolean>(false);
  return (
    <Box
      isExpandable
      hasBorder
      handler={<Handler openModal={() => toggleModalOpen(!isModalOpen)} />}
    >
      <div className={styles.lockContainer}>

      </div>
    </Box>
  )
}

export default Locks;