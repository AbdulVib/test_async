import React from 'react'
import { Link } from 'react-router-dom'

import styles from './PostCard.css'

export default function PostCard({ title, image, author, date, id }) {
    return (
        <div className={ styles.Card }>
            <div className={ styles.CardImage }>
                <img src={ image } style={{ height: '100px', width: '100%', backgroundSize: 'cover', backgroundPosition: 'center'}}/>
            </div>
            <div className={ styles.CardInfo }>
                <div className={ styles.CardTitle }>
                    <Link to={`${id}`}>
                       { title }
                    </Link>
                </div>
                <div className={ styles.CardAuthorSection }>{ author } = { date }</div>
            </div>
        </div>
    )
}
