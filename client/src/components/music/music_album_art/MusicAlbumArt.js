import React from 'react'
import styles from './MusicAlbumArt.module.css'

const MusicAlbumArt = ({playing}) => {
    return(
        <div className={styles.parent}>
            <div className={playing? `${styles.albumart} ${styles.albumart_play}` : styles.albumart}>
                
            </div>
        </div>
    )
}

export default MusicAlbumArt
