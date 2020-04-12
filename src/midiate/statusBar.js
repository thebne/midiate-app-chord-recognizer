import React from 'react'
import styles from '../style.module.css'

export default ({currentChords}) => {
  const detection = currentChords.detection ? currentChords.detection[0] : <i style={{color: '#ccc'}}>chord</i>
  return <span className={styles.statusBar}>{detection}</span>
}
