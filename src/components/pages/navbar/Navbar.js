import React from 'react'

import styles from './Navbar.css'

import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div className={ styles.Nav }>
            <div className={ styles.Container }>
                <Link to="/">
                    <h2>HOME</h2>
                </Link>
            </div>
        </div>
    )
}
