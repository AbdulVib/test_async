import React from 'react'

import styles from './Home.css'

import Banner from '../banner/Banner'
import PostList from '../postList/PostList'

export default function Home(props) {
    // console.log(props, ' propss')
    return (
        <div className={ styles.Home }>
            <Banner />
            <PostList { ...props }/>
        </div>
    )
}
