import React, { useContext, useEffect } from 'react'
import styles from './PostList.css'

import AppContext from '../../context/AppContext'

//comp
import Postcard from './postCard/PostCard'

export default function Home(props) {
    const { state, dispatch, getPost } = useContext(AppContext)

    const { blogPosts, loading } = state

    useEffect(() => {
        getPost()
    }, [])
    // console.log(props, ' propsss')
    console.log(blogPosts, ' statewwwwwweeeee')
    return (
        <div className={ styles.PostList }>
            <div className={ styles.PostList_Container }>
                <h2 style={{ textAlign: 'center'}}>PostList</h2>
                {
                    !loading ? (
                        <div className={ styles.Posts_grid_container }>
                            {
                                blogPosts.map(i => {
                                    const { id, title, image, author, date } = i
                                    return(
                                        <Postcard 
                                            key={ id } 
                                            title={ title }
                                            image={ image }
                                            author={ author }
                                            date={ date }
                                            id={ id } />
                                    )
                                })
                            }
                        </div>
                    ) : <strong>Wait !!!</strong>
                }
            </div>
        </div>
    )
}
