import React from 'react'
import MusicAlbumArt from '../music_album_art/MusicAlbumArt'
import MusicListItem from '../music_list_item/MusicListItem'

import styles from './MusicAlbum.module.css'


const MusicAlbum = ({playing}) => {
    return (
        <div className={styles.parent}>
            <MusicAlbumArt playing={playing} />
            <div className={playing ? `${styles.playlist} ${styles.playlist_play}` : styles.playlist}>
                <MusicListItem playing={false} song={"TSFH - Love and Loss"} />
                <MusicListItem playing={true} song={"TSFH  -  Victory"} />
                <MusicListItem playing={false} song={"TSFH - Atlantis"} />
                <MusicListItem playing={false} song={"TSFH - Impossible"} />
            </div>
        </div>
    )
}

export default MusicAlbum