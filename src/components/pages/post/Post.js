import React, { useContext, useEffect } from 'react'
import AppContext from '../../context/AppContext'

import { useParams } from 'react-router-dom'

import styles from './Post.css'

export default function Post(props) {
    const { state, dispatch, getSinglePost } = useContext(AppContext)
    const { currentBlogPost } = state
    
    useEffect(() => {
        getSinglePost(props.match.params.postId)
    }, [])
    // console.log(props, ' propsss')
    console.log( state, 'state')
    // const { postId } = useParams() 
    // console.log(postId, ' use Params')
    return (
        <div className={ styles.Post }>
            {
                currentBlogPost ? (
                    <h1>{ currentBlogPost.title }</h1>
                ) : null
            }
        </div>
    )
}
