import React from 'react'
import styles from './Navbar.module.css'

const Navbar = props => {
    return(
        <nav className={styles.nav}>
            <ol>
                <li><a href="/">Home</a></li>
                <li><a href="/">Browse</a></li>
                <li><a href="/">Buy</a></li>
                <li><a href="/">Premium</a></li>
                <li><a href="/">About</a></li>
            </ol>
        </nav>
    )
}

export default Navbar;

