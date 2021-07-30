import React from 'react'
import styles from './MusicListItem.module.css'

const MusicListItem = ({playing, song}) => {
    return(
        <div className= {playing ? `${styles.parent} ${styles.parent_play}` : styles.parent}> 
            <p className={playing ? `${styles.playbutton} ${styles.playbutton_play}` : styles.playbutton}>►</p>
            <p className={playing ? `${styles.caption} ${styles.caption_play}` : styles.caption}> {song} </p>
            <div className={styles.operations}>
                <p className={styles.operation}>♥</p>
                <p className={styles.operation}>♫</p>
                <p className={styles.operation}>■</p>
            </div>
        </div>
    )
}

export default MusicListItem