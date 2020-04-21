import React from 'react'

import one from '.././../../images/six.jpg'

import styles from './Banner.css'

export default function Banner() {
    return (
        <div className={ styles.Banner }>
            <img src={ one } />
        </div>
    )
}
