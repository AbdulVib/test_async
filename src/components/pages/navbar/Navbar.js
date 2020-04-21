import React from 'react'

import styles from './Navbar.css'


export default function Navbar() {
    return (
        <div className={ styles.Nav }>
            <div className={ styles.Container }>
                <h2>React Blog</h2>
            </div>
        </div>
    )
}
